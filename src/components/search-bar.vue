<template>
  <div  class="centered-position" style="width:100vw; height:50px; margin-bottom:30px; margin-top:20px;  float:left; ">
    <div  class="centered-position" style="min-width:1100px; max-width:1400px;  height:50px; float:left; ">
      <div align="left" style="width:25%; height:auto; font-size:30px; align-items:left; justify-content:left; display:flex;
        font-weight:bold; user-select:none; margin-left:0px; float:left; color:#ff7900; font-family:Poppins-Bold; text-decoration:none;  ">
        <div align="left" style="width:100%; height:auto; position:relative;
         font-size:30px; font-weight:bold; user-select:none; margin-left:0px; float:left; color:#ff7900; font-family:Poppins-Bold; text-decoration:none;  ">
            <router-link to="/buy" >
            <div align="left" id="my-home-link" class="app-name" @click="changeButtonHomeLoggedInNavStyle('my-home-link','My Home')" data-key_="home" style="width:180px; position:relative; left:0px; color:#404040; margin-right:20px; top:0px; text-decoration:none; " >
                <img src='@/assets/icons/yopipi-logo-y.png' class="nft-option-select" style="max-height:30px; max-width:30px; position:relative; float:left; left:10px; background:#fafafa;  top:12px; " />
                <span style=" font-family:Poppins-Regular; font-size:24px; position:relative; text-decoration:none;  top:-2px; margin-left:20px; "> Yopipi</span>
            </div>
            </router-link>
        </div>
      </div>
      <div class="centered-position" style="width:50%; height:34px; border-radius:8px; float:left;  position:relative;  margin-top:0px;  " >



           <div style="width:100%; height:34px; border-radius:8px; background:white; position:relative; margin-top:0px;  " >
              <!--
               <input @keyup.enter="gotoSearchPage()" @keydown="inputChangeHandler()" id="search-products-input" style="border-radius:10px; height:32px; width:54%; float:left; left:20px; padding-left:10px; outline:none; border:none; font-size:12px; " placeholder="I am Looking for shoes, bags, etc" />
              -->
               <div style="width:54%; height:32px; left:0px; position:relative; float:left; ">
                 <div class="centered-position" style="width:100%; height:32px; margin-top:0px; float:left; border-radius:10px; position:absolute;  overflow:hidden; " >
                   <!--
                   <input @keyup.enter="searchProduct()" @keyup="inputChangeHandler()" id="search-products-input" style="border-radius:10px; height:32px; width:100%; float:left; left:0px;  outline:none; border:none; font-size:12px; " placeholder="I am Looking for shoes, bags, etc" />
                   -->
                   <input @keyup.enter="gotoSearchPage()" @keyup="inputChangeHandler()" id="search-products-input" style="border-radius:10px; height:32px; width:100%; text-align:left; float:left; left:0px; padding-left:10px; outline:none; border:none; font-size:12px; " placeholder="I am Looking for shoes, bags, etc" />
                 </div>
                 <div v-show="searchRecommendIsVisible" class="centered-position" style="width:500px; height:auto; margin-top:38px; padding-bottom:40px; border-radius:10px; padding-left:10px; padding-right:10px; float:left; z-index:1111111111; box-shadow:0px 0px 3px 1px #f1f1f1; background:#fcfcfc; position:absolute;   " >
                   <div style="width:100%; height:auto; text-align:left; color:#202020;  margin-top:10px; float:left;  background:#fcfcfc; position:relative;  " >
                      <div v-for="(recommend, indexRecommend) in searchHistoryList" :key="indexRecommend"
                        id="percent-reduction" class=""
                        style="width:100%; height:34px;  margin-bottom:4px; border-bottom:1px solid #f1f1f1; padding-bottom:10px; color:#505050; font-size:10.4px; letter-spacing:0.0016em; font-family:Montserrat-Bold; cursor:pointer; position:relative;  padding-top:2.4px; padding-bottom:2.4px; line-height:30px;  ">
                        {{recommend}}
                      </div>
                   </div>
                 </div>
               </div>

               <input type="text" id="search-categories-in-button" class="search-categories-in-button" value="" placeholder="Select Category" style="float:left; position:relative; font-size:12px;  right:10px; top:3px; width:24%; height:26px; border:none; outline:none; padding-left:10px; box-shadow:0px 0px 0px 1px #fcfcfc; " list="gender_data_source"/>
               <datalist id="gender_data_source">';
               </datalist>
               <div class="centered-position" style=" width:30px; height:34px; float:left; border-radius:6px 0px 0px 6px; cursor:pointer; " >
                   <img src="@/assets/icons/vueax-microphone.png" style="width:16px; height:16px; position:relative; cursor:pointer;  right:2px;  " />
               </div>
               <div class="centered-position" style=" width:30px; height:34px; float:left; border-radius:6px 0px 0px 6px; cursor:pointer; " >
                   <img src="@/assets/icons/vueax-camera.png" style="width:16px; height:16px; position:relative; cursor:pointer;  right:2px;  " />
               </div>
               <div @click="gotoSearchPage()" class="centered-position" style=" width:50px; height:34px; float:right; background:#202020; border-radius:20px 20px 20px 20px; cursor:pointer; " >
                   <img src="@/assets/icons/search-normal-w.png" style="width:20px; height:20px; position:relative; cursor:pointer;  right:2px;  " />
               </div>
           </div>

       </div>
       <div class="centered-position" id="show-user-cart-products" style=" width:25%; height:34px; float:right; position:relative; cursor:pointer; " >
         <router-link to="/cart">
         <div id="show-user-cart-products" style=" width:80px; height:34px; position:relative; cursor:pointer;  " >
             <img src="@/assets/icons/shopping-cart-b.png" style="width:22px; height:22px; position:relative; top:6px; cursor:pointer;  right:2px;  " />
             <div id="cart-total-products-main" style="min-width:20px; max-width:40px; height:18px; border-radius:100px; float:right; background:#9747FF; color:#ffffff; font-family:Montserrat-SemiBold; line-height:18px; left:-28px; padding-left:4px; padding-right:4px; top:-6px; font-size:9px; position:relative; ">0</div>
         </div></router-link>
       </div>

    </div>

  </div>




</template>

<script>

import axios from "axios";


export default {

  name: "userProfileWidget",
  components:{

  },
  //mixins: [web3Modal],
  props: {
    msg: String
  },
  created() {


  },
  mounted() {
    //this.listenAddProductEvent()

  },
  data(){
    return {
      queryString:'',
      productList:[],
      searchRecommendIsVisible:false,
      buyerView:{
        featured:{canShow:false},
        map:{canShow:false},
        videos:{canShow:true}
      },
      cardata: [
        '<img :src="getImageUrl(image)" style="width:100%; height:190px; float:left; " />',
        '<img :src="getImageUrl(image)" style="width:100%; height:190px; float:left; " />',
        '<img :src="getImageUrl(image)" style="width:100%; height:190px; float:left; " />',
      ],
      searchHistoryList:[
        'iphone 13','apple watch','nike shoe','nike air Max','banner-5.png',
      ],
      searchRecommendList:[
        'banner-1.png','banner-2.png','banner-3.png','banner-4.png','banner-5.png',
      ],

      mainBannerList:[
        'banner-1.png','banner-2.png','banner-3.png','banner-4.png','banner-5.png',
      ],
      activeProductCategory:{
        title:"Fashion",
        subCategories:[

        ],
        itemPreviewProducts:[

        ],
        featuredBrands:[

        ],
      },

      hotDeals:[
        {image:'vert-banner-5.png',title:''},
        {image:'vert-banner-2.png',title:''},
        {image:'vert-banner-3.png',title:''},
          {image:'vert-banner-4.png',title:''},

      ],
      banners:[
          {image:'banner-1.png',title:''},
      ],
      subCategoryViewActive:false,
    }
  },
   methods: {
    inputChangeHandler() {
      // change of userinput, do something
      let searchInput =document.getElementById("search-products-input")
      if(searchInput.value.length===0){
        this.searchRecommendIsVisible=false

      }else{
        this.searchRecommendIsVisible=true

      }
    },
    gotoSearchPage(){
      const queryString = document.getElementById("search-products-input").value
      //router.push({ path: `/user/${id}` });
      if( queryString !='' && queryString !=' '){
        this.$router.push({ path: `/search-buy/${queryString}` });


      }



    },
    // ::::::::::::::::: search products
    async searchProduct(){
      let payload={
        searchQuery:document.getElementById("search-products-input").value,

      }
      alert(payload)
      await apiRequest.searchProducts( payload, {})
      //this.productList=productList
      //this.topBarData.totalProducts=  this.productList.length
    },

      selectFeatured(){

        this.buyerView.featured.canShow=true
        this.buyerView.map.canShow=false
        this.buyerView.videos.canShow=false
      },
      selectVideos(){
        let sponsoredPage=document.getElementById('sponsored-page-container')
        sponsoredPage.style.overflowY="hidden"

        let buyerPage=document.getElementById('buyer-container')
        buyerPage.style.overflowY="hidden"
        let videosPage=document.getElementById('videos-container')
        videosPage.style.overflowY="scroll"

        this.buyerView.featured.canShow=false
        this.buyerView.map.canShow=false
        this.buyerView.videos.canShow=true

      },
      goPostVideo(){
        this.$router.push('/post-video/')
      },
      selectMap(){

        this.buyerView.featured.canShow=false
        this.buyerView.map.canShow=true
        this.buyerView.videos.canShow=false

      },
      getTransitionName(){
        //this.$route

      },
      keepSubCategoryViewVisible(){
        this.subCategoryViewActive=true
      },
      hoverCategoryView(action){
        action==1?  this.subCategoryViewActive=true:  this.subCategoryViewActive=false;

      },
      hoverProductCategory(action,category){
          //this.subCategoryViewActive = !this.subCategoryViewActive;
          this.activeProductCategory.title=category.title;
          this.activeProductCategory.subCategories=category.subCategories

      },
      hoverProductCategoryContainer(action){
        action==1?  this.subCategoryViewActive=true:  this.subCategoryViewActive=false;

      },

      goProductDetails(){
        this.$router.push('/details')
      },

      goTourToday(){
        this.$router.push('/tour-today')
      },
      goModule(index,path){
        //this.transitionName = 'slither';
        console.log(path)
        this.$router.push(path)

      },
      splitPages(pageString){
        let arrPages=['buy']
        //getPageRoutes()
        for(let i=0; i<arrPages.length; i++){
            pageString= pageString.split(arrPages[i]).join("");
           // console.log("page:", pageString)


        }
        return pageString
      },
      getGridMenu(){

      },
      getResponsiveData() {
        // Size of browser viewport.
        this.responsiveData.browserHeight = window.innerHeight;
        this.responsiveData.browserWidth = window.innerWidth;
        // Size of HTML document (same as pageHeight/pageWidth in screenshot).
        //$(document).height();
        //$(document).width();
        this.responsiveData.screenHeight = window.screen.height;
        this.responsiveData.screenWidth = window.screen.width;
        console.log(this.responsiveData);
        //alert(this.responsiveData)
      },
      getTeamMember() {},
      getImageUrl(name) {
        let imgUrl;
        let page_ = window.location.href.split("home").join("");
        page_ =this.splitPages(page_);
        if (page_.includes("localhost") || page_.includes("127.0.0.1") || page_.includes("192")) {
          imgUrl = page_ + "./src/assets/images/" + name;
        } else {
          imgUrl = page_ + "dynamic-assets/images/" + name;
        }
        //console.log(imgUrl);
        return imgUrl;
      },
      getIconUrl(name) {
        let imgUrl;
        let page_ = window.location.href.split("home").join("");
        page_ = this.splitPages(page_);
        if (page_.includes("localhost") || page_.includes("127.0.0.1") || page_.includes("192") ) {
          imgUrl = page_ + "./src/assets/icons/" + name;
        } else {
          imgUrl = page_ + "dynamic-assets/icons/" + name;
        }
        //console.log(imgUrl);
        return imgUrl;
      },
      goUserHome() {
        this.$router.push("/user-home/");
        // this.$router.push('/home');
      },
      goHome() {
        this.$router.push("/home/");
      },
      goNotification(){
        this.$router.push("/notifications");


      },
      checkUserExists(type) {
        let result;
        if (type == "auto-login") {
          console.log("check user ");
          //window.localStorage.getItem("username") === null
          let userCookieData;
          let localStoreData;
          if (this.$cookies.isKey("siteAccessT")) {
            userCookieData = this.$cookies.get("siteAccessT");
            this.userCookieData = userCookieData;
            //$cookies.isKey(keyName)
            // localStorage.getItem("siteAccessT") !== null
            console.log(userCookieData);
            localStoreData = JSON.parse(
              window.localStorage.getItem("siteAccessT")
            );
            console.log(
              localStoreData,
              window.localStorage.getItem("siteAccessT")
            );
            console.log("true");
            result = 1;
            this.goUserHome();
          } else {
            result = 0;
            console.log("false");
          }
          console.log(
            "local storage:  ",
            window.localStorage.getItem("siteAccessT"),
            localStoreData,
            "user cookies: ",
            userCookieData
          );
        }
        return result;
      },
    },




}

</script>

<style scoped>

/* For demo */
.ant-carousel :deep(.slick-slide) {
  width:100px;
  text-align: center;
  justify-items:center;
  height: 190px;
  line-height: 190px;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #f1f1f1;
  border-radius:100px;
  background-color:#000000;
  opacity: 0.4;

}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #000000;
}



.ant-carousel .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
  align-items: center;
  vertical-align:middle;
  justify-content:center;
  text-align:center;
  display:flex;
}

.ant-carousel .slick-slide img {
  color: #fff;
}


router-link{
   text-decoration: none;
}


*:focus {
    outline: none;
}
input:focus, input.form-control:focus {

    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none;
    background:none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-background: none;
    -webkit-box-background: none;
}
input #search-products-input:focus{

      outline:none !important;
      outline-width: 0 !important;
      box-shadow: none;
      background:none;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      -moz-box-background: none !important;
      -webkit-box-background: none !important;

}
input {
    background-color:transparent;
    border: 0px solid;
    height:30px;
    width:260px;
}
input:focus {
    outline:none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
  -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;

}

</style>
