<template>
  <el-card class="box-card" shadow="hover">
    <div class="a">
      <div class="todo">
        <div class="top">
          <div>
            <el-checkbox v-model="checkAll" @change="all">全选</el-checkbox>
          </div>
          <div>Todo List</div>
        </div>

        <div v-if="this.num === -1" style="width=100%">
          <el-checkbox
            v-for="(item,index) in arr"
            :key="index"
            v-model="item.checked"
            @click="chose(item,index)"
            @change="changeItem"
            class="bottom"
          >
            <div class="conter">
              <div>{{item.name}}</div>
              <div class="conterdel">
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  class="del"
                  size="mini"
                  @click="dele(item,index)"
                ></el-button>
              </div>
            </div>
          </el-checkbox>
        </div>

        <div v-if="this.num === 0" style="width=100%">
          <el-checkbox
            v-for="(item,index) in arr1"
            :key="index"
            v-model="item.checked"
            @click="chose(item,index)"
            @change="changeItem"
            class="bottom"
          >
            <div class="conter">
              <div>{{item.name}}</div>
              <div class="conterdel">
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  class="del"
                  size="mini"
                  @click="dele(item,index)"
                ></el-button>
              </div>
            </div>
          </el-checkbox>
        </div>

        <div v-if="this.num === 1" style="width=100%">
          <el-checkbox
            v-for="(item,index) in arr2"
            :key="index"
            v-model="item.checked"
            @click="chose(item,index)"
            @change="changeItem"
            class="bottom"
          >
            <div class="conter">
              <div>{{item.name}}</div>
              <div class="conterdel">
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  class="del"
                  size="mini"
                  @click="dele(item,index)"
                ></el-button>
              </div>
            </div>
          </el-checkbox>
        </div>
        <div class="hr">
          <hr />
        </div>
        <div class="btn">
          <div :itemLeft="itemLeft">{{this.msg}} item left</div>
          <div>
            <el-button plain @click="al">All</el-button>
            <el-button type="text" @click="els">Actuve</el-button>
            <el-button type="text" @click="tru">Completed</el-button>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import axios from "axios";
const cityOptions = [];
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      checkAll: false,
      arr: [],
      arr1: [],
      arr2: [],
      mid: "",
      num: -1,
      msg: ""
    };
  },
  methods: {
    al() {
      this.num = -1;
    },
    all() {
      this.arr.map(item => {
        item.checked = this.checkAll;
      });
    },
    changeItem() {
      this.checkAll = this.arr.every(item => {
        return item.checked === true;
      });
    },
    dele(item, index) {
      this.arr.splice(index, 1);
    },

    els() {
      this.arr1 = this.arr.filter(item => {
        return item.checked === false;
      });
      this.num = 0;
    },
    tru() {
      this.arr2 = this.arr.filter(item => {
        return item.checked === true;
      });
      this.num = 1;
    },
    chose(item) {
      this.mid = item.checked;
      console.log(item);
    }
  },
  mounted() {
    axios
      .get("/api/todoList")
      .then(res => {
        this.arr = res.data.data;
        console.log(this.arr);
      })
      .catch(err => {
        console.log(err);
      });

    console.log(this.arr);
  },
  watch: {},
  computed: {
    itemLeft() {
      let ar = this.arr.filter(item => {
        return item.checked === true;
      });
      this.msg = ar.length;
    }
  }
};
</script>

<style scoped lang='scss'>
.todo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .top {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
}
.btn {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hr {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
hr {
  width: 100%;
}
.bottom {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.del {
  display: none;
}
.bottom:hover .del {
  display: block;
}
.conter {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .conterdel {
    width: 100%hh;
  }
}
</style>