<template>
  <!--退出登录界面-->
  <div class="box">
    <!--头部-->
    <div class="bottom">
      <div class="new">期待您的下次光临</div>
    </div>
    <!--中间部位-->
    <div class="center">
      <div class="img">
        <img src="http://spider.ws.126.net/2ee12aa511493b659fc45fa30e302283.gif" alt width="100%" />
      </div>
      <el-button type="primary" style="margin-top:25px" @click="ret">确认退出</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        code: ""
      },
      arr: []
    };
  },
  methods: {
    ret() {
      //点击退出后发送请求到后台，收到后台数据并输出
      axios
        .get("/api/user/logout")
        .then(res => {
          if (res.data.code === 0) {
            localStorage.clear();
            this.$message.success(res.data.message);
            this.$router.push("Login");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100vw;
  height: 100vh;
  background-color: rgb(249, 249, 249);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .center {
    width: 308px;
    height: 200px;
    border: 1px solid rgb(224, 222, 222);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .img {
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgb(197, 193, 193);
      border-radius: 50%;
      background-color: white;
      box-shadow: rgb(223, 219, 219) 0px 0px 5px 5px;
    }
    .img > img {
      border-radius: 50%;
    }
  }
  .bottom {
    width: 308px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(224, 222, 222);
    .new {
      font-size: 18px;
    }
    .set {
      color: rgb(83, 186, 245);
      font-size: 12px;
    }
  }
}
.val {
  margin-top: 10px;
}
</style>