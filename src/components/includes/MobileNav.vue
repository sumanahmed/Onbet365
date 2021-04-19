<template>
    <div>
        <div class="mobile-header-login-wrapper" id="header-sticky">

            <div class="mobile-header">
                <router-link to="/"><img :src="'./assets/img/logo.jpg'" alt="mobile logo"></router-link>
                <span v-if="mobileNav.icon" @click="mobileNavToggle(0)" id="three-dot" class="fa fa-bars"></span>
                <span v-if="!mobileNav.icon" @click="mobileNavToggle(1)" id="three-dot" class="fa fa-times"></span>
            </div>

            <div v-if="!isLoggedUser" class="mobile-login">
                <input type="text" name="username" placeholder="Username" v-model="form.username">
                <p style="margin-bottom:0;font-size:12px;" class="text-danger" v-if="errors.username || errors.password">{{ errors.username[0] }} & {{ errors.password[0] }}</p>
                <input type="password" name="password" placeholder="Password" v-model="form.password">
                <input class="user-login" type="submit" name="submit" value="Login" @click.prevent="signIn">
                <router-link to="/register" class="user-registration"> Join </router-link>
            </div>

            <!-- Mobile Profile section -->
            <div v-if="isLoggedUser && getUser" class="profile_section_mobile">
            
                <b class="liveTime">{{ customTime }}</b>
                <b class="liveDate">{{ customDate }}</b>
                <div class="single-profile-mobile">
                    <div class="avater-image-mobile">
                        <router-link to="/deposit-request"><i class="btn btn-sm btn-dark text-warning">Deposit</i></router-link>
                        <span style="margin-top:5px;display:block;"></span>
                        <router-link to="/withdraw-request"><i class="btn btn-sm btn-dark text-warning">Withdraw</i></router-link>
                    </div>
                    <div class="welcome-text-coin-mobile">
                        <p class="text-block m-0"><b>Welcome</b> : {{ getUser.user_name }} </p>
                        <i class="fa fa-bitcoin"></i> <b class="text-black">{{ getTotalAmount }}</b>
                    </div>
                </div>                    
            </div>

        </div>
        <!-- Mobile Menu -->
        <div class="mobile-menu-wrapper" v-if="mobileNav.menu">                    
            <div class="menu_section">
                <nav class="navigation">
                    <ul class="mainmenu">
                        <li><router-link to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</router-link></li>
                        <li><router-link to="/upcoming"><i class="fa fa-history" aria-hidden="true"></i> Upcoming</router-link></li>
                        <li v-if="isLoggedUser"><a style="color: #fff;"><i class="fa fa-user" aria-hidden="true"></i> Profile <i style="float: right;" class="fa fa-angle-down fa-sm " aria-hidden="true"></i></a>
                            <ul class="submenu">
                                <li><router-link to="/register"> <span class="text-warning"> Join New user </span> </router-link></li>
                                <li><router-link to="/profile">Profile</router-link></li>
                                <li><router-link to="/profile-edit">Edit Profile</router-link></li>
                                <li><router-link to="/change-club">Change Club</router-link></li>
                                <li><router-link to="/change-password">Change Password</router-link></li>
                                <li><router-link to="/club-members">Sponsor Members</router-link></li>
                                <li><router-link to="/sponsors">Sponsors Income</router-link></li>
                                <li><router-link to="/bet-details">Bet Details</router-link></li>
                            </ul>
                        </li>
                        <li v-if="isLoggedUser"><a style="color: #fff;"><i class="fa fa-credit-card" aria-hidden="true"></i> Wallet <i style="float: right;" class="fa fa-angle-down fa-sm " aria-hidden="true"></i> </a>
                            <ul class="submenu">
                                <li><router-link to="/complain"><span class="text-warning">Your Complain</span></router-link></li>
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
export default {
    name: 'MobileNav',
    data () {
        return {
            customTime:'',
            customDate: '',
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
        },
        mobileNav : function () {
            return this.$store.state.mobileNav
        }
    },
    created() {
        setInterval(this.updateTime, 1000);
        this.updateTime()
    },
    methods: {        
        updateTime() {
            var today = new Date();
            var week = ['[SUN]', '[MON]', '[TUE]', '[WED]', '[THU]', '[FRI]', '[SAT]'];
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
        
            var isFormat12H = true;
            var ampm = "";
            if (isFormat12H) {
                ampm = h >= 12 ? "pm" : "am";
                h = h % 12;
                h = h ? h : 12;
            }
            h = this.checkTime(h);
            m = this.checkTime(m);
            s = this.checkTime(s);
            this.customTime =  h + ":" + m + ":" + s + ampm;
            this.customDate = this.zeroPadding(today.getFullYear(), 4) + '-' + this.zeroPadding(today.getMonth()+1, 2) + '-' + this.zeroPadding(today.getDate(), 2) + ' ' + week[today.getDay()];
            
        },

        checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        },
        zeroPadding(num, digit) {
            var zero = '';
            for(var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        },
        mobileNavToggle (status) {
            if (status != 1) {
                this.$store.dispatch('toggleMobileMenu', status)
            } else {
                this.$store.dispatch('toggleMobileMenu', status)
            }
        },
        signIn() {
            this.$store.state.loader = true
            config.postData('/user/login', this.form)
            .then((response) => {
                this.$store.state.loader = false
                if(response.status_code == 200){
                    localStorage.setItem('accessToken', response.access_token);
                    localStorage.setItem('accountType', response.user_type);
                    this.$router.replace('/')
                    this.$router.go()
                    this.$store.dispatch('addUserId',  response.user_id)
                    this.$toast.success({
                        title: 'Success',
                        message: 'Loggedin Successfully',
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
                this.$store.state.loader = false
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        logout(){
            config.postData('/user/logout')
            .then(() => {                
                this.isMobileNavOn = true
                this.isMenuShow = false
                localStorage.removeItem('accessToken');
                this.$store.dispatch('toggleMobileMenu', 1)
                this.$store.dispatch('userLogout', false)
                this.$router.replace('/')
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

