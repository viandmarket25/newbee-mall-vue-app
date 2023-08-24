/****
 * 
 * 
 *****/
import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8001';
/****
 * 
 * @param {*} cookieName 
 * @returns 
 *****/

let getCookie = (cookieName) => {
    const name = cookieName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split("; ");
    let result;
    cArr.forEach((val) => {
      if (val.indexOf(name) === 0) result = val.substring(name.length);
    });
    return result;
};
let token
if (typeof getCookie("siteAccessT") === 'undefined') {
  console.log('The variable is undefined.');
} else {
  token=JSON.parse(getCookie("siteAccessT")).token
}
console.log(token)


function fetchRecommendedProducts() {
  //return axios.post(`${BASE_URL}/products/${id}`, data);
  return axios.get(`${BASE_URL}/api/v1/customer/products/recommended`,{
    headers: {
        "Authorization" : `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type":"application/json"
        
      },
  });
}

function fetchPopularProducts() {
    //return axios.post(`${BASE_URL}/products/${id}`, data);
    return axios.get(`${BASE_URL}/api/v1/customer/products/popular`,{
      headers: {
          "Authorization" : `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"application/json"
          
        },
    });
}

function fetchLatestProducts() {
    //return axios.post(`${BASE_URL}/products/${id}`, data);
    return axios.get(`${BASE_URL}/api/v1/customer/products/latest`,{
      headers: {
          "Authorization" : `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"application/json"
          
        },
    });
}

function fetchQueryProducts(query) {
    //return axios.post(`${BASE_URL}/products/${id}`, data);
    return axios.get(`${BASE_URL}/api/v1/customer/products/search/${query}`,{
      headers: {
          "Authorization" : `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"application/json"
          
        },
    });
}

function fetchProductDetails(id) {
  //return axios.post(`${BASE_URL}/products/${id}`, data);
  return axios.get(`${BASE_URL}/api/v1/customer/products/${id}`,{
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
    fetchLatestProducts,
    fetchQueryProducts,
    fetchProductDetails
};