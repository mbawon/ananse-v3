import http from "./http";
import TokenService from "./token.service";

const createUser = async (username, email, password) => {
    return http.post("user", {
        username,
        email,
        password
    });
};

const login = async (username, password) => {
    return http
        .post("login", {
            username,
            password
        })
        .then((response) => {
            if (response.data.accessToken) {
                TokenService.setUser(response.data);
            }
            return response.data;
        });
};

const logout = () => {
    TokenService.removeUser();
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    createUser,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;