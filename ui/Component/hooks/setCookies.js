import Cookies from 'js-cookie';

const SetCookie = (name, value) => {
    Cookies.set(name, value, { expires: 1 });
};

export default SetCookie;
