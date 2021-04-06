<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> Sponsors Income</span></p>
        </div>        
        <div class="profile-wrapper table-responsive" style="padding-bottom:38px;">
            <table id="example" class="text-center table table-sm table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>From User</th>
                        <th>Bonus</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(sponsor,index) in sponsors.data" :key="index">
                        <td>{{ sponsor.username }}</td>
                        <td>{{ sponsor.sponsorGet }}</td>
                        <td>
                            {{ sponsor.vueDateTime | dateformat }} at {{ sponsor.vueDateTime | timeformat }}                                                                                                    
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
        this.$store.dispatch('toggleMobileMenu', 1)
        this.getSponsors()
        this.getResults()
        this.scrollToTop()
    },
    methods: {        
        scrollToTop() {
            window.scrollTo(0,0);
        },
        getSponsors () {   
            this.$store.state.loader = true         
            config.getData('/user/get/sponsor/'+ this.username)
            .then((response) => {
                this.$store.state.loader = false
                this.sponsors = response.data
            })
            .catch((error) => {
                this.$toast.error({
                    title: 'Error',
                    message: error,
                    type: 'warning'
                })
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