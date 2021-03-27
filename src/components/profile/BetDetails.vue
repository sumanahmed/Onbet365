<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> bet details </span></p>
        </div>

        <div class="profile-wrapper" style="padding-bottom:38px;">
            <table id="example" class="text-center table table-sm table-responsive-lg table-responsive-md table-responsive-sm table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>Match Title</th>
                        <th>Bet Title</th>
                        <th>Bet On</th>
                        <th>Bet Rate</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th style="width:20%">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(bet,index) in bets.data" :key="index">
                        <td>{{ bet.matchTitle }}</td>
                        <td>{{ bet.betOptionName }}</td>
                        <td>{{ bet.betName }}</td>
                        <td>{{ bet.betRate }}</td>
                        <td>{{ bet.betAmount }}</td>
                        <td>
                            <span v-if="bet.status != 5" class="badge badge-primary">{{ bet.winLost }}</span>
                            <span v-else class="badge badge-danger">{{ bet.winLost }}</span>
                        </td>
                        <td>
                            {{ bet.vueDateTime | dateformat }} at {{ bet.vueDateTime | timeformat }}
                        </td>
                    </tr>
                </tbody>
            </table>      
            <div class="mt-3">
                <pagiantion :data="bets" @pagination-change-page="getResults">
                    <span slot="prev-nav">&lt;</span>
                    <span slot="next-nav">&gt;</span>
                </pagiantion>
            </div>       
        </div>
    </div>
</template>
<script>
import config from '../../config'
import pagiantion from 'laravel-vue-pagination'
export default {
    name:'BetDetails',
    components:{
        pagiantion:pagiantion
    },
    data () {
        return {
            bets: {
                data: []
            },
            userId: this.$store.state.commonObj.user.user_id
        }
    },
    created () {
        this.$store.dispatch('toggleMobileMenu', 1)
        this.getBetDetails()
        this.getResults()
    },
    methods: {
        getBetDetails () {   
            this.$store.state.loader = true         
            config.getData('/user/bet/history/'+ this.userId)
            .then((response) => {
                this.$store.state.loader = false
                this.bets = response.betHistories
            })
            .catch((error) => {
                this.$toast.error({
                    title: 'Error',
                    message: error,
                    type: 'warning'
                })
            });
        },
        getResults(page = 1) {
            this.$store.state.loader = true  
            config.getData('user/bet/history/'+ this.userId +'?page=' + page)
            .then(response => {
                if(!response.betHistories) {
                    this.$store.state.loader = true
                } else {
                    this.$store.state.loader = false
                    this.bets = response.betHistories 
                }
            });
        }
    }
}
</script>