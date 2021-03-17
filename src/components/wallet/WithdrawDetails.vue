<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> withdrawal details </span></p>
        </div>

        <div class="profile-wrapper">
            <h5 class="page-heading">Withdrawal Details</h5>
            
            <table id="example" class="text-center table table-sm table-responsive-lg table-responsive-md table-responsive-sm table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>To</th>
                        <th>Method</th>
                        <th>Coin</th>
                        <th>Ref</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>                    
                    <tr v-for="(withdraw, index) in withdraws.data" :key="index">
                        <td>{{ withdraw.username }}</td>
                        <td>{{ withdraw.withdrawPaymentType }}</td>
                        <td>{{ withdraw.withdrawAmount }}</td>
                        <td>{{ withdraw.reference }}</td>
                        <td>{{ withdraw.created_at | dateformat }} at {{ withdraw.created_at | timeformat }}</td>
                        <td>
                            <span v-if="withdraw.status" class="badge badge-success">Approve</span>
                            <span v-else class="badge badge-warning">Pending</span>
                            <a onclick="return confirm('Are you sure cancel withdraw?');" class="btn btn-sm btn-danger" href="">Refund</a>
                        </td>
                    </tr>                    
                </tbody>
            </table> 
            <div class="mt-3">
                <pagiantion :data="withdraws" @pagination-change-page="getResults">
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
    name:'WithdrawDetails',
    components:{
        pagiantion:pagiantion
    },
    data () {
        return {
            withdraws: [],
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
            config.getData('/user/withdraw/history/'+ this.userId)
            .then((response) => {
                this.$store.state.loader = false
                this.withdraws = response.data
            })
            .catch((error) => {
                console.log('error = ', error)
            });
        },
        getResults(page = 1) {
            config.getData('user/withdraw/history/'+ this.userId +'?page=' + page)
            .then(response => {
                if(!response.data) {
                    this.loader = true
                } else {
                    this.loader = false
                    this.withdraws = response.data 
                }
            });
        }
    }
}
</script>