<template>
   <!-- home view -->
   <div id="home" class="home">
    <!-- Background section => disigned by canva  -->
    <div class="Background">
      <div class="textCont">
        <p id="back">
          {{lannguage.textBackground}}
        </p>
        <p id="backfooter">
          {{lannguage.textBackgroundDown}}
        </p>
        <div id='contInput' class="contInput">
          <input v-model="orderId" type="text" placeholder="enter your order for search">
          <!-- <button> 
            <router-link :to="{ name: 'TrackOrder', params: { id: 14146961 } }">{{lannguage.track}}</router-link>
          </button> -->
          <button @click="trackOrder">{{ lannguage.track }}</button>

        </div>
      </div>
      <div class="footerBckground">
        <div>
          <p v-if="numberOredrs">{{ numberOredrs.data.shipmentsCount}}</p>
          <p>{{ lannguage.packageDel }}</p>
        </div>
        <div>
          <p v-if="numberOredrs">{{ numberOredrs.data.clientsCount}}</p>
          <p>{{ lannguage.HappyClinnts }}</p>  
        </div>
        <div>
          <p>3,500</p>
          <p>{{ lannguage.ReviewStar }}</p>
        </div>
        <!-- <img v-if="myLanguage =='En'"  src="../assets/images/imageFooterBack.svg">
        <img v-if="myLanguage =='Ar'"  src="../assets/images/imageFooterBackA.svg">-->
      </div>
    </div> 
    <div id="service" class="service">
      <div>
        <h2 class="lanDir">{{lannguage.service}}</h2>
        <p  class="lanDir">{{lannguage.serviceUnder}}</p>
      </div>
      <swiper
        :slidesPerView="2"
        :grid="{
          rows: 2,
        }"
        :spaceBetween="30"
        navigation
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
  >
      <swiper-slide class="slidePicA slidePic">
        <img v-if="myLanguage =='En'" src="../assets/images/reallyend.svg">
        <img v-if="myLanguage =='Ar'" src="../assets/images/serAr.svg">
      </swiper-slide>
      <swiper-slide class="slidePicB slidePic">
        <img v-if="myLanguage =='En'" src="../assets/images/delivery.svg">
        <img v-if="myLanguage =='Ar'" src="../assets/images/deliveryAr.svg">
      </swiper-slide>
      <swiper-slide class="slidePicC slidePic">
        <img v-if="myLanguage =='En'" src="../assets/images/shipping.svg">
        <img v-if="myLanguage =='Ar'" src="../assets/images/shippingAr.svg">
      </swiper-slide>
      <swiper-slide  class="slidePicD slidePic" >
        <img v-if="myLanguage =='En'"  src="../assets/images/shoppingZip.svg">
        <img v-if="myLanguage =='Ar'" src="../assets/images/shipZoneAr.svg">
      </swiper-slide>
      <swiper-slide class="slidePicE slidePic">
        <img v-if="myLanguage =='En'"  src="../assets/images/cash.svg">
        <img v-if="myLanguage =='Ar'" src="../assets/images/kashAr.svg">
      </swiper-slide>
      <swiper-slide class="slidePicF slidePic">
        <img v-if="myLanguage =='En'" src="../assets/images/storage.svg">
        <img v-if="myLanguage =='Ar'" src="../assets/images/storageAr.svg">
      </swiper-slide>
      <swiper-slide class="slidePicG slidePic">
        <img v-if="myLanguage =='En'"  src="../assets/images/packaging.svg">
        <img v-if="myLanguage =='Ar'" src="../assets/images/pakageAr.svg">
      </swiper-slide>
      <swiper-slide class="slidePicH slidePic" >
        <img v-if="myLanguage =='En'" src="../assets/images/express.svg">
        <img v-if="myLanguage =='Ar'" src="../assets/images/expreAr.svg">
      </swiper-slide>
        
      </swiper>
    </div>
    <div id="about"class="about">
      <div>
        <input type="checkbox" id="chosse">
        <div>
          <h2 class="lanDir">
            {{lannguage.about}}
          </h2>
          <p class="lanDir">{{lannguage.aboutContent}}</p>
        </div>
        <div>
          <h3 class="lanDir">
            {{lannguage.message}}
          </h3>
          <p class="lanDir">
            {{lannguage.ourMessageContent}}
          </p>
        </div>
        <div>
          <h3 class="lanDir">
            {{lannguage.through}}
          </h3>
          <p class="lanDir">
          {{lannguage.throughContent}}
          </p>
        </div>
        <div class="counterOfReadMore">
            <div>
            <h3 class="lanDir">
              {{lannguage.Quality}}
            </h3>
            <p class="lanDir">
              {{lannguage.QualityContent}}
            </p>
          </div>
          <div>
            <h3 class="lanDir">
              {{lannguage.means}}
            </h3>
            <p class="lanDir">
              {{lannguage.meansContent}}
            </p>
          </div>
          <label class="see"   for="chosse">{{lannguage.seeLess}}</label>
        </div>
        <label class="see"  for="chosse">{{lannguage.seeMore}}</label>
      </div>
      <div>
        <img src="../assets/images/aboutup.svg">
      </div>
    </div>
    <div class="about terms">
      <div>
        <input type="checkbox" id="forsee">
        <div>
          <h2 class="lanDir">
            {{lannguage.Terms}}
          </h2>
        </div>
        <div>
          <p class="lanDir">
            {{lannguage.oneContent}}
          </p>
        </div>
        <div>
          <p class="lanDir">
            {{lannguage.towContent}}
          </p>
        </div>
        <div class="counterOfReadMore">
        <div>
          <p class="lanDir">
          {{lannguage.threeContent}}
        </p>
        </div>
        <div>
          <p class="lanDir">
            {{lannguage.fourContent}}
          </p> 
        </div>
          <label class="see"  for="forsee"> {{lannguage.seeLess}}</label>
        </div>
        <label class="see"   for="forsee">{{lannguage.seeMore}}</label>
      </div>
      <div>
        <img src="../assets/images/aboutdown.svg">
      </div>
    </div>
    <div  class="howtOsEnd">
      <div>
        <p>{{lannguage.howToSendYourOrder}}</p>
        <img class="limit" src="../assets/images/limit.svg">
      </div>
      <div>
        <div>
          <div><span>01</span></div>
          <div>
            <p>{{lannguage.placeOrder}}</p>
            <p>{{lannguage.orderDescription}}</p>
          </div>
        </div>
        <div>
          <div><span>02</span></div>
          <div>
            <p>{{lannguage.waitForArrival}}</p>
            <p>{{lannguage.arrivalDescription}}</p>
          </div>
        </div>
        <div>
          <div><span>03</span></div>
          <div>
            <p>{{lannguage.finishAndRate}}</p>
            <p>{{lannguage.finishAndRateDescription}}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="branches" class="branches">
        <div class="textBranches">
          <span>{{lannguage.branchesInfo}}</span>
          <select v-on:change="brancheChossed()" class="branches-change">
            <option value="Jeddah">Jeddah</option>
            <option value="AlQunfudhah">AlQunfudhah</option>
            <option value="Samtah">Samtah</option>
            <option value="AhadAlMasarihah">AhadAlMasarihah</option>
            <option value="BishaDarab">BishaDarab</option>
            <option value="Jizan">Jizan</option>
            <option value="AbuArish">AbuArish</option>
            <option value="Sabya">Sabya</option>
            <option value="SakakaArarDumatalJandal">SakakaArarDumatalJandal</option>
          </select>
          <div>
            <img src="../assets/images/callicon.svg">
            <p >{{lannguage[map].phone}} /{{lannguage[map].phone1}}</p>
          </div>
          <div>
            <img src="../assets/images/location.svg">
            <p >{{lannguage[map].name}}</p>
          </div>
          <div>
            <img src="../assets/images/calendar.svg">
            <p >{{lannguage[map].schedule}}</p>
          </div>
        </div>
        <div class="imageBranches">
          <iframe v-if="map=='Jeddah'" class="map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3713.8118573908046!2d39.2026667!3d21.4366389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI2JzExLjkiTiAzOcKwMTInMDkuNiJF!5e0!3m2!1sen!2seg!4v1713033605594!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <iframe v-if="map=='AlQunfudhah'" class="map" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3769.537400087197!2d41.1164928!3d19.1279397!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2seg!4v1713033534253!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <iframe v-if="map=='Samtah'" class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d477.03618871726337!2d42.8484732!3d16.9603039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1607f5f744c372d7%3A0xa9ab8c9922020d1b!2z2KfZhNij2K3Zhdix2Yog2YTZhNi02K3Zhg!5e0!3m2!1sen!2seg!4v1713033374528!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <iframe v-if="map=='AhadAlMasarihah'" class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d477.03618871726337!2d42.8484732!3d16.9603039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1607f5f744c372d7%3A0xa9ab8c9922020d1b!2z2KfZhNij2K3Zhdix2Yog2YTZhNi02K3Zhg!5e0!3m2!1sen!2seg!4v1713033374528!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <iframe v-if="map=='BishaDarab'" class="map" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1905.8369430847317!2d42.7489342!3d17.1860678!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2seg!4v1713033302386!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <iframe v-if="map=='Jizan'" class="map" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d571.0741164058671!2d42.6332942!3d16.8792654!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDUyJzQ2LjkiTiA0MsKwMzgnMDAuOCJF!5e1!3m2!1sen!2seg!4v1713033159347!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <iframe v-if="map=='Sabya'" class="map" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1905.8369430847317!2d42.7489342!3d17.1860678!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2seg!4v1713033091037!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <iframe v-if="map=='AbuArish'" class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d477.03618871726337!2d42.8484732!3d16.9603039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1607f5f744c372d7%3A0xa9ab8c9922020d1b!2z2KfZhNij2K3Zhdix2Yog2YTZhNi02K3Zhg!5e0!3m2!1sen!2seg!4v1713032989146!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <iframe v-if="map=='SakakaArarDumatalJandal'" class="map" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1034.193539539082!2d40.2142401!3d29.9488146!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU2JzU1LjMiTiA0MMKwMTInNDkuOCJF!5e1!3m2!1sen!2seg!4v1713032882533!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <div class="reviews">
      <div class="tittle">
        <span>{{lannguage.reviews}}</span>
      </div>
      <swiper
        :slidesPerView="2"
        :spaceBetween="30"
        :pagination="{ clickable: true }"
        :modules="moduless"
        :breakpoints="{
          768: { slidesPerView: 2, spaceBetween: 20 },
          400: { slidesPerView: 1, spaceBetween: 20 }
        }"
        class="content"
      >
        <swiper-slide class="componnent">
          <img src="../assets/images/collectionstars.svg">
          <p>{{ lannguage.review1 }}</p>
          <div>
            <img src="../assets/images/clinetA.png">
            <p>{{ lannguage.review1Author }}</p>
            <span>{{ lannguage.review1Role }}</span>
          </div>
        </swiper-slide>

        <swiper-slide class="componnent">
          <img src="../assets/images/collectionstars.svg">
          <p>{{ lannguage.review2 }}</p>
          <div>
            <img src="../assets/images/clinetB.png">
            <p>{{ lannguage.review2Author }}</p>
            <span>{{ lannguage.review2Role }}</span>
          </div>
        </swiper-slide>

        <swiper-slide class="componnent">
          <img src="../assets/images/collectionstars.svg">
          <p>{{ lannguage.review3 }}</p>
          <div>
            <img src="../assets/images/clinetC.png">
            <p>{{ lannguage.review3Author }}</p>
            <span>{{ lannguage.review3Role }}</span>
          </div>
        </swiper-slide>
      </swiper>
      </div>
      <div  id="contact" class="footer">
         <div>
          <h2>{{ lannguage.contactUsText }}</h2>
          <img src="../assets/images/GroupIcons.svg">
         </div>
         <div>
          <h2>{{ lannguage.contactUs }}</h2>
         <div>
            <img src="../assets/images/email.svg">
            <p>{{ lannguage.contactUsEmail }}</p>
         </div>
         <div>
            <img src="../assets/images/phone.svg">
            <p>{{ lannguage.contactUsPhone }}</p>
         </div>
         </div>
         <div>
            <h2>{{ lannguage.quickLinks }}</h2>
            <p>{{ lannguage.quickLinksHome }}</p>
            <p>{{ lannguage.quickLinksServices }}</p>
            <p>{{ lannguage.quickLinksAbout }}</p>
            <p>{{ lannguage.quickLinksBranches }}</p>
          </div>
          <div>
            <h2>{{ lannguage.location }}</h2>
            <p>{{ lannguage.locationMainCenter }}</p>
            <p>{{ lannguage.locationHours }}</p>
          </div>
          <div class="imageBranches fotterLocation">
              <iframe v-if="map=='Jeddah'" class="map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3713.8118573908046!2d39.2026667!3d21.4366389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI2JzExLjkiTiAzOcKwMTInMDkuNiJF!5e0!3m2!1sen!2seg!4v1713033605594!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <iframe v-if="map=='AlQunfudhah'" class="map" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3769.537400087197!2d41.1164928!3d19.1279397!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2seg!4v1713033534253!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <iframe v-if="map=='Samtah'" class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d477.03618871726337!2d42.8484732!3d16.9603039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1607f5f744c372d7%3A0xa9ab8c9922020d1b!2z2KfZhNij2K3Zhdix2Yog2YTZhNi02K3Zhg!5e0!3m2!1sen!2seg!4v1713033374528!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <iframe v-if="map=='AhadAlMasarihah'" class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d477.03618871726337!2d42.8484732!3d16.9603039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1607f5f744c372d7%3A0xa9ab8c9922020d1b!2z2KfZhNij2K3Zhdix2Yog2YTZhNi02K3Zhg!5e0!3m2!1sen!2seg!4v1713033374528!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <iframe v-if="map=='BishaDarab'" class="map" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1905.8369430847317!2d42.7489342!3d17.1860678!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2seg!4v1713033302386!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <iframe v-if="map=='Jizan'" class="map" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d571.0741164058671!2d42.6332942!3d16.8792654!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDUyJzQ2LjkiTiA0MsKwMzgnMDAuOCJF!5e1!3m2!1sen!2seg!4v1713033159347!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <iframe v-if="map=='Sabya'" class="map" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1905.8369430847317!2d42.7489342!3d17.1860678!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2seg!4v1713033091037!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <iframe v-if="map=='AbuArish'" class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d477.03618871726337!2d42.8484732!3d16.9603039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1607f5f744c372d7%3A0xa9ab8c9922020d1b!2z2KfZhNij2K3Zhdix2Yog2YTZhNi02K3Zhg!5e0!3m2!1sen!2seg!4v1713032989146!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <iframe v-if="map=='SakakaArarDumatalJandal'" class="map" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1034.193539539082!2d40.2142401!3d29.9488146!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU2JzU1LjMiTiA0MMKwMTInNDkuOCJF!5e1!3m2!1sen!2seg!4v1713032882533!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        <div>
        <p>{{ lannguage.copyright }}</p>
      </div>
    </div>

  </div>
  <div id="loader">
        <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import required modules
import { Navigation,Grid, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import sweetalert from "sweetalert";


//import './style.css';
// @ is an alias to /src
//{{lannguage.textBackground}}
export default {
  name: 'HomeView',
  data(){
    return{
      modules: [Grid, Pagination,Navigation],
      moduless: [Pagination,Navigation],
      orderId: null,

        }
      },
  components: { 
    Swiper,
    SwiperSlide,
  },
  computed: {
      lannguage () {
        // console.log( this.$store.getters.isLogin)
        return this.$store.getters.catchLang
    },
    myLanguage () {
        return this.$store.getters.myLanguage
    },
      map () {
        // console.log( this.$store.getters.isLogin)
        return this.$store.state.mapbranche
    },
    numberOredrs () {
        // console.log( this.$store.getters.isLogin)
        return this.$store.state.numberOredrs
      },
      
    },
    methods:{
      brancheChossed() {
        const selectedBranch= event.target.value;
        this.$store.commit('changeMapbranche', selectedBranch); 
         console.log(this.map )
         },  
      // ============loader => start=============================================
      loaderToggle: function (show) {
        let loader = document.getElementById("loader");
        if (show) {
          loader.style.visibility = "visible";
        } else {
          loader.style.visibility = "hidden";
        }
      },
      // ============loader => end=============================================
         
      trackOrder() {
        this.loaderToggle(true)
        const orderId = this.orderId;
        this.$store.dispatch('fetchTrack', orderId)
        .then((res) => {
            this.loaderToggle(false)
            console.log(this.$store.state.trackData);
            
            if(this.$store.state.trackData){
              //console.log("there is data ");
              
              setTimeout(() => {
                console.log("set");
                // بمجرد الانتهاء من جلب البيانات، قم بتوجيه المستخدم إلى صفحة التتبع
              this.$router.push({ name: 'TrackOrder', params: { id: orderId } });
                
              }, 100);

            }else{
              //console.log("there is no data ");
              sweetalert({
                text: "no order",
                icon: "error",
                });
              
            }

            })
          .catch((error) => {
            console.log(error);
           });
        
          }
        },
        created() {
          this.$store.dispatch('fetchNumberOrders')
          .then((res) => {
            console.log("get numer of orders")
            console.log( this.$store.state.numberOredrs.data)
            console.log( this.$store.state.numberOredrs.data.clientsCount)
          })
          
          
          },
        mounted() {
          setTimeout(() => {
            this.$store.commit('changeToarabicFormat');   
            // استخدم Vue Router للتحقق من المسار الحالي
            }, 100); // قمت هنا بتأخير التنفيذ لمدة 500 ميلي ثانية، يمكنك ضبط هذا الرقم حسب احتياجاتك
          },
}
</script>
<style lang="scss" scoped>


.home{
  height: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}
.Background{
  height: 100vh;
  width: 100%;
  margin-bottom: 30px;
  //background-color: aquamarine;
  background-image: url("../assets/images/finaly.jpeg");
  background-size: 100% 100%;
  //overflow: hidden;  
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
}
.footerBckground{
  position: absolute;
  bottom: 0%;
  left: 50%;
  width: 80%;
  height: 80px;
  transform:translate(-50%,50%);
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  
  >div{
    display:flex;
    flex-wrap: wrap;
    align-content: center;
    width: 25%;
    height: 100%;
    background-color:white;
    box-shadow: 0px 1px 4px 3px #00000040;
    border-radius: 4px 0px 0px 0px;



    //background-color: rgb(148, 179, 12);
    >p{
    width: 100%;
    height: 40%;
    //background-color: rgb(113, 114, 109);
    
  }
    >p:first-child{
      color:black;
      font-weight: 600;
      
    }
    p:nth-child(2){
    color:#313A86;
    
  }
  }
 // img{
    //width: 100%;
    //height: 100%;
  //}
}
//for english style
.textCont{
  position: relative;
  margin-top: 70px;
  width: 50%;
  height: 50%;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: 700;
  color:white;
 // background-color: red;
  
  p:first-child{
    font-size: 45px;
    text-align: start;
  }
  p:nth-child(2){
   // background-color: rgb(168, 162, 162);
    font-size: 20px;
    margin-top: 20px;
    text-align: start;
  }
  .contInput{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 420px;
    height: 50px;
   // background-color: rgb(78, 41, 41);

  }
}
.contInput input{
  width: 67%;
  height: 90%;
  border-radius: 6px;
  padding-left: 10px;
  
} 
.track{
  color: white;
}
.contInput  button{
  border-radius: 6px;
  width: 29%;
  height: 90%;
  text-transform: capitalize;
  color: white;
  font-size: 18px;
  background-color:var(--buttom);
  cursor: pointer;


} 


//for arabic style
.backForArabic{
  text-align:end !important;
 // background-color: salmon;
}
.backfooterForArabic{
  text-align:end !important;
  //background-color: salmon;
}
.contInputForArabic{
  position: absolute;
  right: 0px;
 // background-color: salmon;
}
.ulForArabic{
  order: 1 !important ;
 // background-color: salmon !important;
}
.logocontulForArabic{
  order:3 !important;
 // background-color: salmon !important;
}
.lcontLangForArabic{
  order:2 !important;
  //background-color: salmon;
}
.alinPadding{
  text-align:end !important;
  padding-right: 15px ;
}

//all the about content
.about{
  width: 100%;
  min-height: 600px;
  //background-color: red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  
}
.terms{
  //background-color: rgb(121, 165, 20);
  margin-top: 0px;

}
.about >div{
  width: 50%;
  min-height:600px;
  //background-color:blue;
}

//the about content "text"
.about >div:first-child{
  //background-color:blue;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  position: relative;

  }
 // eddit just for terms
.terms >div:first-child{
  //background-color:rgb(155, 161, 156);
  align-content: flex-start;
  order: 2;
  }
.about >div:first-child >div:not(.counterOfReadMore){
  width: 100%;
  //height: 222px;
 // background-color: rgb(244, 96, 121);
  text-align: start;
  padding-left: 25px;
}
//the content will be in see more
.counterOfReadMore{
  text-align: start;
  padding-left: 25px;
  //background-color: rgb(247, 70, 99);
  display: none;
}
.see{
  width: 110px;
  height: 30px;
  background-color: #254178;
  //background-color: #1b9417;
  color: white;
  text-align: center;
  line-height: 30px;
  position: relative;
  bottom: 0px;
  left: 25px;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  margin-top: 10px;
  
}
.seeLess{
  left: 5px;
}
//about
#chosse:checked ~ .counterOfReadMore{
  display: block;
}
#chosse:checked ~ label{
  display: none;
}
//terms
#forsee:checked ~ .counterOfReadMore{
 // background-color: #6c8f0e;
  display: block;
}
#forsee:checked ~ label{
  display: none;
  //background-color: #055a5a;
}
//terms and chosse
#chosse,#forsee{
  display: none;
}
.about >div:first-child  >div h2,.about >div:first-child  >div h3{
  margin-bottom: 14px;
  font-size: 40px;
  //background-color: rgb(200, 244, 96);
  font-weight: 700;
  text-transform: capitalize; 
     
}
.about >div:first-child  >div h2{
  color: #254178;
}
.about >div:first-child  >div h3{
  font-size: 22px;
  margin-bottom: 0px;
  padding-top: 5px;
}
.about >div:first-child  >div p{
  font-size: 17px;
  //background-color: rgb(108, 244, 96);
  font-weight: 600;
  text-transform: capitalize;
  line-height: 40px;
  
      
}

//the about content "image"
.about >div:nth-child(2){
 // background-color:rgb(9, 9, 206);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  >img{
    width: 85%;
    height: 85%;
    margin-bottom: 30px;
    //mix-blend-mode: multiply;
    
  }
}
// eddit just for terms
.terms >div:nth-child(2){
  align-items: flex-start;
 //background-color:rgb(107, 107, 146);
 order: 1;
 >img{
    margin-left: 30px;

  }
}

.service{
  width: 100%;
  height: 700px;
 // background-color: aqua;
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  >div:first-child{
    width: 100%;
    height: 15%;
    //background-color: saddlebrown;
    h2,p{
      margin-top: 4px;
      font-size: 20px;
      //background-color: red ;
      text-align: start;
      padding-left: 20px;     
    }
    
    h2{
      color: #254178;
      font-size: 40px;
    }
  }
}
//swiper
.swiper {
  width: 100%;
  height: 85%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  height: calc((100% - 30px) / 2) !important;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  >img{
    width: 90%;
    height: 100%;
    margin-right: 70px !important;
  }
}

//How To Send Your Order section start

.howtOsEnd{
  width: 100%;
  min-height: 360px;
 background-color:#202224 ;
}
.howtOsEnd >div:first-child{
  width: 100%;
  height: 120px;
  //background-color: red;
  p{
    font-size: 35px;
    font-weight: 600;
    color: white;
    line-height: 90px;
    text-transform: capitalize;
  }
  img{
    width: 80%;
    height: 20px;
  }
}
.howtOsEnd >div:nth-child(2){
  min-height: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  //background-color: #254178;
}
.howtOsEnd >div:nth-child(2) >div{
  width: 300px;
  height: 190px;
  background-color: #3A3737;
 // background-color: #9e2e2e;
  //border-radius: 16px, 0px, 16px, 0px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  
}
.howtOsEnd >div:nth-child(2) >div >div:first-child{
  width: 100%;
  height: 25%;
  //background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    font-size: 25px;
    color: white;
  }
}
.howtOsEnd >div:nth-child(2) >div >div:nth-child(2){
  width: 80%;
  height: 65%;
  //background-color: sandybrown;
  p{
    color: white;
    text-align: start;
  }
  p:first-child{
    font-size: 22px;
    font-weight: 600;
  }
  p:nth-child(2){
    //font-size: 19px;
    font-weight: 400;
    line-height:35px ;
  }
}
.howP {
  p{
    
    text-align: end !important;
  }
}
// How To Send Your Order section end

// branches section start
.branches{
  width: 100%;
  min-height: 400px;
  //background-color: red;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly; 
}
.branches >div{
  width: 48%;
  height:330px;
  //background-color: rgb(25, 105, 61);
  margin-bottom: 45px;
  
}
//style to english
.imageBranches{
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  //background-color: rgb(2, 23, 92)!important;
}
//style to arabic
.imageBranchesAr{
    padding-left: 100px;
    order:1;
}
.map{
  width: 70%;
  height: 90%;
}

//for english

.textBranches{
 // background-color: rgb(5, 78, 100)!important;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 65px;
  .branches-change{
    width: 340px;
    height: 50px;
    border: #828282;
    border-radius: 6px;
    font-size: 19px;
    padding-left: 10px;
    border: 2px solid #828282;
  }
  span{
    text-align: start;
    font-size: 20px ;
    font-weight: 600;
  }
  >div{
    height: 27px;
    //background-color: sandybrown;
    display: flex;
    align-items: center;
    p{
     font-weight: 600;
     font-size: 20px; 
     //background-color: red;
     margin-left: 6px;
    }
    img{
      width: 16px;
      height: 16px;
    }
  }
}



//for arabic
.textBranchesAr{
  order:2;
  padding-right: 60px;
  .branches-change{

    align-self: flex-end;
    margin-right: 5px;
  }
  span{
    padding-right: 15px;
    text-align: end;
    //background-color: red;
  }
  >div{

    justify-content: flex-end;
    p{
   
     margin-right: 7px;
     order:1;
    }
    img{
     
      margin-right: 5px;
      order:2;

    }
  }
}




.reviews{
  width: 100%;
  height: 380px;
  //background-color: rgb(23, 141, 48);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;


}
//style for english

.tittle{
  width: 100%;
  height: 60px;
  text-align: start;
  line-height: 70px;
  font-size: 20px ;
  font-weight: 600;
  padding-left: 75px;
  text-transform: uppercase;
  //background-color: sandybrown;
  
}
//style for arabic
.tittleAr{
  text-align: end;  
  padding-right: 80px;
}
.content{
    width: 90%;
    height: 320px !important;
    //background-color: #254178;
    display: flex;
    flex-wrap: wrap;
  .componnent{
    width: 450px !important;
    height: 255px !important;
    //background-color: #3A3737;
    border-radius: 7px;
    margin-left: 6px;
    margin-top:20px;
  }

}
//style for english
.componnent{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 25px;
  box-shadow: 0px 2px 20px 0px #00000040;
  >img{
    width:30% !important;
    height:30px;
    //background-color: red;
  }
  >p{
    font-weight: 600;
    color:black;
    text-align: start;
    //background-color: salmon;
  }
  >div{
    width: 70%;
    height: 77px;
    //background-color: salmon;
    display: grid;
    grid-template-columns: repeat(3,60px);
    grid-template-rows: repeat(2,30px);
  }

}
//style for arabic
.componnentAr{
 
  align-items: flex-end;
 
  >p{
    text-align: end;
    padding-right: 20px;
  }
  >div{
    align-content: center;
    justify-content: end;
    align-items: normal;
    justify-items: center;
  }

}

.componnent >div >img{
  width: 80%;
  height: 80%;
  justify-self: center;
  align-self: center;
  grid-area:1/1/3/2 ;
  //background-color: #202224
}
.componnent >div >p{
  
  grid-area:1/2/2/4 ;
 // background-color: #1f5386;
 align-self:end;
 text-align: start;
  font-weight: 600;
  color: black;
}
.componnent >div >span{
  
  grid-area:2/2/3/3 ;
  //background-color: #1f5386;
  text-align: start;
  align-self:start;
}
//style for english
.footer{
  width: 100%;
  min-height: 300px;
  background-color: #00020D;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  //background-color: #ac660c;

}
.footer >div:first-child{
  width: 250px;
  height: 100px;
 // background-color: #0d4941;
  overflow: hidden;
  h2{
    margin-top: 15px ;
    color:white;
    text-transform: uppercase;
    font-size: 17px;
  }
  >img{
    margin-top: 15px ;
    width: 100%;
    height: 30px;
   // background-color: #1f5386;
    padding-right: 55px;
  }
  
  
}
.footer >div:nth-child(2){
  width: 250px;
  height: 120px;
  //background-color: #348f11;
  display: flex;
  flex-direction: column;
  h2{
    margin-top: 15px ;
    color:white;
    font-size: 17px;
    padding-right: 40px;
    //background-color: red;
  }
  h2:first-letter{
    text-transform: capitalize;
  }
  >div{
    display: flex;
    height: 20px;
    color:white;
   // background-color: rgb(23, 2, 58);
    margin-top: 10px;
    align-items: center;
    width: 80%;
    align-self: center;
    >img{
      margin-right: 6px;
      height: 13px;
      width:13px;
    }

  }

}
.footer >div:nth-child(3){
  width: 150px;
  height: 170px;
  //background-color:#1f5386;
  color:white;
  text-align: center;
  h2{
    margin-top: 15px ;
    color:white;
    font-size: 17px;
    text-align: center;
    //background-color: rgb(18, 155, 14);
  }
  h2:first-letter{
    text-transform: capitalize;
  }
  p{
    //background-color: red;
    font-size: 15px;
    margin-top: 10px;
    text-transform:uppercase ;
    width: 60%;
    text-align: start;
    margin-left: 30px ;
  }
}
.footer >div:nth-child(4){
  width: 200px;
  height: 150px;
  text-align: start;
  color:white;
  margin-left: 30px ;
  padding-left: 30px ;
  h2{
    //background-color:#1f5386;
    margin-top: 15px ;
    font-size: 17px;
  }
  p{
    font-size: 15px;
    margin-top: 10px ;
    //background-color: red;
  }
    p:first-letter{
    text-transform: capitalize;
  }
}
//div 5 
.fotterLocation{
  width: 250px;
  height: 250px;
  padding-left: 30px ;
  //background-color:#089743;
  iframe{
    width: 85%;
    height: 85%;

  }
}
.footer >div:nth-child(6){
  width: 100%;
  height: 50px;
 // background-color:#11b811;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:16px;
  color:white;

}

//style for arabic
.footerAr >div:nth-child(6){
  margin-right: 50px;
}

.footerAr >div:nth-child(4){
  
  h2{
    padding-right: 40px;
    text-align: end !important;
  }
  p{
    text-align: end;
    padding-right:35px ;
  }
   
}
.footerAr >div:nth-child(3){
  h2{
    padding-right: 0px;
    text-align: end !important;
    //background-color: red;
  }
  p{
    text-align: end;
    margin-left: 60px ;
  }
}
.footerAr >div:nth-child(2){
  h2{
    padding-right: 40px;
    text-align: end;
  }
  >div{
    justify-content: end;;
    margin-right: 25px;
  }

}
.footerAr >div:first-child{
  h2{  
    margin-left: 25px ;
    text-align: center;
  }
  >img{ 
   // background-color: red;
  }
  
  
}
/* loader => start  */
.lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: rgb(27, 25, 25);
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  #loader {
    width: 500px;
    height: 500px;
    visibility: hidden;
    /* background-color: slategray; */
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* scrollUp => start */
  .scrollUp {
    width: 60px;
    height: 60px;
    //   background-color: blue;
    position: fixed;
    right: 20px;
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    /* border: 2px solid white; */
    cursor: pointer;
    //   visibility: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  
  // .scrollUp::after {
  //   content: "^";
  //   width: 50%;
  //   height: 50%;
  // //   background-color: darkorange;
  //   position: absolute;
  //   top: 10%;
  //   font-weight: 500;
  //   font-size: 40px;
  //   text-align: center;
  //   color: white;
  // }
  // .scrollUp::before {
  //   content: "^";
  //   color: white;
  //   position: absolute;
  //   top: 35%;
  //   width: 50%;
  //   height: 50%;
  // //   background-color: darkorange;
  //   font-weight: 500;
  //   font-size: 40px;
  //   text-align: center;
  // }
  /* scrollUp => end */
  
  /* loader => end  */
@media(max-width:360px){
  .footerAr{
   padding-left: 90px !important;  
   
  }

}
/* media => phone ultra*/
@media(max-width:450px){

  .footerBckground{
  >div{
    height: 66%;
    width: 30%;
    >p{
    font-size: 10px;
  }

  }

}


  .terms >div:nth-child(2){
    >img{
        margin-left: 0px;
      }
 }
 // for arabic style
 .footerAr{
  padding-left: 150px;  
  
  }
  .footerAr >div:first-child{
        h2{  
          margin-left: 25px ;
          text-align: end;

        }
        >img{ 
          padding-left: 60px;
          margin-left:45px;
        }
    }
    .footerAr >div:nth-child(3){
        h2{
          padding-right: 40px;
        }
      }
   
  /* .footer section */
  .footer{
    flex-direction: column;
    align-items: flex-start;
    
  }
  .footer   >div:not(.footer >div:last-child){
    width: 250px  ;
    //background-color:#9e9513 ;
    margin-left: 10px ;
    }
    .footer >div:nth-child(3) h2{
      text-align: start;
      //background-color: red;
      padding-left: 30px;
    }
    .fotterLocation{
      padding-left: 0px ;
      iframe{
        width: 85%;
        height: 85%;
      }
    }
    .footer >div:first-child{
      h2{
       // background-color: #1f5386;
        padding-right:87px;
      }
      >img{
        padding-right: 85px;
      }
    }
    .footer >div:nth-child(2){
      h2{
         // background-color: #057e29;
          padding-right: 40px;
        }
      }
  /* service section */
  .service{
  height: 600px;
  align-content: center;
  margin-top: 0px;
  >div:first-child{
     height: 15%;   
  }
}
  .swiper-slide {
    height: 150px !important;
    >img{
    width: 95%;
    margin-right: 0px ;
    margin-left: 10px ;
  }
  }
  .swiper {
    height: 60%;
}

/* about section */

.about{  
  justify-content: center;
  margin-top: 0px;
  
}

.about >div{
  width: 100%;
  min-height:750px;
}

/* about section "image" */

.about >div:nth-child(2){
  align-items: flex-start;
  justify-content: center;
  min-height:350px;
  order: 2;
  >img{
    margin-top: 30px;
    width: 90%;
    height: 90%;
  }
}

/* about section "content" */

.about >div:first-child{
}

.about >div:first-child  >div h2,.about >div:first-child  >div h3{  
  font-size: 30px 
}
.about >div:first-child  >div h2{
}
.about >div:first-child  >div h3{
  font-size: 25px ;
  padding-top: 7px;
}
.about >div:first-child  >div p{
}

/* background section "textCont" */

.textCont{
  width: 77%;
  padding-left: 0px;
  
  //background-color: #254178;
  p:first-child{
    font-size: 25px;
    padding-left: 15px;

    //background-color: aqua;
    
  }
  p:nth-child(2){
    font-size: 18px;
    padding-left: 15px;

    //background-color: aqua;
    
  }
  .contInput{
    width: 300px;
    margin-left: 0px;
    //background-color: aqua;
  }
}
.contInput input{ 
  margin-left: 20px;
  width: 60%;

} 

.contInput  button{
} 

/* how to send section "textCont" */

.howtOsEnd >div:nth-child(2) >div{
  margin-bottom: 20px;
}
.howtOsEnd >div:first-child{
  p{
    font-size: 30px;
  }
}

/*branches "textCont" */

.branches >div{
  width: 100%;
  margin-bottom: 0px;
}

.imageBranches{
  justify-content: center; 
}
.textBranches{
 
  >div{
    p{
      font-size: 16px; 
    }
  }
}
/*reviews "textCont" */
.componnent{
  width: 70% !important;
  >img{
    margin-left: 0px;
  }
  }
  .reviews{
    margin-top:22px;
  }

}
@media(max-width:1025px){

}
@media(max-width:820px){

}
@media(max-width:799px){

}

</style>