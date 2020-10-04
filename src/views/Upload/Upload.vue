<template>
  <div class="a">
    <!--图片上传网页-->
    <Uppic></Uppic>
  </div>
</template>

<script>
import Uppic from "../../components/Uppic/Uppic.vue";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
    Uppic
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
  border: 1px solid red;
  width: 100vw;
  height: 100vh;
}
</style>