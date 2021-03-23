<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> deposit request </span></p>
        </div>
        <div class="profile-wrapper">
            <h6 class="text-center text-danger mt-2 mb-3">Notice : User deposit Time at 9:00 AM To 10:00 PM </h6>
            <form>                                  
                <div class="form-group">
                    <label for="paymentMethod" style="display: block;text-align: left;">Payment Method<span class="text-danger">*</span></label>
                    <select v-model="form.paymentMethodType" :disabled="1" required="" id="paymentMethod" name="paymentMethodType" class="form-control">
                        <option :value="0"> Select method </option>
                        <option :value="1">Bkash</option>
                        <option :value="2">Nagad</option>
                        <option :value="3">Rocket</option>
                        <option :value="4">Paypal</option>
                        <option :value="5">Stripe</option>
                        <option :value="6">Neteller</option>
                    </select>
                    <span class="text-danger" v-if="errors.paymentMethodType">{{ errors.paymentMethodType[0] }}</span>

                    <label for="depositAmount" style="display: block;text-align: left;">Number of Coins (200-25000) <span class="text-danger">*</span></label>
                    <input required="" id="depositAmount" v-model="form.depositAmount" class="form-control" type="number" min="0" name="depositAmount" placeholder="(200-25000)" value="">
                    <span class="text-danger" v-if="errors.depositAmount">{{ errors.depositAmount[0] }}</span>
                    
                    <label for="phoneForm" style="display: block;text-align: left;">Phone From <span class="text-danger">*</span></label>
                    <input required="" id="phoneForm" v-model="form.phoneForm" class="form-control" type="number" min="0" name="phoneForm" placeholder="11 digit phone number" value="">
                    <span class="text-danger" v-if="errors.phoneForm">{{ errors.phoneForm[0] }}</span>
                    
                    <label for="phoneTo" style="display: block;text-align: left;">Phone To <span class="text-danger">*</span></label>
                    <div v-if="form.paymentMethodType == 1" class="input-group input-group-icon mt-2 mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img :src="'/assets/img/bkash.png'" alt="bkash"/>
                            </div>
                        </div>
                        <input required="" id="phoneTo" v-model="form.phoneTo" class="form-control" type="text" name="phoneTo" readonly="">
                    </div>

                    <div v-if="form.paymentMethodType == 2" class="input-group input-group-icon mb-2 mt-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img :src="'/assets/img/nagad.png'" alt="nogod"/>
                            </div>
                        </div>
                        <input required="" id="phoneTo" v-model="form.phoneTo" class="form-control" type="text" name="phoneTo" readonly="">
                    </div>

                    <div v-if="form.paymentMethodType == 3" class="input-group input-group-icon mb-2 mt-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img :src="'/assets/img/roket.png'" alt="roket"/>
                            </div>
                        </div>
                        <input required="" id="phoneTo" v-model="form.phoneTo" class="form-control" type="text" name="phoneTo" readonly="">
                    </div>

                    <label for="password" style="display: block;text-align: left;">Password<span class="text-danger">*</span></label>
                    <input required="" id="password" v-model="form.password" class="form-control" type="password" name="password" placeholder="Password">
                    <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                    
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-success" @click.prevent="depositRequest">Deposit Request</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import config from '../../config'
export default {
    name:'DepositRequest',
    data () {
        return {
            errors: [],
            form: {
                paymentMethodType: 0,
                depositAmount: '',
                phoneForm: '',
                phoneTo: '',
                password: ''
            }
        }
    },    
    computed : {
        getUser : function () {
            return this.$store.state.commonObj.user
        }
    },
    created() {
        this.$store.dispatch('toggleMobileMenu', 1)
        this.getLiveDepositNumber()
    },
    methods: {
        depositRequest() {
            this.$store.state.loader = true
            Object.assign(this.form , { 'user_id': this.getUser.user_id})
            config.postData('/user/online/deposit', this.form)
            .then((response) => {
                this.$store.state.loader = false
                if(response.status_code){
                    this.form.depositAmount = '' 
                    this.form.phoneForm = ''
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
                this.$store.state.loader = false
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        getLiveDepositNumber () {
            this.$store.state.loader = true
            config.getData('/live/deposit/number')
            .then((response) => {
                if(response.status_code){  
                    this.$store.state.loader = false
                    this.form.paymentMethodType = response.data.paymentMethodType
                    this.form.phoneTo = response.data.number
                } else {
                    this.$toast.error({
                        title: 'Error',
                        type: 'warning'
                    })
                }   
            })
            .catch((error) => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        }
    }
}
</script>
<style scoped>
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
    }
</style>