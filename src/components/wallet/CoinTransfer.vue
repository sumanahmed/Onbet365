<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> coin transfer </span></p>
        </div>

        <div class="profile-wrapper" style="padding-bottom:38px;">
            <h5 class="page-heading">Coin Transfer </h5>
            <form action="" method="POST">
                <input type="hidden" name="_token" value="">                                            
                <div class="form-group">
                    <label for="username" style="display: block;text-align: left;">Username<span class="text-danger">*</span></label>
                    <input required="" autofocus="" id="username" class="form-control" type="text" name="username" placeholder="Username" value="">
                    
                    <label for="transferAmount" style="display: block;text-align: left;">Number of Coins (20-5000)<span class="text-danger">*</span></label>
                    <input required="" id="transferAmount" class="form-control" type="number" min="0" name="transferAmount" placeholder="(20-5000)" value="">
                    
                    <label for="password" style="display: block;text-align: left;">Password<span class="text-danger">*</span></label>
                    <input required="" id="password" class="form-control" type="password" name="password" placeholder="Password">
                    
                </div>
                <div class="form-group">
                    <input id="submit" type="submit" class="btn btn-success" value="Transfer">
                </div>
            </form>
        </div>
    </div>
</template>