export default {
    mutateCommonProperties (state, payload) {
        state.commonObj = Object.assign({}, state.commonObj, payload)
    },
    amountUpdate (state, amount) {
        state.commonObj.user.totalAmount = parseFloat(state.commonObj.user.totalAmount - amount)
    },
    addAmount (state, amount) {
        state.commonObj.user.totalAmount = parseFloat(state.commonObj.user.totalAmount + amount)
    },
    userLogout (state, loggedInfalse) {
        state.commonObj.user.loggedIn = loggedInfalse
        state.commonObj = []
        state.userId = ''
        state.loggedIn = false
    },
    profileUpdate (state, profile) {
        state.commonObj.profile = profile
    },
    addUserId (state, user_id) {
        state.userId = user_id
        state.loggedIn = true
    }
}