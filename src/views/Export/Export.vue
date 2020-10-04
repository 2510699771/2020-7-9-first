<template>
  <!--导出excal页面父组件-->
  <div class="a">
    <Exl></Exl>
  </div>
</template>

<script>
import Exl from "../../components/Exl/Exl.vue";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
    Exl
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
  width: 100vw;
  height: 100vh;
}
</style>