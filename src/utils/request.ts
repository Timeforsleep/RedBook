import axios,{AxiosResponse} from 'axios';
import Apis from "../api/Apis"

const instance = axios.create({
    baseURL: "http://192.168.0.104:7001",
    timeout: 10 * 1000
});
//对返回体错误信息分类
instance.interceptors.response.use(
    response => response,
    error => {
        const {response} = error;
        if (!response) {
            const {status} = response;
            if (status >= 500) {
                //服务端报错
                console.error(status)
            }else if (status === 400) {
                //接口参数异常
                console.error(status)
            }else if (status === 401) {
                //登陆信息过期，需要重新登录
                console.error(status)
            } else {
                //其它错误类型，统一按照接口报错处理
                console.error(status)
            }
        }else {
            //网络异常
            console.error('网络异常')
        }
        return Promise.reject(error);
    }
)

export const request = (name: string, params: any): Promise<AxiosResponse<any, any>> => {
    const api = (Apis as any)[name]
    const {url, method} = api
    if (method === "get") {
        return get(url, params);
    } else {
        return post(url, params);
    }
}

export const get = async (url: string, params: any) => {
    return instance.get(url, {
        params: params,
    })
}

export const post = async (url: string, params: any) => {
    return instance.post(url, params);
}

