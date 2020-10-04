<template>
  <div class="box">
    <PageContent></PageContent>
    <div class="b">
      <div class="c">
        <div class="box3">
          <div v-for="(item,index) in list" :key="index" class="sidebar">
            <el-menu
              router
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item :index="item.path">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{item.name}}</span>
                </template>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PageContent from "../../components/PageContent/PageContent.vue";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
    PageContent
  },
  data() {
    return {
      list: [
        {
          name: "首页",
          icon: "el-icon-location-outline",
          path: "/Firstpage"
        },
        {
          name: "已发布",
          icon: "el-icon-menu",
          path: "/Published"
        },
        {
          name: "统计",
          icon: "el-icon-menu",
          path: "/Statistical"
        },
        {
          name: "发表文章",
          icon: "el-icon-check",
          path: "/Article"
        },
        {
          name: "标签页",
          icon: "el-icon-setting",
          path: "/Lable"
        },
        {
          name: "导出excal",
          icon: "el-icon-setting",
          path: "/Export"
        },
        {
          name: "图片上传",
          icon: "el-icon-setting",
          path: "/Upload"
        },
        {
          name: "退出系统",
          icon: "el-icon-delete",
          path: "/Exit"
        }
      ]
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  position: relative;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 7vh;
}
.span {
  width: 100%;
}
.b {
  display: flex;
  height: 100%;

  .sidebar {
    display: flex;
  }
}
.c {
  position: relative;
  height: 100vh;
}
.box3 {
  background-color: rgb(84, 92, 100);
  border-color: rgb(84, 92, 100);
  height: 100%;
}
</style>