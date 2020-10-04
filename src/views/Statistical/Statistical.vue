<template>
  <div class="a">
    <Sta3></Sta3>
    <div class="b">
      <div>
        <Sta></Sta>
      </div>
      <div>
        <Sta1></Sta1>
      </div>
    </div>
    <Sta2></Sta2>
  </div>
</template>

<script>
import Sta from "../../components/Sta/Sta.vue";
import Sta1 from "../../components/Sta1/Sta1.vue";
import Sta2 from "../../components/Sta2/Sta2.vue";
import Sta3 from "../../components/Sta3/Sta3.vue";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
    Sta,
    Sta2,
    Sta1,
    Sta3
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.a {
  width: calc(100% - 200px);
}
.b {
  display: flex;
  margin-top: 20px;
}
.b>div{flex: 1;}
</style>