
<template>
  <div v-if="!isLoading" class="product-detail">
    <s-header v-if="product.attributes.title" style="font-size:14px;" :name="``+product.attributes.title"></s-header>


    <div class="detail-content">


      <div class="centered-position" style="width:100vw;">

      <div class="product-detail-yop">
        <div class="product-images" style="width:360px;  ">


          
            <div>
              <transition  name="slide-up" mode="out-in">
              <img v-if="selectedPhoto"
              class="product-image-tr"
                :src="selectedPhoto"
                alt="Product Image"
              />
            </transition>
            </div>
       
          <!--
          <img
            v-for="(image, index) in product.media"
            :key="index"
            :src="image.url"
           
            alt="Product Image"
            @click="viewImage(image.url)"
          />
          -->


          <div  style="background-color: #f1f1f1; height:0.4px; margin-top:10px;"></div>
           

          <div class="product-detail-tabs" style="margin-top:10px;">
          <div class="tab-buttons">
            <button style="font-size: 13px; border-radius:0px; "
              v-for="(tab, index) in tabs"
              :key="index"
              :class="{ active: activeTab === index }"
              @click="changeTab(index)"
            >

            <span v-if="tab==`Details`" style=" font-size:9px; height:18px; position:relative; top: 2px; color:#000;">     
              <svg 
                style="width:12px;  height:12px;"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
              </svg>
            </span>
            <span v-if="tab==`Reviews`" style=" font-size:9px; height:18px; position:relative; top: 2px; color:#000;">     
            
              <svg 
                style="width:12px;  height:12px;"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
              </svg>

            </span>



              {{ tab }}
            </button>
          </div>

          <div class="tab-content">
            <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
            
              <div style="min-width:360px; height:2px;">
              
              </div>

              <div v-if="tab==`Reviews`" style="width:100%; min-height:20px;">
                <div class="collapsible">
               
                <transition name="slide-fade" mode="out-in">
                  <div >
                    <div class="product-reviews">
                      <div style="background-color: #f1f1f1; height:0.4px;"></div>

                      <div v-for="(review, index) in reviews" :key="index" class="review">
                        <div class="review-header">
                          <div class="rating" style="display:flex; flex-wrap: wrap; gap:0.4px;"  >
                            <div v-for="star in review.rating" :key="star" class="star" :class="{ 'filled-star': star <= review.rating }"> </div>
                          </div>
                         
                        </div>
                        <div class="review-header">                    
                          <div class="review-info">
                            <span style="font-size:12px; font-weight:600;  " class="username">{{ review.username }}</span>
                            <span style="font-size:12px;  " class="date-time">{{ review.dateTime }}</span>
                          </div>
                        </div>

                        <div class="review-header">
                          
                          <div class="image-grid">
                            <div class="image-item">
                                <img :src="product.attributes.mediaSource" alt="Image 1">
                            </div>
                            <div class="image-item">
                                <img :src="product.attributes.mediaSource" alt="Image 2">
                            </div>
                            <div class="image-item">
                                <img :src="product.attributes.mediaSource" alt="Image 3">
                            </div>
                            <!-- Add more image items as needed -->
                          </div>
                        </div>


                        <div style="font-size:12px; text-align: left; " class="review-comment">{{ review.comment }}</div>
                      </div>
                    </div>
                 
                  </div>
                </transition>
              </div>
              
              </div>
              <div v-if="tab==`Details`" style="width:360px; min-height:20px; text-align:left;">
                
                <p v-if="product.attributes.description" style="font-weight: bold;" >
                 DESCRIPTION
                </p>
                <p v-if="product.attributes.description">
                  {{ product.attributes.description }} 

                </p>

                <p v-if="product.attributes.specifications" style="font-weight: bold;" >
                 SPECIFICATIONS
                </p>
                <p v-if="product.attributes.specifications">
                  {{ product.attributes.specifications }} 

                </p>

                <div v-for="(image, imageIndex) in product.moreMedia" :key="imageIndex" >
                  <transition  name="slide-up" mode="out-in">
                  <img 
                  v-if="product.moreMedia"
                  class="product-image-tr"
                    :src="image.url"
                    alt="Product Image"
                  />
                </transition>
                </div>


             
          
              


              </div>
            


            </div>
          </div>
        </div>









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
        <div class="product-info left-target-position" style="width:430px; padding:0px; background:#fdfdfd; border:0.4px solid #f1f1f1; text-align: left;">
          
          <div style=" padding:20px; " >
          
          <p v-if="product.attributes.title">
            {{ product.attributes.title }} 

          </p>


          <p style="color:#666;">
            4 Payments supported
            <span style="padding:2px 8px; font-size:10px; border-radius:20px;  background:#d0f4de; color:#404040;">
              Secure Pay ✔️
            </span>
          
          
          </p>
          
        
          <div class="price" style="font-size:11px; color:#e85d04;  ">₦ <strong style="font-size: 14px;"> {{ product.attributes.price }}</strong></div>
         
          <div               
            
            style="display:flex; flex-wrap: wrap; gap:6px;"
          >
          <span style="padding:4px 10px; font-size:9px; margin-top:10px;  background:#404040; color:#fff;">
          Shipping from apapa, ikega Lagos / 
          </span>
        

          </div>

          <div                      
            style="display:flex; flex-wrap: wrap; gap:6px;"
          >
          <span style="padding:2px 8px;  margin-top:10px;  background:#fee440; color:#000;">
      
            <span style=" font-size:9px; height:18px; position:relative; top: 2px; color:#000;">
            <svg xmlns="http://www.w3.org/2000/svg" style="width:12px;  height:12px;" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg> 
            </span>

            <label style="line-height:12px; font-size:9px;"> 800M, arrives in 2 days </label>
          </span>
        

          </div>
         
          <p>{{ product.attributes.description }}</p>
    
          <div               
        
                      style="display:flex; flex-wrap: wrap; gap:6px;"
                    >

                    <span style="padding:4px 10px; font-size:9px;  background:#404040; color:#fff;">
                     🔥 HOT
                    </span>
                    <span style="padding:4px 10px; font-size:9px;  background:#404040; color:#fff;">
                      2,000 SOLD
                    </span>
                    <span style="padding:4px 10px; font-size:9px;  background:#404040; color:#fff;">
                      {{ product.attributes.stockCapacity }} IN STOCK
                    </span>

                 
                  
          </div>
         
         


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


          <div v-if="product.variants" style="background-color: #f1f1f1; height:0.4px;"></div>
           
          <div v-if="product.variants"  style=" padding:20px; " >
            {{ selectedVariant }}
          <div 
              v-for="(variant, index) in variants"
                    :key="index" style="margin-bottom: 10px;"    
                class="variant-selector">
                <label >{{ variant.title }}</label>
                <div style="margin-bottom: 14px; font-size:12px; " class="variant-options">              
                  <label style="display:flex; flex-wrap: wrap; gap:6px;"
                    v-if="variant.variationType===`image-text`" >                 
                    <div  
                    

                      v-for="(option, opindex) in variant.options"
                      :key="opindex"
                      :class=" variant.selectedOption === opindex?`selected-variant-image`: `variant-option-image `"
                      @click="selectImageVariant(option.mediaSource,index, opindex)"
                      style="font-size:10px;"
                    >
                        <img         
                          :src="option.mediaSource"
                          style="width:60px; max-height:60px; margin-bottom: 0.4px; "
                          alt="Product Thumbnail"
                         
                        /><br/>
                        <label> {{ option.title }}  </label>
                    </div>
                  </label>

                  <label style="display:flex; flex-wrap: wrap; gap:6px;"
                    v-if="variant.variationType===`text`" >
                   

                    <label
                   
                        v-for="(option, opindex) in variant.options"
                        :key="opindex"
                    >
                      <div                    
                        v-if="variant.selectedOption === opindex"                     
                        class="selected-variant"
                        @click="selectVariant(index, opindex)"
                        style="font-size:10px;"
                      >
                        <label v-if="variant.variationType=='text'">  {{ option.title }} </label>
                      </div>

                     <div   
                      v-if="variant.selectedOption !== opindex"        
                      class="variant-option"
                      @click="selectVariant(index, opindex)"
                      style="font-size:10px;"
                      >
                        <label v-if="variant.variationType=='text'">  {{ option.title }} </label>
                      </div>


                    </label>


                  </label>
                



                </div>
            </div>

          </div>


           <div style="background-color: #f1f1f1; height:0.4px;"></div>


          <div style=" padding:20px; " >
            <div>
                        
              <div class="collapsible">
                <p @click="toggleShipping" class="header-text-de" style=" cursor:pointer;  font-size:11px; ">🚀 SHIPPING</p>
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
                <label @click="toggleReturns"  class="header-text-de"  style=" cursor:pointer;  font-size:11px; ">💰 RETURNS</label>
                <transition name="slide-fade" mode="out-in">
                  <div v-if="showReturns">
                    <p>We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return the items within 30 days of receipt.</p>
                    <p>🔁 Easy Returns Process: Log in to your account, initiate a return request, and follow the instructions provided.</p>
                    <p>💰 Refund Policy: Once we receive your returned items, we'll process your refund within 5-7 business days.</p>
                    <p>🔄 Exchanges: If you'd like to exchange an item for a different size or color, please contact our customer support team.</p>
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
     
        <div class="product-content" v-html="detail.goodsDetailContent"></div>
      </div>
      <div style="height:200px;"></div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="Chat" />
      <van-goods-action-icon icon="cart-o" :info="!count ? '' : count" @click="goTo()" text="Cart"/>
      <input type="button" style="width:44%; border-radius:6px; cursor:pointer; margin-right:10px; height:60px; color:#404040; background:#fff; border:1px solid #000; " @click="addCart" value="ADD TO CART" />
      <input type="button" style="width:44%; border-radius:6px; cursor:pointer;  height:60px; color:#fff; background:#000; border:1px solid #000; " @click="goToCart" value="BUY NOW" />
     
    </van-goods-action>
  </div>
</template>

<script>


import { productDetailStore } from "@/pinia-store/product-detail.js";


import { getDetail } from '../service/good'
import { addCart } from '../service/cart'
import sHeader from '@/components/SimpleHeader'
import { Toast } from 'vant'

import productService from '@/service/products'

let productDetailStateStore 

export default {
  setup(){


  
  },
  computed: {
  

  },
  watch: {
  'product.variants': {
    deep: true,
    handler: function(newAttributes, oldAttributes) {
      //alert('select!')
      // Handle attribute updates
      //this.editAttributes();
    }
  },
  },
  data() {
    return {
      tabs: ["Details", "Reviews"],
      activeTab: 0,
      tabContents: [
        "Product description goes here.",
        "Specifications for the product.",
        "Customer reviews and ratings.",
      ],
      isLoading:true,
      reviews: [
        {
          rating: 5,
          username: 'John Doe',
          dateTime: '2023-08-15 10:30 AM',
          comment: 'Excellent product! I love it. 🎉🥳'
        },
        {
          rating: 4,
          username: 'Jane Smith',
          dateTime: '2023-08-14 03:45 PM',
          comment: 'Great quality and value for the price.😀'
        },
        {
        rating: 4,
          username: 'Michael Adams',
          dateTime: '2023-08-14 03:45 PM',
          comment: 'The design is great and its stylish. Only wish the price was a bit lower.'
        },
        {
          rating: 3,
          username: 'Emily Roberts',
          dateTime: '2023-08-13 08:15 AM',
          comment: 'Decent shirt, but the color faded after a few washes.'
        },
        {
          rating: 5,
          username: 'Daniel Lee',
          dateTime: '2023-08-12 06:00 PM',
          comment: 'Impressive quality and fast delivery. Highly recommended!'
        },
        {
          rating: 2,
          username: 'Jennifer Brown',
          dateTime: '2023-08-11 11:30 AM',
          comment: 'Not as expected. The stitching came undone after wearing it only a couple of times.'
        },
        // Add more review objects here...
      ],
      quantity: 1,// Initial quantity value
      showShipping: false,
       showDetails: false,
        showReviews: false,
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

    
    productDetailStateStore =await  productDetailStore();

    console.log("pinia store: ",productDetailStateStore)

    await this.getProductDetails();



  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
      toggleReviews() {
      this.showReviews = !this.showReviews;
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

      //console.log( this.product.variants[variantIndex])

      //this.product.variants[variantIndex]['selectedOption'] = option;
      this.$nextTick(() => {
          // Adding the component back in
         // this.renderComponent = true;

          productDetailStateStore . selectVariantOption(variantIndex,option)


          this.$forceUpdate();

      });


   

    },
    selectImageVariant(url,variantIndex,option) {
      this.product.variants[variantIndex]['selectedOption'] = option;
      this.selectedPhoto=url;
      this.product=  this.product

      // alert("opt"+option)
      //  alert("vopt"+this.product.variants[variantIndex].selectedOption)


      },
    async getProductDetails(){
      let id= this.$route.params.id;
     

      let result= await  productService.fetchProductDetails(id)
      console.log(result)
      if(result.data['resultCode']==1){
        this.product=result.data['resultContent']

        productDetailStateStore.setVariants(this.product.variants)

        this.variants=productDetailStateStore.getVariants

        // ::::::::::: variant selection
        for(let v=0; v<this.product.variants.length; v++){
          this.product.variants[v]['selectedOption']=0;
          //alert( JSON.stringify(this.product.variants[v]) )

        }


        console.log(this.product)

        this.selectedPhoto=this.product.media[0].url

        this.isLoading=false;
       
        
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
.variant-option-image {
  padding: 4px;
  padding-left:4px;
  padding-right:4px;

 
  border: 1px solid #ccc;
  border-radius: 0px;
  cursor: pointer;
}

.variant-option {
  line-height:20px;
  padding-left:20px;
  padding-right:20px;
  height:20px;

 
  border: 1px solid #ccc;
  border-radius: 0px;
  cursor: pointer;
}
.variant-option:hover {
  border: 1px solid #404040;
  background:#fafafa;
  cursor: pointer;
}

.selected-variant-image {
  padding: 4px;
  padding-left:4px;
  padding-right:4px;
 
  border: 1.1px solid #404040;
  color:#000;
  border-radius: 0px;
 cursor: pointer;
}


.selected-variant {
  line-height:20px;
  padding-left:20px;
  padding-right:20px;
  height:20px;

  
  border: 1.1px solid #404040;
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
  
  bottom: 0;
  left: 0;
  width: 100%;

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
  background:#eee;
  color:#000;
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


.product-reviews {
  margin-top:10px;
  padding: 2px;
}

.review {
  margin-bottom: 10px;
 
  padding: 4px;
  border-radius: 4px;
 
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.rating {
  font-size: 12px;
}

.star {
  background: #404040;
  height:4px; width:16px;
  margin:1px;
  border-radius: 1.2px;
}

.filled-star {
  background: #404040;
  height:4px; width:16px;
   margin:1px;
   border-radius: 1.2px;
}

.review-info {
  font-size: 11px;
  color: #555;
}

.username {
  margin-right: 10px;
}

.date-time {
  opacity: 0.7;
}

.review-comment {
  font-size: 16px;
  color: #333;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.5s;
}
.slide-up-enter, .slide-up-leave-to /* .slide-up-leave-active in <2.1.8 */ {
  transform: translateY(100%);
}

.product-image-tr {
   transition: opacity 0.5s ease;
}
.product-image-tr.slide-up-enter {
   /* example showing chained classes since the myTransition- is added */
   opacity: 0;
}
.product-image-tr.slide-up {
   opacity: 1;
}

/* Style the image grid container */
.image-grid {
  
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    max-width: 280px;
    justify-content: flex-start; /* Align items to the left */
    padding: 0px;
}

/* Style each image item */
.image-item {
    flex: 0 0 calc(20.33% - 6px); /* Adjust width and margin as needed */
    max-width: calc(20.33% - 6px); /* Adjust width and margin as needed */
    padding: 2px;
    background-color: #fff;

}

/* Style images to fit the container */
.image-item img {
    max-width: 100%;
    height: auto;
    display: block;
}

.product-detail-tabs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 360px;
  margin: 0 auto;
}

.tab-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  align-items: flex-start;
  justify-content: flex-start;
}

.tab-buttons button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 4px;
  margin-right:10px;
  font-size: 12px;
  text-align: left; 
  color:#888;
  transition: background-color 0.3s;
}

.tab-buttons button.active {
  background-color: #f1f1f1;
  color: #000;
}

.tab-content > div {
  
  padding: 2px;
}

.tab-content > div.show {
  display: block;
}

</style>
