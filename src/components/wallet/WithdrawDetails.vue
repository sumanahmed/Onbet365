<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> withdrawal details </span></p>
        </div>

        <div class="profile-wrapper">
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
                        <td v-if="withdraw.withdrawPaymentType == 1"> Bkash Personal </td>
                        <td v-if="withdraw.withdrawPaymentType == 2"> Bkash Agent </td>
                        <td v-if="withdraw.withdrawPaymentType == 3"> Bkash Personal </td>
                        <td v-if="withdraw.withdrawPaymentType == 4"> Bkash Agent </td>
                        <td v-if="withdraw.withdrawPaymentType == 5"> Rocket Personal </td>
                        <td v-if="withdraw.withdrawPaymentType == 6"> Rocket Agent </td>
                        <td>{{ withdraw.withdrawAmount }}</td>
                        <td>{{ withdraw.reference }}</td>
                        <td>{{ withdraw.created_at | dateformat }} at {{ withdraw.created_at | timeformat }}</td>
                        <td>
                            <span v-if="withdraw.status == 0" class="badge badge-warning">Pending</span>
                            <span v-if="withdraw.status == 1" class="badge badge-success">Approve</span>                            
                            <span @click="showModal(withdraw.id, index, withdraw.withdrawAmount)" class="badge badge-danger" style="cursor: pointer;">Refund</span>
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

        <div v-if="refundModal" class="modal fade show" style="display:block" id="placeBetBtn" aria-hidden="true" aria-labelledby="placeBetBtn" role="dialog" tabindex="-1">
            <div class="modal-dialog modal-simple modal-dialog-centered">
                <div class="modal-content modal-custom-content">
                    <div class="modal-header modal-custom-header">
                        <button id="customModelClose" type="button" class="close" data-dismiss="modal" aria-label="Close" @click="cancelModal">
                            <span class="fa fa-window-close" aria-hidden="true"></span>
                        </button>
                        <h6 style="text-align:center" class="modal-title">Submit Refund</h6>
                    </div>
                    <form>
                        <div class="modal-body modal-custom-body">
                            <p class="text-info text-center">Are you sure to refund ??</p>
                        </div>
                        <div style="display:block;margin:10px 0;padding:0px;border:none" class="modal-footer text-center">
                            <button class="btn btn-sm btn-success" type="button" @click="submitRefund"> Submit </button>
                            <button class="btn btn-sm btn-danger" type="button" @click="cancelModal"> Cancel </button>
                        </div>
                    </form>
                </div>
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
            withdraws: {
                data: []
            },
            refundModal: false,
            id: '',
            key: '',
            refundAmount: ''
        }
    },
    async created () {
        this.getCoinTransfers()
        this.getResults()
    },
    computed : {
        loader: function () {
            return this.$store.state.loader
        },
        getUser : function () {
            return this.$store.state.commonObj.user
        }
    },
    methods: {        
        getCoinTransfers () {
            this.$store.state.loader = true
            config.getData('/user/withdraw/history/'+ this.getUser.user_id)
            .then((response) => {
                this.$store.state.loader = false
                this.withdraws = response.data
            })
            .catch((error) => {
                console.log('error = ', error)
            });
        },
        getResults(page = 1) {
            this.$store.state.loader = true
            config.getData('user/withdraw/history/'+ this.getUser.user_id +'?page=' + page)
            .then(response => {
                if(!response.data) {
                    this.$store.state.loader = true
                } else {
                    this.$store.state.loader = false
                    this.withdraws = response.data 
                }
            });
        },
        showModal (id, key, amount) {            
            this.refundModal = true
            this.key= key
            this.id= id
            this.refundAmount = amount
        },
        submitRefund() {
            config.getData('/user/withdraw/cancel/'+ this.id)
            .then((response) => {            
                if(response.status_code){  
                    this.$store.dispatch('addAmount',  this.refundAmount)
                    this.withdraws.data.splice(this.key, 1) 
                    this.$toast.success({
                        title: 'Success',
                        message: response.message,
                        type: 'success'
                    })
                    this.refundModal = false
                } else {
                    this.$toast.error({
                        title: 'Error',
                        message: response.message,
                        type: 'warning'
                    })
                }   
            })
            .catch((error) => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        cancelModal () {
            this.refundModal = false
        }
    }
}
</script>