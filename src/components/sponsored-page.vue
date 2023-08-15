<template>
  <div id="sponsored-page-container-" class="centered-position" style=" height:auto; display:flex; justify-items:center; float:left; user-select:none; margin-top:1px; ">
    <div @mouseleave="hoverCategoryView(0)"  style="min-width:1100px;  max-width:1400px; max-height:auto; min-height:560px;  background:#ffffff; ">

     <!---kkk -->
      <div style="width:22.4%; height:490px; margin-right:5px;   float:left;  ">
       <!--
        <div style="width:100%; height:50px;  float:left;  ">

            <div style="width:90%; font-family:Montserrat-Bold; height:50px; font-size:16px; line-height:50px; text-align:left; margin-left:10%; " >All Categories</div>
        </div>
        -->
        <div style="width:100%; height:10px;  float:left;  ">

        </div>
        <div @mouseover="hoverProductCategoryContainer(1)" style="width:100%; height:90vh;  float:left;  ">
          <div @mouseover="hoverProductCategory(1,productCategory)" @mouseleave="hoverProductCategory(0,productCategory)" v-for="(productCategory,index) in productCategories"  :key="index" class="product-category-menu" style=" font-size:12px; height:24px; color:#404040; line-height:24px;"  >{{productCategory.title}}</div>
        </div>
      </div>
      <div style="width:53%; height:490px; max-height:auto; float:left;  background:#ffffff; position:relative; ">


        <div v-show="buyerView.featured.canShow"  style="width:100%; height:560px; float:left; overflow:hidden; position:absolute; ">
          <div @mouseover="hoverCategoryView(0)"  style="width:100%; height:20px; margin-top:10px; float:left;  ">
        <div class="menu-bar">
          <ul class="menu-items">
            <li class="menu-item" style="font-size:10px; line-height:20px; text-align:left;" v-for="(item,index) in fastFeatures" :key="index" >{{item}}</li>

          </ul>
        </div>
          </div>


          <div  style="width:100%; height:450px; margin-top:12px; border-radius: 6px; float:left; background-repeat: no-repeat;" >

            <HomeBanner  />

          </div>



<!--
 <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-pro-202303?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1677311465897" style="width:100%; height:450px; margin-top:12px; border-radius: 6px; float:left; background-repeat: no-repeat;" />


          <div style="width:100%; height:150px;  margin-top:6px; float:left;  ">
            <div style="width:49.6%; height:150px; margin-right:0.4%; float:left;  ">
              <img src="@/assets/images/banner-40.png" style="width:100%; height:100%; background-size:100% 100%; " />
            </div>
            <div style="width:49.6%; height:150px; margin-left:0.4%; box-shadow:0px 0px 0px 1px #f1f1f1; float:left;  ">
              <img src="@/assets/images/banner-42.png" style="width:100%; height:100%; background-size:100% 100%; " />
            </div>
          </div>

          <div style="width:100%; height:150px;  margin-top:6px; float:left;  ">
            <div style="width:70.6%; height:150px; margin-right:0.4%; float:left;  ">
              <img src="@/assets/images/banner-3.png" style="width:100%; height:100%; background-size:100% 100%; " />
            </div>
            <div style="width:28.6%; height:150px; margin-left:0.4%; box-shadow:0px 0px 0px 1px #f1f1f1; float:left;  ">
              <img src="@/assets/images/vert-banner-4.png" style="width:100%; height:100%; background-size:100% 100%; " />
            </div>
          </div>

          -->

        </div>
        <div v-show="subCategoryViewActive"   style="width:100%; height:560px; float:left; overflow:hidden;  z-index: 1; position:absolute; ">
          <div @mouseover="hoverCategoryView(1)" @mouseleave="hoverCategoryView(0)" style="width:98%; height:80%; margin-top:40px; float:left; background:#fcfcfc; box-shadow:0px 0px 0px 1px #f1f1f1; overflow:hidden; position:absolute; ">
            <div style="width:100%; height:50px;  float:left;  ">
                <div style="width:90%; font-family:Montserrat-Bold; border-bottom:1px solid #f1f1f1; height:50px; font-size:16px; line-height:50px; text-align:left; margin-left:6.2%; " >{{activeProductCategory.title}}</div>
            </div>
            <div  style="width:100%; height:auto;  float:left;  ">
                <div  style="width:40%; height:auto; padding-left:4%; float:left;  ">
                  <div v-for="(subCategory,index) in activeProductCategory.subCategories"  :key="index"  class="sub-category-menu" style="margin-left:-5px; font-size:12px; height:20px; line-height:20px;"  >{{subCategory}}</div>

                </div>
                <div  style="width:70%; height:auto;  float:left;  ">

                </div>


            </div>
          </div>
        </div>


        <!--
        <div style="width:100%; height:230px; overflow:hidden; margin-top:4px; float:left;  ">
          <div v-for="(hotDeal,index) in hotDeals"  :key="productCategory" style="width:32.8%; height:120px; margin-left:0.2%;  float:left;  ">
            <div style="width:100%; height:200px; margin-top:0px; float:left;  ">
              <img :src="getImageUrl(hotDeal.image)" style="width:100%; height:100%; background-size:100% 100%; " />
            </div>
          </div>
        </div>
        -->


      </div>
      <div class="" style="width:260px; height:490px;  float:right; ">
          <UserSummary  msg=""/>
      </div>




    </div>





  </div>


</template>
<script>

import UserSummary from './user-summary.vue';

import HomeBanner from './home-banner.vue';


export default {
  name: "SponsoredPage",
  components:{
    UserSummary,HomeBanner,

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
       fastFeatures: [
              'Instant Checkout',
              'One-Click Purchase',
              'Fast Shipping',
              'Real-time Tracking',
              'Secure Payments',
            ],
      buyerView:{
        featured:{canShow:true},
        map:{canShow:false},
        videos:{canShow:false}
      },
      cardata: [
        '<img :src="getImageUrl(image)" style="width:100%; height:190px; float:left; " />',
        '<img :src="getImageUrl(image)" style="width:100%; height:190px; float:left; " />',
        '<img :src="getImageUrl(image)" style="width:100%; height:190px; float:left; " />',
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
      productCategories:[

        {
            title:"Fashion",
            subCategories:[
                "Men Shoes","Men Shirts","Men Watches","Men Pants","Men Fashion","Women Bags",
                "Women Shoes","Women Shirts","Women Watches","Women Pants","Women Fashion","Women Fashion",
            ],
            itemPreviewProducts:[
                { title:"Balenciaga",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                { title:"Woman Bag",imgSrc:"/shorpi/assets/images/bag1.jpg" },
                { title:"Shirt",imgSrc:"/shorpi/assets/images/men-shirt-1.jpg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-2.jpeg" },
                { title:"Balenciaga",imgSrc:"/shorpi/assets/images/puma3.jpeg" },
                { title:"Men Hat",imgSrc:"/shorpi/assets/images/puma1.jpg" },
            ],
            featuredBrands:[
                { title:"Adiddas",imgSrc:"/shorpi/assets/images/logo-adiddas.jpg" },
                { title:"Balenciaga",imgSrc:"/shorpi/assets/images/logo-balenciaga.jpg" },
                { title:"Fila",imgSrc:"/shorpi/assets/images/logo-fila.png" },
                { title:"Nike",imgSrc:"/shorpi/assets/images/logo-nike.png" },
                { title:"Puma",imgSrc:"/shorpi/assets/images/logo-puma.png" }

            ],

      },
      {
          title:"Phones",
          subCategories:[
              "Handsets ","Smartphones","iphones","iPads","Android Tablets","Adapters","Batteries",
              "Battery Chargers","Bluetooth Headsets","Screen Protectors","Smart Watches","Selfie Sticks",
              "Chargers",
          ],
          itemPreviewProducts:[
              { title:"iphone 13",imgSrc:"/shorpi/assets/images/phone-1.jpeg" },
              { title:"Huawei P30",imgSrc:"/shorpi/assets/images/phone-2.jpg" },
              { title:"Xiaomi m2",imgSrc:"/shorpi/assets/images/phone-3.png" },
              { title:"Ipad pro",imgSrc:"/shorpi/assets/images/tab-1.jpg" },
              { title:"Beats Headphone",imgSrc:"/shorpi/assets/images/headphone-1.png" },
              { title:"Airpod Pro",imgSrc:"/shorpi/assets/images/airpod-1.jpg" },
          ],
          featuredBrands:[
              { title:"Apple",imgSrc:"/shorpi/assets/images/logo-apple.png" },
              { title:"Huawei",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
              { title:"Lg",imgSrc:"/shorpi/assets/images/logo-lg.png" },
              { title:"Motorolla",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
              { title:"Xiaomi",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

          ],
      },
      {
          title:"Computing",
          subCategories:[
              "Laptops","Desktops","External Hard Drives","USB Flash Drives","Antivirus","Inkjet Printers","Laser Printers",
              "Printer Ink & Toner","Keyboards & Mice","Uninterrupted Power Supply","Memory Cards","Batteries",
              "Scanners","Video Projectors",
          ],
          itemPreviewProducts:[
              { title:"iphone 13",imgSrc:"/shorpi/assets/images/phone-1.jpeg" },
              { title:"Huawei P30",imgSrc:"/shorpi/assets/images/phone-2.jpg" },
              { title:"Xiaomi m2",imgSrc:"/shorpi/assets/images/phone-3.png" },
              { title:"Ipad pro",imgSrc:"/shorpi/assets/images/tab-1.jpg" },
              { title:"Beats Headphone",imgSrc:"/shorpi/assets/images/headphone-1.png" },
              { title:"Airpod Pro",imgSrc:"/shorpi/assets/images/airpod-1.jpg" },
          ],
          featuredBrands:[
              { title:"Apple",imgSrc:"/shorpi/assets/images/logo-apple.png" },
              { title:"Huawei",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
              { title:"Lg",imgSrc:"/shorpi/assets/images/logo-lg.png" },
              { title:"Motorolla",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
              { title:"Xiaomi",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

          ],
      },

      {
            title:"Baby Care Products",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }


                ],

        },

        {
          title:"Kitchen",
            categoryLabel:"",
            subCategories:[

            ],
            itemPreviewProducts:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
            ],
            featuredBrands:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }


            ],
        },



    {
        title:"Office",
            categoryLabel:"",
            subCategories:[

            ],
            itemPreviewProducts:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
            ],
            featuredBrands:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

            ],
        },

    {
        title:"Equipments",
            categoryLabel:"",
            subCategories:[

            ],
            itemPreviewProducts:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
            ],
            featuredBrands:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

            ],
        },

    {
        title:"Books",
            categoryLabel:"",
            subCategories:[

            ],
            itemPreviewProducts:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
            ],
            featuredBrands:[
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

            ],
        },

        {
            title:"Gaming",
                categoryLabel:"",
                subCategories:[
                    "Playstation 3","Playstation 3","Playstation 3","Playstation 2","XBOX","XBOX One","XBOX 360"," XBOX",
                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
          title:  "Assessories",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
          title: "Tools",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
            title:"Machinery",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
            title:"Electronics",
                categoryLabel:"",
                subCategories:[
                    "Televisions","Smart TVs","DVD Players & Recorders","Home Theatre Systems","Receivers & Amplifiers",
                    "Sound Bars","Projectors","Video Surveillance","Camcorders","Generators","Power Inverters","Solar & Wind Power",
                    "Stablizers",

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
            title:"Home Applicances",
                categoryLabel:"",
                subCategories:[
                    "Ironing & Laundry","Kettles","Mixing & Blending","Microwave Ovens","Vacuum Cleaners","Kitchen Bundles",

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },{
            title:"Home Decoration",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
            title:"Outdoor",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
            title:"Sports",
                categoryLabel:"",
                subCategories:[

                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }

                ],

        },
        {
            title:"Pets",
                categoryLabel:"",
                subCategories:[
                    "Dogs","Cats","Birds","Fish & Aquatic Pets",
                ],
                itemPreviewProducts:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-3.jpeg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/pant2.jpg" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/balenc-5.jpeg" }
                ],
                featuredBrands:[
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-apple.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-huawei.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-lg.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-motorolla.png" },
                    { title:"Balenciage",imgSrc:"/shorpi/assets/images/logo-Xiaomi.png" }
                ],

        },

],


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
  },  methods: {

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


.menu-bar {

  height: 20px;
}

.menu-items {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  position: relative;

font-family:Poppins-Regular;
  font-size: 12px;
  color: #404040;
  padding: 0 8px;
  line-height: 20px;
  cursor: pointer;
}

.menu-item:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 40%;
  right: 0;
  transform: translateY(-50%);
  width: 1px;
  height: 14px;
  background-color: #ccc;
}

.menu-item:hover {

}
.topbar {
  position: relative;
  z-index: 2;
  &__button {
    margin: 0 0 0 var(--spacer-xs);
  }
}
</style>
