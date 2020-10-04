<template>
<!--已发布页面点击查看后的路由 -->
  <div>
    <el-button type="primary" class="btn" @click="ret">返回</el-button>
    <div class="box">
      <div>
        <h1>{{this.arr.title}}</h1>
      </div>
      <div>摘要：{{this.arr.abstract}}</div>
      <div>作者：{{this.arr.author}}</div>
    </div>
    <el-card class="box-card">
      <h2>内容</h2>
      <div>{{this.arr.text}}</div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      id: "",
      arr: []
    };
  },
  methods: {
    ret() {
      this.$router.push('Published');
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    console.log(this.$route.query.id);
    axios
      .post("/api/article/article", {
        _id: this.id
      })
      .then(res => {
        console.log(res.data);
        this.arr = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: calc(100vw - 220px);
}
.box > div {
  width: 100%;
  display: flex;
  justify-content: center;
}
.box-card {
  height: 500px;
  margin: 20px;
}
.btn {
  margin: 20px;
}
</style>