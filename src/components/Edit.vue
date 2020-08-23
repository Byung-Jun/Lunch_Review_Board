<template>
  <div class="write">
    <p class="sub-title">게시글 작성</p>
    <table :val="dataVal">
      <colgroup>
        <col width="15%"/>
        <col width="85%"/>
      </colgroup>
      <tbody>
      <tr>
        <th>작성자</th>
        <td><input type="text" v-model="aa.writer"/></td>
      </tr>
      <tr>
        <th>제목</th>
        <td><input type="text" v-model="aa.title"/></td>
      </tr>
      <tr>
        <th>별점</th>
        <td><input type="text" placeholder="5점만점" v-model="aa.star"/></td>
      </tr>
      <tr>
        <th>내용</th>
        <td>
          <textarea v-html="aa.content" v-on:keyup="textarea"></textarea>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="btn-right">
      <button v-on:click="submitBtn">확인</button>
      <button v-on:click="cancelBtn">취소</button>
    </div>
  </div>
</template>

<script>
import {boardRefs} from "../config/firebase"

export default {
  created: function () {
    this.no = this.$route.params.no;
  },
  data() {
    return {
      no: "",
      writer: "",
      title: "",
      content: "",
      order: "",
      date: "",
      password: "",
      star:"",
      cnt:"",
      board: []
    }
  },
  firebase: {
    board: boardRefs
  },
  computed: {
    aa() {
      var no = this.no;
      var arr = this.board.filter(function (item) {
        return item['.key'] == no;
      });
      if (arr.length == 1) return arr[0];
      else return {};
    },
    dataVal() {
      this.writer = this.aa.writer;
      this.title = this.aa.title;
      this.content = this.aa.content;
      this.order = this.aa.order;
      this.date = this.aa.date;
      this.password = this.aa.password;
      this.cnt = this.aa.cnt;
      this.star = this.aa.star;
      return {}
    }
  },
  methods: {
    submitBtn: function () {
      var no = this.no;
      boardRefs.child(no).set({
        writer: this.writer,
        title: this.title,
        content: this.content,
        order: this.order,
        date: this.date,
        password: this.password,
        cnt : this.cnt,
        star:this.star

      });
      this.$router.go(-1)
    },
    cancelBtn: function () {
      var con = confirm("수정을 취소하시겠습니까?");
      if (con) {
        history.back();
      } else {
        return false;
      }
    },
    textarea: function (e) {
      var val = e.target.value;
      val = val.replace(/(\n)/g, '<br>');
      this.content = val;
    }
  }
}
</script>

<style>
.write{width:1000px;margin:0 auto;padding:100px 0;min-height:500px;}
.sub-title{margin-bottom:10px;font-size:16px;color:#000f;font-weight:600;}
table{width:100%;margin-top:20px;border-top:2px solid #666;}
table th,.list table td{padding:15px 0;}
table th{font-weight:600;font-size:14px;text-align:center;border-bottom:1px solid #999;color:#000;}
table td{font-size:14px;text-align:left;border-bottom:1px solid #999;}
table td textarea{margin:10px 0;width:700px;height:300px;}
input{box-shadow: inset 0 1px 1px rgba(0,0,0,.075);transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s;width:458px;padding:0 10px;box-sizing:border-box;line-height:30px;height:32px;border:1px solid #bfbfbf;outline:none !important;}
input:focus{box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(249,132,90,.6);border-color:#f26532;}
.btn-right{margin-top:30px;text-align:right;}
.btn-right a{vertical-align:middle;font-weight:600;display:inline-block;box-sizing:border-box;border:none;cursor:pointer;height:32px;width:86px;border:1px solid #c1c1c1;color:#333;text-align:center;box-shadow:0 2px #f3f3f3;
border-radius:4px;background:#fff;line-height:32px;}
.btn-right button{vertical-align:middle;font-weight:600;display:inline-block;box-sizing:border-box;border:none;cursor:pointer;height:32px;width:86px;border:1px solid #c1c1c1;color:#333;text-align:center;box-shadow:0 2px #f3f3f3;
border-radius:4px;background:#fff;line-height:32px;}

@media screen and (min-width:320px) and (max-width:1024px){
.write{width:100%;padding-top:20px;padding-bottom:50px;min-height:400px;}
.sub-title{padding-left:10px;}
.btn-right{padding-right:10px;}
input{width:80%;}
.write table td textarea{padding:10px;margin:10px 0;width:96%;height:200px;box-sizing:border-box;}
}
</style>
