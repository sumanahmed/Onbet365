<template>
    <div>
        <div class="left-section scrollCustom" id="style-10">
            <!-- Logo section -->
            <div class="logo_section">
                <router-link to="/"><img src="assets/img/logo.jpg" alt="dreambet365"/></router-link>
            </div>

            <!-- Login section -->
            <div class="login_section p-2">
                <input type="text" class="form-control mt-2 mb-1" name="username" placeholder="Username"/>
                <input type="password" class="form-control" name="username" placeholder="Password"/>
                <input type="button" name="login" value="Login" />
                <input type="button" name="registration" value="Join" />
            </div>

            <!-- Profile section -->
            <div class="profile_section">
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
                <div class="eos-menu" id="menu">
                    <div class="eos-menu-content">
                        <li class="eos-item">
                            <a href=""><i class="fa fa-home" aria-hidden="true"></i> Home</a>
                        </li>
                        <div class="eos-group-title"> <a href="upcoming.html"><i class="fa fa-history" aria-hidden="true"></i> Upcoming </a> </div>
                        <div class="eos-group-title"><i class="fa fa-user" aria-hidden="true"></i> Profile <i class="fa fa-angle-down fa-lg eos-pull-right" aria-hidden="true"></i></div>
                        <div class="eos-group-content">
                            <li class="eos-item">
                                <a href="profile.html"> Profile </a>
                            </li>
                            <li class="eos-item">
                                <a href="edit-profile.html"> Edit Profile </a>
                            </li>
                            <li class="eos-item">
                                <a href="change-club.html"> Change Club </a>
                            </li>
                            <li class="eos-item">
                                <a href="club-members.html"> Club Memebers </a>
                            </li>
                            <li class="eos-item">
                                <a href="change-password.html"> Change Password </a>
                            </li>
                            <li class="eos-item">
                                <a href="sponsors.html"> Sponsors </a>
                            </li>
                            <li class="eos-item">
                                <a href="bet-details.html"> Bet Details </a>
                            </li>
                        </div>
                        
                        <div class="eos-group-title"><i class="fa fa-credit-card" aria-hidden="true"></i> Wallet <i class="fa fa-angle-down fa-lg eos-pull-right" aria-hidden="true"></i></div>
                        <div class="eos-group-content">
                            <li class="eos-item">
                                <a href="deposit-request.html">Deposit request </a>
                            </li>
                            <li class="eos-item">
                                <a href="deposit-details.html">Deposit Details</a>
                            </li>
                            <li class="eos-item">
                                <a href="coin-transfer.html"> Coin Transfer</a>
                            </li>
                            <li class="eos-item">
                                <a href="coin-transfer-details.html"> Coin Transfer Details</a>
                            </li>
                            <li class="eos-item">
                                <a href="coin-received-details.html"> Coin Receive Details</a>
                            </li>
                            <li class="eos-item">
                                <a href="withdraw-request.html"> Withdraw Request</a>
                            </li>
                            <li class="eos-item">
                                <a href="withdraw-details.html">Withdraw Details</a>
                            </li>
                        </div>

                        <div class="eos-group-title"><i class="fa fa-users" aria-hidden="true"></i> Club <i class="fa fa-angle-down fa-lg eos-pull-right" aria-hidden="true"></i></div>
                        <div class="eos-group-content">
                            <li class="eos-item">
                                <a href="club-profile.html">Club Profile </a>
                            </li>
                            <li class="eos-item">
                                <a href="club-follower.html">Club follower</a>
                            </li>
                            <li class="eos-item">
                                <a href="club-change-password.html">Change password</a>
                            </li>
                            <li class="eos-item">
                                <a href="club-withdraw-request.html">Club withdrawal</a>
                            </li>
                            <li class="eos-item">
                                <a href="club-withdraw-details.html">Coin withdrawal Details</a>
                            </li>
                            <li class="eos-item">
                                <a href="club-income-details.html">Club Income</a>
                            </li>
                        </div>

                        <li class="eos-item">
                            <a href="#"><i class="fa fa-power-off" aria-hidden="true"></i> Logout</a>
                        </li>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name:'LeftSidebar',
    data () {
        return {
            
        }
    },
    mounted (){
       console.log('leftsidebar moundted')
    }
}
</script>