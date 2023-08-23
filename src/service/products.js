/***
 * 
 * 
 */
import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8001';
/**
 * 
 * @param {*} cookieName 
 * @returns 
 */

  
let token
if (typeof getCookie("siteAccessT") === 'undefined') {
  console.log('The variable is undefined.');
} else {
  token=JSON.parse(getCookie("siteAccessT")).token
}
console.log(token)


function fetchRecommendedProducts(id) {
  //return axios.post(`${BASE_URL}/products/${id}`, data);
  return axios.get(`${BASE_URL}/products/recommended`,{
    headers: {
        "Authorization" : `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type":"application/json"
        
      },
  });
}

function fetchPopularProducts(id) {
    //return axios.post(`${BASE_URL}/products/${id}`, data);
    return axios.get(`${BASE_URL}/products/popular`,{
      headers: {
          "Authorization" : `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"application/json"
          
        },
    });
}

function fetchLatestProducts(id) {
    //return axios.post(`${BASE_URL}/products/${id}`, data);
    return axios.get(`${BASE_URL}/products/latest`,{
      headers: {
          "Authorization" : `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"application/json"
          
        },
    });
}

function fetchQueryProducts(query) {
    //return axios.post(`${BASE_URL}/products/${id}`, data);
    return axios.get(`${BASE_URL}/products/latest/${query}`,{
      headers: {
          "Authorization" : `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"application/json"
          
        },
    });
}



export default {
    fetchRecommendedProducts,
    fetchPopularProducts,
    fetchLatestProducts
};