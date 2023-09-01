<template>
  <div class="image-carousel">
    <div class="carousel-container">
      <button @click="prevSlide" class="nav-button prev-button">&#8249;</button>
      <div class="carousel-track" :style="{ transform: `translateX(${translateValue}px)` }">
        <div v-for="(image, index) in images" :key="index" class="carousel-slide">
          <img :src="image" alt="Carousel Image" class="carousel-image"  style="width:100%; height:450px; margin-top:12px; border-radius: 6px; float:left; background-repeat: no-repeat;" />
        </div>
      </div>
      <button @click="nextSlide" class="nav-button next-button">&#8250;</button>
    </div>
    <div class="indicator-container">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{ indicator: true, active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      translateValue: 0,
      slideWidth: 540, // Adjust this value as needed

      images: [
             'https://static.coupangcdn.com/la/cmg_paperboy/image/1693547188565/C1_PC1.jpg',
             'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-pro-202210?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1667423474414',
             'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s8-202303?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1677224522003',
             'https://static.zara.net/photos///2023/I/0/1/p/9043/023/712/2/w/800/9043023712_6_1_1.jpg?ts=1691596381915',
             'https://static.zara.net/photos///2023/I/0/1/p/9024/018/708/2/w/800/9024018708_6_1_1.jpg?ts=1691596380508',
             'https://static.zara.net/photos///2023/V/0/1/p/2157/065/800/2/w/2062/2157065800_9_1_1.jpg?ts=1682076558860'
           ],
      currentIndex: 0,
      autoScrollInterval: null,
    };
  },
  mounted() {
    this.startAutoScroll();
  },
  beforeDestroy() {
    this.stopAutoScroll();
  },
  methods: {
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.translateValue += this.slideWidth;
      }
    },
    nextSlide() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        this.translateValue -= this.slideWidth;
      }
    },
    startAutoScroll() {
      this.autoScrollInterval = setInterval(this.autoScroll, 3000);
    },
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval);
    },
    autoScroll() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        this.translateValue -= this.slideWidth;
      } else {
        this.currentIndex = 0;
        this.translateValue = 0;
      }
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.translateValue = -index * this.slideWidth;
    },
  },
};
</script>

<style>
.image-carousel {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.carousel-container {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.carousel-track {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-slide {
  flex-shrink: 0;
  width: 100%;
}

.carousel-image {
  width: 100%;
  height: 450px;
  margin-top: 12px;
  border-radius: 6px;
  object-fit: cover;
}

.nav-button {
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.prev-button {
  border-radius: 4px;
  padding: 4px;
  background: #f1f1f1;
  left: 10px;
  z-index: 99;
}

.next-button {
  border-radius: 4px;
  padding: 4px;
  background: #f1f1f1;
  right: 10px;
}

.indicator-container {
  display: flex;
  justify-content: center;
  margin-top: -8px;
  z-index:99999;
}

.indicator {
  width: 18px;
  height: 3px;
  background: #ccc;
  border-radius: 1px;

  margin: 0 2px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.indicator.active {
    box-shadow:0 0 0 0.6px #666;
  background: #fff;
}
</style>
