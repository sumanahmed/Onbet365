<template>
    <div>
        <div class="left-section scrollCustom" id="style-10">
            <!-- Logo section -->
            <div class="logo_section">
                <router-link to="/"><img :src="'/assets/img/logo.jpg'" alt="dreambet365"/></router-link>
            </div>

            <!-- Login section -->
            <div v-if="!isLoggedIn" class="login_section p-2">
                <form v-on:keyup.enter="signIn">
                    <input type="text" class="form-control mt-2 mb-1" v-model="form.username" placeholder="Username"/>
                    <input type="password" class="form-control" v-model="form.password" placeholder="Password"/>
                    <input type="submit" name="login" value="Login" @click.prevent="signIn" />
                </form>
                <router-link to="/register" class="btn btn-sm btn-primary ml-1"> Join </router-link>
            </div>

            <!-- Profile section -->
            <div v-if="isLoggedIn" class="profile_section">
                <div class="single-profile">
                    <div class="avater-image">
                        <p>D</p>
                    </div>
                    <div class="welcome-text-coin">
                        <p class="text-blck m-0"><b>Welcome</b> : dream7 </p>
                        <i class="fa fa-bitcoin"></i> <b class="text-black">1000.00</b>
                    </div>
                </div>                    
            </div>

            <!-- Menu section -->
            <div class="menu_section">
                <nav class="navigation">
                    <ul class="mainmenu">
                        <li><router-link to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</router-link></li>
                        <li><router-link to="/upcoming"><i class="fa fa-history" aria-hidden="true"></i> Upcoming</router-link></li>
                        <li v-if="isLoggedIn"><a href=""><i class="fa fa-user" aria-hidden="true"></i> Profile <i style="float: right;" class="fa fa-angle-down fa-sm " aria-hidden="true"></i></a>
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
                        <li v-if="isLoggedIn"><a href=""><i class="fa fa-credit-card" aria-hidden="true"></i> Wallet <i style="float: right;" class="fa fa-angle-down fa-sm " aria-hidden="true"></i> </a>
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
                        <li v-if="isLoggedIn"><a href="#" @click.prevent="logout"><i class="fa fa-power-off" aria-hidden="true"></i> Logout</a></li>
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
            isLoggedIn: false,
            form : {
                username :'',
                password :'',
            }
        }
    },
    methods: {
        signIn() {
            console.log('form value = ', this.form)
            config.postData('/user/login', this.form)
            .then((response) => {    
                console.log('response = ', response)  
                if(response.status_code == 200){
                    localStorage.setItem('accessToken', response.access_token);
                    localStorage.setItem('user_id', response.user_id);
                    localStorage.setItem('user_name', response.user_name);
                    this.isLoggedIn = true
                    this.$toast.success('Loggedin successfully') 
                }     
            })
            .catch((error) => {
                console.log(error);
            });
        },
        logout(){
            config.postData('/user/logout')
            .then(() => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('user_id');
                localStorage.removeItem('user_name');
                this.isLoggedIn = false
            })      
        }
    }
}
</script>