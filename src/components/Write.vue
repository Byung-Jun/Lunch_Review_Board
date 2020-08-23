<template>
    <div class="write">
        <div align="center">
        <p class="sub-title">음식점 리뷰 작성</p>
        </div>
        <table>
            <colgroup>
                <col width="15%" />
                <col width="85%" />
            </colgroup>
            <tbody>
                <tr>
                    <th>작성자</th>
                    <td><input type="text" v-model="writer" /></td>
                </tr>
                <tr>
                    <th>비밀번호</th>
                    <td><input type="password" v-model="password" /></td>
                </tr>
                 <tr>
                    <th>음식점</th>
                    <td><input type="text" v-model="title" /></td>
                </tr>
                <tr>
                  <th>별점</th>
                  <td><input type="text" placeholder="5점만점" v-model="star" /></td>
                </tr>
                 <tr>
                    <th>간단후기</th>
                    <td>
                        <textarea v-on:keyup="textarea"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="btn-right" align="center">
            <button v-on:click="submit">작성</button>
        </div>
    </div>
</template>

<script>
import {boardRefs} from "../config/firebase"

export default {
    data(){
        return {
            writer : "",
            password :"",
            title : "",
            content : "",
            date : "",
            order : "",
            star :"",
            board : []
        }
    },
    firebase : {
        board : boardRefs
    },
    methods : {
        submit : function(){
            var date = new Date();
            var dateInfo = ""
            var Month = (date.getMonth()+1)
            if(Month < 10){
                Month = "0" + (date.getMonth()+1)
            }
            dateInfo = date.getFullYear()+'-'+ Month +'-'+date.getDate();
            this.date = dateInfo;

            if(this.writer.length == 0 || this.title.length == 0 || this.content.length == 0 || this.star.length ==0||this.password.length==0){
                alert("공백은 불가합니다.")
                return false
            }
            boardRefs.push({writer:this.writer,password:this.password,title:this.title,content:this.content,date:this.date,order:this.board.length+1,cnt:0,star:this.star})
            alert("완료하였습니다.");
            this.$router.go(-1)
        },
        textarea : function(e){
            var val = e.target.value;
            val = val.replace(/(\n)/g, '<br>');
            this.content = val;
        }
    }
}
</script>

<style scoped>
.write{width:1000px;margin:0 auto;padding:100px 0;min-height:500px;}
.sub-title{margin-bottom:10px;font-size:16px;color:#06f;font-weight:600;}
input{box-shadow: inset 0 1px 1px rgba(0,0,0,.075);transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s;width:458px;padding:0 10px;box-sizing:border-box;line-height:30px;height:32px;border:1px solid #bfbfbf;outline:none !important;}
input:focus{box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(249,132,90,.6);border-color:#f26532;}

table{width:100%;margin-top:20px;border-top:2px solid #666;}
.write table th, .write table td{padding:15px 0;}
.write table th{font-weight:600;font-size:14px;text-align:center;border-bottom:1px solid #999;color:#000;}
.write table td{font-size:14px;text-align:left;border-bottom:1px solid #999;}
.write table td textarea{padding:10px;margin:10px 0;width:700px;height:300px;}

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
