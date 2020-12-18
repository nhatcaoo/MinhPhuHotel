<template>
  <div>
    <div class="main-page">
      <div class="box-top-page d-flex flex-ycenter">
        <h4 class="title-page text-uppercase">danh sách gói đăng ký của hoangthithiem</h4>
        <div class="box-pagination no-magin">
          <el-pagination
            background
            layout="prev, next"
            :page-size="10"
            :current-page="1"
            :total="20">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {

  },
  mounted() {
  },
  methods: {
  }
}
</script>
