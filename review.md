# Refund calculation review

`js/refund.js:7` includes `SERVICE_FEE` in the 90% refund calculation, even though the file says the service fee is not refundable. This returns 325.8 for one ticket instead of 315, and 651.6 for two instead of 630. Calculate the refund from `TICKET_PRICE` only.

Verification: both refund tests fail for this reason. The full suite also has two unrelated formatting failures inherited from `origin/main`.
