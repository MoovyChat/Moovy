const constants = {
  title: 'Moovy Chat',
  welcome: 'Welcome',
  footer1: 'Enjoy the Streaming now with Comments!',
  login: 'Log in with Google',
  chrome: 'Log in with Chrome',
  logout: 'Logout',
  login_success: 'You are logged in!',
  main_color: '#990100',
  record_options: 'Record options',
};
export const EXT_ID = 'dmipflcbflebldjbgfnkcjnobneebmpo';
export const MOOVY_URL = 'http://localhost:3000';
export const EXT_URL = `chrome-extension://${EXT_ID}`;

export const textMapTypes = {
  USER: 'user',
  TIME: 'time',
  BASIC: 'basic',
  SPOILER: 'spoiler',
};
export default constants;

export const isServerSide = () => typeof window === 'undefined';

export const domains = {
  NETFLIX: 'www.netflix.com',
  LOCALHOST: 'localhost',
};

export const isNumber = (x: string) => /\d/.test(x);
