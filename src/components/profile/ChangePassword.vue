<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> chanage password </span></p>
        </div>

        <div class="profile-wrapper">
            <form action="" method="POST">
                <input type="hidden" name="" value="">                                            
                <div class="form-group">
                    <label for="oldPassword" style="display: block;text-align: left;">Old Password <span class="text-danger">*</span></label>
                    <input required="" class="form-control" type="password" name="oldPassword" placeholder="Old Password">
                    
                    <label for="newPassword" style="display: block;text-align: left;">New Password <span class="text-danger">*</span></label>
                    <input required="" class="form-control" type="password" id="newPassword" name="password" placeholder="New Password">
                    
                    <label for="confirmPassword" style="display: block;text-align: left;">Confirm Password <span class="text-danger">*</span></label>
                    <input required="" class="form-control" id="confirmPassword" type="password" name="password_confirmation" placeholder="Confirm Password">
                    
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-success" value="Update Password">
                </div>
            </form>
        </div>
    </div>
</template>