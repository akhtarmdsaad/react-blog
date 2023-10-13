import axios from "axios";


axios.interceptors.request.use((req)=>{
    if(localStorage.getItem("access_token"))
    {
        // set token in header of request
        req.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`;
    }
    return req;
},(err)=>{
    // console.log("Error in Request")
    // console.error(err)
    return err;
})
axios.interceptors.response.use((resp)=>{
    // console.log(resp)
    return resp;
},(err)=>{
    var status = err.response.status;
    var statusText = err.response.statusText;
    if(status === 401 && statusText === "Unauthorized")
    {
        console.log("here")
        window.location.href="/login";
    }    
    if(status === 401){
        // refresh the access token
        axios.post("http://localhost:8000/token/refresh/",{
            refresh: localStorage.getItem("refresh_token")
        }).then((response)=>{
            localStorage.setItem("access_token",response.data.access);
            // retry the request
            if (response.status === 200) {
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                return axios(err.config);
             }
             else
             {
                window.location.href = "/login"
             }

            }).catch((err)=>{
                console.log(err)
                // window.location.href = "/login"
            })
    }

    return Promise.reject(err)
})