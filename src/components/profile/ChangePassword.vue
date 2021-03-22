<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> chanage password </span></p>
        </div>

        <div class="profile-wrapper">
            <form>
                <div class="form-group">
                    <label for="oldPassword" style="display: block;text-align: left;">Old Password <span class="text-danger">*</span></label>
                    <input required="" class="form-control" type="password" v-model="form.oldPassword" name="oldPassword" placeholder="Old Password">
                    <span class="text-danger" v-if="errors.oldPassword">{{ errors.oldPassword[0] }}</span>

                    <label for="password" style="display: block;text-align: left;">New Password <span class="text-danger">*</span></label>
                    <input required="" class="form-control" type="password" v-model="form.password" id="password" name="password" placeholder="New Password">
                    <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>

                    <label for="password_confirmation" style="display: block;text-align: left;">Confirm Password <span class="text-danger">*</span></label>
                    <input required="" class="form-control" id="password_confirmation" v-model="form.password_confirmation" type="password" name="password_confirmation" placeholder="Confirm Password">
                    <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-success" @click.prevent="updatePassword">Update Password</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import config from '../../config'
export default {
    name:'ChangePassword',
    data () {
        return {
            errors: [],
            form: {
                username: this.$store.state.commonObj.user.user_name,
                oldPassword: '',
                password: '',
                password_confirmation: '',
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
        updatePassword() {
            this.$store.state.loader = true
            config.postData('/user/update/password', this.form)
            .then((response) => {
                this.$store.state.loader = false
                if(response.status_code == 200){    
                    this.form.oldPassword = ''
                    this.form.password = ''
                    this.form.password_confirmation = ''
                    this.errors = ''
                    this.$toast.success({
                        title: 'Success',
                        message: 'Password Changed Successfully',
                        type: 'success'
                    })
                } else {
                    this.form.oldPassword = ''
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