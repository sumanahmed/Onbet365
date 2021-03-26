<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> Club members </span></p>
        </div>

        <div class="profile-wrapper" style="padding-bottom:38px;">

            <table id="example" class="table table-sm table-striped table-bordered table-responsive-lg table-responsive-md table-responsive-sm " style="width:100%">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Join Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(member, index) in members.data" :key="index">
                        <td>{{ member.username }}</td>
                        <td>{{ member.phone }}</td>
                        <td>
                            {{ member.created_at | dateformat }} at {{ member.created_at | timeformat }}                                                                                                    
                        </td>
                        <td> 
                            <span v-if="member.status" class="badge badge-pill badge-success">Active</span>
                            <span v-else class="badge badge-pill badge-danger">Active</span>
                         </td>
                    </tr>
                </tbody>
            </table>   
            <div class="mt-3">
                <pagiantion :data="members" @pagination-change-page="getResults">
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
    name:'ClubMembers',
    components:{
        pagiantion:pagiantion
    },
    data () {
        return {
            members: {
                data: []
            },
            username: this.$store.state.commonObj.user.user_name
        }
    },
    created () {
        this.$store.dispatch('toggleMobileMenu', 1)
        this.getClubMember()
        this.getResults()
    },
    methods: {        
        getClubMember () {
            this.$store.state.loader = true
            config.getData('/user/follower/'+ this.username)
            .then((response) => {
                this.$store.state.loader = false
                this.members = response.data
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
            config.getData('user/follower/'+ this.username +'?page=' + page)
            .then(response => {
                if(!response.data) {
                    this.loader = true
                } else {
                    this.loader = false
                    this.members = response.data 
                }
            });
        }
    }
}
</script>