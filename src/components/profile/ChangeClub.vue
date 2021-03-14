<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> chanage password </span></p>
        </div>

        <div class="profile-wrapper" style="padding-bottom:38px;">
            <h5 class="page-heading">Change password</h5>
            <form action="" method="POST">
                <input type="hidden" name="" value="">
                <div class="form-group">
                    <label for="club_id" style="display: block;text-align: left;">Select club <span class="text-danger">*</span></label>
                    <select id="club_id" name="club_id" class="form-control" tabindex="-1">                                                                                                                    
                        <option selected="selected" value="1">Onbet365</option>
                        <option value="2">HelpClub</option>
                        <option value="3">OneClub</option>
                        <option value="4">Bet24</option>
                        <option value="5">RichClub</option>
                        <option value="6">WinClub</option>
                        <option value="7">KingsClub</option>
                        <option value="8">SportsClub</option>
                        <option value="9">DubaiClub</option>
                        <option value="10">Club365</option>
                        <option value="11">LoinsClub</option>
                        <option value="12">ActiveClub</option>
                        <option value="13">FastClub</option>
                        <option value="14">Club24</option>
                        <option value="15">RSLClub</option>
                        <option value="16">RoyalClub</option>
                        <option value="17">IndiaClub</option>
                        <option value="18">SixClub</option>
                        <option value="19">FriendsClub</option>
                        <option value="20">UpdateClub</option>
                        <option value="21">BarcelonaClub</option>
                        <option value="22">Winstarclub</option>
                        <option value="23">11 Fighters Club</option>
                        <option value="24">100%Trusted</option>
                        <option value="25">Loginclub</option>
                        <option value="26">Realmadridclub</option>
                        <option value="27">Betlovers</option>                                                                                                                                        
                    </select>
                    <label for="password" style="display: block;text-align: left;">Password <span class="text-danger">*</span></label>
                    <input required="" class="form-control" type="password" id="password" name="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-success" value="Change Club">
                </div>
            </form>
        </div>
    </div>
</template>