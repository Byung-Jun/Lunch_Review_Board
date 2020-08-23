<template>

  <div>
    <div align="center">
      <p class="sub-title">모두의 입맛이 모여 하나로 </p><!--게시-->
      <p class="message-num">총 후기 수 : {{board.length}}개</p>
    </div>

    <div align="center">

      <b-input-group class="mt-3 mb-3" size="lg">
        <b-form-input v-model="keyword" placeholder="어디갈까" type="text"></b-form-input>
       </b-input-group>

      <b-table
        striped
        hover
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
        :items="items"
        :keyword="keyword"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        @row-clicked="rowClick"
      ></b-table>

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        align="center"
      >

      </b-pagination>

      <div align="center">
        <b-button @click="writeContent">글쓰기</b-button>
        <p></p>
      </div>

    </div>


  </div>

</template>

<script>
  import {boardRefs} from "../config/firebase"

  export default {
    components: {
      name: "List"
    },
    data() {
      return {
        sortBy: 'order',
        sortDesc: true,
        currentPage: 1,//현재 페이지
        perPage: 10, //페이지당 보여줄 갯수
        fields: [
          {
            key: "order",
            label: "순서"
          },
          {
            key: "title",
            label: "제목"
          },
          {
            key: "star",
            label: "별점"
          },
          {
            key: "writer",
            label: "작성자"
          },
          {
            key: "date",
            label: "등록일자"
          },
          {
            key: "cnt",
            label: "조회수"
          }
        ],
        board: [],
        keyword: ''
      }
    },
    firebase: {
      board: boardRefs
    },
    methods: {
      rowClick: function (item, index, e) {
        boardRefs.child(item['.key']).update({
          cnt: item.cnt + 1
        });
        this.$router.push({path: '/view/' + item['.key']})
      },
      writeContent() {
        this.$router.push({
          path: '/write'
        });
      }

    },
    computed: {
      rows() {
        return this.board.length
      },
      items() {
        return this.keyword
          ? this.board.filter(item => item.title.includes(this.keyword) || item.writer.includes(this.keyword) || item.star.includes(this.keyword))
          : this.board

      }
    }
    ,
    watch : {
      items(value){
        return this.currentPage = 1
      }
    }
  }
</script>


<style scoped>
  .sub-title{margin-bottom:10px;font-size:16px;color:#000f;font-weight:600;}
</style>


