<template>
  <div class="all">
    <el-card class="box-card" shadow="hover">
      <el-table :data="tableData" style="width: 100%" class="etabe">
        <el-table-column prop="num" label="order_no"></el-table-column>
        <el-table-column prop="price" label="price"></el-table-column>
        <el-table-column prop="status" label="status">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.status === 0 ? 'danger' : 'success'"
              disable-transitions
            >{{scope.row.kind}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "",
  //接受父组件传递的数据
  props: {},
  //注册组件
  components: {},
  data() {
    return {
      tableData: []
    };
  },
  methods: {},
  mounted() {
    axios
      .get("/api/orderData ")
      .then(res => {
        res.data.data.map(item => {
          if (item.status === 0) {
            this.$set(item, "kind", "pending");
          } else {
            this.$set(item, "kind", "success");
          }
        });
        this.tableData = res.data.data;
        console.log(this.tableData);
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
</style>