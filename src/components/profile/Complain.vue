<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> User complain </span></p>
        </div>

        <div class="profile-wrapper">
            <form>
                <div class="form-group">
                    <label for="phone" style="display: block;text-align: left;">Phone Number <span class="text-danger">*</span></label>
                    <input required="" class="form-control"  type="number" v-model="form.phone" name="phone" placeholder="Put your phone number">
                    <span class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</span>

                    <label for="message" style="display: block;text-align: left;">Your Message Details<span class="text-danger">*</span></label>
                    <textarea required="" rows="5" class="form-control" v-model="form.message" id="message" name="message" placeholder="Put your message"></textarea>
                    <span class="text-danger" v-if="errors.message">{{ errors.message[0] }}</span>

                    <label for="password" style="display: block;text-align: left;">Your Password <span class="text-danger">*</span></label>
                    <input required="" class="form-control" type="password" v-model="form.password" id="password" name="password" placeholder="Your Password">
                    <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-success" @click.prevent="giveComplain">Give Complain</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import config from '../../config'
export default {
    name:'Complain',
    data () {
        return {
            errors: [],
            form: {
                username: this.$store.state.commonObj.user.user_name,
                phone: '',
                message: '',
                password: '',
            }
        }
    },
    created () {
        this.$store.dispatch('toggleMobileMenu', 1)
    },
    computed : {
        countryList : function () {
            return this.$store.state.commonObj.country
        }
    },
    methods: {
        giveComplain() {
            this.$store.state.loader = true
            config.postData('/user/store/new/complain', this.form)
            .then((response) => {
                console.log(response)
                this.$store.state.loader = false
                if(response.status_code == 200){    
                    this.form.phoneNumber = ''
                    this.form.message = ''
                    this.form.password = ''
                    this.errors = ''
                    this.$toast.success({
                        title: 'Success',
                        message: response.message,
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