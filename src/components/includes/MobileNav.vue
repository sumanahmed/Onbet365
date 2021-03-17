<template>
    <div>
        <div class="mobile-header-login-wrapper" id="header-sticky">

            <div class="mobile-header">
                <router-link to="/"><img :src="'./assets/img/logo.jpg'" alt="mobile logo"></router-link>
                <span @click="mobileNavToggle" id="three-dot" class="fa fa-bars"></span>
            </div>

            <div v-if="!isLoggedUser" class="mobile-login">
                <input type="text" name="username" placeholder="Username" v-model="form.username">
                <p style="margin-bottom:0;font-size:12px;" class="text-danger" v-if="errors.username || errors.password">{{ errors.username[0] }} & {{ errors.password[0] }}</p>
                <input type="password" name="password" placeholder="Password" v-model="form.password">
                <input class="user-login" type="submit" name="submit" value="Login" @click.prevent="signIn">
                <router-link to="/register" class="user-registration"> Join </router-link>
            </div>

            <!-- Mobile Profile section -->
            <div v-if="isLoggedUser" class="profile_section_mobile">
                <div class="single-profile-mobile">
                    <div class="avater-image-mobile">
                        <p>{{ getUser.user_name.substring(0,1) | capitalizeFirstLetter }}</p>
                    </div>
                    <div class="welcome-text-coin-mobile">
                        <p class="text-block m-0"><b>Welcome</b> : {{ getUser.user_name }} </p>
                        <i class="fa fa-bitcoin"></i> <b class="text-black">{{ getTotalAmount }}</b>
                    </div>
                </div>                    
            </div>

        </div>
        <!-- Mobile Menu -->
        <div class="mobile-menu-wrapper" v-if="isMobileNavOn">                    
            <div class="menu_section">
                <nav class="navigation">
                    <ul class="mainmenu">
                        <li><router-link to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</router-link></li>
                        <li><router-link to="/upcoming"><i class="fa fa-history" aria-hidden="true"></i> Upcoming</router-link></li>
                        <li v-if="isLoggedUser"><a style="color: #fff;"><i class="fa fa-user" aria-hidden="true"></i> Profile <i style="float: right;" class="fa fa-angle-down fa-sm " aria-hidden="true"></i></a>
                            <ul class="submenu">
                                <li><router-link to="/profile">Profile</router-link></li>
                                <li><router-link to="/profile-edit">Edit Profile</router-link></li>
                                <li><router-link to="/change-club">Change Club</router-link></li>
                                <li><router-link to="/club-members">Club Members</router-link></li>
                                <li><router-link to="/change-password">Change Password</router-link></li>
                                <li><router-link to="/sponsors">Sponsors</router-link></li>
                                <li><router-link to="/bet-details">Bet Details</router-link></li>
                            </ul>
                        </li>
                        <li v-if="isLoggedUser"><a style="color: #fff;"><i class="fa fa-credit-card" aria-hidden="true"></i> Wallet <i style="float: right;" class="fa fa-angle-down fa-sm " aria-hidden="true"></i> </a>
                            <ul class="submenu">
                                <li><router-link to="/deposit-request">Deposit request</router-link></li>
                                <li><router-link to="/deposit-details">Deposit Details</router-link></li>
                                <li><router-link to="/coin-transfer">Coin Transfer</router-link></li>
                                <li><router-link to="/coin-transfer-details">Coin Transfer Details</router-link></li>
                                <li><router-link to="/coin-receive-details">Coin Receive Details</router-link></li>
                                <li><router-link to="/withdraw-request">Withdraw Request</router-link></li>
                                <li><router-link to="/withdraw-details">Withdraw Details</router-link></li>
                            </ul>
                        </li>
                        <li v-if="isLoggedUser"><a href="#" @click.prevent="logout"><i class="fa fa-power-off" aria-hidden="true"></i> Logout</a></li>
                    </ul>
                </nav>
            </div>
        </div>        
    </div>
</template>
<script>
import config from '../../config'
import UserMixin from '@/mixins/user'
export default {
    name: 'MobileNav',
    mixins: [UserMixin],
    data () {
        return {
            isMobileNavOn: false,
            errors:[],
            form : {
                username :'',
                password :'',
            }
        }
    },
    computed : {
        isLoggedUser : function () {
            return this.$store.state.loggedIn
        },
        getUser : function () {
            return this.$store.state.commonObj.user
        },
        getTotalAmount : function () {
            return this.$store.state.commonObj.user.totalAmount
        }
    },
    methods: {
	
        mobileNavToggle () {
            this.isMobileNavOn = true
        },
        signIn() {
            this.$store.state.loader = true
            config.postData('/user/login', this.form)
            .then((response) => {
                if(response.status_code == 200){
                    localStorage.setItem('accessToken', response.access_token);
                    localStorage.setItem('accountType', response.user_type);
                    this.$router.go()
                    this.$store.state.loader = false
                    this.$store.dispatch('addUserId',  response.user_id)
                    this.$toast.success({
                        title: 'Success',
                        message: 'Loggedin Successfully',
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
        logout(){
            config.postData('/user/logout')
            .then(() => {
                localStorage.removeItem('accessToken');
                this.$store.dispatch('userLogout', false)
                this.$router.push('/')
                this.$router.go()
                this.$toast.success({
                    title: 'Success',
                    message: 'Logout Successfully',
                    type: 'success'
                })
            })      
        }
    }
}
</script>

