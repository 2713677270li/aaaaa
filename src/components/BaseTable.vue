<template>
  <div>
    <el-table v-bind="$attrs" v-on="$listeners" :data="data" style="width: 100%">
      <template v-for="(item,index) in column">
      <el-table-column :key="index" :prop="item.key" :label="item.titleName" :width="item.width"> </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      require: true,
      default: () => {
        return [];
      },
    },
    column: {
      type: Array,
      require: true,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
