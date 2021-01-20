import Cookies from "js-cookie";

export const getRefreshToken = () => Cookies.get("access_token");
export const isAuthenticated = () => !!getRefreshToken();
