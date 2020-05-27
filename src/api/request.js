import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL:'',
        timeout:5000,
    })

    instance.interceptors.request.use(config =>{
        return config
    },error => {})
    instance.interceptors.response.use(res =>{
        return res.data
    },error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '请求错误'
                    break
                case 401:
                    error.message = '未授权的访问'
                    break
            }
        }
        return error
    })
    return instance(config)
}