<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> edit profile </span></p>
        </div>

        <div class="profile-wrapper">
            <form>                                         
                <div class="form-group">
                    <label for="namename" style="display: block;text-align: left;">Username <span class="text-danger">*</span></label>
                    <input id="namename" class="form-control" type="text" name="namename" v-model="form_edit.username" placeholder="Name" readonly="">                
                    <span class="text-danger" v-if="errors.namename">{{ errors.namename[0] }}</span>
                    <label for="country" style="display: block;text-align: left;">Country <span class="text-danger">*</span></label>
                    <select required="" id="country" name="country" v-model="form_edit.country" class="form-control" >
                        <option value="">Select Country *</option>
                        <option v-for="(country,index) in countryList" :key="index" :value="country.nicename">{{ country.nicename }}</option>
                    </select>
                    <span class="text-danger" v-if="errors.country">{{ errors.country[0] }}</span>
                    <label for="phone" style="display: block;text-align: left;">Phone <span class="text-danger">*</span></label>
                    <input required="" id="phone" class="form-control" type="text" name="phone" v-model="form_edit.phone" >
                    <span class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</span>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-success" @click.prevent="update">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import config from '../../config'
export default {
    name:'ProfileEdit',
    data () {
        return {
            errors: [],
            form_edit: this.$store.state.commonObj.profile
        }
    },
    computed : {
        countryList : function () {
            return this.$store.state.commonObj.country
        }
    },
    methods: {
        update() {
            this.$store.state.loader = true
            config.postData('/user/profile/update', this.form_edit)
            .then((response) => {
                this.$store.state.loader = false
                if(response.status_code == 200){
                    this.$store.dispatch('profileUpdate', this.form_edit)
                    this.errors = ''
                    this.$toast.success({
                        title: 'Success',
                        message: 'Profile Update Successfully',
                        type: 'success'
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