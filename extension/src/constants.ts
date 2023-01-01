const constants = {
  title: 'Quiet Chat',
  welcome: 'Welcome',
  footer1: 'Enjoy the Streaming now with Comments!',
  login: 'Log in with Google',
  logout: 'Logout',
  login_sucess: 'You are logged in!',
  main_color: '#990100',
  record_options: 'Record options',
};

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
