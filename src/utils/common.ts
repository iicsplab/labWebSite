import { AxiosError, AxiosResponse } from 'axios';

// 响应拦截器“成功”的回调-用于处理error情况
export const successCallbackOfResponseIntercepter = (response: AxiosResponse) => {
    // 处理业务层错误（200 响应中的错误信息）
    if (response.data?.error) {
        const errorMsg = response.data.error.message || '未知业务错误';
        return Promise.reject(new Error(`API错误：${errorMsg}`));
    }
    return response;
}

// 响应拦截器“失败”的回调-用于处理error情况
export const failCallbackOfResponseIntercepter = (error: AxiosError) => {
    // 统一处理 HTTP 错误
    let errorMessage = '请求失败';

    if (error.response) {
        // 服务器响应了非 2xx 状态码
        const status = error.response.status;
        const serverMsg = (error.response.data as any)?.error?.message || '无错误详情';
        errorMessage = `HTTP错误 [${status}]: ${serverMsg}`;
    } else if (error.request) {
        // 请求已发出但无响应
        errorMessage = '网络异常：请求未收到响应';
    } else {
        // 请求配置错误
        errorMessage = `请求配置错误：${error.message}`;
    }

    return Promise.reject(new Error(errorMessage));
}

// 通用错误处理器
export const handleError = (error: unknown, context: string = "") => {
    const errorMessage = error instanceof Error ? error.message : '发生未知错误';
    console.error(`[API] ${context} 失败：`, errorMessage);
};

export const stringToBase64 = (str: string) => {
    // 适用于任何ASCII 字符、Unicode 字符等
    const encoder = new TextEncoder();
    const uint8Array = encoder.encode(str);
    const uint8ArrayAsArray = Array.from(uint8Array);
    return btoa(String.fromCharCode.apply(null, uint8ArrayAsArray));
}

export const base64ToString = (base64: string): string => {
    // 将 Base64 解码为二进制字符串
    const binaryString = atob(base64);

    // 将二进制字符串转换为字节数组
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    // 将字节数组解码回原始字符串
    return new TextDecoder().decode(bytes);
}

// 凯撒移位13位加密，仅加密大写字母 ascii码∈[65,90]
export const rot13 = (str: string) => {
    var newstr = [];
    for (var i = 0; i < str.length; ++i) {
        if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
            newstr.push(str[i]);
        } else if (str.charCodeAt(i) <= 77) {
            newstr.push(String.fromCharCode(str.charCodeAt(i) + 13));
        } else {
            newstr.push(String.fromCharCode(str.charCodeAt(i) - 13));
        }
    }
    return newstr.join('');
}