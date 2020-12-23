<template>
  <v-container fill-height>
    <!--搜索框-->
    <v-row>
      <v-col>
        <v-text-field
            v-model="inputMsg"
            :append-icon="inputMsg ? 'mdi-send' : ''"
            :label="placeholderMsg ? '正在搜索：'+placeholderMsg:''"
            single-line
            outlined
            clearable
            @keyup.enter="searchRequest(inputMsg, currentPage)"
            @click:append="searchRequest(inputMsg, currentPage)"
        ></v-text-field>
        <p v-show="totalCount !== -1">搜索到{{ totalCount }}条结果</p>
      </v-col>
    </v-row>

    <!--搜索的内容-->
    <v-row no-gutters align-content-lg="center">
      <v-col v-for="m in msg" lg="3">
        <v-card
            height="400px"
            width="300px"
        >
          <br>
          <v-img
              class="align-lg-content-center"
              max-height="200px"
              max-width="200px"
              aspect-ratio="1"
              :src="m.img"
          >
          </v-img>

          <v-card-subtitle class="pb-0">
            价格：{{ m.price }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div v-html="m.desc"></div>
          </v-card-text>
        </v-card>
        <v-divider/>
      </v-col>
    </v-row>
    <br/>
    <v-divider></v-divider>

    <!--分页-->
    <v-row v-show="currentPage>0" align-content-lg="center">
      <v-col>
        <v-pagination
            v-model="currentPage"
            :length="totalPage"
            :total-visible="12"
            @input="changePage(keyword, currentPage)"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>

</template>


<script>
export default {
  name: "SearchPage",
  data: () => ({
    inputMsg: '',
    placeholderMsg: '',
    currentPage: 0,
    msg: [],
    totalPage: 1,
    totalCount: -1,
    keyword: ''
  }),
  methods: {
    changePage(keyword, currentPage) {
      var keyword = keyword;
      var currentPage = currentPage;
      this.searchRequest(keyword, currentPage);
    },
    searchRequest(keyword, currentPage) {
      if (this.keyword !== keyword) {
        currentPage = 1;
        this.currentPage = currentPage;
      }

      this.axios.get("http://localhost:8888/search/" + keyword
          + '/' + currentPage + '/12').then(resp => {
        this.msg = resp.data.msg
        this.totalPage = resp.data.totalPage;
        this.totalCount = resp.data.totalCount;
        this.keyword = keyword;
      });
      this.clearMessage(keyword)
    },
    clearMessage(keyword) {
      this.placeholderMsg = keyword
      this.inputMsg = ''
    },

  }
}
</script>

<style scoped>

</style>