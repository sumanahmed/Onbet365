<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> deposit details </span></p>
        </div>

        <div class="profile-wrapper">
            <h5 class="page-heading">Deposit Details</h5>
            
            <table id="example" class="text-center table table-sm table-responsive-lg table-responsive-md table-responsive-sm table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Amount</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(deposit, index) in deposits.data" :key="index">
                        <td>{{ deposit.username }}</td>
                        <td>{{ deposit.depositAmount }}</td>
                        <td>{{ deposit.phoneForm }}</td>
                        <td>{{ deposit.phoneTo }}</td>
                        <td>
                            <span v-if="deposit.status" class="badge badge-pill badge-success p-2"> Paid </span>
                            <span v-else class="badge badge-pill badge-danger p-2"> Unpaid </span>
                        </td>
                        <td>
                            {{ deposit.created_at | dateformat }} at {{ deposit.created_at | timeformat }}                                                                 
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="mt-3">
                <pagiantion :data="deposits" @pagination-change-page="getResults">
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
    name:'DepositDetails',
    components:{
        pagiantion:pagiantion
    },
    data () {
        return {
            deposits: {
                data: []
            },
            userId: this.$store.state.commonObj.user.user_id
        }
    },
    created () {
        this.getDepositDetails()
        this.getResults()
    },
    methods: {        
        getDepositDetails () {
            this.$store.state.loader = true
            config.getData('/user/deposit/history/'+ this.userId)
            .then((response) => {
                this.$store.state.loader = false
                this.deposits = response.data
            })
            .catch((error) => {
                console.log('error = ', error)
            });
        },
        getResults(page = 1) {
            config.getData('user/deposit/history/'+ this.userId +'?page=' + page)
            .then(response => {
                if(!response.data) {
                    this.$store.state.loader = true
                } else {
                    this.$store.state.loader = false
                    this.deposits = response.data 
                }
            });
        }
    }
}
</script>