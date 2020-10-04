<template>
  <!-- 已布页面子组件 -->
  <div class="box">
    <el-table
      :data="this.arr.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      stripe
      style="width: 100%"
      border
    >
      <el-table-column type="index" label="#" width="180" align="center"></el-table-column>
      <el-table-column prop="title" label="标题" width="180" align="center"></el-table-column>
      <el-table-column prop="author" label="作者" align="center"></el-table-column>
      <el-table-column prop="category" label="类目" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.category === 'React'" type="info" size="medium">React</el-tag>
          <el-tag v-if="scope.row.category === 'Vue'" type="success" size="medium">Vue</el-tag>
          <el-tag v-if="scope.row.category === 'Node.js'" type="info" size="medium">Node.js</el-tag>
          <el-tag v-if="scope.row.category === '性能优化'" type="info" size="medium">性能优化</el-tag>
          <el-tag v-if="scope.row.category === 'JaveScript'" type="warning" size="medium">JaveScript</el-tag>
          <el-tag v-if="scope.row.category === '小程序'" type="success" size="medium">小程序</el-tag>
          <el-tag v-if="scope.row.category === '工具类'" type="danger" size="medium">工具类</el-tag>
          <el-tag v-if="scope.row.category === '其他'" size="medium">其他</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="source" label="来源" align="center"></el-table-column>
      <el-table-column prop="star" label="重要性" align="center">
        <template slot-scope="scope">
          <el-rate v-model="scope.row.star" disabled></el-rate>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="发布时间" align="center"></el-table-column>
      <el-table-column prop="address" label="操作" width="280" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="success" @click="look(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="arr.length"
    ></el-pagination>
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
      pageSizes: [5, 10, 15, 20],
      pageSize: 10,
      currentPage: 1,
      arr: [],
      id: "",
      time: []
    };
  },
  methods: {
    //  点击删除
    handleDelete(index, row) {
      axios
        .post("/api/article/delete", {
          _id: row._id
        })
        .then(res => {
          this.arr.splice(index, 1);
        })
        .catch(err => {
          console.log(err);
        });
    },

    //    点击编辑
    handleEdit(index, row) {
      this.$router.push({
        path: "/EditorPage",
        query: {
          id: row._id
        }                                                                                                                                                                                            
      });
    },
    //   点击查看
    look(index, row) {
      this.$router.push({
        path: "/Looklook",
        query: {
          id: row._id
        }
      });
    },

    //   分页
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    axios
      .get("/api/article/allArticle")
      .then(res => {
        res.data.data.map((item,index) => {
          res.data.data[index].date = dayjs(item.date).format('YYYY-MM-DD mm:ss')
        });
        this.arr = res.data.data;
        console.log(res.data.data);
        this.arr.map(item => {
          item.star = Number(item.star);
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
.box {
  width: calc(100vw - 220px);
}
</style>