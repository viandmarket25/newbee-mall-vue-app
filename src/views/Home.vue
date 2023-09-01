<!--
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 *
-->

<template>
  <div>


    <header class="home-header wrap" :class="{'active' : headerScroll}">
        <router-link tag="i" to="./category"><i class="nbicon nbmenu2"></i></router-link>
        <div class="header-search">
            <span class="app-name" style="font-size:20px;">SALESBOYI</span>
            <i class="iconfont icon-search"></i>
            <router-link tag="span" class="search-title" style="box-shadow: 0 0 0 1px #f1f1f1; width:80%; font-size:12px; padding-left:10px; border-radius:4px;" to="./product-list?from=home">SEARCH, ITEM, COLLECTION</router-link>
        </div>
        <router-link class="login" tag="span" to="./login" v-if="!isLogin" style="font-size:14px;">Login</router-link>
        <router-link class="login" tag="span" to="./user" v-else>
          <van-icon name="manager-o" />
        </router-link>
    </header>
    <nav-bar></nav-bar>



    <div class="category-list- centered-position" style="margin-top:90px; width:100vw; float:left; background:#f0f0f0; margin-bottom:40px; ">
    <SponsoredPage/>



     </div>

    <swiper :list="swiperList"></swiper>



    <div class="category-list">
      <div v-for="item in categoryList" v-bind:key="item.categoryId">
       <div style="width:100%;">
        <span
             style="width: 46px; height: 46px;  text-align: center;  "
             v-html="item.svg"></span>
             </div>
            

        <span>{{item.name}}</span>
      </div>
    </div>

   

    <div class="category-list-">
       <Showcase v-if="showcase" />
    </div>






    <div class="good" style="padding-bottom:100px; margin-bottom:20px; width:100%; min-height:100px; float:left;">
      <header class="good-header">Recommendations</header>
      <div class="good-box">
        
        <div class="good-item" v-for="(item,index) in featuredProducts.recommended.slice(0,54)" :key="index" @click="goToDetail(item.id)">
          
          
          <img :src="item.mediaSource" alt="">
          
          <div class="good-desc">
            <div class="title" style="font-size:12px; color:#000;  ">{{ item.title }}</div>
            <div class="price" style="font-size:11px; color:#e85d04;  ">₦ <strong style="font-size: 14px;"> {{ item.price }}</strong></div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/NavBar'
import SponsoredPage from '@/components/sponsored-page'
import swiper from '@/components/Swiper'
import { getHome } from '../service/home'
import { getUserInfo } from '../service/user'
import { getLocal } from '@/common/js/utils'
import { Toast } from 'vant'

import Showcase from '@/components/showcase.vue';
import productService from '@/service/products'

export default {
  name: 'home',
  components: {
    navBar,
    swiper,
    SponsoredPage,Showcase
  },
  data() {
    return {
      featuredProducts:{
        latest:[],
        popular:[],
        recommended:[]
      },
      showcase:false,
          collections: [

              {
                id: 1,
                photo: "https://images.asos-media.com/products/collusion-x018-unisex-y2k-wide-leg-skater-jeans-with-branding-in-raw-denim/204673736-1-midblue?$n_960w$&wid=952&fit=constrain",
                title: "Summer Essentials",
                price: "$49.99",
              },
              {
                id: 2,
                photo: "https://images.asos-media.com/products/collusion-graphic-back-print-t-shirt-in-light-pink/204867665-1-lightpink?$n_960w$&wid=952&fit=constrain",
                title: "Casual Comfort",
                price: "$39.99",
              },
              {
                id: 3,
                photo: "https://images.asos-media.com/products/collusion-pocket-detail-wide-leg-linen-trousers-in-stone/204751993-1-beige?$n_640w$&wid=513&fit=constrain",
                title: "Active Lifestyle",
                price: "$54.99",
              },
              // Add more collections as needed
            ],
            collections2: [

        {
          id: 1,
          photo: "https://images.asos-media.com/products/collusion-x018-unisex-y2k-wide-leg-skater-jeans-with-branding-in-raw-denim/204673736-1-midblue?$n_960w$&wid=952&fit=constrain",
          title: "Summer Essentials",
          price: "$49.99",
        },
        {
          id: 2,
          photo: "https://images.asos-media.com/products/collusion-graphic-back-print-t-shirt-in-light-pink/204867665-1-lightpink?$n_960w$&wid=952&fit=constrain",
          title: "Casual Comfort",
          price: "$39.99",
        },

        // Add more collections as needed
      ],
            subCategoryVisible:false,
            categoryIndex:0,
            categories: [
        {
          "id": 1,
          "name": "Men's Fashion",
          "showSubcategories": false,
          "subcategories": [
            { "id": 11, "name": "Clothing" },
            { "id": 12, "name": "Shoes" },
            { "id": 13, "name": "Accessories" },
            { "id": 14, "name": "Bags" },
            { "id": 15, "name": "Watches" },
            { "id": 16, "name": "Grooming" }
          ]
        },
        {
          "id": 2,
          "name": "Women's Fashion",
          "showSubcategories": false,
          "subcategories": [
            { "id": 21, "name": "Clothing" },
            { "id": 22, "name": "Shoes" },
            { "id": 23, "name": "Bags" },
            { "id": 24, "name": "Accessories" },
            { "id": 25, "name": "Jewelry" },
            { "id": 26, "name": "Beauty" }
          ]
        },
        {
          "id": 3,
          "name": "Kids' Fashion",
          "showSubcategories": false,
          "subcategories": [
            { "id": 31, "name": "Boys' Clothing" },
            { "id": 32, "name": "Girls' Clothing" },
            { "id": 33, "name": "Shoes" },
            { "id": 34, "name": "Accessories" },
            { "id": 35, "name": "Toys" },
            { "id": 36, "name": "School Uniforms" }
          ]
        },
        {
          "id": 4,
          "name": "Footwear",
          "showSubcategories": false,
          "subcategories": [
            { "id": 41, "name": "Men's Shoes" },
            { "id": 42, "name": "Women's Shoes" },
            { "id": 43, "name": "Kids' Shoes" },
            { "id": 44, "name": "Athletic Shoes" },
            { "id": 45, "name": "Boots" },
            { "id": 46, "name": "Sandals" }
          ]
        },
        {
          "id": 5,
          "name": "Accessories",
          "showSubcategories": false,
          "subcategories": [
            { "id": 51, "name": "Hats" },
            { "id": 52, "name": "Scarves & Wraps" },
            { "id": 53, "name": "Belts" },
            { "id": 54, "name": "Gloves" },
            { "id": 55, "name": "Sunglasses" },
            { "id": 56, "name": "Wallets" }
          ]
        },
        {
          "id": 6,
          "name": "Sportswear",
          "showSubcategories": false,
          "subcategories": [
            { "id": 61, "name": "Men's Sportswear" },
            { "id": 62, "name": "Women's Sportswear" },
            { "id": 63, "name": "Kids' Sportswear" },
            { "id": 64, "name": "Athletic Shoes" },
            { "id": 65, "name": "Fitness Accessories" },
            { "id": 66, "name": "Sports Equipment" }
          ]
        },
        {
          "id": 7,
          "name": "Maternity",
          "showSubcategories": false,
          "subcategories": [
            { "id": 71, "name": "Maternity Clothing" },
            { "id": 72, "name": "Maternity Accessories" },
            { "id": 73, "name": "Nursing & Feeding" },
            { "id": 74, "name": "Baby Gear" }
          ]
        }
        // Add more fashion categories and subcategories as needed
      ]
      ,
            token:'',
            products:[],
      swiperList: [],
      isLogin: false,
      headerScroll: false,
      hots: [],
      newGoodses: [],
      recommends: [],
      categoryList:[
  {
    name: 'Hotels',
    imgUrl: '//s.weituibao.com/1583585285461/cs.png',
    categoryId: 100001,
    svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
  <path fill-rule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clip-rule="evenodd" />
</svg>


    `
  },
  

  {
    name: 'Restaurants',
    imgUrl: '//s.weituibao.com/1583585285472/sx.png',
    categoryId: 100004,
    svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
  <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z" clip-rule="evenodd" />
</svg>
`
  },
  {
    name: 'Quick Delivery',
    imgUrl: '//s.weituibao.com/1583585285467/dj.png',
    categoryId: 100005,
    svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd" />
  <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
</svg>

`
  },
  {
    name: 'Recharge & Payment',
    imgUrl: '//s.weituibao.com/1583585285465/cz.png',
    categoryId: 100006,
    svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
</svg>
`
  },
  {
    name: 'Gift Buy',
    imgUrl: '//s.weituibao.com/1583585285469/pt.png',
    categoryId: 100007,
    svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
</svg>

`
  },
  {
    name: 'Bill Payments',
    imgUrl: '//s.weituibao.com/1583585285470/qb.png',
    categoryId: 100010,
    svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
  <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
</svg>
`
  },
  {
    name: 'Get Coupons',
    imgUrl: '//s.weituibao.com/1583585285468/juan.png',
    categoryId: 100008,
    svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
</svg>
`
  },
  {
    name: 'Save Money',
    imgUrl: '//s.weituibao.com/1583585285471/sq.png',
    categoryId: 100009,
    svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
</svg>
`
  },
  
]

    }
  },

  async mounted() {
    const token = getLocal('token')
    if (token) {
      this.isLogin = true
    }

    // :::::::: get featured products

    this.getFeaturedProducts();
    /*
    window.addEventListener('scroll', this.pageScroll)
    Toast.loading({
      message: 'loading...',
      forbidClick: true
    });

    /*
    const { data } = await getHome()

    console.log(data)

    this.swiperList = data.carousels
    this.newGoodses = data.newGoodses
    this.hots = data.hotGoodses
    this.recommends = data.recommendGoodses
    */
   // Toast.clear()
  },
  methods: {
    async getFeaturedProducts(){

      let recommended = await productService.fetchRecommendedProducts()
      console.log(recommended)

      if(recommended.data['resultCode']==1){
        this.featuredProducts.recommended=recommended.data['resultContent']

      }

      await productService.fetchLatestProducts() 

      await productService.fetchPopularProducts()


    },
    filteredItems(index) {
        // Custom filtering logic based on the index
        // Modify the condition below according to your requirements
        return index === 0 ? this.categories[index]['subcategories'] : [];

    },
        showSubcategories(index) {
          this.subCategoryVisible=true
          this.categoryIndex=index

          //alert(this.categories[this.categoryIndex]['subcategories'][0].name)

        },
        hideSubcategories(index) {
          this.subCategoryVisible=false
          this.categoryIndex=index
        },
        gotoProduct(id){
          this.$router.push("/p/"+id)

        },
        async getProduct(){
          let id=this.$route.params.id

          await productService.fetchProduct(id)
          .then(response=>{
              //this.products=response.data['resultContent']

              ///console.log(response.data)



            }

          );

        },
        async getProducts(){
          let id=this.$route.params.id

          await productService.fetchProducts(this.token)
          .then(response=>{
            this.products=response.data['resultContent']

              console.log( this.products)
              //this.contentIsLoaded=true;

            }

          );

        },
    pageScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > 100 ? this.headerScroll = true : this.headerScroll = false
    },
    goToDetail(item) {
      this.$router.push({ path: `product/${item}` })
    }
  }
}
</script>

<style lang="less" scoped >

.sales-tag {
  position: relative;
  top: -196px;
 
  left: 56%;
  background-color: #404040;
  color: #fff;
  padding: 1px 2px;

}

  @import '../common/style/mixin';
  .home-header {
      position: fixed;
      left: 0;
      top: 0;
      .wh(100%, 50px);
      .fj();
      line-height: 50px;
      padding: 0 15px;
      .boxSizing();
      font-size: 15px;
      color: #fff;
      z-index: 10000;
      .nbmenu2 {
        color: @primary;
      }
      &.active {
        background: @primary;
        .nbmenu2 {
          color: #fff;
        }
        .login {
          color: #fff;
        }
      }

      .header-search {
          display: flex;
          .wh(74%, 20px);
          line-height: 20px;
          margin: 10px 0;
          padding: 5px 0;
          color: #232326;
          background: rgba(255, 255, 255, .7);
          border-radius: 20px;
          .app-name {
              padding: 0 10px;
              color: @primary;
              font-size: 20px;
              font-weight: bold;
              border-right: 1px solid #666;
          }
          .icon-search {
              padding: 0 10px;
              font-size: 17px;
          }
          .search-title {
              font-size: 12px;
              color: #666;
              line-height: 21px;
          }
      }
      .icon-iconyonghu{
        color: #fff;
        font-size: 22px;
      }
      .login {
        color: @primary;
        line-height: 52px;
        .van-icon-manager-o {
          font-size: 20px;
          vertical-align: -3px;
        }
      }
  }
  .category-list {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 13px;
    div {
      display: flex;
      flex-direction: column;
      width: 20%;
      text-align: center;
      img {
        .wh(40px, 40px);
        margin: 13px auto 8px auto;
      }
      span {
        .wh(40px, 40px);
        margin: 13px auto 8px auto;
      }
    }
  }
  .good {
    .good-header {
      background: #f9f9f9;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color:#000;
      font-size: 13px;
      font-weight: 500;
    }
    .good-box {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .good-item {
        box-sizing: border-box;
        width: 25%;
        border: 0.4PX solid #e9e9e9;
        padding: 10px 10px;
        img {
          display: block;
          width: 140px;
          margin: 0 auto;
        }
        .good-desc {
          text-align: center;
          font-size: 14px;
          padding: 4px 0;
          .title {
            color: #222333;
          }
          .price {
            color: @primary;
          }
        }
        &:nth-child(2n + 1) {
          border-right: 0PX solid #e9e9e9;
        }
      }
    }
  }
  .floor-list {
      width: 100%;
      padding-bottom: 50px;
      .floor-head {
        width: 100%;
        height: 40px;
        background: #F6F6F6;
      }
      .floor-content {
        display: flex;
        flex-shrink: 0;
        flex-wrap: wrap;
        width: 100%;
        .boxSizing();
        .floor-category {
          width: 50%;
          padding: 10px;
          border-right: 1px solid #dcdcdc;
          border-bottom: 1px solid #dcdcdc;
          .boxSizing();
          &:nth-child(2n) {
            border-right: none;
          }
          p {
            font-size: 17px;
            color: #333;
            &:nth-child(2) {
              padding: 5px 0;
              font-size: 13px;
              color: @primary;
            }
          }
          .floor-products {
            .fj();
            width: 100%;
            img {
              .wh(65px, 65px);
            }
          }
      }
    }
  }



  .promotion-banner {
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
  }

  .promotion-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .promotion-title {
    font-size: 20px;

    font-family: Satoshi-Bold;

    margin-bottom: 10px;
    color: #333;
  }

  .promotion-description {
    font-size: 14px;

    font-family: Satoshi-Medium;

    margin-bottom: 20px;
    color: #666;
  }

  .promotion-button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .promotion-title {
      font-size: 20px;
    }

    .promotion-description {
      font-size: 16px;
    }

    .promotion-button {
      padding: 8px 16px;
    }
  }
  .sale-tag {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 4px 8px;
    background-color: #303030;
    color: #fff;
    font-size: 11px;

    font-family: Satoshi-Medium;

    text-transform: uppercase;
    border-radius: 20px;
  }

  .product-collections {
    display: grid;
    grid-template-columns: auto;
    gap: 20px;
    margin: 20px;
  }

  .collection-item {
    position: relative;
    cursor: pointer;
  }

  .collection-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    margin-top:92%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.3);

  }

  .collection-title {
    font-size: 16px;

    font-family: Satoshi-Bold;
    margin-bottom: 10px;
    color: #000000;
  }

  .shop-now-button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .collection-photo {
    width: 100%;
    height: auto;
  }

  .collection-price {
    margin-top: 10px;
    font-size: 16px;
    color: #888;
  }

  @media (min-width: 768px) {
    .product-collections {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }

  .category-list {
    font-family: Satoshi-Medium;
    position: relative;
  }

  .main-categories {
    list-style: none;
    padding: 0;
    margin: 0;
    background:#fafafa;
    text-align:center;

  }

  .category-item {
    position:absolute;
    position: relative;
    display: inline-block;
    margin-right: 4px;
    font-size: 13px;
    text-align:center;
    color:#404040;
    font-family: Satoshi-Bold;

  }

  .category-link {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #333;
  }

  .sub-categories {
    position:absolute;
     align-self: baseline;;
    top: 100%;
    left: 0px;
    right: 0;
    background-color: #fcfcfc;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 20px;
    width: 100vw;
    z-index:1000;
    padding-bottom:40px;
    display:none;
    float:left;
  }

  .sub-categories-containier {
    position:absolute;
     align-self: baseline;
     text-align:center;
    top: 100%;
    left: 0px;
    right: 0;
    background-color: #fcfcfc;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 20px;
    width: 100vw;
    z-index:1000;
    padding-bottom:40px;
    display:none;
    float:left;
  }
  .sub-categories-active {
    position:absolute;
     align-self: baseline;;
    top: 100%;
    left: 0px;
    right: 0;
    background-color: #fcfcfc;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 20px;
    width: 100vw;
    z-index:1000;
    padding-bottom:40px;

    float:left;
  }






  .category-item:hover .sub-categories {
    display: block;

  }

  .subcategory-item {
    left:0px;
    margin-bottom: 5px;
    list-style: none;
    display: inline-block;
  }

  .subcategory-link {
    display: block;
    padding: 5px;
    text-decoration: none;
    color: #666;
    text-align:center;
  }

  .subcategory-link:hover {
    background-color: #fafafa;
    color:#404040;
  }





  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 10px;
  }

  .product {

    padding: 0px;
    display: flex;
    cursor:pointer;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
  }

  .product-image img {
    width: 100%;

    height:auto;
    margin-bottom: 2px;
  }

  .product-name {
    font-size: 12px;
    font-weight: normal;
    margin-bottom: 5px;
    text-align: left;
  }

  .product-price {
    font-size: 12px;
    font-weight: normal;
    text-align: left;
  }

  #home {
    box-sizing: border-box;
    padding: 0 var(--spacer-sm);
    @include for-desktop {
      max-width: 1240px;
      padding: 0;
      margin: 0 auto;
    }
  }

  .hero {
    margin: var(--spacer-xl) auto var(--spacer-lg);
    --hero-item-background-position: center;
    @include for-desktop {
      margin: var(--spacer-xl) auto var(--spacer-2xl);
    }
    .sf-hero-item {
      &:nth-child(even) {
        --hero-item-background-position: left;
        @include for-mobile {
          --hero-item-background-position: 30%;
          ::v-deep .sf-hero-item__subtitle,
          ::v-deep .sf-hero-item__title {
            text-align: right;
            width: 100%;
            padding-left: var(--spacer-sm);
          }
        }
      }
    }
    ::v-deep .sf-hero__control {
      &--right, &--left {
        display: none;
      }
    }
  }

  .banner-grid {
    --banner-container-width: 50%;
    margin: var(--spacer-xl) 0;
    ::v-deep .sf-link:hover {
      color: var(--c-white);
    }
    @include for-desktop {
      margin: var(--spacer-2xl) 0;
      ::v-deep .sf-link {
        --button-width: auto;
        text-decoration: none;
      }
    }
  }

  .banner {
    &__tshirt {
      background-position: left;
    }
    &-central {
      @include for-desktop {
        --banner-container-flex: 0 0 70%;
      }
    }
  }

  .similar-products {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: var(--spacer-2xs);
    --heading-padding: 0;
    border-bottom: 1px var(--c-light) solid;
    @include for-desktop {
      border-bottom: 0;
      justify-content: center;
      padding-bottom: 0;
    }
  }
   ::v-deep .sf-product-card__image .sf-image {
      --image-height: 14.375rem;
      --image-width: 9.375rem;
      object-fit: cover;
      @include for-desktop {
        --image-width: 13.125rem;
        --image-height: 18.75rem;
      }
    }

  .call-to-action {
    background-position: right;
    margin: var(--spacer-xs) 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
    }
  }

  .carousel {
      margin: 0 calc(-1 * var(--spacer-sm)) 0 0;
    @include for-desktop {
      margin: 0;
    }
    &__item {
      margin: 1.375rem 0 2.5rem 0;
      @include for-desktop {
        margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
      }
      &__product {
        --product-card-add-button-transform: translate3d(0, 30%, 0);
      }
    }
    ::v-deep .sf-arrow--long .sf-arrow--right {
      --arrow-icon-transform: rotate(180deg);
       -webkit-transform-origin: center;
       transform-origin: center;
    }
  }





.menu-bar {

  height: 60px;
}

.menu-items {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  position: relative;
  font-family: Satoshi-Medium;
  font-size: 12px;
  color: #404040;
  padding: 0 20px;
  line-height: 60px;
  cursor: pointer;
}

.menu-item:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 1px;
  height: 14px;
  background-color: #404040;
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
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.cs-div-shape {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #f0f0f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.cs-div-curved-square-1 {
  background-color: #ff6b6b;
  border-radius: 5px;
  transform: rotate(-15deg);
}

.cs-div-curved-square-2 {
  background-color: #6bb0ff;
  border-radius: 15px;
  transform: rotate(15deg);
}

.inner-square {
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 2px;
  position: absolute;
}

.title {
  font-size: 24px;
  margin: 0;
}

.pr-list-view {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.pr-list-item {
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.pr-list-item-photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.pr-list-item-details {
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pr-list-item-title {
  font-size: 18px;
  margin: 0;
  color: #333;
}

.pr-list-item-price {
  font-size: 16px;
  color: #666;
}

.pr-list-item-tags {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.pr-list-item-tag {
  background-color: #f1f1f1;
  color: #333;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 6px;
  margin-bottom: 6px;
}
</style>
