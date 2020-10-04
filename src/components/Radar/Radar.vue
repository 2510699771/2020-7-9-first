<template>
  <!--首页雷达图组件-->
  <el-card class="box-card" shadow="hover">
    <div class="box">
      <ve-radar :data="chartData"></ve-radar>
    </div>
  </el-card>
</template>

<script>
import VeLine from "v-charts/lib/line"; //注册v-charts
import axios from "axios";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      chartData: {
        columns: [],
        rows: []
      }
    };
  },
  methods: {},
  mounted() {
    //发送请求拿到雷达图数据
    axios
      .get("/api/radarChat")
      .then(res => {
        if (res.data.code === 0) {
          // 把拿到的数值绑定到自己定义的数组里
          this.chartData.columns = Object.keys(res.data.data[0]);
          this.chartData.rows = res.data.data;
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


        
         
         