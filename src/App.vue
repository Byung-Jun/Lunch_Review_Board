<template>
  <div id="app">
    <div>
      <!--<Header />-->
      <Header />
      <router-view></router-view>
      <Footer />
      <!--<Footer />-->
    </div>
  </div>
</template>

<script>

  import Header from "@/components/Header"
  import Footer from "@/components/Footer"
  import * as firebase from "firebase/app"

  export default {
    name: 'App',
    components :{Header,Footer},
    metaInfo: {
      changed(metaInfo) {
        firebase.analytics().setCurrentScreen(metaInfo.title);
        firebase.analytics().logEvent("page_view");
      }
    }
  }

</script>

<style>
  #app{}
  .write{width:1000px;margin:0 auto;padding-top:100px;}
  .sub-title{margin-bottom:10px;font-size:16px;color:#06f;font-weight:600;}
  .write table{margin-top:20px;border-top:2px solid #666;}
  .write table th,.list table td{padding:15px 0;}
  .write table th{font-weight:600;font-size:14px;text-align:center;border-bottom:1px solid #999;color:#000;}
  .write table td{font-size:14px;text-align:left;border-bottom:1px solid #999;}
  .write table td textarea{transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s, background-color ease-in-out .5s;width:100%;height:392px;box-sizing:border-box;border:1px solid #eaeaea;
    border-radius:2px;background:#f4f4f4;padding:24px;font-size:14px;color:#666;line-height:20px;overflow:auto;}
  .write table td textarea:focus{box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(249,132,90,.6);border-color:#f26532;background:#fff;}

  .list{width:1000px;margin:0 auto;padding-top:100px;}
  .list .message-num{font-size:12px;color:#333;}
  .list table{width:100%;margin-top:20px;border-top:2px solid #666;}
  .list table th,.list table td{padding:15px 0;}
  .list table thead th{font-weight:600;font-size:14px;text-align:center;border-bottom:1px solid #999;color:#000;}
  .list table tbody td{font-size:14px;text-align:center;border-bottom:1px solid #999;}

</style>



