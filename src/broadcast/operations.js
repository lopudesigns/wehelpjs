module.exports = [
  {
    "roles": ["posting", "active", "owner"],
    "operation": "vote",
    "params": [
      "voter",
      "author",
      "permlink",
      "weight"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "comment",
    "params": [
      "parent_author",
      "parent_permlink",
      "author",
      "permlink",
      "title",
      "body",
      "json"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "transfer",
    "params": [
      "from",
      "to",
      "amount",
      "memo"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "transferTMEtoSCOREfund",
    "params": [
      "from",
      "to",
      "amount"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "withdrawSCORE",
    "params": [
      "account",
      "SCORE"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "limit_order_create",
    "params": [
      "owner",
      "orderid",
      "amount_to_sell",
      "min_to_receive",
      "fill_or_kill",
      "expiration"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "limit_order_cancel",
    "params": [
      "owner",
      "orderid"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "price",
    "params": [
      "base",
      "quote"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "feed_publish",
    "params": [
      "publisher",
      "exchange_rate"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "convert",
    "params": [
      "owner",
      "requestid",
      "amount"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "accountCreate",
    "params": [
      "fee",
      "creator",
      "newAccountName",
      "owner",
      "active",
      "posting",
      "memoKey",
      "json"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "accountUpdate",
    "params": [
      "account",
      "owner",
      "active",
      "posting",
      "memoKey",
      "json"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "witness_update",
    "params": [
      "owner",
      "url",
      "block_signing_key",
      "props",
      "fee"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "accountWitnessVote",
    "params": [
      "account",
      "witness",
      "approve"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "account_witness_proxy",
    "params": [
      "account",
      "proxy"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "pow",
    "params": [
      "worker",
      "input",
      "signature",
      "work"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "custom",
    "params": [
      "required_auths",
      "id",
      "data"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "deleteComment",
    "params": [
      "author",
      "permlink"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "customJson",
    "params": [
      "required_auths",
      "required_posting_auths",
      "id",
      "json"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "comment_options",
    "params": [
      "author",
      "permlink",
      "max_accepted_payout",
      "percent_TSD",
      "allow_votes",
      "allow_curationRewards",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "setWithdrawSCOREasTMEroute",
    "params": [
      "from_account",
      "to_account",
      "percent",
      "autoSCORE"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "limit_order_create2",
    "params": [
      "owner",
      "orderid",
      "amount_to_sell",
      "exchange_rate",
      "fill_or_kill",
      "expiration"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "challenge_authority",
    "params": [
      "challenger",
      "challenged",
      "require_owner"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "prove_authority",
    "params": [
      "challenged",
      "require_owner"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "request_account_recovery",
    "params": [
      "recoveryAccount",
      "accountToRecover",
      "new_owner_authority",
      "extensions"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "recover_account",
    "params": [
      "accountToRecover",
      "new_owner_authority",
      "recent_owner_authority",
      "extensions"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "change_recoveryAccount",
    "params": [
      "accountToRecover",
      "new_recoveryAccount",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "escrow_transfer",
    "params": [
      "from",
      "to",
      "agent",
      "escrow_id",
      "TSDamount",
      "TMEamount",
      "fee",
      "ratification_deadline",
      "escrow_expiration",
      "json"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "escrow_dispute",
    "params": [
      "from",
      "to",
      "agent",
      "who",
      "escrow_id"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "escrow_release",
    "params": [
      "from",
      "to",
      "agent",
      "who",
      "receiver",
      "escrow_id",
      "TSDamount",
      "TMEamount"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "pow2",
    "params": [
      "input",
      "pow_summary"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "escrow_approve",
    "params": [
      "from",
      "to",
      "agent",
      "who",
      "escrow_id",
      "approve"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "transferToSavings",
    "params": [
      "from",
      "to",
      "amount",
      "memo"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "transferFromSavings",
    "params": [
      "from",
      "request_id",
      "to",
      "amount",
      "memo"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "cancelTransferFromSavings",
    "params": [
      "from",
      "request_id"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "custom_binary",
    "params": [
      "id",
      "data"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "decline_voting_rights",
    "params": [
      "account",
      "decline"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "reset_account",
    "params": [
      "reset_account",
      "account_to_reset",
      "new_owner_authority"
    ]
  },
  {
    "roles": ["owner", "posting"],
    "operation": "set_reset_account",
    "params": [
      "account",
      "current_reset_account",
      "reset_account"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "claimRewardBalance",
    "params": [
      "account",
      "TMEreward",
      "TSDreward",
      "SCOREreward"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "delegateSCORE",
    "params": [
      "delegator",
      "delegatee",
      "SCORE"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "accountCreateWithDelegation",
    "params": [
      "fee",
      "delegation",
      "creator",
      "newAccountName",
      "owner",
      "active",
      "posting",
      "memoKey",
      "json",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "fill_convert_request",
    "params": [
      "owner",
      "requestid",
      "amount_in",
      "amount_out"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "comment_reward",
    "params": [
      "author",
      "permlink",
      "payout"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "liquidity_reward",
    "params": [
      "owner",
      "payout"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "interest",
    "params": [
      "owner",
      "interest"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "fillSCOREWithdraw",
    "params": [
      "from_account",
      "to_account",
      "withdrawn",
      "deposited"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "fill_order",
    "params": [
      "current_owner",
      "current_orderid",
      "current_pays",
      "open_owner",
      "open_orderid",
      "open_pays"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "fill_transferFromSavings",
    "params": [
      "from",
      "to",
      "amount",
      "request_id",
      "memo"
    ]
  }
];
