<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> bet details </span></p>
        </div>

        <div class="profile-wrapper" style="padding-bottom:38px;">
            <h5 class="page-heading">Bet details</h5>
            <table id="example" class="text-center table table-sm table-responsive-lg table-responsive-md table-responsive-sm table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Bet Title</th>
                        <th>Bet On</th>
                        <th>Bet Rate</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(bet,index) in bets.data" :key="index">
                        <td>Multan Sultans vs Karachi Kings</td>
                        <td>1st Ball Runs Of 1st Innings</td>
                        <td>wide Ball</td>
                        <td>3.00</td>
                        <td>20</td>
                        <td>
                            <span class="badge badge-warning">Lost</span>
                        </td>
                        <td>
                            19 Oct 2020 05:44:50 PM                                                                    
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
            bets: [],
            username: this.$store.state.commonObj.user.user_name
        }
    },
    created () {
        this.getSponsors()
        this.getResults()
    },
    methods: {
        getSponsors () {   
            this.$store.state.loader = true         
            config.getData('/user/bet/history/', this.username)
            .then((response) => {
                this.$store.state.loader = false
                this.bets = response.data
            })
            .catch((error) => {
                console.log('error = ', error)
            });
        },
        getResults(page = 1) {
            this.$store.state.loader = true  
            config.getData('user/bet/history/'+ this.username +'?page=' + page)
            .then(response => {
                if(!response.data) {
                    this.loader = true
                } else {
                    this.loader = false
                    this.bets = response.data 
                }
            });
        }
    }
}
</script>