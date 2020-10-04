<template>
  <div>
    <!--  发布文章内查看路由       -->
    <div class="btn">
      <el-button type="danger" @click="ret">返回</el-button>
      <el-button type="primary" @click="release">发布</el-button>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <!--  文章标题  -->
      <el-form-item label="文章标题" prop="title" label-width="80px">
        <div class="int">
          <el-input v-model="ruleForm.title"></el-input>
        </div>
      </el-form-item>

      <!--  文章摘要  -->
      <el-form-item label="文章摘要" prop="abstract" label-width="80px">
        <el-input v-model="ruleForm.abstract"></el-input>
      </el-form-item>
      <div class="mid">
        <!--  文章作者  -->
        <el-form-item label="作者" prop="author" label-width="80px">
          <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>

        <!--  文章类目  -->
        <el-form-item label="类目" prop="category" label-width="80px">
          <el-select v-model="ruleForm.category">
            <el-option label="Vue" value="Vue"></el-option>
            <el-option label="React" value="React"></el-option>
            <el-option label="Node.js" value="Node.js"></el-option>
            <el-option label="性能优化" value="性能优化"></el-option>
            <el-option label="JaveScript" value="JaveScript"></el-option>
            <el-option label="小程序" value="小程序"></el-option>
            <el-option label="工具类" value="工具类"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>

        <!--  文章来源  -->
        <el-form-item label="来源" prop="来源" label-width="80px">
          <el-select v-model="ruleForm.source">
            <el-option label="原创" value="原创"></el-option>
            <el-option label="转载" value="转载"></el-option>
            <el-option label="与他人合作" value="与他人合作"></el-option>
          </el-select>
        </el-form-item>

        <!--  文章重要性  -->
        <el-form-item label="重要性" prop="star" label-width="80px">
          <el-select v-model="ruleForm.star">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
          </el-select>
        </el-form-item>

        <!--  文章发布时间  -->
        <el-form-item label="发布时间" label-width="80px">
          <el-col :span="11">
            <el-date-picker type="date" v-model="ruleForm.date"></el-date-picker>
          </el-col>
        </el-form-item>
      </div>
    </el-form>
    <div class="demo-ruleForm" id="main">
      <mavon-editor v-model="text" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import marked from "marked";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      text: "",
      ruleForm: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        date: ""
      },
      id: "",
      arr: {},
      rules: {
        //验证规则
        title: [
          {
            required: true, //是否必选项 默认为flase
            message: "标题不能为空", //错误提示
            trigger: "blur"
          }
        ],
        abstract: [
          { required: true, message: "摘要不能为空", trigger: "blur" }
        ],
        author: [{ required: true, message: "作者不能为空", trigger: "blur" }],
        category: [{ required: true, message: "请选择类目", trigger: "blur" }],
        source: [{ required: true, message: "请选择来源", trigger: "blur" }],
        star: [{ required: true, message: "请选择重要性", trigger: "blur" }]
      }
    };
  },
  methods: {
    ret() {
      this.$router.push("Published");
    },
    // 点击发布后的发送post请求送到后台(包括id) 更新后台数据
    release() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios
            .post("/api/article/update", {
              title: this.ruleForm.title,
              abstract: this.ruleForm.abstract,
              author: this.ruleForm.author,
              category: this.ruleForm.category,
              source: this.ruleForm.source,
              star: this.ruleForm.star,
              text: this.text,
              date: this.ruleForm.date,
              id: this.id
            })
            .then(res => {
              this.$router.push("Published");
              this.$message.success("文章编辑成功");
              this.ruleForm.title = "";
              this.ruleForm.abstract = "";
              this.ruleForm.author = "";
              this.ruleForm.category = "";
              this.ruleForm.source = "";
              this.ruleForm.star = "";
              this.text = "";
              this.ruleForm.date = "";
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.error("填写有误，请检查");
        }
      });
    }
  },
  mounted() {
    //发送post请求把拿到的文章id给后台 获取到该文章的数据
    this.id = this.$route.query.id;
    console.log(this.id);
    axios
      .post("/api/article/article", {
        _id: this.id
      })
      .then(res => {
        this.ruleForm.title = res.data.data.title;
        this.ruleForm.abstract = res.data.data.abstract;
        this.ruleForm.author = res.data.data.author;
        this.ruleForm.category = res.data.data.category;
        this.ruleForm.source = res.data.data.source;
        this.ruleForm.star = res.data.data.star;
        this.text = res.data.data.text;
        this.ruleForm.date = res.data.data.date;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>
<style scoped lang='scss'>
.btn {
  display: flex;
  justify-content: flex-end;
  margin: 20px;
}
.demo-ruleForm {
  margin: 20px;
}
.mid {
  display: flex;
}
</style>