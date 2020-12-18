<template>
  <div class="page-filter">
    <select v-if="isDisplay" class="search-box-select filter">
      <option v-for="(value, key) in selectData" :key="key" :value="value">{{value}}</option>
    </select>
    <form class="search-box filter">
      <input type="search" placeholder="Tìm kiếm">
      <button><img src="/images/icons/search.svg" alt="Search"></button>
    </form>
    <div v-if="!isDisplay" class="add-box filter" @click="Add()"><img src="/images/icons/add-dark.svg" alt="Add"><span>Thêm mới</span></div>
    <a class="filter icon-square" href="#">
      <img src="/images/icons/hamburger.svg" alt="Hamburger">
    </a>
    <a class="filter icon-square" href="#">
      <img src="/images/icons/import.svg" alt="Import">
    </a>
    <a class="filter icon-square" href="#">
      <img src="/images/icons/export.svg" alt="Export">
    </a>
    <a class="filter icon-square" href="#">
      <img src="/images/icons/eye.svg" alt="Eye">
    </a>
    <a class="filter icon-square" href="#">
      <img src="/images/icons/filter.svg" alt="Filter">
    </a>
  </div>
</template>
<script>
export default {
  props: {
    isDisplay: {
      type: Boolean,
      default: false
    },
    selectData: {
      type: Array,
      default: function () {
        return []
      }
    },
    dialogVisible: false
  },
  methods: {
    Add () {
      if (!this.dialogVisible) {
      }
    }
  }
}
</script>
