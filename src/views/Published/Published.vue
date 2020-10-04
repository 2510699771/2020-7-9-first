<template>
  <!-- 已发布页面  -->
  <div>
    <AllArticle ></AllArticle>
  </div>
</template>

<script>
import AllArticle from "../../components/AllArticle/AllArticle.vue";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
    AllArticle
  },
  data() {
    return {};
  },
  methods: {
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>