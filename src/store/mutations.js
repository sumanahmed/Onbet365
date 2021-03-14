export default {
    mutateCommonProperties (state, payload) {
        state.user = Object.assign({}, state.user, payload)
    },
    addAmount (state, amount) {
        state.totalAmount = amount
        state.isLoggedIn = true
    },
    amountUpdate (state, amount) {
        state.totalAmount = (state.totalAmount - amount)
    },
    userLogout (state, loggedInfalse) {
        state.isLoggedIn = loggedInfalse
    }
}