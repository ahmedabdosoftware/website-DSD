import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    langNow: localStorage.getItem('ourLangauge') || 'En',
    mapbranche: "Jeddah",
    trackData: null, // قم بتعيين القيمة الافتراضية وفقًا للمسار
    numberOredrs: null, // قم بتعيين القيمة الافتراضية وفقًا للمسار
    showHeader: true,
    lan: {
      Ar: {
        packageDel: "تم تسليم الطرد",
        HappyClinnts: "عملاء سعداء",
        ReviewStar: "تقييمات 5 نجوم",
        seeMore: "المزيد",
        seeLess: "اقل",
        home: "الرئيسية",
        about: "من نحن",
        service: "خداماتنا",
        contact: "تواصل معنا ",
        textBackground: " .عبر الطرق نحمل أحلامك ونقودها إليك",
        textBackgroundDown: "تسليم سريع، خدمة استثنائية",
        track: "تتبع الشحنة ",
        branches: "الفروع",
        service: "الخدمات",
        serviceUnder: ":يتم نقل كل شيء إلى أي مكان بواسطتنا",
        aboutContent: ".شركة شحن وطنية، لخدمات النقل والخدمات اللوجستية، تقدم أفضل الخدمات للشركات والأفراد من خلال فريق عمل يؤمن بالعمل الجماعي",
        message: " رسالتنا",
        ourMessageContent: ".هدف RASIL  هو أن تكون الشركة الرائدة بين شركات النقل والخدمات اللوجستية في المملكة والشرق الأوسط",
        through: " خلالنا",
        throughContent: " 1- تقديم الخدمات التي تغطي معظم أنحاء مدن المملكة و تتميز بأعلى مستويات الجودة2- الاستثمار في موظفينا ومنحهم الصلاحيات التي تساعدهم ويقومون بواجباتهم على أكمل وجه",
        Quality:"سياسة الجودة",
        QualityContent:"تلتزم إدارة راسيل التزاماً كاملاً بتقديم خدمات تتميز بأعلى مستويات الجودة لجميع عملائها، مع بذل كل جهد لتجنب المخاطر المتوقعة. ولا يأتي ذلك لتلبية احتياجات العملاء فحسب، بل لتجاوز احتياجاتهم وتوقعاتهم؛ مما يساهم في تحسين أداء الشركة بطريقة مستمرة في تقديم خدمات آمنة ومهنية وفعالة من حيث التكلفة باستخدام أحدث الأساليب و",
        means:"وسائل",
        meansContent:"الجودة في الأحمري هي مسؤولية شخصية لكل موظف من موظفيها. ومن أجل الحفاظ على مستويات الجودة والأداء، ستقوم الشركة بتوفير كافة الوسائل اللازمة والتدريب والتطوير والدعم المستمر؛ وبالتالي، فإنه يخلق بيئة عمل لرعاية الموظفين. الرضا والتحفيز والالتزام يجعل الأحمر المكان المفضل للعمل. قيم الشركة: المبادرة والسرعة والشفافية والجودة والتعاون والولاء والصدق",
        
        Terms : " الشروط والاتفاقيات",
        TermsContent: ".شركة شحن وطنية، لخدمات النقل والخدمات اللوجستية، تقدم أفضل الخدمات للشركات والأفراد من خلال فريق عمل يؤمن بالعمل الجماعي",
        one: " رسالتنا",
        tow: " رسالتنا",
        oneContent: " في حالة فقدان أو تلف المنقولات أو تلفها لسبب خارج عن إدارة المؤسسة، يجب ألا يتجاوز التعويض بأي حال من الأحوال 10% من قيمة الطرد حسب فاتورة العميل، والتي أن لا تتجاوز القيمة 500 ريال كحد  ",
        towContent: " في حالة عدم استلام المنقولات من قبل العميل خلال 5 أيام من تاريخ الوثيقة، يحق للمنشأة احتساب الطوابق لكل طرد بما لا يتجاوز 20% من حصتها من الشحنة عن كل يوم تأخير",
        threeContent: " يتحمل العميل أي تكاليف إعادة المنقولات أو نقلها أو أرضيتها. في حالة عدم استلام المنقولات للعميل خلال 30 يومًا من تاريخ الوثيقة، يحق للمؤسسة التصرف في المنقولات دون أي مسؤولية عنها مقابل شحنها وتخزينها ولا يحق للمرسل أو المستقبل المطالبة بالتعويض عن ذلك. ",
        fourContent: " المؤسسة غير مسؤولة عن البضائع القابلة للكسر والمواد السائلة والخطرة والمواد المحظورة.",
        
        howToSendYourOrder: "كيف تقوم بارسال طلبك",
        placeOrder: "قم بتقديم الطلب",
        orderDescription: "اطلب شحنتك لتسليمها إلى أي مكان بأمان وبسرعة.",
        waitForArrival: "انتظر الوصول",
        arrivalDescription: "انتظر وصول شحنتك في الوقت المحدد بكل هدوء وسلام.",
        finishAndRate: "انهاء الطلب وتقييمنا",
        finishAndRateDescription: "تصل شحنتك بأمان إلى الموقع المحدد دون تأخير.",
        branchesInfo: "الفروع",

       // jeddah: "جدة",
        //jeddahContact: "+96614564888 / +96697213975",
        //jeddahAddress: "المهجر، جدة 22421، المملكة العربية السعودية",
        //jeddahSchedule: "كل يوم، من الساعة 07:00 صباحًا حتى الساعة 03:00 مساءً",

        //AlQunfudhah: "القنفــــذة",
        ///AlQunfudhahContact: "+0569286258, / +0569286264",
        //AlQunfudhahdAddress: "المهجر، الرياض 22421، المملكة العربية السعودية",
        //AlQunfudhahSchedule: "كل يوم، من الساعة 07:00 صباحًا حتى الساعة 03:00 مساءً",
        
        reviews: "التقييمات",
        review1: "شكرًا لكم RASIL على هذه الخدمة الرائعة.",
        review1Author: "فارس كنان",
        review1Role: "عميل",
        review1Text: "شركة محترمة ومنظمين في عملهم، نأمل أن يكون هذا ليس آخر تعامل معكم. حياكم الله.",
        review2: "عامل التوصيل محترم جداً. هذه الشركة منظمة وآمنة.",
        review2Author: "محسن راجح",
        review2Role: "عميل",
        review3: ". العامل في التوصيل محترم للغاية. هذه الشركة منظمة وآمنة",
        review3Author: "شذى حمد",
        review3Role: "عميل",
        contactUs: "التواصل معنا",
        contactUsText: "اتصل بنا",
        contactUsEmail: "Example@gmail.com",
        contactUsPhone: "8002480022",
        quickLinks: "روابط سريعة",
        quickLinksHome: "الرئيسية",
        quickLinksServices: "الخدمات",
        quickLinksAbout: "حول",
        quickLinksBranches: "الفروع",
        location: "الموقع",
        locationMainCenter: "المركز الرئيسي: جدة - منطقة المهجر",
        locationHours: "07:00 صباحًا - 03:00 مساءً",
        copyright: "RASIL لتكنولوجيا المعلومات — 2024 ©",


        Jeddah: {
          name: "جــــدة",
          phone: "0569286392",
          phone1: "0569286398",
          phone2: "",
          map: "https://goo.gl/maps/5FZECFMtfuhKsXCA8",
          address: "أضف عنوان هنا",
          schedule: "أضف جدول زمني هنا",
        },
        AlQunfudhah: {
          name: "القنفــــذة",
          phone: "0569286258",
          phone1: "0569286264",
          phone2: "",
          map: "https://goo.gl/maps/JwaWq66bxJygXyPg7",
          address: "أضف عنوان هنا",
          schedule: "أضف جدول زمني هنا"
        },
        Samtah: {
          name: "صـــامــطة",
          phone: "0569286405",
          phone1: "0569286435",
          phone2: "",
          map: "https://goo.gl/maps/h9JPNpchp6s8tYgs9",
          address: "أضف عنوان هنا",
          schedule: "أضف جدول زمني هنا"
        },
        AhadAlMasarihah: {
          name: "أحد المسارحة/الحصمة",
          phone: "0569286408",
          phone1: "",
          phone2: "",
          map: "https://goo.gl/maps/h9JPNpchp6s8tYgs9",
          address: "أضف عنوان هنا",
          schedule: "أضف جدول زمني هنا"
        },
        BishaDarab: {
          name: "بيــش/الــدرب",
          phone: "0569286462",
          phone1: "",
          phone2: "",
          map: "https://goo.gl/maps/neDgiXi9mjJqqGRy9",
          address: "أضف عنوان هنا",
          schedule: "أضف جدول زمني هنا"
        },
        Jizan: {
          name: "جازان",
          phone: "0569286332",
          phone1: "",
          phone2: "",
          map: "https://goo.gl/maps/w1j2quVhijWYhpvJA",
          address: "أضف عنوان هنا",
          schedule: "أضف جدول زمني هنا"
        },
        Sabya: {
          name: "صبيــــا",
          phone: "0569286309",
          phone1: "0569286367",
          phone2: "0569286475",
          map: "https://goo.gl/maps/neDgiXi9mjJqqGRy9",
          address: "أضف عنوان هنا",
          schedule: "أضف جدول زمني هنا"
        },
        AbuArish: {
          name: "أبو عريـــش",
          phone: "0569286402",
          phone1: "0569286458",
          phone2: "0569286459",
          map: "https://goo.gl/maps/h9JPNpchp6s8tYgs9",
          address: "أضف عنوان هنا",
          schedule: "أضف جدول زمني هنا"
        },
        SakakaArarDumatalJandal: {
          name: "سكاكا/عرعر/دومة الجندل",
          phone: "0534758525",
          phone1: "0534758527",
          phone2: "0534758579",
          map: "https://goo.gl/maps/2qPWiUqyXUwvq6Qf6",
          address: "أضف عنوان هنا",
          schedule: "أضف جدول زمني هنا"
        }

        
      },
      En: {
        packageDel: "package delivered",
        HappyClinnts: "Happy clients",
        ReviewStar: "5 stars Reviews",
        seeMore: "see more",
        seeLess: "see less",
        home: "home",
        about: "about",
        service: "service",
        contact: " contact us",
        textBackground: " Across the roads, we carry your dreams and drive them to you.",
        textBackgroundDown: " Fast delivery, Exceptional service",
        track: "Track Order",
        branches: "branches",
        service: "service",
        serviceUnder: "Everything is moved anyplace by us :",
        aboutContent: "A National Shipping Company, For Transportation And Logistics Services, Providing The Best Service To Companies And Individuals Through A Work Team That Believes In Teamwork.",
        message: "our message ",
        ourMessageContent: " RASIL's Goal Is To Be The Leading Company Among The Transportation And Logistical Services Companies In The Kingdom And The Middle East. ",
        through: " through",
        throughContent: " 1- Providing services covering most parts of the Kingdom’s cities and characterized by the highest levels of qualitythem perform their duties to the fullest extent",
        Terms : "Terms And Agreements",
        TermsContent : "A National Shipping Company, For Transportation And Logistics Services, Providing The Best Service To Companies And Individuals Through A Work Team That Believes In Teamwork.",
        one: "our message ",
        oneContent: "1- In the event of loss or damage to movables or their damage due to a reason outside the management of the institution, the compensation shall not, in any case, exceed 10% of the value of the parcel according to the customer’s invoice, which value should not exceed 500 riyals as a maximum. ",
        tow: "our message ",
        towContent: "2- If the movables are not received by the customer within 5 days from the date of the policy, the establishment has the right to calculate the floors for each parcel, not exceeding 20% of its portion of the shipment for each day of delay. ",
        threeContent: "3- The customer shall bear any costs of returning, transferring, or flooring the movables. If the movables are not received by the customer within 30 days from the date of the policy, the institution has the right to dispose of the movables without any responsibility for them in return for shipping and storing them. The sender or recipient is not entitled to claim compensation for that. ",
        fourContent: "4- The institution is not responsible for fragile goods, liquid and dangerous materials, and prohibited items.",
        Quality:"Quality Policy",
        QualityContent:"RASIL management is fully committed to providing services that are characterized by the highest Quality levels for all of its clients, while making every effort to avoid expected risks.This comes not only to meet the needs of customers, but to exceed their needs and expectations; Which contributes to improving the company's performance in a way continuous provision of safe, professional and cost-effective services using The latest methods and",
        means:"means",
        meansContent:"Quality in Al Ahmari is a personal responsibility of each of its employees. In order to maintain the levels of quality and performance, the company will By providing all the necessary means, training, development and support continuous; Thus, it creates a working environment for caring employees. Satisfaction, motivation and commitment make Al Ahmar the preferred place to work.Company Values:Initiative, speed, transparency, quality, cooperation, loyalty, honesty",
        
        howToSendYourOrder: "how to send your order",
        placeOrder: "Place an order",
        orderDescription: "Request your shipment to be delivered to anywhere safely and faster.",
        waitForArrival: "Wait for arrival",
        arrivalDescription: "Wait for your shipment to arrive on time with complete peace of mind.",
        finishAndRate: "Finish and rate us",
        finishAndRateDescription: "Your shipment arrives safely at the specified location without delay.",
        branchesInfo: "BRANCHES",

        //jeddah: "Jeddah",
        //jeddahContact: "+96614564888 / +96697213975",
       // jeddahAddress: "Al Mahjar, Jeddah 22421, Saudi Arabia",
        //jeddahSchedule: "Every day, 10:00 AM to 03:00 PM",

       // AlQunfudhah: "Al Qunfudhah",
       // AlQunfudhahContact: "+0569286258, / +0569286264",
       // AlQunfudhahdAddress: "Al Mahjar, Ryad 22421, Saudi Arabia",
       // AlQunfudhahSchedule: "Every day, 07:00 AM to 03:00 PM",

       Jeddah: {
        name: "Jeddah",
        phone: "0569286392",
        phone1: "0569286398",
        phone2: "",
        map: "https://goo.gl/maps/5FZECFMtfuhKsXCA8",
        address: "add your address here",
        schedule: "add your time table here",
      },
      AlQunfudhah: {
        name: "Al Qunfudhah",
        phone: "0569286258",
        phone1: "0569286264",
        phone2: "",
        map: "https://goo.gl/maps/JwaWq66bxJygXyPg7",
        address: "add your address here",
        schedule: "add your time table here",
       
      },
      Samtah: {
        name: "Samtah",
        phone: "0569286405",
        phone1: "0569286435",
        phone2: "",
        map: "https://goo.gl/maps/h9JPNpchp6s8tYgs9",
        address: "add your address here",
        schedule: "add your time table here",
       
      },
      AhadAlMasarihah: {
        name: "Ahad Al-Masarihah",
        phone: "0569286408",
        phone1: "",
        phone2: "",
        map: "https://goo.gl/maps/h9JPNpchp6s8tYgs9",
        address: "add your address here",
        schedule: "add your time table here",
      },
      BishaDarab: {
        name: "Bisha/Darab",
        phone: "0569286462",
        phone1: "",
        phone2: "",
        map: "https://goo.gl/maps/neDgiXi9mjJqqGRy9",
        address: "add your address here",
        schedule: "add your time table here",
      },
      Jizan: {
        name: "Jizan",
        phone: "0569286332",
        phone1: "",
        phone2: "",
        map: "https://goo.gl/maps/w1j2quVhijWYhpvJA",
        address: "add your address here",
        schedule: "add your time table here",
      },
      Sabya: {
        name: "Sabya",
        phone: "0569286309",
        phone1: "0569286367",
        phone2: "0569286475",
        map: "https://goo.gl/maps/neDgiXi9mjJqqGRy9",
        address: "add your address here",
        schedule: "add your time table here",
      },
      AbuArish: {
        name: "Abu Arish",
        phone: "0569286402",
        phone1: "0569286458",
        phone2: "0569286459",
        map: "https://goo.gl/maps/h9JPNpchp6s8tYgs9",
        address: "add your address here",
        schedule: "add your time table here",
      },
      SakakaArarDumatalJandal: {
        name: "Sakaka/Arar/Dumat al-Jandal",
        phone: "0534758525",
        phone1: "0534758527",
        phone2: "0534758579",
        map: "https://goo.gl/maps/2qPWiUqyXUwvq6Qf6",
        address: "add your address here",
        schedule: "add your time table here",
      },


        reviews: "REVIEWS",
        review1: "Thank you RASIL for this wonderful service.",
        review1Author: "Fares Kenan",
        review1Role: "Client",
        review1Text: "شركة محترمة ومنظمين في شغلهم ان شاء الله لن يكون اخر تعامل معكم حياكم الله.",
        review2: "The delivery worker is very respectable. This company is organized and safe.",
        review2Author: "Mohsen Raje",
        review2Role: "Client",
        review3: "The delivery worker is very respectable. This company is organized and safe",
        review3Role: "Client",
        review3Author: "Shaza Hamd",
        contactUs: "CONTACT WITH US",
        contactUsText: "Contact us",
        contactUsEmail: "Example@gmail.com",
        contactUsPhone: "8002480022",
        quickLinks: "Quick links",
        quickLinksHome: "HOME",
        quickLinksServices: "SERVICES",
        quickLinksAbout: "ABOUT",
        quickLinksBranches: "BRANCHES",
        location: "Location",
        locationMainCenter: "Main center: Jeddah - Al Mahjar district",
        locationHours: "07:00 AM - 03:00 PM",
        copyright: "RASIL for information technology—2024 ©"
      }
    }
  },
  mutations: {
    setShowHeader(state, value) {
      state.showHeader = value;
    },
    changeTheLang(state, lang) {
      localStorage.setItem("ourLangauge", lang);
      state.langNow = lang;
    },
    changeMapbranche(state, bran) {
      //localStorage.setItem("branche", bran);
      state.mapbranche = bran;
    },
    changeToarabicFormat(state) {
      console.log("its changed ")
      if(state.langNow =="Ar"){
        console.log("its changed to arabic")

        //spicial classes "add to single element"
        document.getElementById("back").classList.add("backForArabic")
        document.getElementById("backfooter").classList.add("backfooterForArabic")
        document.getElementById("contInput").classList.add("contInputForArabic")
        document.querySelector(".tittle").classList.add("tittleAr")
        document.querySelector(".imageBranches").classList.add("imageBranchesAr")
        
        //spicial classes "add to parent of elements"
        document.querySelector(".textBranches").classList.add("textBranchesAr")
        document.querySelector(".componnent").classList.add("componnentAr")
        document.querySelector(".footer").classList.add("footerAr")
        
        


        //                  no changeing in header

        //document.querySelector("ul").classList.add("ulForArabic")          
       // document.querySelector(".logo-cont").classList.add("logocontulForArabic")              
        //document.querySelector(".contLang").classList.add("lcontLangForArabic") 
        
        //                   anchint without class
        //document.querySelector("ul").style.cssText = "order:2 ;";              
        //document.querySelector(".logo-cont").style.cssText = "order:1 ;";              
        //document.querySelector("header > div:nth-child(3)").style.cssText = "order:3 ;"; 
        


        //global classes "add to some of elements" => to change dirction  "with classes its more organizied"
           document.querySelectorAll('.lanDir').forEach(function(e) {
           e.classList.add("alinPadding")
            });
        //global classes "add to some of elements" => to change dirction  "with classes its more organizied"
           document.querySelectorAll('.howtOsEnd >div:nth-child(2) >div >div:nth-child(2)').forEach(function(e) {
           e.classList.add("howP")
            });
            
              
        //spicial classes "add to parent of elements" and "add to some of elements" also"
            document.querySelectorAll('.componnent').forEach(function(e) {
            e.classList.add("componnentAr")
             });
            
      } else{
        console.log("its changed to english")

        //spicial classes "add to single element"
        document.getElementById("back").classList.remove("backForArabic")
        document.getElementById("backfooter").classList.remove("backfooterForArabic")
        document.getElementById("contInput").classList.remove("contInputForArabic")
        document.querySelector(".tittle").classList.remove("tittleAr")
        document.querySelector(".imageBranches").classList.remove("imageBranchesAr")

         //spicial classes "remove to up of elements"
         document.querySelector(".textBranches").classList.remove("textBranchesAr")
         document.querySelector(".componnent").classList.remove("componnentAr")
         document.querySelector(".footer").classList.remove("footerAr")


        //                   no changeing in header
           
        //document.querySelector("ul").classList.remove("ulForArabic")          
       // document.querySelector(".logo-cont").classList.remove("logo-contulForArabic")              
        //document.querySelector(".contLang").classList.remove("lcontLangForArabic") 
       
        //                     anchint without class
       
        //document.querySelector("ul").style.cssText = "order:2 ;";              
        //document.querySelector(".logo-cont").style.cssText = "order:1 ;";              
        //document.querySelector("header > div:nth-child(3)").style.cssText = "order:3 ;"; 
        
          //global classes "add to some of elements" => to change dirction "with classes its more organizied"
          document.querySelectorAll('.lanDir').forEach(function(e) {
           e.classList.remove("alinPadding")
            });

                  
          //spicial classes "add to parent of elements" and "add to some of elements" also"
          document.querySelectorAll('.componnent').forEach(function(e) {
              e.classList.remove("componnentAr")
              });
        
      }
 },  
 storeTrack (state,data) {
      state.trackData=data
      console.log("i am runing track ")
    },
 storeNumberOredrs (state,data) {
      state.numberOredrs=data
      console.log("i am runing numberOredrs ")
    },
  },
  getters: {
    catchLang(state) {
      if (state.langNow === "En") {
        return state.lan.En;
      } else if (state.langNow === "Ar") {
        return state.lan.Ar;
      }
    },
    myLanguage(state) {
      if (state.langNow === "En") {
        return "En";
      } else if (state.langNow === "Ar") {
        return  "Ar";
      }
    },
  },
 
  actions: {
    fetchTrack(context, orderId) {
      return axios
        .get(`https://2024.al-ahmari.com.sa/api/Shipments/${orderId}/Receipt`)
        .then((res) => {
          context.commit('storeTrack', res.data);
          return res.data; // إرجاع البيانات في حالة النجاح للاستفادة منها في المكون
        })
        .catch((error) => {
          console.log(error);
          throw error; // إعادة الخطأ في حالة حدوث خطأ
        });
    },
    fetchNumberOrders(context ) {
      return axios
        .get(`https://2024.al-ahmari.com.sa/api/SiteDate`)
        .then((res) => {
          context.commit('storeNumberOredrs', res.data);
          return res.data; // إرجاع البيانات في حالة النجاح للاستفادة منها في المكون
        })
        .catch((error) => {
          console.log(error);
          throw error; // إعادة الخطأ في حالة حدوث خطأ
        });
    },
    updateShowHeader({ commit }, value) {
      commit('setShowHeader', value);
    }
  }
  
})