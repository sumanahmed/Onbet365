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
                    <tr v-for="(sponsor,index) in sponsors.data" :key="index">
                        <td>{{ sponsor.username }}</td>
                        <td>{{ sponsor.sponsorRate }}</td>
                        <td>
                            {{ sponsor.created_at | dateformat }} at {{ sponsor.created_at | timeformat }}                                                                                                    
                        </td>
                    </tr>
                </tbody>
            </table>                      
            <div class="mt-3">
                <pagiantion :data="sponsors" @pagination-change-page="getResults">
                    <span slot="prev-nav">&lt;</span>
                    <span slot="next-nav">&gt;</span>
                </pagiantion>
            </div>            
        </div>
    </div>
</template>
<script>
import config from '../../config'
import pagiantion from 'laravel-vue-pagination'
export default {
    name:'Sponsors',
    components:{
        pagiantion:pagiantion
    },
    data () {
        return {
            sponsors: {
                data: []
            },
            username: this.$store.state.commonObj.user.user_name
        }
    },
    created () {
        this.getSponsors()
        this.getResults()
    },
    methods: {
        getSponsors () {   
            this.$store.state.loader = true         
            config.getData('/user/get/sponsor/'+ this.username)
            .then((response) => {
                this.$store.state.loader = false
                this.sponsors = response.data
            })
            .catch((error) => {
                console.log('error = ', error)
            });
        },
        getResults(page = 1) {
            this.$store.state.loader = true  
            config.getData('user/get/sponsor/'+ this.username +'?page=' + page)
            .then(response => {
                if(!response.data) {
                    this.$store.state.loader = true
                } else {
                    this.$store.state.loader = false
                    this.sponsors = response.data 
                }
            });
        }
    }
}
</script>