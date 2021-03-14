export default {
    mutateCommonProperties (state, payload) {
        state.commonObj = Object.assign({}, state.commonObj, payload)
    },
    amountUpdate (state, amount) {
        state.commonObj.user.totalAmount = (state.commonObj.user.totalAmount - amount)
    },
    userLogout (state, loggedInfalse) {
        state.commonObj.user.loggedIn = loggedInfalse
        state.commonObj = []
    },
    profileUpdate (state, profile) {
        state.commonObj.profile = profile
    }
}