<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> deposit request </span></p>
        </div>
        <div class="profile-wrapper">
            <h5 class="page-heading">Deposit Request</h5>
            <h6 class="text-center text-warning mt-2 mb-3">User deposit Time at 9:00 AM To 10:00 PM</h6>

            <form v-on:keyup.enter="depositRequest">
                <input type="hidden" name="" value="">                                    
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
                    <input required="" id="phoneForm" v-model="form.phoneForm" class="form-control" type="number" min="0" name="phoneForm" placeholder="Phone Form" value="">
                    <span class="text-danger" v-if="errors.phoneForm">{{ errors.phoneForm[0] }}</span>
                    
                    <div v-if="form.paymentMethodType == 1" class="input-group input-group-icon mt-2 mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img src="https://www.bkash.com/sites/all/themes/bkash/logo.png?87980" width="50"/>
                            </div>
                        </div>
                        <input required="" id="phoneTo" v-model="form.phoneTo" class="form-control" type="text" name="phoneTo" readonly="">
                    </div>

                    <div v-if="form.paymentMethodType == 2" class="input-group input-group-icon mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img src="https://nagad.com.bd/wp-content/uploads/2019/04/Nagad_Logo_for_web__128x53.svg" width="50"/>
                            </div>
                        </div>
                        <input required="" id="phoneTo" v-model="form.phoneTo" class="form-control" type="text" name="phoneTo" readonly="">
                    </div>

                    <div v-if="form.paymentMethodType == 3" class="input-group input-group-icon">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img src="https://www.dutchbanglabank.com/img/mlogo.png" width="50"/>
                            </div>
                        </div>
                        <input required="" id="phoneTo" v-model="form.phoneTo" class="form-control" type="text" name="phoneTo" readonly="">
                    </div>

                    <label for="password" style="display: block;text-align: left;">Password<span class="text-danger">*</span></label>
                    <input required="" id="password" v-model="form.password" class="form-control" type="password" name="password" placeholder="Password">
                    <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                    
                </div>
                <div class="form-group">
                    <input id="submit" type="submit" class="btn btn-success" value="Deposit Request" @click.prevent="depositRequest">
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
                    this.form = ''           
                    this.$toast.success({
                        title: 'Success',
                        message: 'Request Send Successfully',
                        type: 'success'
                    })
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
        getLiveDepositNumber () {
            config.getData('/live/deposit/number')
            .then((response) => {
                if(response.status_code){  
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