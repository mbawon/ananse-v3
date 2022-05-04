import axios from "axios";
import TokenService from "./services/token.service";

let baseURL = ""

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = "https://ananse.internal.vodafone.com/api/v2/"
} else {
  baseURL = "https://ananse.internal.vodafone.com/api/v2/"
}

const http = axios.create({
  baseURL: baseURL,
});

http.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// http.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err) => {
//     const originalConfig = err.config;
//     if (originalConfig.url !== "/login" && err.response) {
//       // Access Token was expired
//       if (err.response.status === 401 && !originalConfig._retry) {
//         originalConfig._retry = true;
//         try {
//           const rs = await http.post("refreshtoken", {
//             requestToken: TokenService.getLocalRefreshToken(),
//           });
//           const { accessToken } = rs.data;
//           TokenService.updateLocalAccessToken(accessToken);
//           return http(originalConfig);
//         } catch (_error) {
//           return Promise.reject(_error);
//         }
//       }
//     }
//     return Promise.reject(err);
//   }
// );

export default http;
