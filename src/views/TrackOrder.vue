<template>
  <div  v-if="trackAllData" class="track">
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
    <div class="content">
      <div>
              
          <h2>الاحمرى</h2>
          <p v-if="trackAllData.trip.trackingNumber">رقم البوليصة : {{ trackAllData.trip.trackingNumber}}</p>
          <div class="contentBar">
          <svg width="300" id="barcode"></svg> <!-- هنا سيتم عرض الباركود -->
          </div>
          <p>تاريخ الطباعة : {{ new Date(trackAllData.receiveReceipt.createDate).toLocaleDateString('en-US') }}</p>
          <p>تاريخ الشحن : {{ new Date(trackAllData.date).toLocaleDateString('en-US') }}</p>
          <p>نوع الخدمة: {{ trackAllData.serviceType.name }}</p>
          <p>الرقم اليدوي: {{ trackAllData.manualNo }}</p>
          <p>المسار : {{ trackAllData.trip.line.name}}</p>
          <p v-if="trackAllData.senderInfo.name">المرسل :{{ trackAllData.senderInfo.name }} </p>
          <p v-if="trackAllData.senderInfo.phoneNumber">جوال المرسل : {{ trackAllData.senderInfo.phoneNumber }}</p>
          <p v-if="trackAllData.receiverInfo.name ">المستلم :  {{ trackAllData.receiverInfo.name }}</p>
          <p v-if="trackAllData.receiverInfo.phoneNumber">جوال المستلم :  {{ trackAllData.receiverInfo.phoneNumber }}</p>
          <p v-if="trackAllData.taxNum">الرقم الضريبي : {{ trackAllData.taxNum}}</p>
          <p v-else>الرقم الضريبي : لا يوجد</p>       
          <p v-if=" trackAllData.receiverInfo.idNumber">السجل التجاري : {{ trackAllData.receiverInfo.idNumber }}</p>
          <p v-else>السجل التجاري :لا يوجد </p>
          <p v-if="trackAllData.notice"> :الملاحظات {{ trackAllData.notice }}</p>
          <p v-else>الملاحظات  :لا يوجد </p>
          <p>طرق الدفع: {{ trackAllData.paymentType === 1 ? 'نقدًا' : 'بطاقة ائتمان' }}</p>

      </div>
      <div>
        <table>
            <thead>
                <tr>
                    <th>الصنف</th>
                    <th>العدد</th>
                    <th>السعر</th>
                    <th>ضريبة القيمة المضافة</th>
                    <th>تكلفة إجمالية</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in trackAllData.items" :key="index">
                    <td>{{ item.merchandise.name }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ (item.price).toFixed(2) }} ريال</td>
                    <td>{{ item.addedValueTax }} ريال</td>
                    <td>{{ ((item.quantity * item.price) + item.addedValueTax).toFixed(2) }} ريال</td>
                </tr>
            </tbody>
        </table>
      </div>
      <div class="contentQar">
        <canvas id="qr-code"></canvas> <!-- هنا سيتم عرض رمز الاستجابة السريعة -->
      </div>
    </div>
    <div class="keepIt">
      <p>احتفظ بالفاتورة </p>
      <p>al-ahmari.com.sa</p>
    </div>
    <div class="buttoms">
      <button @click="homeBack">اغلاق </button>
      <button @click="printFun"> طباعة </button>
    </div>
  </div>
  <div class="thereisNo" v-else>
    <p>لا يوجد شحنة بهذا الرقم</p>
  </div>
</template>
<script>
import JsBarcode from 'jsbarcode';
import QRious from 'qrious';


export default {
  name: 'TrackOrder',
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

      },
      printFun(){
        window.print()

      }
      
    },
    
    created() {
  // استخدم Vue Router للتحقق من المسار الحالي
      if (this.$route.path === '/TrackOrder') {
        this.$store.state.showButton = false;
      }
     // console.log("Value of showButton:", this.showButton);
    },
    
  mounted() {
    // تحديد العنصر الذي تريد عرض الباركود فيه
    let barcodeElement = document.getElementById('barcode');
    // توليد الباركود باستخدام الرقم المناسب
    JsBarcode(barcodeElement, this.trackAllData.trip.trackingNumber, {
      format: 'CODE128', // يمكنك تحديد الشكل هنا
      displayValue: false, // قم بتعيينها على true إذا كنت ترغب في عرض القيمة أعلى الباركود
    });
    barcodeElement.setAttribute('width', '400');
    barcodeElement.setAttribute('height', '200');

    // تحديد العنصر الذي تريد عرض رمز الاستجابة السريعة فيه
    let qrCodeElement = document.getElementById('qr-code');
    // إنشاء رمز الاستجابة السريعة باستخدام الرقم المناسب
    let qr = new QRious({
      element: qrCodeElement,
      value: this.trackAllData.trip.trackingNumber, // قيمة رمز الاستجابة السريعة
      size: 250 // حجم رمز الاستجابة السريعة
    });
  }

  
}
</script>
<style lang="scss" scoped>
 
 .router-link-exact-active {
  
    //border-bottom: var(--buttom) 2px solid !important;
        p{
        color: var(--buttom) !important;
        }
       
    }
  .thereisNo{

    width: 100%;
    height:100vh;
    //background-color: rgb(38, 136, 136);
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
 }
  .track{
    width: 100%;
     height: 1400px;
   // background-color: rgb(38, 136, 136);
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
  .content{
    width: 120%;
    height: 1090px;
    //background-color: rgb(57, 131, 23);
    display: flex;
    flex-wrap: wrap;
    //background-color: rgb(57, 131, 23);
    overflow: hidden;
    
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
  .content div:first-child{
     // background-color: rgb(66, 71, 64);
    width: 100%;
    height:550px;
    //background-color: rgb(7, 117, 121);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding-left: 300px;
    
    >div{
      width: 60%;
      height: 90px;
      //background-color: red;  
      display: flex;
      align-items: center;
      justify-content:flex-end ;
      position: relative;
      svg{
        height: 90%;
        width: 200px !important;
        position: absolute;
        right: -45px;
      }
    }
    h2{
      width: 60%;
      //background-color: red;
      text-align: end;
      font-size: 40px;
      //padding-left: 300px;
    }
    
    p{
      width: 60%;
      height: 22px;
      //background-color: red;
      text-align: end;
      //line-height: 20px;
        font-weight: 600;
    }
    
  }
  .content >div:nth-child(2){
    width: 100%;
    height: 260px;
    //background-color: rgb(102, 117, 117);
    display: flex;
    padding-left: 400px;

    justify-content: center;
    table{
      margin-top: 15px;
      width: 200px;
      height: 200px;
      background-color: #B08347;
    }
    table td, table th{
      border: solid 1px #00000099;
    }
  }
  .contentQar{

    width: 100%;
    height: 250px;
    //background-color: rgb(38, 136, 136);
    padding-left: 370px;

}
.keepIt{
  width: 51%;
  height: 50px;
  //background-color: red;
  p{
    padding-left: 340px;
    //background-color: rgb(20, 138, 30);
  }

}
.buttoms{
  width: 51%;
  height: 120px;
  //background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 380px;
  button{
    width: 90px;
    height: 30px;
    background-color: #B08347;
    border-radius: 5px;
    color: white;
    cursor: pointer;

  }
}
@media print {
  .title{
    display: none;
  }
  .buttoms{
    display: none;
  }
  .content div:first-child{
    h2{
      //padding-right: 200px;
      padding-left :20px;
    }
  }
  .keepIt{
  p{
    padding-left:160px;
   width: 100%;
  }
  }

  .contentQar{
    width: 100%;
    height: 300px;
    //background-color: rgb(38, 136, 136);
    
      padding-left: 190px;
      position: relative;
      bottom: 10px;

    }
    .content >div:nth-child(2){
    width: 100%;
    //background-color: rgb(102, 117, 117);
    display: flex;
    
    
    height: 200px;
    padding-left:200px;

    //justify-content: center;
    table{
      width: 50%;
      height: 200px;
      //background-color: #B08347;


      margin-top: -10px;
    }
  }
    }

   
/* media => phone ultra*/
@media(max-width:450px){

  .buttoms{
  padding-left: 0px;
  }
  .contentQar{
  
    width: 100%;
    height: 250px;
    //background-color: rgb(38, 136, 136);
    padding-left: 0px;
    
  }
  .keepIt{
  p{
    padding-left:0px;
  }

}
  .content >div:first-child{
    padding-left: 0px;
    padding-right: 10px;
    align-items: flex-end;
    
    h2{
      //background-color: rgb(38, 136, 136);
      padding-right: 110px;
      
    }
    p{
      padding-right: 110px;
      width: 75%;
    
    }
    div{
      svg{
          height: 90%;
          width: 200px !important;
          position: absolute;
          right: 70px;
        }

    }
  }
  .content >div:nth-child(2){
      padding-left: 0px;
      padding-right: 110px;
      justify-content: flex-end;
    }
}
@media(max-width:360px){
      .content div:first-child{
    
    h2{
      //background-color: rgb(38, 136, 136);
      padding-right: 60px;
      
    }
    p{
      padding-right: 60px;
    
    }
  }
    }
</style>
