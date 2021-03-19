export default {
    mutateCommonProperties ({commit}, payload) {
        commit('mutateCommonProperties', payload)
    },
    amountUpdate ({commit}, payload) {
        commit('amountUpdate', payload)
    },
    addAmount ({commit}, payload) {
        commit('addAmount', payload)
    },
    userLogout ({commit}, payload) {
        commit('userLogout', payload)
    },
    profileUpdate ({commit}, payload) {
        commit('profileUpdate', payload)
    },
    addUserId ({commit}, payload) {
        commit('addUserId', payload)
    }
}