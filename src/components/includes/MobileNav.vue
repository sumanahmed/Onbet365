<template>
    <div>
        <div class="mobile-header-login-wrapper" id="header-sticky">

            <div class="mobile-header">
                <router-link to="/"><img :src="'./assets/img/logo.jpg'" alt="mobile logo"></router-link>
                <span @click="mobileNavToggle" id="three-dot" class="fa fa-bars"></span>
            </div>

            <!--<div class="mobile-login">
                <input type="text" name="username" placeholder="Username">
                <input type="password" name="password" placeholder="Password">
                <input class="user-login" type="submit" name="submit" value="Login">
                <a href="" class="user-registration"> Join </a>
            </div>-->

            <!-- Mobile Profile section -->
            <div class="profile_section_mobile">
                <div class="single-profile-mobile">
                    <div class="avater-image-mobile">
                        <p>D</p>
                    </div>
                    <div class="welcome-text-coin-mobile">
                        <p class="text-block m-0"><b>Welcome</b> : dream7 </p>
                        <i class="fa fa-bitcoin"></i> <b class="text-black">1000.00</b>
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
                        <li><router-link to="/upcoming" href=""><i class="fa fa-history" aria-hidden="true"></i> Upcoming</router-link></li>
                        <li><a href=""><i class="fa fa-user" aria-hidden="true"></i> Profile <i style="float: right;" class="fa fa-angle-down fa-sm " aria-hidden="true"></i></a>
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
                        <li><a href=""><i class="fa fa-credit-card" aria-hidden="true"></i> Wallet <i style="float: right;" class="fa fa-angle-down fa-sm " aria-hidden="true"></i> </a>
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
                        <li><a href=""><i class="fa fa-power-off" aria-hidden="true"></i> Logout</a></li>
                    </ul>
                </nav>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    name: 'MobileNav',
    data () {
        return {
            isMobileNavOn: false
        }
    },
    mounted () {
        console.log('mobile nav working')
    },
    methods : {
        mobileNavToggle () {
            this.isMobileNavOn = true
        }
    }
}
</script>
