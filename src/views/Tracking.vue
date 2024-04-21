<template>
  <base-card dark>
    <v-img :src="require('@/assets/1.jpg')" class="grey lighten-2" height="400" width="100%">
      <div class="table" v-if="$vuetify.lang.current == 'ar'">
        <div class="cell">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 text-center">
                <div class="welcome_text">
                  <div class="welcome_form">
                    <input class="form-control" type="text" placeholder="ادخل رقم الشحنة" v-model="TrackingId" />
                    <button class="submit" @click="view(TrackingId)">
                      <span>تتبع شحنتك</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="$vuetify.lang.current == 'en'">
        <div style="text-align: end !important">
          <div class="welcome_text">
            <div class="welcome_form">
              <input class="form-control" type="text" :placeholder="$vuetify.lang.t('$vuetify.tracknum')"
                v-model="TrackingId" style="padding-left: 2%" />
              <button class="submit" @click="view(TrackingId)" style="right: 2%">
                <span>{{ $vuetify.lang.t("$vuetify.track") }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </v-img>
    <v-dialog v-model="showtracking" width="80%" persistent>
      <v-card height="225vh" style="direction: ltr;">
        <div>
          <v-container v-if="shipment" id="modalInvoice">
            <div class="receipt">
              <div class="headerTitle">الأحمرى</div>
              <div class="headerSubTitle">رقم البوليصة</div>
              <div id="location">{{ shipment.trackingNumber }}</div>
              <div class="flex">
                <div id="barcodetrack">
                  <img style="width: 163px;height: 30px;" :src="barcodetracking" />
                </div>
              </div>
              <div style="display: flex;">
                <div style="flex: 1 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ formateDateWithMoment(new Date(),
                  "YYYY/MM/DD") }} :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">تاريخ الطباعة</h2>
                </div>
              </div>
              <div style="display: flex;">
                <div style="flex: 1 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">300163969600003 :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">الرقم الضريبى</h2>
                </div>
              </div>
              <div class="keepItBody">------------------------</div>

              <div style="display: flex;">
                <div style="flex: 2 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ shipment.date | ToDate }} :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">تاريخ الشحن</h2>
                </div>
              </div>
              <div style="display: flex;">
                <div style="flex: 2 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ shipment.serviceType.name }} :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">نوع الخدمة</h2>
                </div>
              </div>
              <div style="display: flex;">
                <div style="flex: 2 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ shipment.manualNo }} :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">الرقم اليدوي</h2>
                </div>
              </div>
              <div style="display: flex;">
                <div style="flex: 2 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ shipment.trip.line.name }} :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">المسار</h2>
                </div>
              </div>
              <div style="display: flex;">
                <div style="flex: 2 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ shipment.senderInfo ?
                  shipment.senderInfo.name : "unknown" }} :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">المرسل</h2>
                </div>
              </div>
              <div style="display: flex;">
                <div style="flex: 2 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ shipment.senderInfo.phoneNumber }}
                    :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">جوال المرسل</h2>
                </div>
              </div>
              <div style="display: flex;">
                <div style="flex: 2 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ shipment.receiverInfo ?
                  shipment.receiverInfo.name : "unknown" }} :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">المستلم</h2>
                </div>
              </div>
              <div style="display: flex;">
                <div style="flex: 2 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ shipment.receiverInfo.phoneNumber
                  }} :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">جوال المستلم</h2>
                </div>
              </div>
              <div style="display: flex;">
                <div style="flex: 2 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ shipment.receiver ?
                  shipment.receiver.taxNum : shipment.taxNum }} :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">الرقم الضريبى</h2>
                </div>
              </div>
              <div style="display: flex;">
                <div style="flex: 2 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ shipment.receiver ?
                  shipment.receiver.commercialRegNum : "" }} :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">السجل التجارى</h2>
                </div>
              </div>
              <div class="keepItBody">------------------------</div>
              <div style="display: flex;">
                <div class="c" style="flex: 2 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ shipment.notice }} :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">الملاحظات</h2>
                </div>
              </div>
              <div class="keepItBody">------------------------</div>
              <div style="display: flex;">
                <div style="flex: 2 1 50%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">{{ shipment.paymentType | PaymentTypesAll
                  }} :</h2>
                </div>
                <div style="flex: 20%;">
                  <h2 id="date" style="text-align: right; font-weight: bold;">طريقة الدفع</h2>
                </div>
              </div>
              <div class="keepItBody">------------------------</div>
              <div id="bot">
                <div id="table">
                  <table>
                    <tr class="tabletitle">
                      <td class="Rate" style="font-size: small">
                        <h2>السعر</h2>
                      </td>
                      <td class="Hours" style="font-size: small">
                        <h2>العدد</h2>
                      </td>
                      <td class="item" style="font-size: small">
                        <h2>الصنف</h2>
                      </td>
                    </tr>

                    <tr class="service">
                      <td class="tableitem">
                        <div id="block_container" style="text-align: center">
                          <div style="display: inline-block; vertical-align: middle">
                            <p class="itemtext" style="text-align: center; padding-right: 5px">
                              ريال
                            </p>
                          </div>
                          <div style="display: inline-block; vertical-align: middle">
                            <p class="itemtext" style="text-align: center; font-weight: bold">
                              {{ shipment.items[0].price }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext" style="text-align: center; font-weight: bold">
                          <span v-if="shipment.items && shipment.items.length >= 1">
                            {{ shipment.items[0].quantity }}
                          </span>
                        </p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext" style="padding-right: 2px; font-weight: bold">
                          <span v-if="shipment.items && shipment.items.length >= 1">{{
                          shipment.items[0].merchandise.name
                          }}</span>
                        </p>
                      </td>
                    </tr>
                    <tr class="tabletitleprice">
                      <td class="Rate">
                        <div id="block_container" style="text-align: center">
                          <div style="display: inline-block; vertical-align: middle">
                            <p class="itemtext" style="text-align: center; padding-right: 5px">
                              ريال
                            </p>
                          </div>
                          <div style="display: inline-block; vertical-align: middle">
                            <h2>{{ shipment.otherServicesPrice }}</h2>
                          </div>
                        </div>
                      </td>

                      <td class="payment" colspan="2">
                        <h2>التغليف</h2>
                      </td>
                    </tr>
                    <tr class="tabletitleprice">
                      <td class="Rate">
                        <div id="block_container" style="text-align: center">
                          <div style="display: inline-block; vertical-align: middle">
                            <p class="itemtext" style="text-align: center; padding-right: 5px">
                              ريال
                            </p>
                          </div>
                          <div style="display: inline-block; vertical-align: middle">
                            <h2>{{ shipment.duePrice }}</h2>
                          </div>
                        </div>
                      </td>

                      <td class="payment" colspan="2">
                        <h2>المسترد</h2>
                      </td>
                    </tr>
                    <tr class="tabletitleprice">
                      <td class="Rate">
                        <div id="block_container" style="text-align: center">
                          <div style="display: inline-block; vertical-align: middle">
                            <p class="itemtext" style="text-align: center; padding-right: 5px">
                              ريال
                            </p>
                          </div>
                          <div style="display: inline-block; vertical-align: middle">
                            <h2>{{ shipment.addedValueTax }}</h2>
                          </div>
                        </div>
                      </td>

                      <td class="payment" colspan="2">
                        <h2><a>15%</a>&nbsp;&nbsp;الضريبة</h2>
                      </td>
                    </tr>

                    <tr class="tabletitleprice">
                      <td class="Rate">
                        <div id="block_container" style="text-align: center">
                          <div style="display: inline-block; vertical-align: middle">
                            <p class="itemtext" style="text-align: center; padding-right: 5px">
                              ريال
                            </p>
                          </div>
                          <div style="display: inline-block; vertical-align: middle">
                            <h2>{{ shipment.totalPrice }}</h2>
                          </div>
                        </div>
                      </td>
                      <td class="payment" colspan="2">
                        <h2>اجمالى المبلغ</h2>
                      </td>
                    </tr>
                  </table>
                </div>
                <!--End Table-->
              </div>
              <svg id="barcode"></svg>

              <hr />

              <!-- Items Purchased -->
              <div class="flex">
                <div id="qrcode">
                  <img :src="qrcodepp" />
                </div>
              </div>
              <div class="keepIt">!احتفظ بالفاتورة</div>
              <div class="keepIt">rasil.com.sa</div>
              <div class="keepItBody">جدة - حي المحجر خلف شركه الكهرباء</div>
              <br />
              <div class="keepItBody">0126377779 / 0126377771</div>
              <br />
              <div class="keepItBody">------------------------</div>
            </div>
          </v-container>
        </div>

        <v-card-actions height="30vh">
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="cancelview()">إلغاء</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </base-card>
</template>
<style lang="scss" scoped>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0px;
  padding: 0px;
}

::selection {
  background: #f31544;
  color: #FFF;
}

::moz-selection {
  background: #f31544;
  color: #FFF;
}

h1 {
  font-size: 1.5em;
  color: #222;
}

.mmm {
  display: flex;
}

/* Create two equal columns that sits next to each other */
.mmmm {
  flex: 50%;

}

h2 {
  font-size: .9em;
  text-align: center;
}

h3 {
  font-size: 1.2em;
  font-weight: 300;
  line-height: 2em;
}

p {
  font-size: .9em;
  line-height: 1.2em;
}

#top,
#mid,
#bot {
  /* Targets all id with 'col-' */
  border-bottom: 1px solid #EEE;
}

#top {
  min-height: 100px;
}

#mid {
  min-height: 80px;
}

#bot {
  min-height: 50px;
}

#top .logo {
  //float: left;
  height: 60px;
  width: 60px;
  background: url(http://michaeltruong.ca/images/logo1.png) no-repeat;
  background-size: 60px 60px;
}

.clientlogo {
  float: left;
  height: 60px;
  width: 60px;
  background: url(http://michaeltruong.ca/images/client.jpg) no-repeat;
  background-size: 60px 60px;
  border-radius: 50px;
}

.info {
  display: block;
  //float:left;
  margin-left: 0;
}

.title {
  float: right;
}

.title p {
  text-align: right;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: black solid 1px;
}

.tabletitle {
  //padding: 5px;
  font-size: .5em;
  background: #EEE;
}

.service {
  border-bottom: 1px solid #EEE;
}

.item {
  width: 24mm;
}

.itemtext {
  font-size: 15px;
  text-align: end;
}

#legalcopy {
  margin-top: 5mm;
}

.receipt {
  width: 72mm;
  padding-left: 18px;
  padding-right: 25px;
  height: 297mm;
  max-height: 297mm;
}

.orderNo {
  width: 100%;
  text-align: right;
  padding-bottom: 1mm;
  font-size: 8pt;
  font-weight: bold;
}

td,
th {
  border: black solid 1px;
  padding: 1px 2px 1px 2px;
}

.orderNo:empty {
  display: none;
}

.headerSubTitle {
  font-family: 'Equestria', 'Permanent Marker', cursive;
  text-align: center;
  font-size: 12pt;
}

.headerTitle {
  font-family: 'Equestria', 'Permanent Marker', cursive;
  text-align: center;
  font-size: 40pt;
  font-weight: bold;
}

.mazen {
  height: 30px;
  width: 50%;

  float: right;
}

.mazen2 {
  height: 30px;
  width: 50%;

}

div.c {
  max-width: 72mm;
  display: inline-block;
  /* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 4em;
}

#location {
  margin-top: 5pt;
  text-align: center;
  font-size: 16pt;
  font-weight: bold;
}


#date {
  margin: 5pt 0px;
  text-align: center;
  font-size: 12pt;
}

#barcode {
  display: block;
  margin: 0px auto;
}

#barcode:empty {
  display: none;
}

.watermark {
  position: absolute;
  left: 7mm;
  top: 60mm;
  width: 75mm;
  opacity: 0.1;
}

.keepIt {
  text-align: center;
  font-size: 12pt;
  font-weight: bold;
  padding-top: 7px;
  padding-bottom: 7px;
}

.keepItBody {
  text-align: center;
  font-size: 8pt;
}

.item {
  margin-bottom: 1mm;
}

.itemRow {
  display: flex;
  font-size: 8pt;
  align-items: baseline;
}

.itemRow>div {
  align-items: baseline;
}

.itemName {
  font-weight: bold;
}

.itemPrice {
  text-align: right;
  flex-grow: 1;
}

.itemColor {
  width: 10px;
  height: 100%;
  background: yellow;
  margin: 0px 2px;
  padding: 0px;
}

.itemColor:before {
  content: "\00a0";
}


.itemData2 {
  text-align: right;
  flex-grow: 1;
}

.itemData3 {
  width: 15mm;
  text-align: right;
}

.itemQuantity:before {
  content: "x";
}

.itemTaxable:after {
  content: " T";
}

.flex {
  display: flex;
  justify-content: center;
}

#qrcode {
  align-self: center;
  flex: 0 0 100px
}

.totals {
  flex-grow: 1;
  align-self: center;
  font-size: 8pt;
}

.totals .row {
  display: flex;
  text-align: right;
}

.totals .section {
  padding-top: 2mm;
}

.totalRow>div,
.total>div {
  text-align: right;
  align-items: baseline;
  font-size: 8pt;
}

.totals .col1 {
  text-align: right;
  flex-grow: 1;
}

.totals .col2 {
  width: 22mm;
}

.totals .col2:empty {
  display: none;
}

.totals .col3 {
  width: 15mm;
}

.footer {
  overflow: hidden;
  margin-top: 5mm;
  border-radius: 7px;
  width: 100%;
  background: black;
  color: white;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
}

.footer:empty {
  display: none;
}

.eta {
  padding: 1mm 0px;
}

.eta:empty {
  display: none;
}

.eta:before {
  content: "Estimated time order will be ready: ";
  font-size: 8pt;
  display: block;
}

.etaLabel {
  font-size: 8pt;
}

.printType {
  padding: 1mm 0px;
  width: 100%;
  background: grey;
  color: white;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
}

.about {
  font-size: 12pt;
  overflow: hidden;
  background: #FCEC52;
  color: #3A5743;
  border-radius: 7px;
  padding: 0px;
  position: absolute;
  width: 500px;
  text-align: center;
  left: 50%;
  margin-top: 50px;
  margin-left: -250px;
}

.arrow_box h3,
ul {
  margin: 5px;
}

.about li {
  text-align: left;
}

.arrow_box {
  position: absolute;
  background: #88b7d5;
  padding: 5px;
  margin-top: 20px;
  left: 95mm;
  top: 2;
  width: 500px;
  border: 4px solid #c2e1f5;
}

.arrow_box:after,
.arrow_box:before {
  right: 100%;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.arrow_box:after {
  border-color: rgba(136, 183, 213, 0);
  border-right-color: #88b7d5;
  border-width: 30px;
  margin-top: -30px;
}

.arrow_box:before {
  border-color: rgba(194, 225, 245, 0);
  border-right-color: #c2e1f5;
  border-width: 36px;
  margin-top: -36px;
}




.track {
  position: relative;
  background-color: #ddd;
  height: 7px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 60px;
  margin-top: 50px;
}

.track .step {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  width: 25%;
  margin-top: -18px;
  text-align: center;
  position: relative;
}

.track .step.active:before {
  background: #bd1f2d;
}

.track .step::before {
  height: 7px;
  position: absolute;
  content: "";
  width: 100%;
  left: 0;
  top: 18px;
}

.track .step.active .icon {
  background: #bd1f2d;
  color: #fff;
}

.track .icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  position: relative;
  border-radius: 100%;
  background: #ddd;
}

.track .step.active .text {
  font-weight: 400;
  color: #000;
}

.track .text {
  display: block;
  margin-top: 7px;
}

.shipment-info {
  border-radius: 0.5rem;
}

.follow-order {
  text-align: start;
}

.follow-order .order-progress .shape {
  background-color: #fff;
  padding: 10px 30px;
  width: fit-content;
  height: fit-content;
  border-top-left-radius: 20px;
  font-size: 12px;
}

.follow-order .order-progress .content {
  background-color: #fff;
  padding: 50px 20px;
}

.follow-order .order-progress .content .progress-line .plain {
  color: #eeeeee;
  background-color: #eeeeee;
}

.follow-order .order-progress .content h2 {
  font-size: 15px;
}

.follow-order .order-progress .content .steps {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  background: #eeeeee;
  position: relative;
  padding: 50px;
  font-weight: 200;
}

/* .follow-order .order-progress .content .steps .progress-line {
  position: absolute;
  width: 100%;
} */

.follow-order .order-progress .content .steps hr {
  position: absolute;
  top: 50%;
  width: 100%;
  margin: 0;
  z-index: 1;
}

.follow-order .order-progress .content .steps .plain {
  background: #4b4b4b;
}

.follow-order .order-progress .content .steps .actly {
  background: #117d5d;
  height: 5px;
  width: 60%;
  left: 0;
  opacity: 1;
  overflow: initial;
}

.follow-order .order-progress .content .steps .actly::after {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  -moz-border-radius: 7.5px;
  -webkit-border-radius: 7.5px;
  border-radius: 50%;
  background-color: #347e5d;
  transform: translate(12px, -8px);
  z-index: 5;
}

.follow-order .order-progress .content .steps .step {
  z-index: 2;
  text-align: center;
  margin-top: 20px;
}

.follow-order .order-progress .content .steps .step .icon {
  width: 50px;
  height: 50px;
  border: 1px solid #616161;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  background-color: #eeeeee;
  font-size: 23px;
}

.follow-order .order-progress .content .steps .step.done .icon {
  background-color: #117d5d;
  color: #fff;
  border: 0;
}

.follow-order .order-progress .content .steps .step .title {
  font-size: 14px;
  transform: translateY(10px);
}

.follow-order .order-statue {
  background-color: #fff;
  padding: 20px;
}

.follow-order .order-statue h2 {
  font-size: 20px;
  font-weight: bold;
}

.follow-order .order-statue .path .to {
  width: 100px;
  height: 100px;
  line-height: 90px;
  text-align: center;
  border-radius: 50%;
  background-color: #eee;
  border: 3px solid #bd1f2d;
  padding: 2px;
}

.follow-order .order-statue .path .hr {
  width: 2px;
  height: 50px;
  background-color: #8e8e8e;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.follow-order .order-statue .path .from {
  width: 100px;
  height: 100px;
  line-height: 90px;
  text-align: center;
  border-radius: 50%;
  background-color: #eee;
  border: 3px solid #000000;
  padding: 2px;
}

.follow-order .order-statue .path-date {
  position: relative;
  margin-right: 50px;
}

.follow-order .order-statue .path-date ul {
  color: rgb(107, 107, 107);
  padding: 1.1rem;
  position: relative;
  z-index: 2;
}

.follow-order .order-statue .path-date ul li {
  margin: 10px 0;
}

.follow-order .order-statue .path-date ul li.now {
  color: #117d5d;
}

.follow-order .order-statue .path-date .hr {
  width: 2px;
  height: 100%;
  background-color: #8e8e8e;
  position: absolute;
  right: 0;
  z-index: 1;
}

.follow-order .order-info {
  margin: 50px 0;
}

.follow-order .order-info .shape {
  background-color: #fff;
  padding: 10px 30px;
  width: fit-content;
  height: fit-content;
  border-top-left-radius: 20px;
  font-size: 12px;
}

.follow-order .order-info .the-info {
  background-color: #fff;
  padding: 50px;
}

.follow-order .order-info .the-info ul {
  list-style: none;
  color: #616161;
}

.follow-order .order-info .the-info ul li {
  margin: 10px auto;
}

.follow-order .order-info .the-info .with-border {
  border-left: 2px solid #444444;
}

@media (max-width: 998px) {
  .follow-order .order-info .the-info .with-border {
    border-left: none;
  }
}

@media (max-width: 768px) {
  .follow-order .order-statue .row .column-one {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .follow-order .order-statue .path-date {
    margin-top: 50px;
  }
}

@media (max-width: 560px) {
  .follow-order .order-progress .content .steps .step .title {
    font-size: 10px;
  }

  .follow-order .order-progress .content .steps .step {
    margin-left: 10px;
    margin-right: 10px;
  }

  .follow-order .order-info .the-info {
    padding: 50px 0;
  }
}
</style>
<script>
import ApiService from "../../services/TrackingService";
import fatooraKsa from "fatoora-ksa";
import moment from 'moment';
import { toPng } from 'html-to-image';
import { download } from 'downloadjs';
export default {
  name: "Tracking",
  data: function () {
    return {
      shipment: null,
      qrcodepp: null,
      barcodetracking: null,
      TrackingId: null,
      valid: false,
      showtracking: false,
      
      ShipmentTracking: [
        { text: "تم استلام الشحنة في فرع ", color: "color: black;", value: 1 },
        { text: "تم مغادرة الشحنة من فرع ", color: "color: black;", value: 2 },
        { text: "تم وصول الشحنة إلى فرع ", color: "color: black;", value: 3 },
        { text: "الشحنة في الطريق للمستلم", color: "color: blue;", value: 4 },
        { text: "تم تسليم الشحنة بنجاح", color: "color: green;", value: 5 },
        { text: "فشل تسليم الشحنة - عادت إلى المستودع", color: "color: red;",value: 6,},
      ],
    };
  },
  mounted() {
    var id = this.$route.query["T"];
    if (id != null) this.view(id);
  },
  methods: {
    cancelview() {
      this.showtracking = false;
      this.TrackingId = null;
    },
    formateDateWithMoment(date, formats) {
      if (!date)
        return null;
      return moment(date).format(formats)
      //  return moment(date).format('LT')
    },
    view(id) {
      if (id == null) {
        this.$dialog.notify.error("ادخل رقم الشحنة اولا", {
          position: "top-right",
          timeout: 3000,
        });
      } else {
        ApiService.getReceipt(id)
          .then((resp) => {
            if (resp.data.id != null) {
              this.shipment = resp.data;
              const obj = {
                seller: Buffer.from("الأحمرى للنقل البري", "utf8"),
                vatRegNumber: "300163969600003",
                timeStamp: `${this.formateDateWithMoment(
                  new Date(),
                  "YYYY-MM-DD hh:mm:ss"
                )}`,
                totalAmount: `${this.shipment.totalPrice}`,
                vatAmount: `${this.shipment.addedValueTax}`,
              };
              const base64String = fatooraKsa.toBase64(obj);
              this.barcodetracking =
                "https://bwipjs-api.metafloor.com/?bcid=code128&text=" +
                `${this.shipment.trackingNumber}`;
              this.qrcodepp =
                "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
                `${base64String}`;
              this.showtracking = true;
              setTimeout(() => {
                const options = {
                  styles: [
                    "https://test.rasil.com.sa/Data/Images/ExternalShippers/style.css",
                  ],
                  timeout: 1000,
                  autoClose: false,
                  windowTitle: window.document.title,
                };
                //this.$htmlToPaper("modalInvoice", options);
                toPng(document.getElementById('modalInvoice'))
                  .then(function (dataUrl) {
                    var link = document.createElement('a');
                    link.download = 'Receipt.jpeg';
                    link.href = dataUrl;
                    link.click();
                  });
              }, 1000);
            } else {
              this.$dialog.notify.error("لا يوجد شحنة بهذا الرقم", {
                position: "top-right",
                timeout: 3000,
              });
              this.TrackingId = null;
            }
          })
          .catch((resp) => {
            this.$dialog.notify.success("لا يوجد شحنة بهذا الرقم", {
              position: "top-right",
              timeout: 3000,
            });
            this.TrackingId = null;
          })
          .finally(() => { });
      }
    },
  },
};
</script>




   
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



mounted() {
  //generte barcode
 let barcodeElement = document.getElementById('barcode');
  JsBarcode(barcodeElement, this.trackAllData.trip.trackingNumber, {
    format: 'CODE128',
    displayValue: false, 
  });
  barcodeElement.setAttribute('width', '400');
  barcodeElement.setAttribute('height', '200');




//generate qr code
let qrCodeElement = document.getElementById('qr-code');

const fatooraData = {
seller: Buffer.from("الأحمرى للنقل البري", "utf8"),
vatRegNumber: "300163969600003",
timeStamp: '${this.formateDateWithMoment(new Date(), "YYYY-MM-DD hh:mm:ss")}',
totalAmount: '${this.trackAllData.totalPrice}',
vatAmount: '${this.trackAllData.addedValueTax}',
};

const base64String = fatooraKsa.toBase64(fatooraData);

let qrCode = new QRious({
element: qrCodeElement,
value: base64String, 
size: 250  
});
}
