const Navigation = {
  Screens: {
    WALKTHROUGH: 'Walkthrough',
    HOME: 'Home',
    SETTINGS: 'Settings',
    MEMBERSHIP: 'Membership',
    SORT_ACCOUNTS: 'SortAccounts',
    WARNING: 'Warning',
    TRANSACTION_MANAGE: 'TransactionManage',
    CONFIRM_REMOVE: 'ConfirmRemove',
    CONFIRM_BACKUP: 'ConfirmBackup',
    WARNING_KEY_LEAKAGE: 'WarningKeyLeakage',
    WARNING_QUIT_MEMBERSHIP: 'WarningQuitMembership',
    ADDRESSBOOK: 'AddressBook',
    MODIFY_ADDRESS: 'ModifyAddress',
    RECEIVE_BALANCE: 'ReceiveBalance',
    AUTH_PASSWORD: 'AuthChangePassword',
    SET_PASSWORD: 'SetPassword',
    REFERRER: 'Referrer',
    SELECT_IMPORT_TYPE: 'SelectImportType',
    IMPORT_BY_RESTORE: 'ImportByRestore',
    IMPORT_BY_SECURE: 'ImportBySecure',
    QR_SCAN: 'QRScan',
    CREATE_TRANSACTION: 'CreateTransaction',
    SELECT_WITHDRAW_ACCOUNT: 'SelectWithdrawAccount',
    TRANSACTION_DETAIL: 'TransactionDetail',
    SEND_BALANCE: 'SendBalance',
    JOIN_MEMBERSHIP: 'JoinMembership',
    RECEIVE_ACCOUNT: 'ReceiveAccount',
    TRANSACTION_LIST: 'TransactionList',
    TRANSACTION_LIST_1: 'TransactionList1',
    TRANSACTION_LIST_2: 'TransactionList2',
    TRANSACTION_LIST_3: 'TransactionList3',
    HOMEGUIDE: 'HomeGuide',
    INDEXPAGE: 'IndexPage',
    HOME_1: 'HomeScreen1',
    INTRO_MEMBERSHIP: 'IntroMembership',
    AGREEMENT: 'Agreement',
    ACCOUNT_CREATED: 'AccountCreated',
    SELECT_LANGUAGE: 'SelectLanguage',
    CHANGE_ACCOUNT_NAME: 'ChangeAccountName',
    BEFORE_TRANSACTION: 'BeforeTransaction',
    INAPP_BROWSER: 'InAppBrowser',
    SERVICE_AGREEMENT: 'ServiceAgreement',
    TUTORIAL: 'Tutorial',
    SELECT_ACCOUNT_CREATION: 'SelectAccountCreation',
    SET_SEBAK_ENDPOINT: 'SetSebakEndpoint',
  },
  NAV_PUSH: 'NAV_PUSH',
  NAV_POP: 'NAV_POP',
  NAV_RESET: 'NAV_RESET',
  NAV_BACK: 'NAV_BACK',
  NAV_RESET_TO_LIST: 'NAV_RESET_TO_LIST',
  NAV_RESET_TO_CONTACTS: 'NAV_RESET_TO_CONTACTS',
};

Navigation.pushScreen = (screenName, params) => {
  const key = (screenName === Navigation.Screens.QR_SCAN) ? `${screenName}${new Date().getMilliseconds()}` : screenName;

  return ({
    type: Navigation.NAV_PUSH,
    routeName: screenName,
    key,
    params,
  });
};

Navigation.popScreen = (count = 1) => ({
  type: Navigation.NAV_POP,
  n: count,
});

Navigation.resetScreen = (screenName, params) => ({
  type: Navigation.NAV_RESET,
  routeName: screenName,
  key: `${screenName}${new Date().getTime}`,
  params,
});

Navigation.resetToList = account => ({
  type: Navigation.NAV_RESET_TO_LIST,
  params: {
    account,
  },
});

Navigation.resetToContacts = () => ({
  type: Navigation.NAV_RESET_TO_CONTACTS,
});

Navigation.backScreen = screenName => ({
  type: Navigation.NAV_BACK,
  routeName: screenName,
});


export default Navigation;
