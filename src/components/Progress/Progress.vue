<template>
  <div>
      <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt />
      <div v-for="(item,index) in arr " :key="index">
        {{item.name}}
        <div v-if="item.progress != 1">
          <el-progress :percentage="Number(item.progress*100)"  :format="format"></el-progress>
        </div>
        <div v-if="item.progress === 1">
          <el-progress :percentage="Number(item.progress*100)" status="success" :format="format"></el-progress>
        </div>
        
      </div>
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
      arr: []
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    }
  },
  mounted() {
    axios
      .get("/api/progress")
      .then(res => {
        this.arr = res.data.data;
        console.log(this.arr);
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