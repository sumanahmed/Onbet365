<template>
    <div>
        <!-- Main Content -->
        <div id="carouselExampleFade" class="carousel slide carousel-fade sliderMainArea " data-ride="carousel">

            <div class="carousel-inner single-custom-item">
                <div class="carousel-item active">
                    <img class="slideImg d-block w-100 animated  zoomIn " src="assets/img/slider_image_1.jpg" alt="">
                    <div class="custom-slider-content">
                        <!--<p class="animated  lightSpeedIn " style="animation-delay: 2s">We Believe in Better Service</p>                                                    
                        <a href="user/registration" target="_blank" class="btn btn-sm animated  btn-warning lightSpeedIn " style="animation-delay: 3s" >Join Now</a>-->
                    </div>
                </div>
                <div class="carousel-item ">
                    <img class="slideImg d-block w-100 animated  zoomIn " src="assets/img/slider_image_2.jpg" alt="">
                    <div class="custom-slider-content">
                        <!--<p class="animated  rollIn " style="animation-delay: 2s">&quot;Relations have to be built on trust&quot;</p>
                        <a href="User /Registration" target="_blank" class="btn btn-sm animated  btn-danger rollIn " style="animation-delay: 3s" >Create New Account</a>-->
                    </div>
                </div>
                <div class="carousel-item ">
                    <img class="slideImg d-block w-100 animated   zoomIn " src="assets/img/slider_image_3.jpg" alt="">
                    <div class="custom-slider-content">
                        <!--<p class="animated  bounceIn " style="animation-delay: 2s">&quot;Relations have to be built on trust&quot;</p>
                        <a href="User/registration" target="_blank" class="btn btn-sm animated  btn-info bounceIn " style="animation-delay: 3s" >Join Now</a>-->
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
                <li data-target="#carouselExampleFade" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleFade" data-slide-to="1" class=""></li>
                <li data-target="#carouselExampleFade" data-slide-to="2" class=""></li>
            </ol>
        </div>
            
        <div class="holder">
            <div class="news">Dear Users Maximum Deposit 25000 &amp; Minimun 200, Maximum  Withdraw 20000 Minimum 400.Bet Cash Limit 20. To 6000</div>
        </div>

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
                        <div class="sports_single_category">
                            <h4 class="text-center"> Cricket </h4>
                            <div  class="matchTournamentLiveWrap">
                                <div class="matchTournamentDetailPart">
                                    <p>
                                        India tour of australia, 2020-21 
                                        &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <span class="time">
                                            26 Dec 2020
                                        </span>
                                        &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                        <span class="time">
                                            5:30 pm
                                        </span><br/>
                                        2nd Test- Australia VS India
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

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>
                            

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>

                        </div>

                        <div class="sports_single_category">
                            <h4 class="text-center"> Football </h4>
                            <div  class="matchTournamentLiveWrap">
                                <div class="matchTournamentDetailPart">
                                    <p>
                                        India tour of australia, 2020-21 
                                        &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <span class="time">
                                            26 Dec 2020
                                        </span>                                                
                                        &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                        <span class="time">
                                            5:30 pm
                                        </span><br/>
                                        2nd Test- Australia VS India
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

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>
                            

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>

                        </div>

                    </div>
            
                    <div class="tab-pane fade" id="cricket" role="tabpanel" aria-labelledby="cricket-tab">
                        <div class="sports_single_category">
                            <h4 class="text-center"> Cricket </h4>
                            <div  class="matchTournamentLiveWrap">
                                <div class="matchTournamentDetailPart">
                                    <p>
                                        India tour of australia, 2020-21 
                                        &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <span class="time">
                                            26 Dec 2020
                                        </span>                                                
                                        &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                        <span class="time">
                                            5:30 pm
                                        </span><br/>
                                        2nd Test- Australia VS India
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

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>
                        </div>
                    </div>
            
                    <div class="tab-pane fade" id="football" role="tabpanel" aria-labelledby="football-tab">
                        <div class="sports_single_category">
                            <h4 class="text-center"> Football </h4>
                            <div  class="matchTournamentLiveWrap">
                                <div class="matchTournamentDetailPart">
                                    <p>
                                        India tour of australia, 2020-21 
                                        &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <span class="time">
                                            26 Dec 2020
                                        </span>                                                
                                        &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                        <span class="time">
                                            5:30 pm
                                        </span><br/>
                                        2nd Test- Australia VS India
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

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>
                        </div>
                    </div>
            
                    <div class="tab-pane fade" id="bascketball" role="tabpanel" aria-labelledby="bascketball-tab">
                        <div class="sports_single_category">
                            <h4 class="text-center"> Basketball </h4>
                            <div  class="matchTournamentLiveWrap">
                                <div class="matchTournamentDetailPart">
                                    <p>
                                        India tour of australia, 2020-21 
                                        &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <span class="time">
                                            26 Dec 2020
                                        </span>                                                
                                        &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                        <span class="time">
                                            5:30 pm
                                        </span><br/>
                                        2nd Test- Australia VS India
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

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>
                        </div>
                    </div>
            
                    <div class="tab-pane fade" id="baseball" role="tabpanel" aria-labelledby="baseball-tab">
                        <div class="sports_single_category">
                            <h4 class="text-center"> Volleyball </h4>
                            <div  class="matchTournamentLiveWrap">
                                <div class="matchTournamentDetailPart">
                                    <p>
                                        India tour of australia, 2020-21 
                                        &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <span class="time">
                                            26 Dec 2020
                                        </span>                                                
                                        &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                        <span class="time">
                                            5:30 pm
                                        </span><br/>
                                        2nd Test- Australia VS India
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

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-pane fade" id="tennis" role="tabpanel" aria-labelledby="tennis-tab">
                        <div class="sports_single_category">
                            <h4 class="text-center"> Tennis </h4>
                            <div  class="matchTournamentLiveWrap">
                                <div class="matchTournamentDetailPart">
                                    <p>
                                        India tour of australia, 2020-21 
                                        &nbsp; <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <span class="time">
                                            26 Dec 2020
                                        </span>                                                
                                        &nbsp; <i class="fa fa-clock-o" aria-hidden="true"></i>
                                        <span class="time">
                                            5:30 pm
                                        </span><br/>
                                        2nd Test- Australia VS India
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

                            <div class="question-part">
                                <span class="">To Win The Match </span>
                            </div>

                            <div class="choice-answer-part">

                                <button value="" class="single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> India &nbsp; <b class="text-primary"> 2.85 </b> </span> 
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Draw  &nbsp; <b class="text-primary"> 2.00 </b> </span>
                                </button>
                                
                                <button value="" class=" single-item-for-mobile single-item  clickSingleBetDetail" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                                    <span> Australia  &nbsp; <b class="text-primary"> 2.50 </b> </span>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="modal fade" id="placeBetBtn" aria-hidden="true" aria-labelledby="placeBetBtn" role="dialog" tabindex="-1">
            <div class="modal-dialog modal-simple modal-dialog-centered">
                <div class="modal-content modal-custom-content">
                    <div class="modal-header modal-custom-header">
                        <button id="customModelClose" type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                                    <p style="text-transform: capitalize" class="text-secondary" id="betDetailQus">Q: To Win The Match</p>
                                    <p style="text-transform: capitalize" class="text-secondary" id="betDetailAns">A: Australia</p>
                                    <p class="text-secondary">
                                        Bet Rate : <input type="text" name="betRate" id="betDetailRate" value="1.85" readonly/>
                                    </p>
                                    <input type="number" name="betAmount" v-model="betAmount" id="betAmount" placeholder="0" value="" min="0"/>
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
export default {
    name:'Upcoming',
    data () {
        return {
            isBodyHidden: false
        }
    },
    mounted (){
       console.log('Upcome page loaded')
    }
}
</script>
