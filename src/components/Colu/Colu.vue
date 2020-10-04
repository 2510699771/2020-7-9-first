<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <ve-histogram :data="chartData"></ve-histogram>
    </el-card>
  </div>
</template>

<script>
import VeLine from "v-charts/lib/line";
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
    axios
      .get("/api/homeChat")
      .then(res => {
        this.chartData.columns = Object.keys(res.data.data[0]);
        this.chartData.rows = res.data.data;
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