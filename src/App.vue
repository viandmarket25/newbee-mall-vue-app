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
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view" />
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      
      $route(to, from) {
        // 有主级到次级
        if (to.meta.index > from.meta.index) {
          this.transitionName = 'slide-left' // 向左滑动
        } else if (to.meta.index < from.meta.index) {
          // 由次级到主级
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = ''   //同级无过渡效果
        }
      }
      
      
      
    }
  }
</script>

<style lang="less">
  

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.router-view{
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active{
    height: 100%;
    will-change: transform;
    transition: all 500ms;
    position: absolute;
    backface-visibility: hidden;
}
.slide-right-enter{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}



.title-text{
  width:74px; height:30px; font-size:16px;
  font-family: Montserrat-Regular;
  color:#404040; top:10px; position:relative;

}
.title-text-center{
  text-align: center;
  width:74px; height:30px; font-size:16px;
  font-family: Montserrat-Regular; color:#404040;
  top:10px; position:relative;

}
.title-text-left{
  text-align: left;
  width:74px; height:30px; font-size:16px;
  font-family: Montserrat-Regular;
  color:#404040; top:10px; position:relative;

}
.title-text-right{
  text-align: right;
  width:74px; height:30px; font-size:16px;
  font-family: Montserrat-Regular;
  color:#404040; top:10px; position:relative;

}
.bold-medium-text{
  font-size:16px; line-height:16px;
  position:relative; font-weight: bold;

}
.bold-medium-text-center{
  text-align: center;
  font-weight: bold;
  font-size:16px; line-height:16px;
  position:relative;

}
.bold-medium-text-left{
  text-align: left;
  font-weight: bold;
  font-size:16px; line-height:16px;
  position:relative;

}
.bold-medium-text-right{

  text-align: right;
  font-weight: bold;
  font-size:16px; line-height:16px;
  position:relative;


}
.bold-large-text{
  font-weight: bold;
  font-size:20px; line-height:20px;
  position:relative;

}
.bold-large-text-center{
  text-align: center;
  font-weight: bold;
  font-size:20px; line-height:20px;
  position:relative;

}
.bold-large-text-left{
  text-align: left;
  font-weight: bold;
  font-size:20px; line-height:20px;
  position:relative;

}
.bold-large-text-right{
  text-align: right;
  font-weight: bold;
  font-size:20px; line-height:20px;
  position:relative;

}
.bold-small-text{
  font-weight: bold;
  font-size:13px; line-height:13px;
  position:relative;

}
.bold-small-text-center{
  font-weight: bold;
  text-align: center;
  font-size:13px; line-height:13px;
  position:relative;

}
.bold-small-text-left{
  font-weight: bold;
  text-align: left;
  font-size:13px; line-height:13px;
  position:relative;

}
.bold-small-text-right{
  font-weight: bold;
  text-align: right;
  font-size:13px; line-height:13px;
  position:relative;

}

/* */
.normal-medium-text{
  font-size:13px; line-height:13px;
  position:relative;

}
.normal-medium-text-center{
  text-align: center;
  font-size:16px; line-height:16px;
  position:relative;

}
.normal-medium-text-left{
  text-align: left;
  font-size:16px; line-height:16px;
  position:relative;

}
.normal-medium-text-right{
  text-align: right;
  font-size:16px; line-height:16px;
  position:relative;
}
/* */
.normal-large-text{
  font-size:20px; line-height:20px;
  position:relative;

}
.normal-large-text-center{
  text-align: center;
  font-size:20px; line-height:20px;
  position:relative;
}
.normal-large-text-left{
  text-align: left;
  font-size:16px; line-height:16px;
  position:relative;

}
.normal-large-text-right{
  text-align: right;
  font-size:16px; line-height:16px;
  position:relative;

}
/* */
.normal-small-text{
  font-size:13px; line-height:13px;
  position:relative;
}
.normal-small-text-center{
  text-align: center;
  font-size:13px; line-height:13px;
  position:relative;

}
.normal-small-text-left{
  text-align: left;
  font-size:13px; line-height:13px;
  position:relative;
}
.normal-small-text-right{
  text-align: right;
  font-size:13px; line-height:13px;
  position:relative;

}

/***/
.title-highlight{
  height:20px; width:7px; background:#5757F6; float:left;
   overflow:hidden; position:relative;
   top:10px; left:10px; border-radius:14px;
}


.centered-position{
  align-items: center;
  vertical-align:middle;
  justify-content:center;
  text-align:center;
  display:flex;

}
.horizontal-center{
    vertical-align:middle;
  justify-content:center;
  text-align:center;
  display:flex;
}

.left-target-position{
  align-items: left;
  vertical-align:middle;
  justify-content:left;
  text-align:center;
  display:flex;

}
.basic-button{
  border:none;
  outline:none;
  border-radius:10px;
}

/******/

.menu-list-container {
    height: 40px;
    width: 100vw;
    list-style-type: none;
    display: flex;
    text-align: center;
    flex-direction: row;
    vertical-align:middle;
    justify-content: center;
    align-items: center;
    margin-bottom:0px;
}

.menu-item {
  height:20px;
  line-height:20px;
  cursor: pointer;
  font-size: 14px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 6px;
  min-width: 30px;
  text-align: center;
  letter-spacing: 0.01612em;
  display: inline-block;
  position: relative;
  font-family: Poppins-SemiBold;

}
.menu-item-active {
  height:20px;
  line-height:20px;
  cursor: pointer;
  border-bottom: 1px solid rgba(117, 0, 252, 1);
  font-size: 14px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 6px;
  color:rgba(117, 0, 252, 1);
  min-width: 30px;
  text-align: center;
  letter-spacing: 0.01612em;
  display: inline-block;
  position: relative;
  font-family: Poppins-SemiBold;

}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

 .fade-enter-active,
 .fade-leave-active {
   transition-duration: 0.3s;
  transition-property: opacity;
  transition-property: height, opacity;
   transition-timing-function: ease;
  overflow: hidden;


 }
 router-link{
    text-decoration: none;
}


.category-menu-item{
  cursor: pointer;
  font-size: 11px;
  padding: 2px;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 16px;
  color:#000000;
  max-width: 130px;
  margin: 4px;
  border-radius: 6px;
  text-align: center;
  letter-spacing: 0.01612em;
  display: inline-block;
  position: relative;
  top:4px;
  font-family: Poppins-Medium;
  transition: 0.3s all;
  transition-delay: 0.3s;

}
.product-category-menu{
  padding-left:10%;
  width:90%; font-family:Montserrat-Medium; cursor:pointer; height:24px; font-size:11px; line-height:24px; text-align:left; margin-left:0%;
  color:#888888;
}
.product-category-menu:hover{
  padding-left:10%;

  background:#fff1e6;
  width:90%; font-family:Montserrat-Medium; cursor:pointer; height:24px; font-size:11px; line-height:24px; text-align:left; margin-left:0%;
  transition: 100ms all;
  transition-delay: 100ms;
  color:#000000;
}

.sub-category-menu{
  padding-left:8%;
  width:100%; font-family:Montserrat-Medium; cursor:pointer; height:24px; font-size:10px; line-height:24px; text-align:left; margin-left:0%;
  color:#888888;
}
.sub-category-menu:hover{
  padding-left:8%;
  background:#fff1e6;
  width:100%; font-family:Montserrat-Medium; cursor:pointer; height:24px; font-size:10px; line-height:24px; text-align:left; margin-left:0%;
  transition: 50ms all;
  transition-delay: 50ms;
  color:#000000;
}


.product-detail-menu{
  padding-left:20px; padding-right:20px;
float:left;
  min-width:40px; font-family:Montserrat-Medium; cursor:pointer; height:40px; font-size:11px; line-height:40px; text-align:center; margin-left:0px;
  color:#888888;
}
.product-detail-menu:hover{

  min-width:40px; font-family:Montserrat-Medium; cursor:pointer; height:40px; font-size:11px; line-height:40px; text-align:center; margin-left:0px;
  transition: 50ms all;
  transition-delay: 50ms;
  color:#000000;
}


.product-detail-menu-active{

    background:#fff1e6;
  padding-left:20px; padding-right:20px;
float:left;
  min-width:40px; font-family:Montserrat-SemiBold; cursor:pointer; height:40px; font-size:11px; line-height:40px; text-align:center; margin-left:0px;
  color:#000000;
}
.product-detail-menu-active:hover{

  min-width:40px; font-family:Montserrat-SemiBold; cursor:pointer; height:40px; font-size:11px; line-height:40px; text-align:center; margin-left:0px;
  transition: 50ms all;
  transition-delay: 50ms;
  color:#000000;
}






li a {
    text-decoration: none  !important;
}
a { text-decoration: none  !important; }

.shadow-st{
  box-shadow:0px 0px 4px 1px #f1f1f1;
}


.dashboard-menu-block{
  width:14%; height:auto; border-radius:10px; float:left; position:relative;  left:1%; margin-top:0px;
}
.dashboard-content-block{
  width:82%; height:auto;  position:relative; left:2%; margin-top:0px; float:left;
}
.dashboard-content-block-inner{
  width:98%; height:auto;  position:relative; border-radius:10px; background:#ffffff; overflow:hidden; box-shadow:0px 0px 0px 1px #f1f1f1; margin-top:20px;  left:1%; float:right;
}
.dashboard-background{
  width:100%; height:auto; overflow-y:hidden;  background:rgb(228,193,249,0.08); position:fixed; padding-bottom:200px;
}
.modern-shadow{
}

.input-shadow{
  box-shadow:0px 0px 4px 1px rgb(255,153,200,0.3);

}

.context-menu-container{
  height:200px !important;
}


.v3-search{
  border:none !important;
  outline:none !important;


}


</style>
