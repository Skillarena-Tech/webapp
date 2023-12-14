// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // BASE_POINT_API: '/ucp/meta/v1.0/',
  // BASE_POINT_VIZ_API: '/ucp/visualize/v1.0/',
  // BASE_POINT_FILE_API: '/adnoc-file-upload/',
  // encryptionEnabled: false,
  mapId: '',
  cognito: {
    userPoolId: 'ap-south-1_deEBxXyd9',
    userPoolWebClientId: '7jvt90m4ldrjrchgdehre062s2',
    region: 'ap-south-1',
  },
  sdk: {
    accessKey: 'AKIAYMGBSSIURFSUXU3R',
    accessSecret: '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'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
