<template>
    <div>

    </div>
</template>
<script>
import MobileNav from '../components/includes/MobileNav'
import LeftSidebar from '../components/includes/LeftSidebar'
import RightSidebar from '../components/includes/RightSidebar'

export default {
  name: 'User',
  components: {
    'mobile-nav': MobileNav,
    'left-sidebar': LeftSidebar,
    'right-sidebar': RightSidebar,
  },
  computed : {
    loader : function () {
      return this.$store.state.loader
    },
    loginLoader : function () {
      return this.$store.state.loginLoader
    }
  }
}
</script>