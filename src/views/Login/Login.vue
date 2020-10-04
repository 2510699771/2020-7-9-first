<template>
  <!--登录页面父组件-->
  <div>
    <LoginContent></LoginContent>
  </div>
</template>

<script>
import LoginContent from "../../components/LoginContent/LoginContent.vue";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
    LoginContent
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
</style>