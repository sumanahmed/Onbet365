export default {
    mutateCommonProperties ({commit}, payload) {
        commit('mutateCommonProperties', payload)
    },
    addAmount ({commit}, payload) {
        commit('addAmount', payload)
    },
    amountUpdate ({commit}, payload) {
        commit('amountUpdate', payload)
    },
    userLogout ({commit}, payload) {
        commit('userLogout', payload)
    },
}