<template>
    <div v-for="(sportItems, key) in matches" class="sports_single_category">

        <h4 v-for="(matchCategory, key) in sportItems" class="text-center" v-if="key == 0">            
            {{ matchCategory["sportName"] | capitalizeFirstLetter}}
        </h4>

        <div  v-for="(match, key) in sportItems">
            <div class="matchTournamentLiveWrap">
                <div class="matchTournamentDetailPart">
                    <p>
                        {{ match["tournamentName"] | capitalizeFirstLetter }}

                        <span class="badge badge-warning">{{ match["matchDateTime"] | dateformat}}</span>
                        <span class="badge badge-danger"> {{ match["matchDateTime"] | timeformat}}</span>
                    </p>
                    <p>
                        {{ match["tournamentName"] }}
                    </p>
                </div>

                <div class="matchTournamentLivePart">
                    <span v-if="match['status'] == 3" class="liveNotification"><b class="liveDot"></b>Live</span>
                    <span v-if="match['overs'] != null && match['status'] == 3" class="matchOver"> Overs {{ match["overs"] }} </span>
                    <span v-if="match['status'] == 3" class="matchScores">{{ match["score"] }}</span>
                    <span v-if="match['status'] == 2" class="matchScores">{{ match["score"] }}</span>
                </div>
            </div>
            <div v-for="(matchesOption, key) in match['matchOption']">
                <div class="team-name-part">
                    <div class="content">
                        <span class="name badge badge-dark">{{ matchesOption["matchOption"] | capitalizeFirstLetter}}</span>
                    </div>
                </div>
                <div class="choice-team-part">
                    <button v-for="(betDetail, key) in matchesOption['betDetails']" @click="clickSingleBetDetail(betDetail,matchesOption['matchOption'])" :class="[(matchesOption['betDetails'].length == 2) ? 'single-item-for-mobile clickSingleBetDetail' : 'single-item clickSingleBetDetail']" data-target="#placeBetBtn" data-toggle="modal" data-backdrop="" data-keyboard="false">
                    <span >&nbsp;{{ betDetail['betName'] | capitalizeFirstLetter }}
                        <b class="text-primary" v-if="betDetail['status'] == 0"> $</b>
                        <b class="text-primary" v-else-if="betDetail['status'] == 1"> {{ betDetail['betRate'] }}</b>
                    </span>
                    </button>
                </div>
            </div>

        </div>

    </div>
</template>