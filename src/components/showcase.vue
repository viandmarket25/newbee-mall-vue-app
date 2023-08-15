<template>
  <div class="category-grid">
    <div v-for="(category, index) in categories" :key="index" class="category-item">
      <div class="category-image-container">
        <img :src="category.image" :alt="category.title" class="category-image" />
        <h3 class="category-title">{{ category.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
       {
         title: 'Electronics',
         image: 'https://static.zara.net/photos///2023/I/0/1/p/7895/545/250/2/w/800/7895545250_2_1_1.jpg?ts=1691154411667',
       },
       {
         title: 'Clothing',
         image: 'https://static.zara.net/photos///2023/I/0/1/p/8093/605/701/2/w/800/8093605701_1_1_1.jpg?ts=1691154505417',
       },
       {
         title: 'Home Decor',
         image: 'https://static.zara.net/photos///2023/I/0/1/p/2183/071/500/2/w/800/2183071500_2_1_1.jpg?ts=1684225086484',
       },
       {
         title: 'Home Decor',
         image: 'https://static.zara.net/photos///2023/I/0/1/p/2183/071/500/2/w/800/2183071500_2_1_1.jpg?ts=1684225086484',
       },
        // Add more categories here
      ],
    };
  },
};
</script>

<style>
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 0.5fr));
  gap: 20px;
  padding: 20px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.category-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
}

.category-image {
  width: 100%;
  height: auto;
  transition: transform 0.2s;
}

.category-item:hover .category-image {
  transform: scale(1.1);
}

.category-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 16px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
