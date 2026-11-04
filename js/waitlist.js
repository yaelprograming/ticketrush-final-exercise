'use strict';

function joinWaitlist(list, email) {
  const normalizedEmail = email.trim().toLowerCase();
  const atIndex = normalizedEmail.indexOf('@');
  const updatedList = list.slice();

  if (atIndex <= 0 || !normalizedEmail.slice(atIndex + 1).includes('.')) {
    return updatedList;
  }

  const alreadyJoined = updatedList.some(function (entry) {
    return typeof entry === 'string' && entry.trim().toLowerCase() === normalizedEmail;
  });
  if (!alreadyJoined) {
    updatedList.push(normalizedEmail);
  }

  return updatedList;
}

if (typeof module !== 'undefined') {
  module.exports = { joinWaitlist };
}
