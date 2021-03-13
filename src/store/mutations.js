export default {
    mutateCommonProperties (state, payload) {
        state.commonObj = Object.assign({}, state.commonObj, payload)
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