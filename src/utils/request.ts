// 对axios的二次封装
import axios, { AxiosInstance } from 'axios';
import { API_KEY, SPREADSHEET_ID, token, username, repo } from '@/const/api_key'
import { successCallbackOfResponseIntercepter, failCallbackOfResponseIntercepter, rot13  } from './common'

// 创建发送googleSheet请求的 axios 实例
const googleSheetRequest: AxiosInstance = axios.create({
    baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/`,
    params: { key: API_KEY }
});

// 响应拦截器处理异常情况
googleSheetRequest.interceptors.response.use(
    successCallbackOfResponseIntercepter,
    failCallbackOfResponseIntercepter
);

// ----------------------------------------------------------------------------------

const githubRequest: AxiosInstance = axios.create({
    baseURL: `https://api.github.com/repos/${username}/${repo}/contents/`,
})

githubRequest.interceptors.request.use(config => {
    // 设置 Authorization 请求头，用以身份验证
    // '@/const/api_key'中的token值是对大写字母移位13位后的，此处需解密（即：再移位13位，等同于解密）
    config.headers.Authorization = `token ${rot13(token)}`;

    return config;
})

githubRequest.interceptors.response.use(
    successCallbackOfResponseIntercepter,
    failCallbackOfResponseIntercepter
);

export { googleSheetRequest, githubRequest };