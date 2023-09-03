// store/index.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: null,
    selectedVariant: null,
  },
  mutations: {
    setProduct(state, product) {
      state.product = product;
      state.selectedVariant = product.variants[0]; // Set the initial selected variant
    },
    selectVariant(state, variant) {
      state.selectedVariant = variant;
    },
  },
  actions: {
    fetchProduct(context) {
      // Replace with your data fetching logic
      const productData = fetchProductData();
      context.commit('setProduct', productData);
    },
  },
  getters: {
    product(state) {
      return state.product;
    },
    selectedVariant(state) {
      return state.selectedVariant;
    },
  },
});
