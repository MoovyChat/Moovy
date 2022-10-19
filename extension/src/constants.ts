const constants = {
  title: 'Netflix Comments',
  welcome: 'Welcome',
  footer1: 'Enjoy the Streaming now with Comments!',
  login: 'Log in with Google',
  logout: 'Logout',
  login_sucess: 'You are logged in!',
  main_color: '#990100',
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
