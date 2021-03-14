<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> withdrawal request</span></p>
        </div>

        <div class="profile-wrapper">
            <h5 class="page-heading"> Withdrawal Request</h5>
            
            <form action="" method="POST">
                <input type="hidden" name="" value="">                                        
                <div class="form-group">
                    <label for="withdrawAmount" style="display: block;text-align: left;">Withdrawal Amount (400 - 20000) <span class="text-danger">*</span></label>
                    <input required="" id="withdrawAmount" class="form-control" type="number" name="withdrawAmount" placeholder="(400 - 20000)">
                                                
                    <label for="withdrawNumber" style="display: block;text-align: left;">Phone Number <span class="text-danger">*</span></label>
                    <input required="" id="withdrawNumber" class="form-control" type="number" name="withdrawNumber" placeholder="018XXXXXXXX">
                                                
                    <label for="withdrawPaymentType" style="display: block;text-align: left;">Payment Method<span class="text-danger">*</span></label>
                    <select required="" id="withdrawPaymentType" name="withdrawPaymentType" class="form-control">
                        <option value="">Select Payment Method</option>
                        <option value="bkash agent">Bkash Agent</option>
                        <option value="bkash personal">Bkash Personal</option>
                        <option value="Nagad agent" disabled="">Nagad Agent</option>
                        <option value="Nagad personal" disabled="">Nagad Personal</option>
                    </select>

                    <label for="password" style="display: block;text-align: left;">Password<span class="text-danger">*</span></label>
                    <input required="" id="password" class="form-control" type="password" name="password" placeholder="Password">
                    
                </div>
                <div class="form-group">
                    <input id="submit" type="submit" class="btn btn-success" value="Withdrawal Request">
                </div>
            </form>
        </div>
    </div>
</template>