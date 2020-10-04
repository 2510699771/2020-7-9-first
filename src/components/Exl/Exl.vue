<template>
  <!-- 导出excal子组件 -->
  <!-- 表格 -->
  <el-card class="box-card">
    <div class="box">
      <el-input v-model="input" placeholder="请输入您想搜索的商品名称" style="width:20%;margin-bottom:20px"></el-input>
      <el-table
        :data="arr.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        stripe
        style="width: 100%"
        border
      >
        <el-table-column prop="NAME" label="名称" align="center"></el-table-column>
        <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" align="center"></el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价" align="center"></el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价" align="center"></el-table-column>
        <el-table-column prop="address" label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">
              <i class="el-icon-edit"></i>编辑
            </el-button>

            <el-dialog title="修改商品" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="名称" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="原价" :label-width="formLabelWidth">
                  <el-input v-model="form.ORI_PRICE" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="现价" :label-width="formLabelWidth">
                  <el-input v-model="form.PRESENT_PRICE" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="Ok">确 定</el-button>
              </div>
            </el-dialog>

            <el-button
              size="mini"
              style="margin-left:20px"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="arr.length"
      ></el-pagination>
      <!--底部导出excal按钮-->
      <el-button-group>
        <download-excel
          class="export-excel-wrapper"
          :data="arr.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          :fields="json_fields"
          name="导出xls.xls"
        >
          <el-button type="primary">导出xle</el-button>
        </download-excel>

        <download-excel
          class="export-excel-wrapper"
          :data="arr.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          :fields="json_fields"
          name="导出xls.csv"
        >
          <el-button ton type="primary">导出csv</el-button>
        </download-excel>
      </el-button-group>
    </div>
  </el-card>
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
      formLabelWidth: "100px",
      dialogFormVisible: false,
      pageSizes: [5, 10, 15, 20],
      pageSize: 10,
      currentPage: 1,
      arr: [],
      id: "",
      time: [],
      input: "",
      arr1: [],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        ORI_PRICE: "",
        PRESENT_PRICE: "",
        id: ""
      },
      json_fields: {
        名称: "NAME",
        商品编号: "GOODS_SERIAL_NUMBER",
        原价: "ORI_PRICE",
        现价: "PRESENT_PRICE"
      },
      json_data: [],
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ]
    };
  },
  methods: {
    Ok() {
      this.arr.map(item => {
        if (item.ID === this.form.id) {
          item.NAME = this.form.name;
          item.ORI_PRICE = this.form.ORI_PRICE;
          item.PRESENT_PRICE = this.form.PRESENT_PRICE;
        }
        this.dialogFormVisible = false;
      });
    },
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
      this.dialogFormVisible = true;
      this.form.name = row.NAME;
      this.form.ORI_PRICE = row.ORI_PRICE;
      this.form.PRESENT_PRICE = row.PRESENT_PRICE;
      this.form.id = row.ID;
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
      .get("/api/tableData")
      .then(res => {
        this.arr = res.data.data;
        this.arr1 = res.data.data;
        console.log(this.arr1);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {
    input(val) {
      this.arr = this.arr1.filter(item => {
        return JSON.stringify(item.NAME).includes(val);
      });
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: calc(100vw - 270px);
}
</style>