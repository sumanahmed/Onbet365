<template>
    <div>
        <div class="club-login-wraper fadeInUp">
            <h3 class="text-center">CLUB LOGIN</h3>
            <form class="cmn-form login-form" action="" method="POST">
                    <input type="hidden" name="_token" value="">
                    <div class="form-group">
                        <div class="input-group input-group-icon">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <span class="fa fa-user-o" aria-hidden="true"></span>
                                </div>
                            </div>
                            <input autofocus="" type="text" class="form-control" name="username" placeholder="Username" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group input-group-icon">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <span class="fa fa-lock" aria-hidden="true"></span>
                                </div>
                            </div>
                            <input type="password" class="form-control" name="password" placeholder="Password" value="">
                        </div>
                    </div>

                    <div class="form-group">
                        <button style="margin-left:90px" class="btn btn-sm btn-secondary text-center" type="submit" class="submit-btn">CLUB SIGN IN</button>
                    </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
    body{
        background: #2c4841;
        color: #fff;
    }
    .club-login-wraper {
        width: 300px;
        margin: 0 auto;
        margin-top: 200px;
    }
</style>