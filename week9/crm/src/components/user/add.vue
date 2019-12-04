<template>
  <el-form ref="form" :model="form" label-width="80px" class='myform'>
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
		<el-form-item label="性别">
      <el-radio-group v-model="form.resource">
        <el-radio label="0">男</el-radio>
        <el-radio label="1">女</el-radio>
      </el-radio-group>
    </el-form-item>
		<el-form-item label="邮箱">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
		<el-form-item label="电话">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="部门">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
		<el-form-item label="职务">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="自我介绍">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>