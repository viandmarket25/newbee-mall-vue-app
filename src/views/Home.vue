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
            <router-link tag="span" class="search-title" to="./product-list?from=home">山河无恙，人间皆安</router-link>
        </div>
        <router-link class="login" tag="span" to="./login" v-if="!isLogin">登录</router-link>
        <router-link class="login" tag="span" to="./user" v-else>
          <van-icon name="manager-o" />
        </router-link>
    </header>
    <nav-bar></nav-bar>
    <div class="category-list- centered-position" style="margin-top:80px; width:100vw; float:left; background:#fbfbfb; box-shadow: 0 0 1px #f1f1f1;">

    <SponsoredPage/>



     </div>

    <swiper :list="swiperList"></swiper>



<!--
    <div class="category-list">
      <div v-for="item in categoryList" v-bind:key="item.categoryId">
        <img :src="item.imgUrl">
        <span>{{item.name}}</span>
      </div>
    </div>

    -->



    <div class="good">
      <header class="good-header">新品上线</header>
      <div class="good-box">
        <div class="good-item" v-for="item in newGoodses" :key="item.goodsId" @click="goToDetail(item)">
          <img :src="prefix(item.goodsCoverImg)" alt="">
          <div class="good-desc">
            <div class="title">{{ item.goodsName }}</div>
            <div class="price">¥ {{ item.sellingPrice }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="good">
      <header class="good-header">热门商品</header>
      <div class="good-box">
        <div class="good-item" v-for="item in hots" :key="item.goodsId" @click="goToDetail(item)">
          <img :src="prefix(item.goodsCoverImg)" alt="">
          <div class="good-desc">
            <div class="title">{{ item.goodsName }}</div>
            <div class="price">¥ {{ item.sellingPrice }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="good" :style="{ paddingBottom: '100px'}">
      <header class="good-header">最新推荐</header>
      <div class="good-box">
        <div class="good-item" v-for="item in recommends" :key="item.goodsId" @click="goToDetail(item)">
          <img :src="prefix(item.goodsCoverImg)" alt="">
          <div class="good-desc">
            <div class="title">{{ item.goodsName }}</div>
            <div class="price">¥ {{ item.sellingPrice }}</div>
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
export default {
  name: 'home',
  data() {
    return {
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
      categoryList: [
          {
            name: '新蜂超市',
            imgUrl: '//s.weituibao.com/1583585285461/cs.png',
            categoryId: 100001
          }, {
            name: '新蜂服饰',
            imgUrl: '//s.weituibao.com/1583585285468/fs.png',
            categoryId: 100003
          }, {
            name: '全球购',
            imgUrl: '//s.weituibao.com/1583585285470/qq.png',
            categoryId: 100002
          }, {
            name: '新蜂生鲜',
            imgUrl: '//s.weituibao.com/1583585285472/sx.png',
            categoryId: 100004
          }, {
            name: '新蜂到家',
            imgUrl: '//s.weituibao.com/1583585285467/dj.png',
            categoryId: 100005
          }, {
            name: '充值缴费',
            imgUrl: '//s.weituibao.com/1583585285465/cz.png',
            categoryId: 100006
          }, {
            name: '9.9元拼',
            imgUrl: '//s.weituibao.com/1583585285469/pt.png',
            categoryId: 100007
          }, {
            name: '领劵',
            imgUrl: '//s.weituibao.com/1583585285468/juan.png',
            categoryId: 100008
          }, {
            name: '省钱',
            imgUrl: '//s.weituibao.com/1583585285471/sq.png',
            categoryId: 100009
          }, {
            name: '全部',
            imgUrl: '//s.weituibao.com/1583585285470/qb.png',
            categoryId: 100010
          }
      ],
    }
  },
  components: {
    navBar,
    swiper,
    SponsoredPage,
  },
  async mounted() {
    const token = getLocal('token')
    if (token) {
      this.isLogin = true
    }
    window.addEventListener('scroll', this.pageScroll)
    Toast.loading({
      message: 'loading...',
      forbidClick: true
    });
    const { data } = await getHome()
    this.swiperList = data.carousels
    this.newGoodses = data.newGoodses
    this.hots = data.hotGoodses
    this.recommends = data.recommendGoodses
    Toast.clear()
  },
  methods: {
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
      this.$router.push({ path: `product/${item.goodsId}` })
    }
  }
}
</script>

<style lang="less" scoped >
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
    }
  }
  .good {
    .good-header {
      background: #f9f9f9;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: @primary;
      font-size: 16px;
      font-weight: 500;
    }
    .good-box {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .good-item {
        box-sizing: border-box;
        width: 50%;
        border-bottom: 1PX solid #e9e9e9;
        padding: 10px 10px;
        img {
          display: block;
          width: 120px;
          margin: 0 auto;
        }
        .good-desc {
          text-align: center;
          font-size: 14px;
          padding: 10px 0;
          .title {
            color: #222333;
          }
          .price {
            color: @primary;
          }
        }
        &:nth-child(2n + 1) {
          border-right: 1PX solid #e9e9e9;
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
    font-size: 24px;

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





</style>
