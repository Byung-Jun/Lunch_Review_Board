<template>
    <div class="view">
        <div>
        <p class="sub-title">음식점 후기</p>
        </div>
        <table>
            <colgroup>
                <col width="15%" />
                <col width="85%" />
            </colgroup>
            <tbody>
                <tr>
                    <th>작성자</th>
                    <td>{{aa.writer}}</td>
                </tr>
                <tr>
                    <th>음식점</th>
                    <td>{{aa.title}}</td>
                </tr>
                <tr>
                  <th>별점</th>
                  <td>{{aa.star}}</td>
                </tr>
                <tr>
                    <th>후기</th>
                    <td v-html="aa.content" class="divCon"></td>
                </tr>
            </tbody>
        </table>
        <div class="btn-right" align="center">
            <button v-on:click="cancelBtn">글목록</button>
            <a href="javascript:;" v-on:click="editBtn">수정</a>
            <button v-on:click="deleteBtn">삭제</button>
        </div>
    </div>
</template>
<script>
import {boardRefs} from "../config/firebase"

export default {
   created : function(){
       this.no = this.$route.params.no;
   },
   data (){
       return {
           no : "",
           writer : "",
           title : "",
           content : "",
           board : []
       }
   },
   firebase : {
       board : boardRefs
   },
   computed : {
       aa : function(){
           var no = this.no;
           var arr = this.board.filter(function(item){
               return item['.key'] == no;
           });
           if(arr.length ==1) return arr[0];
           else return {};
       }
   },
  methods : {
    editBtn : function(){
      var no = this.no;
      var alarm = prompt("비밀번호를 입력하세요."); //비밀번호를 입력하세요
      if(alarm === this.aa.password){
        this.$router.push("/edit/"+no);
      }else if(alarm === null){
        alert("취소하셨습니다.");//취소하셨습니다.
        return;
      }else{
        alert("비밀번호가 틀렸습니다.");//비밀번호가틀렸습니다.
        return;
      }
    },
    deleteBtn : function(){
      var no = this.no;
      var alarm = prompt("비밀번호를 입력하세요.");//비밀번호를 입력하세요
      if(alarm === this.aa.password){
        boardRefs.child(no).remove();
        history.back();
      }else if(alarm === null){
        alert("취소하셨습니다.");//취소하셨습니다.
        return;
      }else{
        alert("비밀번호가 틀렸습니다.");//비밀번호를 입력하세요
        return;
      }
    },
    cancelBtn : function(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
a{text-decoration:none;}
.view{width:1000px;margin:0 auto;padding:100px 0;min-height:500px;}
.sub-title{margin-bottom:10px;font-size:16px;color:#000f;font-weight:600;}
table{width:100%;margin-top:20px;border-top:2px solid #666;}
table th,.list table td{padding:15px 0;}
table th{font-weight:600;font-size:14px;text-align:center;border-bottom:1px solid #999;color:#000;}
table td{font-size:14px;text-align:left;border-bottom:1px solid #999;}
table td textarea{margin:10px 0;width:700px;height:300px;}
.btn-right{margin-top:30px;text-align:right;}
.btn-right a{vertical-align:middle;font-weight:600;display:inline-block;box-sizing:border-box;border:none;cursor:pointer;height:32px;width:86px;border:1px solid #c1c1c1;color:#333;text-align:center;box-shadow:0 2px #f3f3f3;
border-radius:4px;background:#fff;line-height:32px;}
.btn-right button{vertical-align:middle;font-weight:600;display:inline-block;box-sizing:border-box;border:none;cursor:pointer;height:32px;width:86px;border:1px solid #c1c1c1;color:#333;text-align:center;box-shadow:0 2px #f3f3f3;
border-radius:4px;background:#fff;line-height:32px;}
.divCon{padding:30px 0;line-height:22px;}

@media screen and (min-width:320px) and (max-width:1024px){
.view{width:100%;padding-top:20px;padding-bottom:50px;min-height:400px;}
.sub-title{padding-left:10px;}
.btn-right{padding-right:10px;}
.divCon{padding-right:5px;}
}


</style>


