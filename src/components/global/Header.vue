<template>
    <header>
      <div :lang="myLanguage" id="logo-cont" class="logo-cont"> 
            <img class="logoImge" src="../../assets/images/logo.svg">
      </div>
      <ul id="nav">
        <li>
          <a  v-if="myLanguage =='En'"  href="#service">{{lannguage.home}}</a>
        </li>
        <li>
          <a href="#service">{{lannguage.service}}</a>
        </li>
        <li>
          <a href="#about">{{lannguage.about}}</a>
        </li>
        <li>
          <a href="#branches">{{lannguage.branches}}</a>
        </li>
        <li>
          <a href="#contact">{{lannguage.contact}}</a>
        </li>
        <li>
          <a  v-if="myLanguage =='Ar'"  href="#service">{{lannguage.home}}</a>
        </li>
        <span v-on:click="disappear()" id="x">x</span>
      </ul>
      <div>
        <div  class="contLang"  :lang="myLanguage">
            <img  id="lanImage" class= "lanImage" src="../../assets/images/lan.png">
            <select   v-on:change="lannguageChossed()" id="language-change"  class="language-change">
            <option  value="none"> cho</option>
            <option  value="En"> Eng</option>
            <option  value="Ar">Ar</option>
            </select>
        </div>
        <img :lang="myLanguage" class="icon-menu" v-on:click="appearMenue()"  src="../../assets/images/menu.svg">
      </div>
    </header>
  </template>
  <script>
  export default {
    name: "Header",
    data(){
      return{
          }
        },
    computed: {
        lannguage () {
          // console.log( this.$store.getters.isLogin)
          return this.$store.getters.catchLang
        },
        myLanguage () {
          return this.$store.getters.myLanguage
        },
    
    },
    methods: {
        appearMenue() {
            document.getElementById("nav").style.cssText = "right:0%;";
          },
        disappear() {
            document.getElementById("nav").style.cssText = "right:-100%;";
        },
        lannguageChossed() {
             const selectedLang = event.target.value;
             this.$store.commit('changeTheLang', selectedLang);   
             this.$store.commit('changeToarabicFormat');   
         },  
      
    },
    mounted() {
      setTimeout(() => {
        this.$store.commit('changeToarabicFormat');   
        // استخدم Vue Router للتحقق من المسار الحالي
        }, 100); // قمت هنا بتأخير التنفيذ لمدة 500 ميلي ثانية، يمكنك ضبط هذا الرقم حسب احتياجاتك
      },
    
  };
  </script>
  
  <style scoped lang="scss">
   a {
    font-weight: bold;
    color: #4b5a68;
    text-decoration: none;

    &.router-link-exact-active {
      color: var(--buttom);
    }
  }
  
  header {
    height: 100px;
    width: 100%;
    background-color:var(--popularCalar);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0px;
    z-index: 100;
    //background-color: red;
  }
  ul {
    width: 500px;
    margin-left:160px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30px;
    //background-color:rgb(33, 138, 42);
  }
  .logo-cont {
    width: 150px;
    height: 40px;
    margin-left: 100px;
    //background-color:rgb(122, 108, 108);
    padding-right: 60px;
    //   scss code
    img{
      width: 100%;
      height: 100%;
    }
  }
  .contLang{
    //background-color:salmon;
    width: 140px;
    height: 40px;
    // margin-left: 360px;
    margin-right: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    >div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 80px;
        height: 90%;
       //background-color: rgb(224, 224, 226);
        position: relative;
        border-radius: 4px;
   
    }

    button{
        width: 80px;
        height: 90%;
        background-color: var(--buttom);
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }

}
.language-change{
    width: 50px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    //background-color: red;

}
.lanImage{
    width: 20px;
    height: 20px;
}
.icon-menu,#x{
    display: none;
}
.icon-menu{
    width: 20px;
    height: 20px;
}

  /* media => ipad */
@media(max-width:799px){


   header ul{
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 240px;
      height:100vh;
      background-color:#eeeeef;
      opacity: 0,4;
      position: fixed;
      right: -240px;
      top: 0px;
      padding-top: 50px;
      padding-left: 17px;
      z-index: 1;
      transition: 0.5s;
   }
   header ul li {
        padding-top: 15px;
    }
   .icon-menu{
    display: block;
   }
   #x{
        display: block;
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 24px;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        width: 27px;
        height: 27px;
        border-radius: 13.5px;
        background-color: rgb(206, 203, 203);

    }
    .icon-menu:lang(En) {
        margin-left: 190px ;
        position: absolute;
        top: 50%;
        transform: translate(0px,-50%);

    }
    .icon-menu:lang(Ar) {
        position: absolute;
        top: 50%;
        left: 30px;
        transform: translate(0px,-50%);

    }

}

@media(max-width:429px){
   .logo-cont {
      margin-left:0px;
      padding-right: 0px;
      width: 140px;
      //background-color:rgb(11, 119, 52);
    }
   .logo-cont:lang(Ar) {
      order: 3 ;      
    }
    .contLang:lang(Ar){
      margin-left:70px;
      order: 2;
    }
    
}

@media(max-width:799px){
  
  
  header {
      display: flex;
      justify-content: space-evenly;
    }
  
    .logo-cont {
      margin-left:0px;
      //   scss code
      
    }
   
    header > div:nth-child(3) {
      // background-color:rgb(0, 255, 85);
      margin-right: 0px;
      width: 200px;
     
  }

}

  </style>
  