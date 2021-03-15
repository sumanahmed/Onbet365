<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> Sponsors </span></p>
        </div>        
        <div class="profile-wrapper" style="padding-bottom:38px;">
            <h5 class="page-heading">Sponsors</h5>
            <table id="example" class="text-center table table-sm table-striped table-bordered table-responsive-lg table-responsive-md table-responsive-sm text-center" style="width:100%">
                <thead>
                    <tr>
                        <th width="20%">From User</th>
                        <th width="30%">Bonus</th>
                        <th width="50%">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(sponsor,index) in sponsors" :key="index">
                        <td>{{ sponsor.name }}</td>
                        <td>{{ sponsor.bonus }}</td>
                        <td>
                            {{ sponsor.created_at | dateformat }} at {{ sponsor.created_at | timeformat }}                                                                                                    
                        </td>
                    </tr>
                </tbody>
            </table>                    
        </div>
    </div>
</template>
<script>
export default {
    name:'Sponsors',
    data () {
        return {
            sponsors: []
        }
    },
    created () {
        this.getSponsors
    },
    methods: {
        getSponsors () {
            const username = this.$store.state.commonObj.profile.username
            config.postData('/user/get/sponsor/demo/', username)
            .then((response) => {
                this.sponsors = response
            })
            .catch((error) => {
                console.log('error = ', error)
            });
        }
    }
}
</script>