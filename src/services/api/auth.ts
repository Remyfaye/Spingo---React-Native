import { baseURL } from "@constants/URLs";
import { LoginDTO, RegisterDTO, VerifyEmailDTO } from "@constants/typings/auth";
import axios from "axios";

const register = async (postData: RegisterDTO) => {
    try {
        const response = await axios.post(`${baseURL}/business`, postData);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const login = async (postData: LoginDTO) => {
    try {
        const response = await axios.post(`${baseURL}/user/login/email`, postData);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const activateAccount = async (email: string) => {
    try {
        const response = await axios.post(`${baseURL}/user/activate`, { emailAddress: email });
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const sendEmailOTP = async (email: string) => {
    try {
        const response = await axios.post(`${baseURL}/otp/send/email`, { email });
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const verifyEmailOTP = async (postData: VerifyEmailDTO) => {
    try {
        const response = await axios.post(`${baseURL}/otp/verify/email`, postData);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
export { register, login, sendEmailOTP, verifyEmailOTP, activateAccount }