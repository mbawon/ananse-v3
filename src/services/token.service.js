const getLocalRefreshToken = () => {
    const userRefreshToken = JSON.parse(localStorage.getItem("userRefreshToken"));
    return userRefreshToken;
};
const getLocalAccessToken = () => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    return userToken;
};
const updateLocalAccessToken = (token) => {
    let userToken = JSON.parse(localStorage.getItem("userToken"));
    userToken = token;
    localStorage.setItem("userToken", JSON.stringify(userToken));
};
//No in use
const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
const setUser = (user) => {
    console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
};

const removeUser = () => {
    localStorage.removeItem("user");
};
const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser,
};
export default TokenService;