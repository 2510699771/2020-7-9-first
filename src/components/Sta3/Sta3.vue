<template>
  <!--统计页面下的最上面的今日发布与原创文章等信息组件-->
  <div class="top">
    <div>
      <el-card shadow="hover">
        <div class="tiao">
          <div>
            <div>今日发布</div>
          </div>
          <div>
            <i class="el-icon-check"></i>
            <div>{{this.msg}}</div>
          </div>
        </div>
      </el-card>
    </div>
    <div>
      <el-card shadow="hover">
        <div class="tiao">
          <div>
            <div>原创文章</div>
          </div>
          <div>
            <i class="el-icon-document"></i>
            <div>{{this.arr}}</div>
          </div>
        </div>
      </el-card>
    </div>
    <div>
      <el-card shadow="hover">
        <div class="tiao">
          <div>
            <div>新留言</div>
          </div>
          <div>
            <i class="el-icon-message-solid"></i>
            <div>0</div>
          </div>
        </div>
      </el-card>
    </div>
    <div>
      <el-card shadow="hover">
        <div class="tiao">
          <div>
            <div>新消息</div>
          </div>
          <div>
            <i class="el-icon-phone-outline"></i>
            <div>0</div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      arr: 0,
      arr1: [],
      msg: 0
    };
  },
  methods: {},
  mounted() {
    axios
      .get("/api/article/allArticle")
      .then(res => {
        //拿到后台给的数据每一项如果当他的来源等于原创时arr便加1(arr初始值为0)
        res.data.data.map(item => {
          if (item.source === "原创") {
            this.arr++;
          }
        });
        //定义一个当前的时间
        let thisD = new Date();
        // console.log(dayjs(thisD).format("YYYY年MM月DD日"));
        //对象拿到的数组进行循环拿到每一篇文章的创作日期并进行判断
        res.data.data.map(item => {
          if (
            dayjs(item.date).format("YYYY年MM月DD日") ===
            dayjs(thisD).format("YYYY年MM月DD日")
          ) {
            this.msg++;
            console.log(dayjs(item.date).format("YYYY年MM月DD日"));
          }
        });
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
.top {
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
}

.top > div {
  flex: 1;
}
.tiao {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>