<template>
  <div class="a">
    <!--发表文章父组件-->
    <Release></Release>
  </div>
</template>

<script>
import Release from "../../components/Release/Release.vue";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
    Release
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
  width: calc(100vw - 220px);
  height: 100vh;
}
</style>