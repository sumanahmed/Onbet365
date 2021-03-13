<template>
    <div>
        <div class="left-section scrollCustom" id="style-10">
            <!-- Logo section -->
            <div class="logo_section">
                <router-link to="/"><img :src="'/assets/img/logo.jpg'" alt="dreambet365"/></router-link>
            </div>

            <!-- Login section -->
            <div v-if="!isLoggedUser" class="login_section p-2">
                <form v-on:keyup.enter="signIn">
                    <input type="text" class="form-control mt-2 mb-1" v-model="form.username" placeholder="Username"/>
                    <p style="margin-bottom:0;font-size:12px;" class="text-danger" v-if="errors.username">{{ errors.username[0] }}</p>
                    <input type="password" class="form-control" v-model="form.password" placeholder="Password"/>
                    <p style="margin-bottom:0;font-size:12px;" class="text-danger" v-if="errors.password">{{ errors.password[0] }}</p>
                    <input type="submit" name="login" value="Login" @click.prevent="signIn" />
                    <router-link to="/register" class="customJoinBtn"> Join </router-link>
                </form>                
            </div>

            <!-- Profile section -->
            <div v-if="isLoggedUser" class="profile_section">
                <div class="single-profile">
                    <div class="avater-image">
                        <p>{{ loggedUserName.substring(0,1) | capitalizeFirstLetter }}</p>
                    </div>
                    <div class="welcome-text-coin">
                        <p class="text-blck m-0"><b>Welcome</b> : {{ loggedUserName }} </p>
                        <i class="fa fa-bitcoin"></i> <b class="text-black">{{ getTotalAmount }}</b>
                    </div>
                </div>                    
            </div>

            <!-- Menu section -->
            <div class="menu_section">
                <nav class="navigation">
                    <ul class="mainmenu">
                        <li><router-link to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</router-link></li>
                        <li><router-link to="/upcoming"><i class="fa fa-history" aria-hidden="true"></i> Upcoming</router-link></li>
                        <li v-if="isLoggedUser"><a href=""><i class="fa fa-user" aria-hidden="true"></i> Profile <i style="float: right;" class="fa fa-angle-down fa-sm " aria-hidden="true"></i></a>
                            <ul class="submenu">
                                <li><a href="">Proifle</a></li>
                                <li><a href="">Edit Profile</a></li>
                                <li><a href="">Change Club</a></li>
                                <li><a href="">Club Members</a></li>
                                <li><a href="">Change Password</a></li>
                                <li><a href="">Sponsors</a></li>
                                <li><a href="">Bet Details</a></li>
                            </ul>
                        </li>
                        <li v-if="isLoggedUser"><a href=""><i class="fa fa-credit-card" aria-hidden="true"></i> Wallet <i style="float: right;" class="fa fa-angle-down fa-sm " aria-hidden="true"></i> </a>
                            <ul class="submenu">
                                <li><a href="">Deposit request</a></li>
                                <li><a href="">Deposit Details</a></li>
                                <li><a href="">Coin Transfer</a></li>
                                <li><a href="">Coin Transfer Details</a></li>
                                <li><a href="">Coin Receive Details</a></li>
                                <li><a href="">Withdraw Request</a></li>
                                <li><a href="">Withdraw Details</a></li>
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
    name:'LeftSidebar',
    data () {
        return {
            errors:[],
            loggedUserName : localStorage.getItem('user_name'),
            form : {
                username :'',
                password :'',
            }
        }
    },
    // created () {
    //    const loggedUserId = localStorage.getItem('user_id')
    //    if (loggedUserId) {
    //        this.isLoggedIn = true
    //    }
    // },
    computed : {
        getTotalAmount : function () {
            return this.$store.state.totalAmount
        },
        isLoggedUser : function () {
            return this.$store.state.isLoggedIn
        }
    },
    methods: {
        signIn() {
            config.postData('/user/login', this.form)
            .then((response) => {
                if(response.status_code == 200){
                    localStorage.setItem('accessToken', response.access_token);
                    localStorage.setItem('user_id', response.user_id);
                    localStorage.setItem('user_name', response.user_name);
                    localStorage.setItem('totalAmount', response.totalAmount);
                    this.loggedUserName = response.user_name
                    this.$store.dispatch('addAmount', response.totalAmount)
                   // this.$toast.success('Loggedin successfully') 
                }     
            })
            .catch((error) => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        logout(){
            config.postData('/user/logout')
            .then(() => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('user_id');
                localStorage.removeItem('user_name');
                localStorage.removeItem('totalAmount');
                this.$store.dispatch('userLogout', false)
            })      
        }
    }
}
</script>