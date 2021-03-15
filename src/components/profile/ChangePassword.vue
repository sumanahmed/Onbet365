<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> chanage password </span></p>
        </div>

        <div class="profile-wrapper">
            <form v-on:keyup.enter="updatePassword">
                <input type="hidden" name="" value="">                                            
                <div class="form-group">
                    <label for="oldPassword" style="display: block;text-align: left;">Old Password <span class="text-danger">*</span></label>
                    <input required="" class="form-control" type="password" v-model="form.oldPassword" name="oldPassword" placeholder="Old Password">
                    <span class="text-danger" v-if="errors.oldPassword">{{ errors.oldPassword[0] }}</span>

                    <label for="newPassword" style="display: block;text-align: left;">New Password <span class="text-danger">*</span></label>
                    <input required="" class="form-control" type="password" v-model="form.newPassword" id="newPassword" name="password" placeholder="New Password">
                    <span class="text-danger" v-if="errors.newPassword">{{ errors.newPassword[0] }}</span>

                    <label for="confirmPassword" style="display: block;text-align: left;">Confirm Password <span class="text-danger">*</span></label>
                    <input required="" class="form-control" id="confirmPassword" v-model="form.confirmPassword" type="password" name="password_confirmation" placeholder="Confirm Password">
                    <span class="text-danger" v-if="errors.confirmPassword">{{ errors.confirmPassword[0] }}</span>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-success" value="Update Password" @click.prevent="updatePassword">
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
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
            }
        }
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
                    this.$toast.success({
                        title: 'Success',
                        message: 'Password Changed Successfully',
                        color: '#D6E09B'
                    })
                }     
            })
            .catch((error) => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
    }
}
</script>