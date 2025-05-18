import axios from 'axios';

const axiosInstance=axios.create({
    withCredentials:true,
    baseURL:"http://localhost:8080/api"
});
// request
axiosInstance.interceptors.request.use(
    config=>{
        if(config.url!=="/auth/logout"){
         const token=localStorage.getItem("accessToken");
        if(token){
            config.headers['Authorization']=`Bearer ${token}`;
        }   
        }   
        return config;
    }
);
// response
axiosInstance.interceptors.response.use(
config=>config,
async error=>{
    const originalRequest=error.config;
    if(error?.response?.data?.status==403 && !originalRequest._retry && originalRequest.url !== '/auth/logout'){
        originalRequest._retry=true;
        try {
            const {data}=await axiosInstance.get("/auth/refresh");
            localStorage.setItem("accessToken",data.accessToken);
            originalRequest.headers['Authorization']=`Bearer ${data.accessToken}`;
            return axiosInstance.request(originalRequest);
        } catch (error) {
            console.log(error);
            localStorage.removeItem("accessToken");
            window.location.href="/landing";
            return Promise.reject(error);
        }
    }
    return Promise.reject(error);
}
);
export default axiosInstance;