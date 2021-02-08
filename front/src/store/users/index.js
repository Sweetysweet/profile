import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
    namespaced: true,

    state: () => ({
        users: [
            {
                "photo_id": 546546,
                "photo_prev": "https://cdnimg.rg.ru/pril/article/192/96/77/7_SELFI_uralskij_mars.JPG",
                "selfie_prev": "https://www.cableman.ru/sites/default/files/nikolay_krasovskiy.jpg",
                "created_at": "2020-12-14 17:51:27",
                "user": {
                    "user_id": 115536,
                    "name": "Петр",
                    "years": 21,
                    "city": "Москва",
                    "avatar": "https://cdnimg.rg.ru/pril/article/192/96/77/7_SELFI_uralskij_mars.JPG"
                }
            }
        ]
    }),

    mutations,
    actions,
    getters
}