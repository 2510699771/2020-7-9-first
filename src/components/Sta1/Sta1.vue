<template>
  <!--统计页面下右侧饼状图组件-->
  <div class="a">
    <ve-pie :data="chartData"></ve-pie>
  </div>
</template>

<script>
import axios from "axios";
import lodash from "lodash";

export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      chartData: {
        columns: ["分类", "数量"], //手动敲出
        rows: []
      }
    };
  },
  methods: {},
  mounted() {
    axios
      .get("/api/article/allArticle")
      .then(res => {
        console.log(res.data.data);
        //使用lodash下的groupBy方法传入两个参数
        let source = lodash.groupBy(res.data.data, "source");
        //向对象使用for in循环
        for (let i in source) {
          let obj = {};
          obj["分类"] = i;
          obj["数量"] = source[i].length;
          this.chartData.rows.push(obj);
        }
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
</style>