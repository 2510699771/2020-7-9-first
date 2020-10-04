<template>
  <div>
    <el-card class="boxcard">
      <div slot="header" class="clearfix">
        <div>
          <h1>支持裁剪</h1>
          <div></div>
        </div>
      </div>
      <div id="app">
        <el-button type="primary" style="margin-top:20px" @click="toggleShow">操作按钮</el-button>
        <my-upload
          @crop-success="cropSuccess"
          v-model="show"
          :width="200"
          :height="200"
          img-format="png"
          :size="size"
          langType="zh"
          :noRotate="false"
          field="file"
          url="/api/upload"
        ></my-upload>
        <img :src="imgDataUrl" />
      </div>
    </el-card>

    <!--element插件-->
    <el-card class="boxcard">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-card>
  </div>
</template>
 
<script>
import myUpload from "vue-image-crop-upload";
export default {
  data() {
    return {
      imgDataUrl: "",
      show: false,
      size: 2.1
    };
  },
  components: {
    "my-upload": myUpload
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", imgDataUrl, field);
    },
    //上传成功回调
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      this.imgDataUrl = jsonData.files.Avatar1;
      console.log(jsonData);
      console.log("field: " + field);
    },
    //上传失败回调
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log("上传失败状态" + status);
      console.log("field: " + field);
    }
  }
};
</script>
 
<style>
.boxcard{
  margin-top: 30px;
}
</style>
 