<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> chanage club </span></p>
        </div>
        <div class="profile-wrapper" style="padding-bottom:38px;">
            <div class="form-group">
                <label for="club_id" style="display: block;text-align: left;">Select club <span class="text-danger">*</span></label>
                <select id="club_id" v-model="form.club_id" name="club_id" class="form-control" tabindex="-1">                                                                                                                                            
                    <option v-for="(club, index) in clubList" :key="index" :value="club.id">{{ club.clubName }}</option>                                                                                                                            
                </select>
                <span class="text-danger" v-if="errors.club_id">{{ errors.club_id[0] }}</span>
                <label for="password" style="display: block;text-align: left;">Password <span class="text-danger">*</span></label>
                <input required="" class="form-control" type="password" v-model="form.password" id="password" name="password" placeholder="Password">
                <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-success" @click="clubChange">Change Club</button>
            </div>
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
                username: this.$store.state.commonObj.user.user_name,
                club_id: this.$store.state.commonObj.profile.club_id,
                password: ''
            }
        }
    },
    computed : {
        clubList : function () {
            return this.$store.state.commonObj.club
        }
    },
    created () {
        this.$store.dispatch('toggleMobileMenu', 1)
    },
    methods: {
        clubChange() {
            this.$store.state.loader = true
            config.postData('/user/update/club', this.form)
            .then((response) => {
                this.$store.state.loader = false
                if(response.status_code == 200){    
                    this.$store.state.commonObj.profile.club_id = this.form.club_id
                    this.form.password = '' 
                    this.$toast.success({
                        title: 'Success',
                        message: 'Club Changed Successfully',
                        type: 'success'
                    })
                } else {
                    this.form.password = ''
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