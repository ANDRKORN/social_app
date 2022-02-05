import * as axios from 'axios'


const instance = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: { 'API-KEY': '3f114771-ad14-408c-b89f-34ff425f028f' },
})

export const usersAPI = {
    getUsers :(countPage, count) =>instance.get(`/users?page=${countPage}&count=${count}`).then(response => response.data),
    Follow : (id) => instance.post(`/follow/${id}`),
    UnFollow : (id) => instance.delete(`/follow/${id}`),
    getInfoUser : (id) => instance.get(`/profile/${id}`)
}
