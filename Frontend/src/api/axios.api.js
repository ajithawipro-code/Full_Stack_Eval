import axios from "axios"

const API = "http://localhost:5547";

export const SignupAPI = (data) => axios.post(`${API}/api/auth/signup`, data);

export const LoginAPI = (data) => axios.post(`${API}/api/auth/login`, data);

export const getBalanceAPI = () =>{

    const token = localStorage.getItem("token")
    return axios.get(`${API}/api/account/balance`,{
        headers : { Authorization : token}
    })

}

export const getStatementAPI = () =>{

    const token = localStorage.getItem("token")
    return axios.get(`${API}/api/account/statement`,{
        headers : { Authorization : token}
    })
}

export const doTransferAPI = (data) =>{

    const token = localStorage.getItem("token");
    return axios.patch(`${API}/api/account/transfer`,data,{

        headers : {Authorization : token}

    })

}