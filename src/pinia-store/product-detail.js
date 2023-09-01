// store.js or store.ts
import { defineStore } from "pinia";
import axios from "axios";

export const productDetailStore = defineStore("productDetailStateStore", {
  state: () => ({
    //:::::::

    variants:[],
  }),
  actions: {
    setVariants(variants){
        this.variants=variants;

    },
    selectVariantOption(variantIndex, optionIndex){
        this.variants[variantIndex].selectedOption=optionIndex;

    }

  },
});


