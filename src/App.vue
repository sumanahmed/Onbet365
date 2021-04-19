<template>
  <div>
      <div v-if="loader" id="preloader"></div>
      <div class="full-body">
        <div class="main-content">
          <left-sidebar></left-sidebar>  
          <div class="middle-section scrollCustom" id="style-10"> 
              <mobile-nav></mobile-nav>
              <router-view></router-view>
          </div> 
          <right-sidebar></right-sidebar> 
        </div>    
        <div class="footer-section">
          <p class="footer-text">dreambet365.uk &copy; {{ copyrightyear }} all right reserve </p>
        </div>
        <a href="#" id="back-to-top"><i class="fa fa-angle-up"></i></a>
    </div>    
    <a href="#" id="back-to-top-mobile"><i class="fa fa-angle-up"></i></a>
  </div>
</template>

<script>
import MobileNav from './components/includes/MobileNav'
import LeftSidebar from './components/includes/LeftSidebar'
import RightSidebar from './components/includes/RightSidebar'

export default {
  name: 'App',
  data () {
        return {
            copyrightyear:''
        }
    },
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
  },  
  created() {    
    var today = new Date();
    this.copyrightyear = today.getFullYear();
  },
}
</script>
