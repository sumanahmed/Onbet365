<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> User registration </span></p>
        </div>
        <div class="profile-wrapper">
            <form v-on:keyup.enter="registerUser">
                <input type="hidden" name="" value="">                                            
                <div class="form-group">
                    <div class="input-group input-group-icon mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-user-circle-o"><span class="text-danger">*</span></i>
                            </div>
                        </div>                                
                        <input class="form-control" required type="text" name="username" v-model="form.username" id="username" placeholder="Username : allowed character a-b, A-B , 0-9, -, _" value="">                                                
                    </div>
                    <span class="text-danger" v-if="errors.username">{{ errors.username[0] }}</span>
                    <div class="input-group input-group-icon mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-envelope"><span class="text-danger">*</span></i>
                            </div>
                        </div>
                        <input class="form-control" required type="email" name="email" v-model="form.email" id="email" placeholder="Email" value="">
                    </div>
                    <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                    <div class="input-group input-group-icon mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-key"><span class="text-danger">*</span></i>
                            </div>
                        </div>
                        <input class="form-control" required type="password" name="password" v-model="form.password" id="password" placeholder="Password">
                    </div>
                    <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                    <div class="input-group input-group-icon mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-key"><span class="text-danger">*</span></i>
                            </div>
                        </div>
                        <input class="form-control" required type="password" name="password_confirmation" v-model="form.password_confirmation" id="password_confirmation" placeholder="Re-Password" >
                    </div>
                    <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
                    <div class="input-group input-group-icon mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-flag"><span class="text-danger">*</span></i>
                            </div>
                        </div>
                        <select class="form-control" required="" id="country" name="country" v-model="form.country">
                            <option :value="null" disabled >Select Country</option>
                            <option v-for="(country,index) in countries" :key="index" :value="country.nicename">{{ country.nicename }}</option>
                        </select>
                    </div>
                    <span class="text-danger" v-if="errors.country">{{ errors.country[0] }}</span>
                    <div class="input-group input-group-icon mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-phone"><span class="text-danger">*</span></i>
                            </div>
                        </div>
                        <input class="form-control" required type="number" name="phone" v-model="form.phone" id="phone" placeholder="Phone Number" value="">
                    </div>
                    <span class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</span>
                    <div class="input-group input-group-icon mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <input class="form-control" title="If you give sponsor, Sponsor should be that user username which is the first part of the email" type="text" name="sponsorName" v-model="form.sponsorName" id="sponsorName" placeholder="Sponsorname (optional)" value=""/>
                    </div>
                    <span class="text-danger" v-if="errors.sponsorName">{{ errors.sponsorName[0] }}</span>
                    <div class="input-group input-group-icon mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-users"><span class="text-danger">*</span></i>
                            </div>
                        </div>
                        <select required id="club_id" v-model="form.club_id" class="form-control">
                            <option :value="null" disabled>Select Club</option>
                            <option v-for="(club,index) in clubs" :value="club.id" :key="index">{{ club.clubName }}</option>
                        </select>
                    </div>
                    <span class="text-danger" v-if="errors.club_id">{{ errors.club_id[0] }}</span>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-success" @click.prevent="storeUser">Registration</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import config from '../../config'
export default {
    name:'Register',
    data () {
        return {
            countries:[],
            clubs:[],
            errors:[],
            form: {
                'username' : '',
                'email' : '',
                'password' : '',
                'password_confirmation' : '',
                'country' : null,
                'phone' : '',
                'sponsorName' : '',
                'club_id' : null,
            }
        }
    },
    created () {
        this.$store.dispatch('toggleMobileMenu', 1)
        this.getClubList()
        this.getCountryList()
    },
    methods: {
        async storeUser () {
            await config.postData('/user/registation', this.form)
            .then((response) => {
                if (response.status) {
                    this.$toast.success({
                        title: 'Success',
                        message: response.message,
                        type: 'success'
                    })
                    this.form.username = ''
                    this.form.email = ''
                    this.form.password = ''
                    this.form.password_confirmation = ''
                    this.form.country = null
                    this.form.phone = ''
                    this.form.sponsorName = ''
                    this.form.club_id = null
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
        
        async getClubList () {
            await config.getData('/club/list')
            .then((response) => {
                if (response.status_code == 200) {
                    this.clubs = response.clubs
                } else {
                    this.$toast.error('Sorry, something went wrong') 
                }
            })
            .catch((error) => {
                this.$toast.error({
                    title: 'Error',
                    message: error,
                    type: 'warning'
                })
            });
        },
        async getCountryList () {
            await config.getData('/country/list')
            .then((response) => {
                if (response.status_code == 200) {
                    this.countries = response.countries
                } else {
                    this.$toast.error('Sorry, something went wrong')
                }
            })
            .catch((error) => {
                this.$toast.error({
                    title: 'Error',
                    message: error,
                    type: 'warning'
                })
            });
        }
    }
}
</script>
