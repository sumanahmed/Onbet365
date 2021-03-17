<template>
    <div>
        <div class="right-section scrollCustom" id="style-10">                
            <!-- Advance section -->
            <div class="advance_section">
                <h4 class="">Upcoming Match</h4>
                <div class="upcoming_match_wraper">
                    <span v-for="(matche, index) in upcomingMatches" :key="index" href="" class="upcoming_single_match">
                        <router-link :to="{ path: '/single-match/' + matche.id }">
                            <h5 class="upcomming-match-tournament">{{ matche.sportName | capitalizeFirstLetter }}</h5>
                            <p class="both-team"><b>{{ matche.teamOne | capitalizeFirstLetter }}</b> <span> vs </span> <b> {{ matche.teamTwo | capitalizeFirstLetter }}</b></p>
                            <p class="date-time"><span class="date">Date : {{ matche.matchDateTime | dateformat }} </span> <span class="time">Time : {{ matche.matchDateTime | timeformat }} </span></p>
                        </router-link>
                    </span>
                </div>
            </div>    
        </div>
    </div>
</template>
<script>
import config from '../../config'
export default {
    name:'RightSidebar',
    data () {
        return {
            upcomingMatches: []
        }
    },
    created () {
        this.getUpcomingMatches()
    },
    methods : {
        async getUpcomingMatches () {
            await config.getData('/get/upcoming/match')
            .then((response) => {
                if (response.status_code == 200) {
                    this.upcomingMatches = response.upcomingMatches
                } else {
                    console.log('err')
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>