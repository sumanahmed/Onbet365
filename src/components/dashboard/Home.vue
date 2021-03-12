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

                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                        
                        <div v-for="(sportItems,index) in matches" :key="index" class="sports_single_category">

                            <span v-for="(matchCategory, index1) in sportItems" class="text-center" :key="index1">
                                <h4 v-if='index1 === 0'>{{ matchCategory['sportName'] | capitalizeFirstLetter }}</h4>
                            </span>

                            <div v-for="(match, index2) in sportItems" :key="index2">
                                <div  class="matchTournamentLiveWrap">
                                    <div class="matchTournamentDetailPart">
                                        <p>
                                            {{ match['matchTitle'] | capitalizeFirstLetter }} 
                                            &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | dateformat }} 
                                            </span>
                                            &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | timeformat }} 
                                            </span><br/>
                                            {{ match['tournamentName'] | capitalizeFirstLetter }} 
                                        </p>
                                    </div>
                                    <div class="matchTournamentLivePart">
                                        <p class="overs-live-status">
                                            <b class="overs">Overs: 10.5 </b>
                                            <span class="live-status">Live</span>
                                        </p>
                                        <p class="match-scores">Score : 111 / 5</p>                                                    
                                    </div>
                                </div>

                                <div v-for="(matchesOption, index3) in match['matchOption']" :key="index3" class="match-options">
                                    <div class="question-part">
                                        <span class="">{{ matchesOption["matchOption"] | capitalizeFirstLetter}} </span>
                                    </div>

                                    <div class="choice-answer-part">
                                        <button v-for="(betDetail, index4) in matchesOption['betDetails']" :key="index4" @click="showModal(betDetail, matchesOption['matchOption'])" value="" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                            <span> {{ betDetail['betName'] | capitalizeFirstLetter }} &nbsp;
                                                <b class="text-primary" v-if="betDetail['status'] == 0"> $</b>
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
                                            {{ match['matchTitle'] | capitalizeFirstLetter }} 
                                            &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | dateformat }} 
                                            </span>
                                            &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | timeformat }} 
                                            </span><br/>
                                            {{ match['tournamentName'] | capitalizeFirstLetter }} 
                                        </p>
                                    </div>
                                    <div class="matchTournamentLivePart">
                                        <p class="overs-live-status">
                                            <b class="overs">Overs: 10.5 </b>
                                            <span class="live-status">Live</span>
                                        </p>
                                        <p class="match-scores">Score : 111 / 5</p>                                                    
                                    </div>
                                </div>

                                <div v-for="(matchesOption, index6) in match['matchOption']" :key="index6" class="match-options">
                                    <div class="question-part">
                                        <span class="">{{ matchesOption["matchOption"] | capitalizeFirstLetter}} </span>
                                    </div>

                                    <div class="choice-answer-part">
                                        <button v-for="(betDetail, index7) in matchesOption['betDetails']" :key="index7" @click="showModal" value="" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                            <span> {{ betDetail['betName'] | capitalizeFirstLetter }} &nbsp;
                                                <b class="text-primary" v-if="betDetail['status'] == 0"> $</b>
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
                                            {{ match['matchTitle'] | capitalizeFirstLetter }} 
                                            &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | dateformat }} 
                                            </span>
                                            &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | timeformat }} 
                                            </span><br/>
                                            {{ match['tournamentName'] | capitalizeFirstLetter }} 
                                        </p>
                                    </div>
                                    <div class="matchTournamentLivePart">
                                        <p class="overs-live-status">
                                            <b class="overs">Overs: 10.5 </b>
                                            <span class="live-status">Live</span>
                                        </p>
                                        <p class="match-scores">Score : 111 / 5</p>                                                    
                                    </div>
                                </div>

                                <div v-for="(matchesOption, index9) in match['matchOption']" :key="index9" class="match-options">
                                    <div class="question-part">
                                        <span class="">{{ matchesOption["matchOption"] | capitalizeFirstLetter}} </span>
                                    </div>

                                    <div class="choice-answer-part">
                                        <button v-for="(betDetail, index10) in matchesOption['betDetails']" :key="index10" @click="showModal" value="" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                            <span> {{ betDetail['betName'] | capitalizeFirstLetter }} &nbsp;
                                                <b class="text-primary" v-if="betDetail['status'] == 0"> $</b>
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
                                            {{ match['matchTitle'] | capitalizeFirstLetter }} 
                                            &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | dateformat }} 
                                            </span>
                                            &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | timeformat }} 
                                            </span><br/>
                                            {{ match['tournamentName'] | capitalizeFirstLetter }} 
                                        </p>
                                    </div>
                                    <div class="matchTournamentLivePart">
                                        <p class="overs-live-status">
                                            <b class="overs">Overs: 10.5 </b>
                                            <span class="live-status">Live</span>
                                        </p>
                                        <p class="match-scores">Score : 111 / 5</p>                                                    
                                    </div>
                                </div>

                                <div v-for="(matchesOption, index12) in match['matchOption']" :key="index12" class="match-options">
                                    <div class="question-part">
                                        <span class="">{{ matchesOption["matchOption"] | capitalizeFirstLetter}} </span>
                                    </div>

                                    <div class="choice-answer-part">
                                        <button v-for="(betDetail, index13) in matchesOption['betDetails']" :key="index13" @click="showModal" value="" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                            <span> {{ betDetail['betName'] | capitalizeFirstLetter }} &nbsp;
                                                <b class="text-primary" v-if="betDetail['status'] == 0"> $</b>
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
                                            {{ match['matchTitle'] | capitalizeFirstLetter }} 
                                            &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | dateformat }} 
                                            </span>
                                            &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | timeformat }} 
                                            </span><br/>
                                            {{ match['tournamentName'] | capitalizeFirstLetter }} 
                                        </p>
                                    </div>
                                    <div class="matchTournamentLivePart">
                                        <p class="overs-live-status">
                                            <b class="overs">Overs: 10.5 </b>
                                            <span class="live-status">Live</span>
                                        </p>
                                        <p class="match-scores">Score : 111 / 5</p>                                                    
                                    </div>
                                </div>

                                <div v-for="(matchesOption, index15) in match['matchOption']" :key="index15" class="match-options">
                                    <div class="question-part">
                                        <span class="">{{ matchesOption["matchOption"] | capitalizeFirstLetter}} </span>
                                    </div>

                                    <div class="choice-answer-part">
                                        <button v-for="(betDetail, index4) in matchesOption['betDetails']" :key="index4" @click="showModal" value="" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                            <span> {{ betDetail['betName'] | capitalizeFirstLetter }} &nbsp;
                                                <b class="text-primary" v-if="betDetail['status'] == 0"> $</b>
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
                                            {{ match['matchTitle'] | capitalizeFirstLetter }} 
                                            &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | dateformat }} 
                                            </span>
                                            &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                            <span class="time">
                                                {{ match['matchDateTime'] | timeformat }} 
                                            </span><br/>
                                            {{ match['tournamentName'] | capitalizeFirstLetter }} 
                                        </p>
                                    </div>
                                    <div class="matchTournamentLivePart">
                                        <p class="overs-live-status">
                                            <b class="overs">Overs: 10.5 </b>
                                            <span class="live-status">Live</span>
                                        </p>
                                        <p class="match-scores">Score : 111 / 5</p>                                                    
                                    </div>
                                </div>

                                <div v-for="(matchesOption, index17) in match['matchOption']" :key="index17" class="match-options">
                                    <div class="question-part">
                                        <span class="">{{ matchesOption["matchOption"] | capitalizeFirstLetter}} </span>
                                    </div>

                                    <div class="choice-answer-part">
                                        <button v-for="(betDetail, index18) in matchesOption['betDetails']" :key="index18" @click="showModal" value="" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                            <span> {{ betDetail['betName'] | capitalizeFirstLetter }} &nbsp;
                                                <b class="text-primary" v-if="betDetail['status'] == 0"> $</b>
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

        <div v-if="isModal" class="modal fade show" style="display:block" id="placeBetBtn" aria-hidden="true" aria-labelledby="placeBetBtn" role="dialog" tabindex="-1">
            <div class="modal-dialog modal-simple modal-dialog-centered">
                <div class="modal-content modal-custom-content">
                    <div class="modal-header modal-custom-header">
                        <button id="customModelClose" type="button" class="close" data-dismiss="modal" aria-label="Close" @click="cancelModal">
                            <span class="fa fa-window-close" aria-hidden="true"></span>
                        </button>
                        <h4 style="text-align:center" class="modal-title">Place a bet</h4>
                    </div>
                    <form>
                        <div class="modal-body modal-custom-body">
                            <p class="text-info text-center" >Please wait bet processing</p>
                            <!--<p class="text-danger text-center">Somthing went wrong</p>
                            <p class="text-success text-center">Bet successfully done</p>-->

                            <div v-if="isBodyHidden" class="modalCustomBody">
                                <p class="text-warning text-center">Minimum Bet Amount 20 & Maximum 6000</p>
                                <div class="modalQusAnsBlock">
                                    <p style="text-transform: capitalize" class="text-secondary" id="betDetailQus">Q: {{ question }}</p>
                                    <p style="text-transform: capitalize" class="text-secondary" id="betDetailAns">A: {{ betDetails.betName }}</p>
                                    <p class="text-secondary">
                                        Bet Rate : <input type="text" name="betRate" id="betDetailRate" :value="betDetails.betRate" readonly/>
                                    </p>
                                    <input v-if="betDetails.status != 0" type="number" @keyup="estimateReturn(betDetails.betRate)" v-model="betAmount" name="betAmount" id="betAmount" placeholder="0" value="" min="0"/>
                                    <span class="text-secondary" style="font-size: 14px;">
                                    Est. Return: <input type="text" name="" id="betEstReturn" v-model="estimateResult" value="" readonly/>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div style="display:block;background:#eee" class="modal-footer  text-center modal-custom-footer">
                            <button class="btn btn-block btn-secondary" id="" type="button" name="placeBet" > Place Bet </button>
                        </div>
                    </form>
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
            isDisabled: true,
            isModal: false,
            betDetails : '',
            question : '',
            processingMsg : '',
            successMsg : '',
            errorMsg : '',
            betAmount : 0,
            estimateResult : 0
        }
    },
    created () {
        this.getLiveBet()
    },
    mounted (){
       console.log('Home page moundted')
    },
    methods: {
        showModal (betDetail, question) {
            this.isModal = true 
            this.betDetails = betDetail;
            console.log('details = ', this.betDetails)
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
            this.isModal = false
        },
        getLiveBet () {
            config.getData('/live/data')
            .then((response) => {    
                console.log('response = ', response.matches)        
                if (!response) {
                    this.loader = true
                } else {
                    this.loader = false
                    this.matches = response.matches; 
                }     
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>
