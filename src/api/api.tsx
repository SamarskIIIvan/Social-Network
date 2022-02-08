import React from "react";
import axios from "axios";
import {ProfileType} from "../Redux/profile-reducer";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "32a2fb05-a0a6-4dbc-999f-c58d152b8cf3"
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
}
export const profileAPI = {
    getProfile(userId: any) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: any) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile:ProfileType){
        return instance.put(`profile`, profile)
    }

}
export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: null| string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}

export enum ResultCodesEnum{
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}
type MeResponseType = {
    data:{
        id: number
        email: string
        login: string
}
  resultCode: ResultCodesEnum
  messages: Array<string>
}
type LoginResponseType = {
    data:{
        userId: number
}
  resultCode: ResultCodesEnum
  messages: Array<string>
}