<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> chanage password </span></p>
        </div>
        <div class="profile-wrapper" style="padding-bottom:38px;">
            <h5 class="page-heading">Change password</h5>
            <form v-on:keyup.enter="clubChange">
                <div class="form-group">
                    <label for="club_id" style="display: block;text-align: left;">Select club <span class="text-danger">*</span></label>
                    <select id="club_id" v-model="form.club_id" name="club_id" class="form-control" tabindex="-1">                                                                                                                                            
                        <option v-for="(club, index) in clubList" :key="index" :value="club.id">{{ club.name }}</option>                                                                                                                            
                    </select>
                    <label for="password" style="display: block;text-align: left;">Password <span class="text-danger">*</span></label>
                    <input required="" class="form-control" type="password" v-model="form.password" id="password" name="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-success" value="Change Club" @click.prevent="clubChange">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import config from '../../config'
export default {
    name:'ChangeClub',
    data () {
        return {
            errors: [],
            form: {
                club_id: '',
                password: ''
            }
        }
    },
    computed : {
        clubList : function () {
            return this.$store.state.commonObj.club
        }
    },
    methods: {
        clubChange() {
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