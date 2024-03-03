import Cookies from 'js-cookie';

const GetCookies = (nameCookie) => {
    return Cookies.get(nameCookie);
};

export default GetCookies;
