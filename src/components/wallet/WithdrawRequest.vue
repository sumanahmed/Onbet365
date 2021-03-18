<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> withdrawal request</span></p>
        </div>
        <div class="profile-wrapper">            
            <form>                                     
                <div class="form-group">
                    <label for="withdrawAmount" style="display: block;text-align: left;">Withdrawal Amount (400 - 20000) <span class="text-danger">*</span></label>
                    <input v-model="form.withdrawAmount" required="" id="withdrawAmount" class="form-control" type="number" name="withdrawAmount" placeholder="(400 - 20000)">
                    <span class="text-danger" v-if="errors.withdrawAmount">{{ errors.withdrawAmount[0] }}</span>
                                                
                    <label for="withdrawNumber" style="display: block;text-align: left;">Phone Number <span class="text-danger">*</span></label>
                    <input v-model="form.withdrawNumber" required="" id="withdrawNumber" class="form-control" type="number" name="withdrawNumber" placeholder="11 digit phone number">
                    <span class="text-danger" v-if="errors.withdrawNumber">{{ errors.withdrawNumber[0] }}</span>
                                                
                    <label for="withdrawPaymentType" style="display: block;text-align: left;">Payment Method<span class="text-danger">*</span></label>
                    <select v-model="form.withdrawPaymentType" required="" id="withdrawPaymentType" name="withdrawPaymentType" class="form-control">
                        <option :value="null">Select Payment Method</option>
                        <option :value="1">Bkash Personal</option>
                        <option :value="2">Bkash Agent</option>
                        <option :value="3" disabled="disabled">Nagad Personal</option>
                        <option :value="4" disabled="disabled">Nagad Agent</option>
                        <option :value="5" disabled="disabled">Rocket Personal</option>
                        <option :value="6" disabled="disabled">Rocket Agent</option>
                    </select>
                    <span class="text-danger" v-if="errors.withdrawPaymentType">{{ errors.withdrawPaymentType[0] }}</span>

                    <label for="password" style="display: block;text-align: left;">Password<span class="text-danger">*</span></label>
                    <input v-model="form.password" required="" id="password" class="form-control" type="password" name="password" placeholder="Password">
                    <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                    
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-success" @click.prevent="withdrawRequest">Withdrawal Request</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import config from '../../config'
export default {
    name:'WithdrawRequest',
    data () {
        return {
            errors: [],
            form: {
                withdrawAmount: '',
                withdrawNumber: '',
                withdrawPaymentType: null,
                password: ''
            }
        }
    },   
    computed : {
        getUser : function () {
            return this.$store.state.commonObj.user
        }
    },
    methods: {
        withdrawRequest() {
            this.$store.state.loader = true
            Object.assign(this.form , { 'user_id': this.getUser.user_id})
            config.postData('/user/withdraw/store', this.form)
            .then((response) => {  
                this.$store.state.loader = false
                if(response.status_code){ 
                    this.$store.dispatch('amountUpdate', this.form.withdrawAmount)
                    this.form.withdrawAmount = ''
                    this.form.withdrawNumber = ''
                    this.form.password = ''
                    this.errors = ''

                    this.$toast.success({
                        title: 'Success',
                        message: 'Request Send Successfully',
                        type: 'success'
                    })
                } else {
                    this.errors = ''
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
                    this.$store.state.loader = false 
                }
            });
        },
    }
}
</script>