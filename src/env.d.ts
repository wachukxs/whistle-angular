export interface ExtraProcesses extends NodeJS.ProcessEnv {
  NG_APP_ENV: string,
  NG_APP_MY_METAMASK_PRIVATE_KEY: string,
  NG_APP_MY_ALCHEMY_API_KEY: string;
  NG_APP_ALCHEMY_API_BASE_URL: string;
  NG_APP_HW_CONTRACT_ADDRESS: string;
  NG_APP_ALCHEMY_API_BASE_URL_WS: string;
}