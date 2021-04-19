<template>
    <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade sliderMainArea " data-ride="carousel">
            <div class="carousel-inner single-custom-item">
                <div v-for="(slider,value) in sliders" :key="value" :class="{ active: value === 0 }" class="carousel-item">
                    <img class="slideImg d-block w-100 animated  zoomIn " :src="slider.slideBtnLink" alt="">
                    <div class="custom-slider-content">
                        <!--<p class="animated  lightSpeedIn " style="animation-delay: 2s">We Believe in Better Service</p>                                                    
                        <a href="user/registration" target="_blank" class="btn btn-sm animated  btn-warning lightSpeedIn " style="animation-delay: 3s" >Join Now</a>-->
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            <ol class="carousel-indicators SlideCustomBullot">
                <li v-for="(slider,value) in sliders" :key="value" :class="{ active: value === 0 }"  data-target="#carouselExampleFade" :data-slide-to="value"></li>
            </ol>
        </div>
        <div class="holder">            
            <marquee style="color:#fff;font-size:14px" behavior = "scroll" scrollamount="8">{{ news }} </marquee>
        </div>
    </div>
</template>
<script>
import config from '../../config'
export default {
    name:'Slider',
    data () {
        return {
            sliders: [],
            news: ''
        }
    },
    created () {
        this.getSlider()
    },
    methods : {
        async getSlider () {
            await config.getData('/get/slider')
            .then((response) => {
                if (response.status_code == 200) {
                    this.sliders = response.sliders
                    this.news = response.config.siteNotice
                } else {
                    this.sliders = []
                }
            })
            .catch((error) => {
                this.$toast.error({
                    title: 'Error',
                    message: error,
                    type: 'warning'
                })
            });
        }
    }
}
</script>