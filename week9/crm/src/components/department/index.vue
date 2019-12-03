<template>
  <el-table :data="tableData" style="width: 100%" stripe border height='100%'>
    <el-table-column
      label='编号'
      type="index"
      width='100'
      align='center'
      :index="indexMethod">
    </el-table-column>
    <el-table-column label="名称" width="180" align='center'>
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="描述" align='center'>
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作" width='200' align='center' >
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  created() {
    this.$store.dispatch('changeDpList')
  },
  computed: {
    tableData(){
      return this.$store.state.departmentList
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    indexMethod(index) {
      return index + 1;
    }
  }
};
</script>