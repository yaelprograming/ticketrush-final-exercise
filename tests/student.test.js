const { calcTotal } = require('../js/pricing');

test('student discount: 2 tickets', function () { assertEq(calcTotal(2, false, true), 619); });
test('members receive the larger discount when they are also students', function () { assertEq(calcTotal(2, true, true), 584); });
test('no discount for regular price', function () { assertEq(calcTotal(2, false), 724); });
