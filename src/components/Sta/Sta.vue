<template>
  <div>
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
        columns: ["分类", "数量"],
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
        let category = lodash.groupBy(res.data.data, "category");
        for (let i in category) {
          let obj = {};
          obj["分类"] = i;
          obj["数量"] = category[i].length;
          this.chartData.rows.push(obj);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
      
  }
};
</script>

<style scoped lang='scss'>
</style>