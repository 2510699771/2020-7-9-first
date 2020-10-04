<template>
  <!--首页路由 父组件-->
  <div class="box">
    <div class="topt">
      <div class="top">
        <div>
          <el-card shadow="hover">
            <div class="tiao">
              <i class="iconfont icon-ziyuanldpi"></i>
              <div>
                <div>New Visits</div>
                <countTo :startVal="startVal" :endVal="this.endVal.visits" :duration="3000"></countTo>
              </div>
            </div>
          </el-card>
        </div>
        <div>
          <el-card shadow="hover">
            <div class="tiao">
              <i class="iconfont icon-taolun"></i>
              <div>
                <div>Messages</div>
                <countTo :startVal="startVal" :endVal="this.endVal.messages" :duration="3000"></countTo>
              </div>
            </div>
          </el-card>
        </div>
        <div>
          <el-card shadow="hover">
            <div class="tiao">
              <i class="iconfont icon-money"></i>
              <div>
                <div>Purchases</div>
                <countTo :startVal="startVal" :endVal="this.endVal.purchases" :duration="3000"></countTo>
              </div>
            </div>
          </el-card>
        </div>
        <div>
          <el-card shadow="hover">
            <div class="tiao">
              <i class="iconfont icon-gouwuche"></i>
              <div>
                <div>Shopping</div>
                <countTo :startVal="startVal" :endVal="this.endVal.shopping" :duration="3000"></countTo>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="c">
      <div class="box-cardb">
        <Brokenline class="cb"></Brokenline>
      </div>
    </div>
    <div class="middlec">
      <div class="middle">
        <div>
          <Radar></Radar>
        </div>
        <div>
          <Pie></Pie>
        </div>
        <div>
          <Colu></Colu>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="orderb">
        <div>
          <Order></Order>
        </div>
        <div class="tp">
          <Todo></Todo>
          <el-card shadow="hover">
            <Progress></Progress>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Brokenline from "../../components/Brokenline/Brokenline.vue";
import Radar from "../../components/Radar/Radar.vue";
import Pie from "../../components/Pie/Pie.vue";
import Order from "../../components/Order/Order.vue";
import Colu from "../../components/Colu/Colu.vue";
import Progress from "../../components/Progress/Progress.vue";
import Todo from "../../components/Todo/Todo.vue";
import countTo from "vue-count-to";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {
    Brokenline,
    Radar,
    Pie,
    Colu,
    Order,
    Progress,
    Todo,
    countTo
  },
  data() {
    return {
      startVal: 0,
      endVal: []
    };
  },
  methods: {},
  mounted() {
    axios
      .get("/api/homeData")
      .then(res => {
        console.log(res.data.data);
        this.endVal = res.data.data;
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
.box {
  background-color: rgb(238, 240, 243);
  width: 100wh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  .topt {
    width: 98%;
    margin-top: 20px;
    margin-left: 20px;
    .top > div {
      flex: 1;
    }
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
  }
  .c {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .box-cardb {
      width: 98%;
      justify-content: center;
    }
  }
  .middlec {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .middle {
      width: 98%;
      display: flex;
      justify-content: center;
    }
    .middle > div {
      flex: 1;
    }
  }
  .order {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .orderb {
      width: 98%;
      display: flex;
    }
  }
}
.orderb > div {
  flex: 1;
}
.tp {
  display: flex;
  align-items: center;
  height: 100%;
}
.tp > div {
  flex: 1;
  height: 100%;
}
.tiao {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>