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
    <s-header v-if="product.attributes" style="font-size:14px;" :name="product.attributes.title"></s-header>


   
    
    <div class="detail-content">


      <div class="centered-position" style="width:100vw;">

      <div class="product-detail-yop">
        <div class="product-images" style="width:360px;  ">


          <transition name="slide-up" mode="out-in">
            <img
            class="product-image-tr"
              :src="selectedPhoto"
              alt="Product Image"
            />
          </transition>
          <!--
          <img
            v-for="(image, index) in product.media"
            :key="index"
            :src="image.url"
           
            alt="Product Image"
            @click="viewImage(image.url)"
          />
          -->
        </div>
        <div class="product-thumbnails" style="width:32px; padding-left:10px; border-left:0.4px solid #f1f1f1; ">
          <img
            v-for="(thumbnail, index) in product.media"
            :key="index"
            :src="thumbnail.url"
            style="width:30px; margin-bottom: 0.4px; "
            alt="Product Thumbnail"
            @click="viewImage(thumbnail.url)"
          />
        </div>
        <div class="product-info left-target-position" style="width:290px; padding:0px; border:0.4px solid #404040; text-align: left;">
          
          <div style=" padding:20px; " >
          
          <p>{{ product.attributes.title }}</p>
          
          <p>₦ {{ product.attributes.price }} </p>
          <p>{{ product.attributes.description }}</p>
          <p style="color:#404040;"> {{ product.attributes.stockCapacity }} in stock</p>


          </div>


          <div style=" padding:20px; " >
            <div>
              <div class="quantity-container">
                <button @click="decreaseQuantity" style="border-radius:0px; border:none;" class="quantity-button">-</button>
                <input type="number" v-model="quantity" class="quantity-input" />
                <button @click="increaseQuantity" style="border-radius:0px; border:none;" class="quantity-button">+</button>
              </div>
            </div>

          </div>


          <div v-if="product.variants" style="background-color: #000; height:0.4px;"></div>
           
          <div v-if="product.variants"  style=" padding:20px; " >
          
          <div 
              v-for="(variant, index) in product.variants"

              :v-if="variant.variationType=='image-text'"

                    :key="index" style="margin-bottom: 20px;"    
                class="variant-selector">
                <label >{{ variant.title }}</label>
                <div style="margin-bottom: 14px; font-size:12px; " class="variant-options">
                 
                  <div
                  :v-model="variant.selectedOption"

                  :v-if="variant.variationType=='image-text'"

                    v-for="(option, opindex) in variant.options"
                    :key="opindex"
                    :class=" variant.selectedOption === opindex?`selected-variant-image`: `variant-option `"
                    @click="selectVariant(index, opindex)"
                    style="font-size:10px;"
                  >
                  <img
                  
                    :src="option.mediaSource"
                    style="width:60px; max-height:60px; margin-bottom: 0.4px; "
                    alt="Product Thumbnail"
                    @click="viewImage(option.mediaSource)"
                  /><br/>
                    {{ option.title }}
                  </div>


                </div>
            </div>



          <div 
              v-for="(variant, index) in product.variants"

                  :v-if="variant.variationType=='text'"
                    :key="index" style="margin-bottom: 20px;"    
                class="variant-selector">
                <label >{{ variant.title }}</label>
                <div style="margin-bottom: 14px; font-size:12px; " class="variant-options">
                 
                  <div
                  :v-model="variant.selectedOption"
                  :v-if="variant.variationType=='text'"
                    v-for="(option, opindex) in variant.options"
                    :key="opindex"
                    :class=" variant.selectedOption === opindex?`selected-variant`: `variant-option `"
                    @click="selectVariant(index, opindex)"
                    style="font-size:10px;"
                  >
                    {{ option.title }}
                  </div>
                </div>
            </div>









          </div>


           <div style="background-color: #000; height:0.4px;"></div>


          <div style=" padding:20px; " >
            <div>
                        
              <div class="collapsible">
                <p @click="toggleShipping" class="header-text-de" style=" cursor:pointer;  font-size:11px; ">SHIPPING</p>
                <transition name="slide-fade" mode="out-in">
                  <div v-if="showShipping">
                    <p>We provide fast and reliable shipping options to ensure your orders are delivered to you promptly and securely.</p>
                    <p>📦 Standard Shipping: Your order will be delivered within 5-7 business days.</p>
                    <p>🚀 Express Shipping: If you need your items urgently, choose our express shipping option for delivery within 1-2 business days.</p>
                    <p>🌎 International Shipping: We offer worldwide shipping. Delivery times may vary depending on your location.</p>
                    <p>📮 Track Your Order: You can easily track your order's progress through your account.</p>
                  </div>
                </transition>
              </div>
              
              <div class="collapsible">
                <p @click="toggleReturns"  class="header-text-de"  style=" cursor:pointer;  font-size:11px; ">RETURNS</p>
                <transition name="slide-fade" mode="out-in">
                  <div v-if="showReturns">
                    <p>We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return the items within 30 days of receipt.</p>
                    <p>🔁 Easy Returns Process: Log in to your account, initiate a return request, and follow the instructions provided.</p>
                    <p>💰 Refund Policy: Once we receive your returned items, we'll process your refund within 5-7 business days.</p>
                    <p>🔄 Exchanges: If you'd like to exchange an item for a different size or color, please contact our customer support team.</p>
                  </div>
                </transition>
              </div>
              
              <div class="collapsible">
                <p @click="toggleDelivery"  class="header-text-de"  style=" cursor:pointer; font-size:11px; ">DELIVERY</p>
                <transition name="slide-fade" mode="out-in">
                  <div v-if="showDelivery">
                    <p>Our dedicated delivery team ensures that your orders are carefully packaged and promptly delivered to your preferred address.</p>
                    <p>⏰ Delivery Time: Estimated delivery times are provided during the checkout process based on your location and chosen shipping method.</p>
                    <p>📦 Safe and Secure Packaging: We take extra care to package your items securely to prevent any damage during transit.</p>
                    <p>📧 Delivery Confirmation: You'll receive a confirmation email and tracking information once your order has been dispatched.</p>
                    <p>💼 International Delivery: Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.</p>
                  </div>
                </transition>
              </div>
            </div>

          </div>

          







          

        
        </div>

      </div>
     
    
    
    </div>




    <div style="height:200px;"></div>
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
      <input type="button" style="width:44%; border-radius:0px; margin-right:10px; height:60px; color:#404040; background:#fff; border:1px solid #000; " @click="addCart" value="Add to Cart" />
      <input type="button" style="width:44%; border-radius:0px; height:60px; color:#fff; background:#000; border:1px solid #000; " @click="goToCart" value="Buy Now" />
     
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
      quantity: 1,// Initial quantity value
      showShipping: false,
      showReturns: false,
      showDelivery: false,
      selectedPhoto:'',
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
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    toggleShipping() {
      this.showShipping = !this.showShipping;
    },
    toggleReturns() {
      this.showReturns = !this.showReturns;
    },
    toggleDelivery() {
      this.showDelivery = !this.showDelivery;
    },
    viewImage(url) {
      // Implement image viewer logic
      this.selectedPhoto=url;
    },
    selectVariant(variantIndex,option) {

      this.product.variants[variantIndex].selectedOption = option;

     // alert("opt"+option)
     //  alert("vopt"+this.product.variants[variantIndex].selectedOption)


    },
    async getProductDetails(){
      let id= this.$route.params.id;
     

      let result= await  productService.fetchProductDetails(id)
      console.log(result)
      if(result.data['resultCode']==1){
        this.product=result.data['resultContent']

        // ::::::::::: variant selection
        for(let v=0; v<this.product.variants.length; v++){
          this.product.variants[v]['selectedOption']=0;
          //alert( JSON.stringify(this.product.variants[v]) )

        }

        this.selectedPhoto=this.product.media[0].url
       
        
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
  gap: 4px;

  flex-wrap: wrap; /* Allow flex items to wrap onto multiple lines */
   /* Add some spacing between flex items */
}


.variant-option {
  padding: 4px;
  padding-left:20px;
  padding-right:20px;

 
  border: 1px solid #ccc;
  border-radius: 0px;
  cursor: pointer;
}
.variant-option:hover {

  border: 1px solid #404040;
  border-radius: 0px;
  cursor: pointer;
}

.selected-variant-image {
  padding: 4px;
  padding-left:20px;
  padding-right:20px;
 
  border: 1.6px solid #404040;
  color:#000;
  border-radius: 0px;
 cursor: pointer;
}


.selected-variant {
  padding: 4px;
  padding-left:20px;
  padding-right:20px;

  
  border: 1.6px solid #404040;
  color:#000;
 border-radius: 0px;
 cursor: pointer;
}

button {
  padding: 10px 20px;
  background-color: #000;
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
  min-height:40vh;
  margin:4px;
  flex-direction: column;
   /* Center content vertically */
}

.product-thumbnails {
  width: 40px;
  flex: 0 0 40px; /* Fixed width of 40px */
}

.product-image-tr {
  /* Initial position for the transition */

}

.collapsible {
  margin-bottom: 20px;
}

h2 {
  cursor: pointer;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}


.header-text-de{


}

.header-text-de:hover{

  color:#000;


}

.quantity-container {
  display: flex;
  align-items: center;
}

.quantity-button {
  border:none;
  outline:none;
  width:30px;
 
  padding: 2px 6px;
  font-size: 12px;

  cursor: pointer;
}

.quantity-input {
  margin:4px;

  padding: 4px 6px;
  border: 1px solid #ccc;
  width: 40px;
  text-align: center;
}
</style>
