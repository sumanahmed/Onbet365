import config from '../config'
export default {
    created () {      
        const isUserLoggedIn = this.$store.state.loggedIn   
        if (isUserLoggedIn) {
          const userId = this.$store.state.userId
            config.getData('/user/detail/' + userId)
            .then(response => {
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