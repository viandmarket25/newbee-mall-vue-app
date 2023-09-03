<template>
    <div style="height:460px; width:100%; border-radius:10px; ">

      <div  style="height:90px; width:100%; margin-top:20px; border-radius:10px; ">
        <div class="centered-position" style=" height:60px; width:100%; float:left; ">
            <router-link to="/account"><img src="@/assets/icons/user-profile.png" style=" width:40px; height:40px; cursor:pointer; border-radius:100px;  "></router-link>
        </div>
        <div class="centered-position" style=" height:30px; width:100%; float:left; ">
            <div id="username-label" style="height:30px; font-family:Montserrat-Regular; font-size:11px; ">Hi, buyer1</div>
        </div>

      </div>

<!--
      <div align="left" style=" height:140px; width:100%; text-decoration:none !important; float:left; color:#404040; display:block; white-space:nowrap; ">
              <div style=" width:220px; height:30px; float:left;  border-radius:10px; cursor:pointer; margin:4px; font-size:11px; display:inline-block; text-decoration:none; line-height:30px; font-family:Montserrat-SemiBold;   ">
                  <img src="@/assets/icons/icon-product-payments.png" style=" width:22px; height:22px; float:left; opacity:0.8; cursor:pointer;  ">
                  <div style=" width:120px; height:30px; float:left; color:#404040; border-radius:10px; cursor:pointer;  margin-left:8px; line-height:26px; font-size:10px; display:inline-block; text-decoration:none; font-family:Montserrat-Medium;   ">
                      My Orders
                  </div>
              </div>
              <div style=" width:220px; height:30px; float:left;  border-radius:10px; cursor:pointer; margin:4px; font-size:11px; display:inline-block; text-decoration:none; line-height:30px; font-family:Montserrat-SemiBold;   ">
                  <img src="@/assets/icons/icon-order-confirmation.png" style=" width:22px; height:22px; float:left; opacity:0.8; cursor:pointer;   ">
                  <div style=" width:120px; height:30px; float:left;  border-radius:10px; cursor:pointer;  margin-left:8px; line-height:26px; font-size:10px; display:inline-block; text-decoration:none; font-family:Montserrat-Medium;   ">
                      Order Confirmation
                  </div>
              </div>
              <div style=" width:220px; height:30px; float:left;  border-radius:10px; cursor:pointer; margin:4px; font-size:11px; display:inline-block; text-decoration:none; line-height:30px; font-family:Montserrat-SemiBold;   ">
                  <img src="@/assets/icons/icon-product-shipping.png" style=" width:22px; height:22px; float:left; opacity:0.8; cursor:pointer;  ">
                  <div style=" width:120px; height:30px; float:left;  border-radius:10px; cursor:pointer;  margin-left:8px; line-height:26px; font-size:10px; display:inline-block; text-decoration:none; font-family:Montserrat-Medium;   ">
                      Shipping
                  </div>
              </div>
      </div>
    -->

      <div class="centered-position" style="height:auto; width:100%; float:left;  border-radius:10px; ">
        <div style="width:100%;  height:50px; margin:4px; display:block; white-space:nowrap; ">





          <div class="centered-position" style="width:100%;  height:60px;">
            <div style="height:54px; width:80px; background:#fafafa; margin:1px; border-radius:4px; float:left; cursor:pointer;">
              <div class="centered-position"  style="width:100%; height:26px; margin-top:6px;  float:left;  ">
                <div class="centered-position" style="width:26px; height:26px; border-radius:10px; ">
                 

              <span
                          style="width: 46px; height: 46px;  text-align: center; margin-top:16px; "
                          >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666" class="w-6 h-6">
                <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
              </svg>
              </span>

                </div>
              </div>
              <div class="centered-position" style=" width:100%; height:20px; float:left; ">
                 <div style="font-family:Poppins-Bold; font-size:12px; line-height:20px; color:#404040; width:100%; text-align:center;">17 </div>
              </div>
            </div>
            <div style="height:54px; width:80px; background:#fafafa; margin:1px; border-radius:4px; float:left; cursor:pointer;">
              <div class="centered-position"  style="width:100%; height:26px; margin-top:6px;  float:left;  ">
                <div class="centered-position" style="width:26px; height:26px; border-radius:10px; ">
                  <span
                          style="width: 46px; height: 46px;  text-align: center; margin-top:16px; "
                          >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666" class="w-6 h-6">
  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
  <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
  <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
</svg>

              </span>
                
                </div>
              </div>
              <div class="centered-position" style=" width:100%; height:20px; float:left; ">
                 <div style="font-family:Poppins-Bold; font-size:12px; line-height:20px; color:#404040; width:100%; text-align:center;">23 </div>
              </div>
            </div>
            <div style="height:54px; width:80px; background:#fafafa; margin:1px; border-radius:4px; float:left; cursor:pointer;">
              <div class="centered-position"  style="width:100%; height:26px; margin-top:6px;  float:left;  ">
                <div class="centered-position" style="width:26px; height:26px; border-radius:10px; ">
                
                  <span
                          style="width: 46px; height: 46px;  text-align: center; margin-top:16px; "
                          >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z" clip-rule="evenodd" />
                  </svg>


              </span>
   


                </div>
              </div>
              <div class="centered-position" style=" width:100%; height:20px; float:left; ">
                 <div style="font-family:Poppins-Bold; font-size:12px; line-height:20px; color:#404040; width:100%; text-align:center;">30</div>
              </div>
            </div>



          </div>

    

















        </div>
      </div>




      <div style="">

      </div>
  </div>
</template>

<script>

</script>
<style>
router-link{
   text-decoration: none;
}
a{
  text-decoration: none;
}
a div{
  text-decoration: none;
}

</style>
