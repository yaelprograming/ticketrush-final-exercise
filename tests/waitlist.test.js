const { joinWaitlist } = require('../js/waitlist');

test('normalizes and appends valid email without mutating the original list', function () {
  const original = ['first@example.com'];
  const updated = joinWaitlist(original, '  New.User@Example.COM  ');

  assertEq(updated.join(','), 'first@example.com,new.user@example.com');
  assertEq(original.join(','), 'first@example.com');
  assertEq(updated === original, false);
});

test('invalid email returns a new unchanged list', function () {
  const original = ['first@example.com'];

  assertEq(joinWaitlist(original, 'invalid-email').join(','), 'first@example.com');
  assertEq(joinWaitlist(original, 'person@example').join(','), 'first@example.com');
});

test('does not add an existing email again', function () {
  const original = ['person@example.com'];

  assertEq(joinWaitlist(original, ' PERSON@EXAMPLE.COM ').join(','), 'person@example.com');
});
