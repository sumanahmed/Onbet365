<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> Club members </span></p>
        </div>

        <div class="profile-wrapper" style="padding-bottom:38px;">
            <h5 class="page-heading"> Club Members </h5>

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
                    <tr v-for="(member, index) in members" :key="index">
                        <td>{{ member.name }}</td>
                        <td>{{ member.phone }}</td>
                        <td>
                            {{ member.created_at | dateformat }} at {{ member.created_at | timeformat }}                                                                                                    
                        </td>
                        <td> <span v-if="member.status" class="badge badge-pill badge-success">Active</span> </td>
                    </tr>
                </tbody>
            </table>                    
        </div>
    </div>
</template>
<script>
export default {
    name:'ClubMembers',
    data () {
        return {
            members: []
        }
    },
    created () {
        this.getClubMember
    },
    methods: {
        getClubMember () {
            const username = this.$store.state.commonObj.profile.username
            config.postData('/user/get/sponsor/demo/', username)
            .then((response) => {
                this.members = response
            })
            .catch((error) => {
                console.log('error = ', error)
            });
        }
    }
}
</script>