
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const CONFIG = {
  site: {
    name: 'Minimal',
    logo: '/logo/logo-single.svg',
    baseUrl: 'https://api.minimals.cc',
    isAuth: true,
  },
  mapbox: {
    apiKey: 'your_mapbox_api_key',
  },
  auth: {
    method: 'jwt',
    skip: true,
  },
  firebase: {
    apiKey: 'your_firebase_api_key',
    authDomain: 'your_firebase_auth_domain',
    projectId: 'your_firebase_project_id',
    storageBucket: 'your_firebase_storage_bucket',
    messagingSenderId: 'your_firebase_messaging_sender_id',
    appId: 'your_firebase_app_id',
    measurementId: 'your_firebase_measurement_id',
  },
  amplify: {
    userPoolId: 'your_amplify_user_pool_id',
    userPoolWebClientId: 'your_amplify_user_pool_web_client_id',
    region: 'your_amplify_region',
  },
  auth0: {
    clientId: 'your_auth0_client_id',
    domain: 'your_auth0_domain',
    callbackUrl: paths.auth.auth0.callback,
  },
  supabase: {
    url: 'your_supabase_url',
    key: 'your_supabase_key',
  },
};
