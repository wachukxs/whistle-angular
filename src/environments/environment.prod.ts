export const environment = {
  baseURL: 'https://whistle-backend.herokuapp.com',
  production: true,
  ETHER_SCAN_API: process.env.ETHER_SCAN_API,
  HW_CONTRACT_ADDRESS: process.env["NG_APP_HW_CONTRACT_ADDRESS"],
  MY_METAMASK_PRIVATE_KEY: process.env['NG_APP_MY_METAMASK_PRIVATE_KEY'],
  MY_ALCHEMY_API_KEY: process.env.NG_APP_MY_ALCHEMY_API_KEY,
  ALCHEMY_API_BASE_URL: process.env.NG_APP_ALCHEMY_API_BASE_URL,
  ENV: process.env['NG_APP_ENV'],
  ALCHEMY_API_BASE_URL_WS: process.env.NG_APP_ALCHEMY_API_BASE_URL_WS
};
