<template>
  <!-- 标签页页面路由 -->
  <div class="a">
    <el-tabs @tab-click="handleClick" v-model="activeName">
      <!--未读区域 -->
      <el-tab-pane label="未读消息" name="first">
        <!--未读内容 -->
        <el-card class="box-card">
          <div>
            <div v-for="(item,index) in arr1" :key="index">
              <div class="article">
                <div>{{item.name}}</div>
                <div class="data">
                  <div class="num">{{item.data}}</div>
                  <div>
                    <el-button plain @click="read(item,index)">标为已读</el-button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div class="article">
              <el-button type="primary" @click="alread()">全部标记已读</el-button>
            </div>
          </div>
        </el-card>
      </el-tab-pane>

      <!--已读区域 -->
      <el-tab-pane label="已读消息" name="sce">
        <!--已读内容 -->
        <el-card class="box-card">
          <div>
            <div v-for="(item,index) in arr2" :key="index">
              <div class="article">
                <div>{{item.name}}</div>
                <div class="data">
                  <div class="num">{{item.data}}</div>
                  <div>
                    <el-button plain @click="del(item,index)">删除</el-button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div class="article">
              <el-button type="danger" @click="alldel()">全部删除</el-button>
            </div>
          </div>
        </el-card>
      </el-tab-pane>

      <!--回收站区域 -->
      <el-tab-pane label="回收站" name="thired">
        <!--回收站内容 -->
        <el-card class="box-card">
          <div>
            <div v-for="(item,index) in arr3 " :key="index">
              <div class="article">
                <div>{{item.name}}</div>
                <div class="data">
                  <div class="num">{{item.data}}</div>
                  <div>
                    <el-button type="warning" @click="back(item,index)">还原</el-button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div class="article">
              <el-button type="info" @click="allback()">全部还原</el-button>
            </div>
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      activeName: "sce",
      arr1: [
        {
          name: "【系统通知】该系统将于今晚凌晨2点到5点进行更新",
          data: "2018-04-19"
        },
        {
          name: "今晚12点整发大红包，先到先得",
          data: "2018-04-19"
        }
      ],
      arr2: [
        {
          name: "【系统通知】该系统将于今晚凌晨2点到5点进行更新",
          data: "2018-04-19"
        }
      ],
      arr3: [
        {
          name: "【系统通知】您的优惠券已经过期",
          data: "2018-04-19"
        }
      ],
      first: [], //定义一个接受的空数组
      second: [],
      thired: []
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //未读区域点击事件
    read(item, index) {
      this.first.splice(0);
      this.arr1.splice(index, 1);
      this.first.push(item);
      this.arr2 = this.arr2.concat(this.first);
    },
    alread() {
      this.first = this.arr1;
      this.arr2 = this.arr2.concat(this.first);
      this.arr1.splice(0);
    },
    //已读区域点击事件
    del(item, index) {
      this.second.splice(0);
      this.arr2.splice(index, 1);
      this.second.push(item);
      this.arr3 = this.arr3.concat(this.second);
    },
    alldel() {
      this.second = this.arr2;
      this.arr3 = this.arr3.concat(this.second);
      this.arr2.splice(0);
    },
    //回收站区域点击事件
    back(item, index) {
      this.thired.splice(0);
      this.arr3.splice(index, 1);
      this.thired.push(item);
      this.arr2 = this.arr2.concat(this.thired);
    },
    allback() {
      this.thired = this.arr3;
      this.arr2 = this.arr2.concat(this.thired);
      this.arr3.splice(0);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.a {
  width: 95vw;
  height: 100vh;
  margin-left: 20px;
}
.article {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .data {
    display: flex;
    align-items: center;
    margin: 5px;
    .num {
      margin-right: 10px;
    }
  }
}
</style>