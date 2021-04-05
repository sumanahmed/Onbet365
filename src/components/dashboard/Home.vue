<template>
    <div>
        <!-- Main Content -->
        <slider></slider>

        <div class="tab-section animated fadeInUp">
            <div class="online-play-tab-part">
                <ul class="nav customSportsTab" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">
                            <span>All sports</span>
                        </a>
                    </li>
            
                    <li class="nav-item">
                        <a class="nav-link" id="cricket-tab" data-toggle="tab" href="#cricket" role="tab" aria-controls="cricket" aria-selected="false">                                    
                            <span>Cricket</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="football-tab" data-toggle="tab" href="#football" role="tab" aria-controls="football" aria-selected="false">
                            <span>Football</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="bascketball-tab" data-toggle="tab" href="#bascketball" role="tab" aria-controls="bascketball" aria-selected="false">
                            <span>Bascketball</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="baseball-tab" data-toggle="tab" href="#baseball" role="tab" aria-controls="baseball" aria-selected="false">
                            <span>Volleyball</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="tennis-tab" data-toggle="tab" href="#tennis" role="tab" aria-controls="tennis" aria-selected="false">
                            <span>Tennis</span>
                        </a>
                    </li>
                </ul>

                <div class="tab-content animated fadeInUp" id="myTabContent">
                    <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                        <h4 class="text-center tabHeading"> All Sports </h4>
                        <div v-for="(sportItems,index) in matches" :key="index" class="sports_single_category">

                            <div v-for="(match, index2) in sportItems" :key="index2">
                                <div  class="matchTournamentLiveWrap">
                                    <div class="matchTournamentDetailPart">
                                        <p>
                                            <span class="sportCategoryCustom">{{ match['sportName'] | capitalizeFirstLetter }}</span>
                                            {{ match['matchTitle'] | capitalizeFirstLetter }} 
                                            <br/><i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | dateformat }} 
                                            </span>
                                            &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | timeformat }} 
                                            </span>
                                        </p>
                                    </div>
                                    <div class="matchTournamentLivePart">
                                        <p class="overs-live-status">
                                            <b v-if="match['overs'] != null && match['status'] == 3" class="overs">Overs: {{ match["overs"] }} </b>
                                            <span v-if="match['status'] == 3" class="live-status">Live</span>
                                        </p>
                                        <p v-if="match['status'] == 2 || match['status'] == 3" class="match-scores"> {{ match["score"] }} </p>                                                    
                                    </div>
                                </div>

                                <div v-for="(matchesOption, index3) in match['matchOption']" :key="index3" class="match-options">
                                    <div class="question-part">
                                        <span class="">{{ matchesOption["matchOption"] | capitalizeFirstLetter}} </span>
                                    </div>

                                    <div class="choice-answer-part">
                                        <button v-for="(betDetail, index4) in matchesOption['betDetails']" :key="index4" @click="showModal(betDetail, matchesOption['matchOption'])" value="" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                            <span> {{ betDetail['betName'] | capitalizeFirstLetter }} &nbsp;
                                                <b class="text-primary" v-if="betDetail['status'] == 0"> <i class="fa fa-lock" aria-hidden="true"></i></b>
                                                <b class="text-primary" v-else> {{ betDetail['betRate'] }}</b>
                                            </span> 
                                        </button>                                  
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
            
                    <div class="tab-pane fade" id="cricket" role="tabpanel" aria-labelledby="cricket-tab">
                        <div class="sports_single_category">
                            <h4 class="text-center"> Cricket </h4>
                            <div v-for="(match, index5) in matches[0]" :key="index5">
                                <div  class="matchTournamentLiveWrap">
                                    <div class="matchTournamentDetailPart">
                                        <p>
                                            <span class="sportCategoryCustom">{{ match['sportName'] | capitalizeFirstLetter }}</span>
                                            {{ match['matchTitle'] | capitalizeFirstLetter }} 
                                            <br/><i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | dateformat }} 
                                            </span>
                                            &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | timeformat }} 
                                            </span>
                                        </p>
                                    </div>
                                    <div class="matchTournamentLivePart">
                                        <p class="overs-live-status">
                                            <b v-if="match['overs'] != null && match['status'] == 3" class="overs">Overs: {{ match["overs"] }} </b>
                                            <span v-if="match['status'] == 3" class="live-status">Live</span>
                                        </p>
                                        <p v-if="match['status'] == 2 || match['status'] == 3" class="match-scores"> {{ match["score"] }} </p>                                                    
                                    </div>
                                </div>

                                <div v-for="(matchesOption, index3) in match['matchOption']" :key="index3" class="match-options">
                                    <div class="question-part">
                                        <span class="">{{ matchesOption["matchOption"] | capitalizeFirstLetter}} </span>
                                    </div>

                                    <div class="choice-answer-part">
                                        <button v-for="(betDetail, index4) in matchesOption['betDetails']" :key="index4" @click="showModal(betDetail, matchesOption['matchOption'])" value="" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                            <span> {{ betDetail['betName'] | capitalizeFirstLetter }} &nbsp;
                                                <b class="text-primary" v-if="betDetail['status'] == 0"> <i class="fa fa-lock" aria-hidden="true"></i></b>
                                                <b class="text-primary" v-else> {{ betDetail['betRate'] }}</b>
                                            </span> 
                                        </button>                                  
                                    </div>
                                </div>                               
                            </div>
                        </div>
                    </div>
            
                    <div class="tab-pane fade" id="football" role="tabpanel" aria-labelledby="football-tab">
                        <div class="sports_single_category">
                            <h4 class="text-center"> Football </h4>
                            <div v-for="(match, index8) in matches[1]" :key="index8">
                                <div  class="matchTournamentLiveWrap">
                                    <div class="matchTournamentDetailPart">
                                        <p>
                                            <span class="sportCategoryCustom">{{ match['sportName'] | capitalizeFirstLetter }}</span>
                                            {{ match['matchTitle'] | capitalizeFirstLetter }} 
                                            <br/><i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | dateformat }} 
                                            </span>
                                            &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | timeformat }} 
                                            </span>
                                        </p>
                                    </div>
                                    <div class="matchTournamentLivePart">
                                        <p class="overs-live-status">
                                            <b v-if="match['overs'] != null && match['status'] == 3" class="overs">Overs: {{ match["overs"] }} </b>
                                            <span v-if="match['status'] == 3" class="live-status">Live</span>
                                        </p>
                                        <p v-if="match['status'] == 2 || match['status'] == 3" class="match-scores"> {{ match["score"] }} </p>                                                    
                                    </div>
                                </div>

                                <div v-for="(matchesOption, index3) in match['matchOption']" :key="index3" class="match-options">
                                    <div class="question-part">
                                        <span class="">{{ matchesOption["matchOption"] | capitalizeFirstLetter}} </span>
                                    </div>

                                    <div class="choice-answer-part">
                                        <button v-for="(betDetail, index4) in matchesOption['betDetails']" :key="index4" @click="showModal(betDetail, matchesOption['matchOption'])" value="" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                            <span> {{ betDetail['betName'] | capitalizeFirstLetter }} &nbsp;
                                                <b class="text-primary" v-if="betDetail['status'] == 0"> <i class="fa fa-lock" aria-hidden="true"></i></b>
                                                <b class="text-primary" v-else> {{ betDetail['betRate'] }}</b>
                                            </span> 
                                        </button>                                  
                                    </div>
                                </div>                               
                            </div>
                        </div>
                    </div>
            
                    <div class="tab-pane fade" id="bascketball" role="tabpanel" aria-labelledby="bascketball-tab">
                        <div class="sports_single_category">
                            <h4 class="text-center"> Basketball </h4>
                            <div v-for="(match, index11) in matches[2]" :key="index11">
                                <div  class="matchTournamentLiveWrap">
                                    <div class="matchTournamentDetailPart">
                                        <p>
                                            <span class="sportCategoryCustom">{{ match['sportName'] | capitalizeFirstLetter }}</span>
                                            {{ match['matchTitle'] | capitalizeFirstLetter }} 
                                            <br/><i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | dateformat }} 
                                            </span>
                                            &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | timeformat }} 
                                            </span>
                                        </p>
                                    </div>
                                    <div class="matchTournamentLivePart">
                                        <p class="overs-live-status">
                                            <b v-if="match['overs'] != null && match['status'] == 3" class="overs">Overs: {{ match["overs"] }} </b>
                                            <span v-if="match['status'] == 3" class="live-status">Live</span>
                                        </p>
                                        <p v-if="match['status'] == 2 || match['status'] == 3" class="match-scores"> {{ match["score"] }} </p>                                                    
                                    </div>
                                </div>

                                <div v-for="(matchesOption, index3) in match['matchOption']" :key="index3" class="match-options">
                                    <div class="question-part">
                                        <span class="">{{ matchesOption["matchOption"] | capitalizeFirstLetter}} </span>
                                    </div>

                                    <div class="choice-answer-part">
                                        <button v-for="(betDetail, index4) in matchesOption['betDetails']" :key="index4" @click="showModal(betDetail, matchesOption['matchOption'])" value="" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                            <span> {{ betDetail['betName'] | capitalizeFirstLetter }} &nbsp;
                                                <b class="text-primary" v-if="betDetail['status'] == 0"> <i class="fa fa-lock" aria-hidden="true"></i></b>
                                                <b class="text-primary" v-else> {{ betDetail['betRate'] }}</b>
                                            </span> 
                                        </button>                                  
                                    </div>
                                </div>                               
                            </div>
                        </div>
                    </div>
            
                    <div class="tab-pane fade" id="baseball" role="tabpanel" aria-labelledby="baseball-tab">
                        <div class="sports_single_category">
                            <h4 class="text-center"> Volleyball </h4>
                            <div v-for="(match, index14) in matches[3]" :key="index14">
                                <div  class="matchTournamentLiveWrap">
                                    <div class="matchTournamentDetailPart">
                                        <p>
                                            <span class="sportCategoryCustom">{{ match['sportName'] | capitalizeFirstLetter }}</span>
                                            {{ match['matchTitle'] | capitalizeFirstLetter }} 
                                            <br/><i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | dateformat }} 
                                            </span>
                                            &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | timeformat }} 
                                            </span>
                                        </p>
                                    </div>
                                    <div class="matchTournamentLivePart">
                                        <p class="overs-live-status">
                                            <b v-if="match['overs'] != null && match['status'] == 3" class="overs">Overs: {{ match["overs"] }} </b>
                                            <span v-if="match['status'] == 3" class="live-status">Live</span>
                                        </p>
                                        <p v-if="match['status'] == 2 || match['status'] == 3" class="match-scores"> {{ match["score"] }} </p>                                                    
                                    </div>
                                </div>

                                <div v-for="(matchesOption, index3) in match['matchOption']" :key="index3" class="match-options">
                                    <div class="question-part">
                                        <span class="">{{ matchesOption["matchOption"] | capitalizeFirstLetter}} </span>
                                    </div>

                                    <div class="choice-answer-part">
                                        <button v-for="(betDetail, index4) in matchesOption['betDetails']" :key="index4" @click="showModal(betDetail, matchesOption['matchOption'])" value="" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                            <span> {{ betDetail['betName'] | capitalizeFirstLetter }} &nbsp;
                                                <b class="text-primary" v-if="betDetail['status'] == 0"> <i class="fa fa-lock" aria-hidden="true"></i></b>
                                                <b class="text-primary" v-else> {{ betDetail['betRate'] }}</b>
                                            </span> 
                                        </button>                                  
                                    </div>
                                </div>                           
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-pane fade" id="tennis" role="tabpanel" aria-labelledby="tennis-tab">
                        <div class="sports_single_category">
                            <h4 class="text-center"> Tennis </h4>
                            <div v-for="(match, index16) in matches[4]" :key="index16">
                                <div  class="matchTournamentLiveWrap">
                                    <div class="matchTournamentDetailPart">
                                        <p>
                                            <span class="sportCategoryCustom">{{ match['sportName'] | capitalizeFirstLetter }}</span>
                                            {{ match['matchTitle'] | capitalizeFirstLetter }} 
                                            <br/><i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | dateformat }} 
                                            </span>
                                            &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | timeformat }} 
                                            </span>
                                        </p>
                                    </div>
                                    <div class="matchTournamentLivePart">
                                        <p class="overs-live-status">
                                            <b v-if="match['overs'] != null && match['status'] == 3" class="overs">Overs: {{ match["overs"] }} </b>
                                            <span v-if="match['status'] == 3" class="live-status">Live</span>
                                        </p>
                                        <p v-if="match['status'] == 2 || match['status'] == 3" class="match-scores"> {{ match["score"] }} </p>                                                    
                                    </div>
                                </div>

                                <div v-for="(matchesOption, index3) in match['matchOption']" :key="index3" class="match-options">
                                    <div class="question-part">
                                        <span class="">{{ matchesOption["matchOption"] | capitalizeFirstLetter}} </span>
                                    </div>

                                    <div class="choice-answer-part">
                                        <button v-for="(betDetail, index4) in matchesOption['betDetails']" :key="index4" @click="showModal(betDetail, matchesOption['matchOption'])" value="" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                            <span> {{ betDetail['betName'] | capitalizeFirstLetter }} &nbsp;
                                                <b class="text-primary" v-if="betDetail['status'] == 0"> <i class="fa fa-lock" aria-hidden="true"></i></b>
                                                <b class="text-primary" v-else> {{ betDetail['betRate'] }}</b>
                                            </span> 
                                        </button>                                  
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isModal && betDetails.status != 0" class="modal fade show" style="display:block" id="placeBetBtn" aria-hidden="true" aria-labelledby="placeBetBtn" role="dialog" tabindex="-1">
            <div class="modal-dialog modal-simple modal-dialog-centered">
                <div class="modal-content modal-custom-content">
                    <div class="modal-header modal-custom-header">
                        <button id="customModelClose" type="button" class="close" data-dismiss="modal" aria-label="Close" @click="cancelModal">
                            <span class="fa fa-window-close" aria-hidden="true"></span>
                        </button>
                        <h4 v-if="isBodyHidden" style="text-align:center" class="modal-title">Place a bet</h4>
                        <p v-else-if="successMsg" class="text-white text-center mb-0" style="line-height: 2;">{{ successMsg }}</p>
                    </div>
                    <form>
                        <div v-if="isBodyHidden" class="modal-body modal-custom-body">
                            <div class="modalCustomBody">
                                <p class="text-warning text-center">Minimum Bet Amount 20 & Maximum 6000</p>                                
                                <p v-if="processingMsg" class="text-info text-center" >{{ processingMsg }}</p>
                                <p v-else-if="errorMsg" class="text-danger text-center">{{ errorMsg }}</p>
                                <div class="modalQusAnsBlock">
                                    <p style="text-transform: capitalize" class="text-secondary" id="betDetailQus"><i class="fa fa-question-circle" aria-hidden="true"></i> {{ question }}</p>
                                    <p style="text-transform: capitalize" class="text-secondary" id="betDetailAns"><i class="fa fa-reply" aria-hidden="true"></i> {{ betDetails.betName }}</p>
                                    <p class="text-secondary" v-if="betDetails.status != 0">
                                        <i class="fa fa-bitcoin"></i> Rate : <input type="text" name="betRate" id="betDetailRate" :value="betDetails.betRate" readonly/>
                                    </p>
                                    <input autocomplete="off" v-if="betDetails.status != 0" type="number" @keyup="estimateReturn(betDetails.betRate)" v-model="betAmount" name="betAmount" id="betAmount" placeholder="0" value="" min="0" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"/>
                                    <span class="text-secondary" style="font-size: 14px;" v-if="betDetails.status != 0">
                                        Possible Return: <input type="text" name="" id="betEstReturn" v-model="estimateResult" value="" readonly/>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div v-if="isBodyHidden" style="display:block;background:#eee" class="modal-footer  text-center modal-custom-footer">
                            <button class="btn btn-block btn-secondary" id="" type="button" name="placeBet"  @click="placeBetSubmit(betDetails.id,betDetails.match_id,betDetails.betoption_id,betDetails.betRate)" :disabled="isDisabled"> Place Bet </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div v-if="loginFirstModal" class="modal fade show" style="display:block" id="placeBetBtn1" aria-hidden="true" aria-labelledby="placeBetBtn1" role="dialog" tabindex="-1">
            <div class="modal-dialog modal-simple modal-dialog-centered">
                <div class="modal-content modal-custom-content">
                    <div class="modal-header modal-custom-header-notLogin">
                        <button id="customModelClose" type="button" class="close" data-dismiss="modal" aria-label="Close" @click="cancelModal">
                            <span style="margin-right:3px;margin-bottom:3px" class="fa fa-window-close" aria-hidden="true"></span>
                        </button>
                        <h6 style="text-align:center;" class="modal-title"> Please login your account </h6>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import config from '../../config'
import Slider from './Slider'
export default {
    name:'Home',
    components: {
        'slider': Slider
    },
    data () {
        return {
            matches: [],
            isBodyHidden: true,
            isClick: false,
            isModal: false,
            loginFirstModal: false,
            isDisabled : true,
            betDetails : '',
            question : '',
            processingMsg : '',
            successMsg : '',
            errorMsg : '',
            betAmount : '',
            estimateResult : 0,
            isPusherCall: false
        }
    },
    created () {
        this.$store.dispatch('toggleMobileMenu', 1)    
        window.Echo.channel('betUpdatenew')
        .listen('betdetailUpdateEvent', (e) => {
            if(e.message == 1){     
                this.isPusherCall = true
                this.getLiveBet()
            } else if(e.message == 2){ 
                this.$router.go()
            } else {
                this.isPusherCall = false
            }
        });
        
        if (!this.isPusherCall) {
            this.getLiveBet()
        }
    },
    methods: {
        showModal(betDetail, question) {
            const isUserLoggedIn = this.$store.state.loggedIn
            if (isUserLoggedIn) {
                this.loginFirstModal = false
                this.isModal = true 
            } else {
                this.isModal = false 
                this.loginFirstModal = true
            }
            this.betDetails = betDetail;
            this.question = question;          
        },
        estimateReturn(betRate){
            this.estimateResult = parseFloat((betRate*this.betAmount)).toFixed(2);
            if(this.betAmount < 20 || this.betAmount > 6000){
                this.isDisabled = true;
            }else{
                this.isDisabled = false;
            }
        },
        cancelModal () {
            this.isModal = this.loginFirstModal = false,
            this.isBodyHidden = true,
            this.errorMsg = false
        },
        getLiveBet () {
            this.$store.state.loader = this.isPusherCall ? false : true
            config.getData('/live/data')
            .then((response) => { 
                if (!response) {
                    this.$store.state.loader = true
                } else {
                    this.$store.state.loader = false
                    this.matches = response.matches; 
                }     
            })
            .catch((error) => {
                this.$toast.error({
                    title: 'Error',
                    message: error,
                    type: 'warning'
                })
            });
        },
        placeBetSubmit(betDetailId,matchId,betOptionId,betRate){
            var form_data = {
                betDetail_id  : betDetailId,
                match_id      : matchId,
                betoption_id  : betOptionId,
                betDetailRate : betRate,
                betAmount     : this.betAmount,
                user_id       : this.$store.state.commonObj.user.user_id
            };
            this.processingMsg = 'Bet processing wait for confirmation ...';
            this.isDisabled = false;
            this.betAmount = '';
            config.postData('/user/store/place/bet', form_data)
            .then((response) => {
                if(response.errorMsg){
                    this.isDisabled = true;
                    this.processingMsg = this.successMsg = '';
                    this.errorMsg = response.errorMsg;
                }
                if(response.successMsg){
                    this.$store.dispatch('amountUpdate', form_data.betAmount)
                    this.processingMsg = this.errorMsg = '';
                    this.successMsg = response.successMsg;
                    this.isBodyHidden = false;
                }
            }).then((error) => {
                if(error){
                    this.processingMsg = this.errorMsg = this.successMsg = this.amount = '';
                    this.errorMsg = 'Something went wrong';
                }
            })
        }
    }
}
</script>
