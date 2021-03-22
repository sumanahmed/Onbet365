<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> coin transfer </span></p>
        </div>

        <div class="profile-wrapper" style="padding-bottom:38px;">
            <form>                                           
                <div class="form-group">
                    <label for="username" style="display: block;text-align: left;">Username<span class="text-danger">*</span></label>
                    <input required="" autofocus="" id="username" v-model="form.username" class="form-control" type="text" name="username" placeholder="Username" value="">
                    <span class="text-danger" v-if="errors.username">{{ errors.username[0] }}</span>
                    
                    <label for="transferAmount" style="display: block;text-align: left;">Number of Coins (20-5000)<span class="text-danger">*</span></label>
                    <input required="" id="transferAmount" v-model="form.transferAmount" class="form-control" type="number" min="0" name="transferAmount" placeholder="(20-5000)" value="">
                    <span class="text-danger" v-if="errors.transferAmount">{{ errors.transferAmount[0] }}</span>
                    
                    <label for="password" style="display: block;text-align: left;">Password<span class="text-danger">*</span></label>
                    <input required="" id="password" v-model="form.password" class="form-control" type="password" name="password" placeholder="Password">
                    <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                    
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-success"  @click.prevent="coinTransfer">Transfer</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import config from '../../config'
export default {
    name:'CoinTransfer',
    data () {
        return {
            errors: [],
            form: {
                username: '',
                transferAmount: '',
                password: ''
            }
        }
    },
    computed : {
        getUser : function () {
            return this.$store.state.commonObj.user
        }
    },
    created () {
        this.$store.dispatch('toggleMobileMenu', 1)
    },
    methods: {
        coinTransfer() {
            this.$store.state.loader = true
            Object.assign(this.form , { 'user_id': this.getUser.user_id})
            config.postData('/user/store/coin/transfer', this.form)
            .then((response) => {  
                this.$store.state.loader = false              
                if(response.status_code){ 
                    this.$store.dispatch('amountUpdate', this.form.transferAmount) 
                    this.form = ''
                    this.errors = ''
                    this.$toast.success({
                        title: 'Success',
                        message: 'Coin Transfer Successfully',
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
    }
}
</script>