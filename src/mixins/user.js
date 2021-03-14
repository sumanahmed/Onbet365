import config from '../config'
export default {
    created () {
        const userId = localStorage.getItem('user_id')
        if (userId != 0) {
            config.getData('/user' + userId)
            .then(response => {
                console.log('response of user = ', response)
                if (response.status_code === 200) {
                  this.$store.commit('mutateCommonProperties', {
                    userId: response.user_id,
                    userName: response.user_name,
                    totalAmount: response.totalAmount,
                    loggedIn: response.loggedIn,
                    userType: response.user_type
                  })
                }
            })
        }
    },
    methods: {

    }
}