<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> profile </span></p>
        </div>

        <div class="profile-wrapper">
            <!--<p><b>B</b></p>-->
            <p><i class="fa fa-user-o"></i></p>
            <div class="profile">
                <table class="table table-bordered">
                    <tbody v-if="loggedUser">
                        <tr>
                            <td>Username</td>
                            <td> {{ loggedUser.username }} </td>
                        </tr>
                        <tr>
                            <td>Club</td>
                            <td> {{ loggedUser.clubUsername }} </td>
                        </tr>
                        <tr>
                            <td>Sponsor</td>
                            <td> {{ loggedUser.sponsorName != null ? loggedUser.sponsorName : '' }} </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{{ loggedUser.email }}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{{ loggedUser.phone }}</td>
                        </tr>
                        <tr>
                            <td> Join Date </td>
                            <td> {{ loggedUser.created_at | dateformat }} </td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td><span v-if="loggedUser.status" class="badge badge-pill badge-success">Active</span> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Profile',
    data () {
        return {
        }
    },
    created () {
        this.$store.dispatch('toggleMobileMenu', 1)
    },
    computed : {
        loggedUser : function () {
            return this.$store.state.commonObj.profile
        }
    }
}
</script>