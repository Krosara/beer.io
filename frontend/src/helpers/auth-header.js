import Cookies from 'js-cookie';

const authHeader = () => {
  let user = Cookies.get('access_token');

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
};

export default authHeader;
