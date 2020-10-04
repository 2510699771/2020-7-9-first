<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
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
    this.chartSettings = {
      roseType: "radius"
    };
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
      .get("/api/ringChat")
      .then(res => {
          this.chartData.columns = Object.keys(res.data.data[0]);
          console.log(res.data.data)
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