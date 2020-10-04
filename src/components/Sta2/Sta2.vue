<template>
  <!-- 统计页面内的柱状图组件-->
  <div class="box">
    <ve-waterfall :data="chartData"></ve-waterfall>
  </div>
</template>

<script>
import axios from "axios";
import lodash from "lodash";
import dayjs from "dayjs";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      chartData: {
        columns: ["分类", "数量"],  //手动敲出
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
        //使用lodash下的groupBy方法传两个参数
        let date = lodash.groupBy(res.data.data, "date");
        //对对象用for in 循环
        for (let i in date) {
          let obj = {};
          obj["分类"] = dayjs(i).format("YYYY年MM月DD日");
          obj["数量"] = date[i].length;
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