// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseURL: 'http://localhost:3051/api/v1.0',
  ETHER_SCAN_API: process.env.ETHER_SCAN_API,
  production: false,
  HW_CONTRACT_ADDRESS: process.env["NG_APP_HW_CONTRACT_ADDRESS"],
  MY_METAMASK_PRIVATE_KEY: process.env['NG_APP_MY_METAMASK_PRIVATE_KEY'],
  MY_ALCHEMY_API_KEY: process.env.NG_APP_MY_ALCHEMY_API_KEY,
  ALCHEMY_API_BASE_URL: process.env.NG_APP_ALCHEMY_API_BASE_URL,
  ENV: process.env['NG_APP_ENV'],
  ALCHEMY_API_BASE_URL_WS: process.env.NG_APP_ALCHEMY_API_BASE_URL_WS
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
