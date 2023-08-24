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
  <div class="product-detail">
    <s-header style="font-size:14px;" :name="product.attributes.title"></s-header>


   
    
    <div class="detail-content">


      <div class="centered-position" style="width:100vw;">

      <div class="product-detail-yop">
        <div class="product-images" style="width:400px;  ">
          <img
            v-for="(image, index) in product.media"
            :key="index"
            :src="image.url"
           
            alt="Product Image"
            @click="viewImage(image.url)"
          />
        </div>
        <div class="product-thumbnails" style="width:32px; ">
          <img
            v-for="(thumbnail, index) in product.media"
            :key="index"
            :src="thumbnail.url"
            style="width:30px;"
            alt="Product Thumbnail"
            @click="viewImage(thumbnail.url)"
          />
        </div>
        <div class="product-info left-target-position" style="width:180px; padding:20px; border:0.4px solid #404040; text-align: left;">
          <p>{{ product.attributes.title }}</p>
          <p>{{ product.attributes.description }}</p>
          <p>₦ {{ product.attributes.price }} </p>
          <p> {{ product.attributes.stockCapacity }} in stock</p>

          <hr/>
            <div 

          v-for="(variant, index) in product.variants"
                :key="index" style="margin-bottom: 14px;"
          
          class="variant-selector">
            <label>{{ variant.title }}</label>
            <div class="variant-options">
              <div
                v-for="(option, opindex) in variant.options"
                :key="opindex"
                :class="`selected-variant`+{ 'selected-variant': variant.selectedOption === opindex }"
                @click="selectVariant(option)"
                style="font-size:10px;"
              >
                {{ option.title }}
              </div>
            </div>
          </div>
        
        </div>

      </div>
     
    
    
    </div>





      <div class="product-intro">
        <ul>
          <li>Overview</li>
          <li>Parameters</li>
          <li>Installation & Services</li>
          <li>Frequently Asked Questions</li>

        </ul>
        <div class="product-content" v-html="detail.goodsDetailContent"></div>
      </div>
      <div style="height:200px;"></div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="Chat" />
      <van-goods-action-icon icon="cart-o" :info="!count ? '' : count" @click="goTo()" text="Cart"/>
      <input type="button" style="width:44%; border-radius:4px; margin-right:10px; height:40px; color:#404040; background:#fff; border:1px solid #000; " @click="addCart" value="Add to Cart" />
      <input type="button" style="width:44%; border-radius:4px; height:40px; color:#fff; background:#404040; border:1px solid #000; " @click="goToCart" value="Buy Now" />
     
    </van-goods-action>
  </div>
</template>

<script>
import { getDetail } from '../service/good'
import { addCart } from '../service/cart'
import sHeader from '@/components/SimpleHeader'
import { Toast } from 'vant'

import productService from '@/service/products'

export default {
  data() {
    return {
      product:{},
      variants: [], // Populate with variant options
      selectedVariant: '', // Store selected variant
      detail: {
        goodsCarouselList: []
      }
    }
  },
  components: {
    sHeader
  },
  async mounted() {
   // const { id } = this.$route.params
   // const { data } = await getDetail(id)
   // this.detail = data

    await this.getProductDetails();
  },
  methods: {
    viewImage(url) {
      // Implement image viewer logic
    },
    selectVariant(option) {
      alert(option)
      this.selectedVariant = variant;
    },
    async getProductDetails(){
      let id= this.$route.params.id;
     

      let result= await  productService.fetchProductDetails(id)
      console.log(result)
      if(result.data['resultCode']==1){
        this.product=result.data['resultContent']

        // ::::::::::: variant selection
        for(let v=0; v<this.product.variants.length; v++){
          this.products.variants[v]['selectedOption']=0;
          alert( this.products.variants[v])

        }
       
        
      }
    

    },
    goBack() {
      this.$router.go(-1)
    },
    goTo() {
      this.$router.push({ path: '/cart' })
    },
    async addCart() {
      const { data, resultCode } = await addCart({ goodsCount: 1, goodsId: this.detail.goodsId })
      if (resultCode == 200 ) Toast.success('添加成功')
      this.$store.dispatch('updateCart')
    },
    async goToCart() {
      const { data, resultCode } = await addCart({ goodsCount: 1, goodsId: this.detail.goodsId })
      this.$store.dispatch('updateCart')
      this.$router.push({ path: '/cart' })
    }
  },
  computed: {
    count () {
      return this.$store.state.cartCount
    }
  }
}
</script>

<style lang="less">
  @import '../common/style/mixin';
  .product-detail {
    .detail-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      .fj();
      .wh(100%, 44px);
      line-height: 44px;
      padding: 0 10px;
      .boxSizing();
      color: #252525;
      background: #fff;
      border-bottom: 1px solid #dcdcdc;
      .product-name {
        font-size: 14px;
      }
    }
    .detail-content {
      margin-top: 44px;
      .detail-swipe-wrap {
        .my-swipe .van-swipe-item {
          img {
            width: 100%;
            // height: 300px;
          }
        }
      }
      .product-info {
        padding: 0 10px;
        .product-title {
          font-size: 18px;
          text-align: left;
          color: #333;
        }
        .product-desc {
          font-size: 14px;
          text-align: left;
          color: #999;
          padding: 5px 0;
        }
        .product-price {
          .fj();
          span:nth-child(1) {
            color: #F63515;
            font-size: 22px;
          }
          span:nth-child(2) {
            color: #999;
            font-size: 16px;
          }
        }
      }
      .product-intro {
        width: 100%;
        ul {
          .fj();
          width: 100%;
          margin: 10px 0;
          li {
            flex: 1;
            padding: 5px 0;
            text-align: center;
            font-size: 12px;
            border-right: 1px solid #999;
            box-sizing: border-box;
            &:last-child {
              border-right: none;
            }
          }
        }
        .product-content {
          padding: 0 20px;
          img {
            width: 100%;
          }
        }
      }
    }
    .van-goods-action-button--warning {
      background: linear-gradient(to right,#6bd8d8, @primary)
    }
    .van-goods-action-button--danger {
      background: linear-gradient(to right, #0dc3c3, #098888)
    }
  }




.product-images img {
  max-width: 100%;
  cursor: pointer;
}

.product-info {
  flex: 1;
}

.variant-selector label {
  display: block;
  margin-bottom: 5px;
}

.variant-options {
  display: flex;
  gap: 10px;
}

.variant-options div {
  padding: 4px;
 
  border: 1px solid #ccc;
  border-radius: 0px;
  cursor: pointer;
}

.selected-variant {
  border: 2px solid #000;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.product-detail {
  display: flex;
  justify-content: center; /* Center the columns horizontally */
  gap: 20px; /* Gap between columns */
  padding: 20px;
}

.product-images,
.product-thumbnails,
.product-info {
  float:left;
  flex: 1; /* Equal width columns */
  display: flex;
  min-height:90vh;
  margin:4px;
  flex-direction: column;
   /* Center content vertically */
}

.product-thumbnails {
  width: 40px;
  flex: 0 0 40px; /* Fixed width of 40px */
}









</style>
