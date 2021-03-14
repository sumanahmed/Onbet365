<template>
    <div>
<div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> deposit request </span></p>
        </div>

        <div class="profile-wrapper">
            <h5 class="page-heading">Deposit Request</h5>
            <h6 class="text-center text-warning mt-2 mb-3">User deposit Time at 9:00 AM To 10:00 PM</h6>
            <form action="" method="POST">
                <input type="hidden" name="" value="">                                    
                <div class="form-group">
                    <label for="paymentMethod" style="display: block;text-align: left;">Payment Method<span class="text-danger">*</span></label>
                    <select required="" id="paymentMethod" name="paymentMethodType" class="form-control">
                        <option value=""> Select method </option>
                        <option value="bkash">Bkash</option>
                        <option value="nagad" disabled="">Nagad</option>
                        <option value="skrill" disabled="">Skrill</option>
                        <option value="paypal" disabled="">Paypal</option>
                        <option value="stripe" disabled="">Stripe</option>
                        <option value="neteller" disabled="">Neteller</option>
                    </select>
                    <label for="depositAmount" style="display: block;text-align: left;">Number of Coins (200-25000) <span class="text-danger">*</span></label>
                    <input required="" id="depositAmount" class="form-control" type="number" min="0" name="depositAmount" placeholder="(200-25000)" value="">
                    
                    <label for="phoneForm" style="display: block;text-align: left;">Phone From <span class="text-danger">*</span></label>
                    <input required="" id="phoneForm" class="form-control" type="number" min="0" name="phoneForm" placeholder="Phone Form" value="">
                    
                    <div class="input-group input-group-icon mt-2 mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img src="https://www.bkash.com/sites/all/themes/bkash/logo.png?87980" width="50"/>
                            </div>
                        </div>
                        <input required="" id="phoneTo" class="form-control" type="text" name="phoneTo" readonly="" value="01826451236">
                    </div>

                    <div class="input-group input-group-icon mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img src="https://nagad.com.bd/wp-content/uploads/2019/04/Nagad_Logo_for_web__128x53.svg" width="50"/>
                            </div>
                        </div>
                        <input required="" id="phoneTo" class="form-control" type="text" name="phoneTo" readonly="" value="01826451236">
                    </div>

                    <div class="input-group input-group-icon">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img src="https://www.dutchbanglabank.com/img/mlogo.png" width="50"/>
                            </div>
                        </div>
                        <input required="" id="phoneTo" class="form-control" type="text" name="phoneTo" readonly="" value="01826451236">
                    </div>

                    <label for="password" style="display: block;text-align: left;">Password<span class="text-danger">*</span></label>
                    <input required="" id="password" class="form-control" type="password" name="password" placeholder="Password">
                    
                </div>
                <div class="form-group">
                    <input id="submit" type="submit" class="btn btn-success" value="Deposit Request">
                </div>
            </form>
        </div>
    </div>
</template>