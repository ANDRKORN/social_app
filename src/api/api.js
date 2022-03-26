import * as axios from 'axios'


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: { 'API-KEY': '3f114771-ad14-408c-b89f-34ff425f028f' },
})

export const usersAPI = {
    getUsers: (countPage, count) => instance.get(`/users?page=${countPage}&count=${count}`).then(response => response.data),
    Follow: (id) => instance.post(`/follow/${id}`),
    UnFollow: (id) => instance.delete(`/follow/${id}`),
    getInfoUser: (id) => profileAPI.getInfoUser(id),
    auth: () => instance.get('/auth/me')
}

export const profileAPI = {
    getInfoUser: (userId) => instance.get(`/profile/${userId}`),
    getStatusUserId: (userId) => { return instance.get(`/profile/status/${userId}`) },
    updateStatus: (text) => { return instance.put(`/profile/status`, { status: text }) },
    updatePhoto: (photo) => {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put(`/profile/photo`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
    }
}

export const authAPI = {
    auth: () => instance.get('auth/me'),
    login: (email, password, rememberMe) => instance.post('auth/login', { email, password, rememberMe }),
    logout: () => instance.delete('auth/login'),

}


