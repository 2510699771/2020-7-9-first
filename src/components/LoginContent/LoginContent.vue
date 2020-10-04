<template>
  <div class="box">
    <div class="bottom">
      <div class="new">欢迎来到xx系统</div>
    </div>
    <div class="center">
      <div class="img">
        <img src="http://img.tukexw.com/img/d98893b85b36dfa4.jpg" alt width="100%" />
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="请输入用户名" prop="username">
          <div class="int">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="请输入密码" prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-form-item label="请输入验证码" prop="code">
            <el-input v-model="ruleForm.code" placeholder="请输入验证"></el-input>
          </el-form-item>
          <div v-html="arr" class="val" @click="getData"></div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="registered">立即注册</el-button>
          <el-button type="primary" @click="login">立即登录</el-button>
        </el-form-item>
      </el-form>
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
      arr: {},
      rules: {
        //验证规则
        username: [
          {
            required: true, //是否必选项 默认为flase
            message: "用户名不能为空", //错误提示
            trigger: "blur" //触发方式
          },
          { min: 2, max: 8, message: "用户名在2-8位之间", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 8, max: 12, message: "密码在8-12位之间", trigger: "blur" }
        ],
        code: [{ required: true, message: "验证码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    registered() {
      this.$router.push("/RegisteredPage");
    },
    login() {
      let lasttime = new Date();
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios
            .post("/api/user/login", {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              code: this.ruleForm.code
            })
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success("登录成功");
                this.$router.push("/Firstpage");
                localStorage.setItem(
                  "username",
                  JSON.stringify(this.ruleForm.username)
                );
                localStorage.setItem(
                  "password",
                  JSON.stringify(this.ruleForm.password)
                );
                localStorage.setItem(
                  "lasttime",
                  JSON.stringify(lasttime)
                );
              } else {
                this.$message.error(res.data.message);
              }
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.error("填写有误，请检查");
        }
      });
    },
    getData() {
      axios
        .get("/api/captcha")
        .then(res => {
          this.arr = res.data;
          console.log(this.ruleForm.validation);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
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
    height: 550px;
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

