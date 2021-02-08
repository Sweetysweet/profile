import axios from '@/plugins/axios'

export default {
    getAllUsers({ commit }) {
        let url = '/get-data'
        // return axios
        //     .get(url)
        //     .then(r => r.data)
        //     .then(data => commit('SET_ALL_USERS', data))
        //     .catch(e => e.message)
        },
    verifyUser({ commit }, user) {
        let url = '/verification'
        console.log(user);
        // return axios
        //     .post(url, user)
        //     .then(r => r.data)
        //     .then(data => commit('SET_ALL_USERS', data))
        //     .then(axiosData => {
        //     const { status } = axiosData
        //     if (status === 'ok') {
        //         return true
        //     }
        // })
        //     .catch(e => e.message)
    },
    unverifyUser({ commit }, user) {
        let url = '/cancel-verification'
        console.log(user);
        // return axios
        //     .post(url, user)
        //     .then(r => r.data)
        //     .then(data => commit('SET_ALL_USERS', data))
        //     .then(axiosData => {
            // const { status } = axiosData
            // if (status === 'ok') {
            //     return true
            // }
        // })
        //     .catch(e => e.message)
    },
    banservice({ commit }, user) {
        let url = '/ban-acc'
        console.log(user);
        // return axios
        //     .post(url, user)
        //     .then(r => r.data)
        //     .then(data => commit('SET_ALL_USERS', data))
        //     .then(axiosData => {
        //     const { status } = axiosData
        //     if (status === 'ok') {
        //         return true
        //     }
        // })
        //     .catch(e => e.message)
    },
    bandevice({ commit }, user) {
        let url = '/ban-dev'
        console.log(user);
        // return axios
        //     .post(url, user)
        //     .then(r => r.data)
        //     .then(data => commit('SET_ALL_USERS', data))
        //     .then(axiosData => {
        //     const { status } = axiosData
        //     if (status === 'ok') {
        //         return true
        //     }
        // })
        //     .catch(e => e.message)
    }
}