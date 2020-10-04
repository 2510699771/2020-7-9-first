<template>
  <div class="box">
    <div>欢迎来到xx后台管理系统</div>
    <div class="right">
      <div class="dear">亲爱的  {{this.username}}</div>
      <div>上次登录时间:  {{this.lasttime}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      tabPosition: "left",
      username: "",
      lasttime: ""
    };
  },
  methods: {},
  mounted() {
    this.username = JSON.parse(localStorage.getItem("username"));
    this.lasttime = dayjs(JSON.parse(localStorage.getItem("lasttime"))).format(
      "YYYY年MM月DD日HH时mm分ss秒 "
    );
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  color: white;
  font-size: 20px;
  background-color: rgb(46, 94, 133);
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  .right{
    display: flex;
    font-size: 15px;
  }
  .dear{
    margin-right: 15px;;
  }
}
</style>