<template>
    <div>
        <div class="page-title-custom">
            <p> <b> Home </b> <i class="fa fa-angle-right"></i> <span class="text-warning"> Single page </span></p>
        </div>
        <div class="tab-section animated fadeInUp">
            <div class="online-play-tab-part">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                        <div class="sports_single_category">
                            <h4 class="text-center"> {{ singleMatch[0].sportName | capitalizeFirstLetter }} </h4>
                            <div  class="matchTournamentLiveWrap">
                                <div class="matchTournamentDetailPart">
                                    <p>
                                        {{ singleMatch[0].matchTitle | capitalizeFirstLetter }} 
                                        &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <span class="time">
                                            {{ singleMatch[0].matchDateTime | dateformat }} 
                                        </span>
                                        &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                        <span class="time">
                                            {{ singleMatch[0].matchDateTime | timeformat }} 
                                        </span><br/>
                                        {{ singleMatch[0].tournamentName | capitalizeFirstLetter }} 
                                    </p>
                                </div>
                                <div class="matchTournamentLivePart">
                                    <p class="overs-upcomming-status">
                                        <span class="upcomming-status">upcomming</span>
                                    </p>
                                </div>
                            </div>

                            <div v-for="(matchesOption, index6) in matches" :key="index6" class="match-options">
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

        <div v-if="isModal && betDetails.status != 0" class="modal fade show" style="display:block" id="placeBetBtn" aria-hidden="true" aria-labelledby="placeBetBtn" role="dialog" tabindex="-1">
            <div class="modal-dialog modal-simple modal-dialog-centered">
                <div class="modal-content modal-custom-content">
                    <div class="modal-header modal-custom-header">
                        <button id="customModelClose" type="button" class="close" data-dismiss="modal" aria-label="Close" @click="cancelModal">
                            <span class="fa fa-window-close" aria-hidden="true"></span>
                        </button>
                        <h4 v-if="isBodyHidden" style="text-align:center" class="modal-title">Place a bet</h4>
                        <p v-else-if="successMsg" class="text-white text-center mb-0">{{ successMsg }}</p>
                    </div>
                    <form>
                        <div v-if="isBodyHidden" class="modal-body modal-custom-body">
                            <div class="modalCustomBody">
                                <p class="text-warning text-center">Minimum Bet Amount 20 & Maximum 6000</p>                                
                                <p v-if="processingMsg" class="text-info text-center" >{{ processingMsg }}</p>
                                <p v-else-if="errorMsg" class="text-danger text-center">{{ errorMsg }}</p>
                                <div class="modalQusAnsBlock">
                                    <p style="text-transform: capitalize" class="text-secondary" id="betDetailQus">Q: {{ question }}</p>
                                    <p style="text-transform: capitalize" class="text-secondary" id="betDetailAns">A: {{ betDetails.betName }}</p>
                                    <p class="text-secondary" v-if="betDetails.status != 0">
                                        Bet Rate : <input type="text" name="betRate" id="betDetailRate" :value="betDetails.betRate" readonly/>
                                    </p>
                                    <input autocomplete="off" v-if="betDetails.status != 0" type="text" @keyup="estimateReturn(betDetails.betRate)" v-model="betAmount" name="betAmount" id="betAmount" placeholder="0" value="" min="0" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"/>
                                    <span class="text-secondary" style="font-size: 14px;" v-if="betDetails.status != 0">
                                        Est. Return: <input type="text" name="" id="betEstReturn" v-model="estimateResult" value="" readonly/>
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
                            <span class="fa fa-window-close" aria-hidden="true"></span>
                        </button>
                        <h6 style="text-align:center;margin-top:5px" class="modal-title"> Please login your account </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import config from '../../config'
export default {
    name:'Home',
    data () {
        return {
            singleMatch: '',
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
            matchId: this.$route.params.id
        }
    },
    watch: {
        '$route.params.id': function (newVal, oldVal) {
            this.getSingleMatch(newVal)
            console.log('oldVal = ', oldVal)
        }
    },
    created () {
        this.getSingleMatch(this.$route.params.id)
        console.log('this.$route = ', this.$route.query)
    },
    methods: {
        showModal (betDetail, question) {
            const isUserLoggedIn = this.$store.state.commonObj.user.loggedIn
            if (isUserLoggedIn !== undefined) {
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
        getSingleMatch (matchId) {
            this.$store.state.loader =true
            config.getData('/single/match/details/' + matchId)
            .then((response) => {    
                console.log('response = ', response)  
                if (!response) {
                    this.$store.state.loader = true
                } else {
                    this.$store.state.loader = false
                    this.singleMatch = response.match
                    this.matches = response.optionBetDetails;
                }     
            })
            .catch((error) => {
                console.log(error);
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
