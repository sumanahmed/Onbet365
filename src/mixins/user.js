import config from '../config'
export default {
    created () {
        config.getData('/user')
        .then(response => {
            console.log('response of user', response)
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
    },
    methods: {

    }
}