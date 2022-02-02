import React from "react";
import axios from "axios";


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
    }
}
export const profileAPI = {
    getProfile(userId: any){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId:any){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status:string){
        return instance.put(`profile/status`,{status:status})
    }
}
export const authAPI = {
    me(){
      return instance.get(`auth/me`)
    }
}