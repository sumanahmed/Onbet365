import config from '../config'
export default {
    created () {
        const userId = this.$store.state.userId
        if (userId != null) {
            config.getData('/user/detail/' + userId)
            .then(response => {
                console.log('response of user = ', response)
                if (response.status_code === 200) {
                  this.$store.commit('mutateCommonProperties', {
                    user: response.user,
                    profile: response.profile,
                    country: response.country,
                    club: response.clubs
                  })
                }
            })
        }
    },
    methods: {

    }
}