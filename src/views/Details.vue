<template>
    <div class="track">
      <div class="title">
        <div>
            <router-link :to="{ name: 'TrackOrder', params: { id: 14146961 } }">
              <p>تتبع الشحنة</p>
            </router-link>
          </div>
          <div>
          <router-link :to="{ name: 'Details', params: { id: 14146961 } }">
            <p>التفاصيل</p>
          </router-link>
        </div>
      </div>


      <div v-if="trackAllData && trackAllData.trip" class="content">
       
        <div  v-if="trackAllData.activities && trackAllData.activities.length > 0">
            <p v-if="trackAllData.activities[trackAllData.activities.length-1].state == 1"> حالة الشحنة: تم استلام الشحنة في فرع  <span class="dis">{{ trackAllData.trip.line.source.city.name}}</span></p>
            <p v-if="trackAllData.activities[trackAllData.activities.length-1].state == 2"> حالة الشحنة : تم مغادرة الشحنة من فرع <span class="dis">{{ trackAllData.trip.line.source.city.name}}</span>    </p>
            <p v-if="trackAllData.activities[trackAllData.activities.length-1].state == 3"> حالة الشحنة : تم وصول الشحنة إلى فرع  <span class="dis">{{ trackAllData.trip.line.destination.city.name}}</span>   </p>
            <p v-if="trackAllData.activities[trackAllData.activities.length-1].state == 4"> حالة الشحنة :الشحنة في الطريق للمستلم  </p>
            <p v-if="trackAllData.activities[trackAllData.activities.length-1].state == 5"> حالة الشحنة : تم تسليم الشحنة بنجاح     </p>
            <p v-if="trackAllData.activities[trackAllData.activities.length-1].state == 6"> حالة الشحنة : فشل تسليم الشحنة - عادت إلى المستودع </p>
          </div>
        <div class="distnation">
          <div>
            <span class="dis">{{ trackAllData.trip.line.destination.city.name}}</span>
            <img class="rec" src="../assets/images/rectangle.svg">
          </div> 
          <img class="line" src="../assets/images/line.svg">
          <div>
            <span class="dis">{{ trackAllData.trip.line.source.city.name}}</span>
           <img class="squ" src="../assets/images/square.svg">
         </div> 
           
        </div>

        <div>
          
          <div v-if="trackAllData.activities[2]">
            <p v-if="trackAllData.activities[2].state == 3">تم وصول الشحنة إلى فرع  <span class="dis">{{ trackAllData.trip.line.destination.city.name}}</span>   </p>
            <p v-if="trackAllData.activities[2].state == 4">الشحنة في الطريق للمستلم     </p>
            <p v-if="trackAllData.activities[2].state == 5">  تم تسليم الشحنة بنجاح   </p>
            <p v-if="trackAllData.activities[2].state == 6">  فشل تسليم الشحنة - عادت إلى المستودع   </p>
            <p>{{ new Date(trackAllData.activities[2].date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }) }}</p>
          </div>
          <div v-if="trackAllData.activities[1]">
            <p v-if="trackAllData.activities[1].state == 2">تم مغادرة الشحنة من فرع   <span class="dis">{{ trackAllData.trip.line.source.city.name}}</span></p>
            <p v-if="trackAllData.activities[1].state == 3">تم وصول الشحنة إلى فرع   <span class="dis">{{ trackAllData.trip.line.destination.city.name}}</span>  </p>
            <p v-if="trackAllData.activities[1].state == 4">  الشحنة في الطريق للمستلم   </p>
            <p v-if="trackAllData.activities[1].state == 5">تم تسليم الشحنة بنجاح     </p>
            <p v-if="trackAllData.activities[1].state == 6">فشل تسليم الشحنة - عادت إلى المستودع</p>
            <p>{{ new Date(trackAllData.activities[1].date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }) }}</p>
          </div>
          <div v-if="trackAllData.activities[0]">
            <p v-if="trackAllData.activities[0].state == 1"> تم استلام الشحنة في فرع <span class="dis">{{ trackAllData.trip.line.source.city.name}}</span></p>
            <p v-if="trackAllData.activities[0].state == 2"> تم مغادرة الشحنة من فرع    <span class="dis">{{ trackAllData.trip.line.source.city.name}}</span> </p>
            <p v-if="trackAllData.activities[0].state == 3"> تم وصول الشحنة إلى فرع  <span class="dis">{{ trackAllData.trip.line.destination.city.name}}</span>   </p>
            <p v-if="trackAllData.activities[0].state == 4"> الشحنة في الطريق للمستلم  </p>
            <p v-if="trackAllData.activities[0].state == 5"> تم تسليم الشحنة بنجاح     </p>
            <p v-if="trackAllData.activities[0].state == 6"> فشل تسليم الشحنة - عادت إلى المستودع </p>
            <p>{{ new Date(trackAllData.activities[0].date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }) }}</p>
          </div>

        </div>

        <div>

          <div v-if="trackAllData.activities[4]">
            <p v-if="trackAllData.activities[4].state == 5">  تم تسليم الشحنة بنجاح </p>
            <p v-if="trackAllData.activities[4].state == 6"> فشل تسليم الشحنة - عادت إلى المستودع  </p>
            <p>{{ new Date(trackAllData.activities[4].date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }) }}</p>  
          </div>
          <div v-if="trackAllData.activities[3]">
            <p v-if="trackAllData.activities[3].state == 4"> الشحنة في الطريق للمستلم</p>
            <p v-if="trackAllData.activities[3].state == 5">تم تسليم الشحنة بنجاح </p>
            <p v-if="trackAllData.activities[3].state == 6"> فشل تسليم الشحنة - عادت إلى المستودع  </p>
            <p>{{ new Date(trackAllData.activities[3].date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }) }}</p>
          </div>

        </div>

      </div>
      <div class="buttoms">
      <button @click="homeBack">اغلاق </button>

    </div>
    </div>
  </template>
  <script>
  
  export default {
    name: 'Details',
    data(){
      return{
          }
        },
    components: { 
     
    },
    computed: {
      trackAllData () {
      return this.$store.state.trackData
    },
        
    },
    methods:{
      homeBack(){
        this.$router.push({ name: 'home' });

      }
      
    },
    created() {
  // استخدم Vue Router للتحقق من المسار الحالي
      if (this.$route.path === '/Details') {
        this.$store.state.showButton = false;
      }

    },
        beforeMount(){
        this.id = this.$route.params.id        
      },
  }
  </script>
  <style lang="scss" scoped>
  

    .track{
      width: 100%;
      height: 1120px;
     // background-color: rgb(38, 136, 136);
     background-color:  #ebe8e4;

      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: center;
    }
    .title{
      width: 100%;
      height: 100px;
      background-color: #B08347;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .title >div{
      width: 50%;
      height: 100%;
      p{
        
        text-align: center;
        line-height: 10vh;
        text-transform: capitalize;
        font-weight: 600;
        color: white;
      }
  
    }
    .content{
      width: 120%;
      height: 890px;
     // background-color: rgb(124, 20, 42);
     background-color:  #ebe8e4;

      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      >div{
        padding-right: 40px;
      }
      >div:first-child{
          height: 100px;
          width: 100%;
         // background-color: rgb(143, 141, 9);
          border-bottom:2px solid #737373 ;
          p{
            font-size: 30px;
            font-weight: 600;
            line-height: 100px;
            text-align: end;
            margin-right: 50px;
          }
          
        }
        >div:nth-child(2){
            height: 240px;
            width: 100%;
            //background-color: rgb(7, 124, 109);
            display: flex;
            flex-wrap: wrap;
            justify-content:center;
            align-items: center;
            >div{
              width: 30%;
              height: 70%;
              position: relative;
              //background-color: #737373;
              .dis{
                position: absolute;
                left: 50%;
                top: 50%;
                //background-color: red;
                transform: translate(-50%,-50%);
                font-size: 22px;
                
                
              }
            }
            .rec,.squ{
                width: 100%;
                height: 100%;
            }
            .line{
                width: 39%;
                height: 70%;

            }
        }
        >div:nth-child(3),>div:nth-child(4){
            min-height: 200px;
            width: 100%;
           // background-color: rgb(75, 63, 9);
            display: flex;
            flex-wrap: wrap;
            justify-content:flex-end;
            align-items: center;
            border-top: 2px solid #000000;
            >div{
                width: 260px;
                height: 100px;
                position: relative;
                p{
                //background-color: rgb(107, 136, 75);
                margin-top: 7px;
                font-weight: 600;  
                }
            }
            }
           >div:nth-child(4){
               border-bottom:2px solid #000000 ;
               >div{
                p{
                    //background-color:  #a18f76 !important;
                }
               }
           }
           >div::after{
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 5px;
           // background-color: black;
            position: absolute;
            top: -20px;

           }
      }
        
    .router-link-exact-active {
        p{
        color: var(--buttom) !important;
        }
    }
    .buttoms{
  width: 50%;
  height: 120px;
  //background-color: red;
  display: flex;
  background-color:  #ebe8e4;
  align-items: center;
  justify-content: space-evenly;
  button{
    width: 90px;
    height: 30px;
    background-color: #B08347;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
}
    /* media => phone ultra*/
  @media(max-width:450px){
    .content div:first-child{
      padding-left: 0px;
      padding-right: 10px;
      align-items: flex-end;
    }
    
    .content{
        background-color: white;
      
      >div:first-child{
       
          p{
            text-align: start;
            margin-right: 0px;
            padding-left: 10px;
            
        }
          
        }      
        >div:nth-child(3),>div:nth-child(4){
            background-color: white;

            
            >div{
               margin-right: -40px;
               background-color: white;
               p{
                   text-align: end;
                   padding-right: 20px;

                 }
                    }
                }
                >div:nth-child(4){
                    border-bottom:2px solid #000000 ;
                }
        
      
    }
  
  }
  </style>
  