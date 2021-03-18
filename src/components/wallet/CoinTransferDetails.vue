<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> coin transfer details</span></p>
        </div>

        <div class="profile-wrapper">
            <table id="example" class="text-center table table-sm table-striped table-bordered table-responsive-lg table-responsive-md table-responsive-sm" style="width:100%">
                <thead>
                    <tr>
                        <th>Transfer User</th>
                        <th>Receive User</th>
                        <th>Coin</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(coin, index) in coins.data" :key="index">
                        <td>{{ coin.fromuser }}</td>
                        <td>{{ coin.touser }}</td>
                        <td>{{ coin.transferAmount }}</td>
                        <td>
                            {{ coin.created_at | dateformat }} at {{ coin.created_at | timeformat }}                                                                                  
                        </td>
                        <td>
                            <span v-if="coin.status" class="badge badge-success">Transfer</span>
                            <span v-else class="badge badge-danger">Not Transfer</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="mt-3">
                <pagiantion :data="coins" @pagination-change-page="getResults">
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
    name:'CoinTransferDetails',
    components:{
        pagiantion:pagiantion
    },
    data () {
        return {
            coins: {
                data: []
            },
            userId: this.$store.state.commonObj.user.user_id
        }
    },
    created () {
        this.getCoinTransfers()
        this.getResults()
    },
    methods: {        
        getCoinTransfers () {
            this.$store.state.loader = true
            config.getData('/user/coin/transfer/history/'+ this.userId)
            .then((response) => {
                this.$store.state.loader = false
                this.coins = response.data
            })
            .catch((error) => {
                console.log('error = ', error)
            });
        },
        getResults(page = 1) {
            config.getData('user/coin/transfer/history/'+ this.userId +'?page=' + page)
            .then(response => {
                if(!response.data) {
                    this.loader = true
                } else {
                    this.loader = false
                    this.coins = response.data 
                }
            });
        }
    }
}
</script>