<template>
  <div class="main-page">
    <div class="formCreate">
      <div class="headerForm">Tạo mới khóa học </div>
      <div class="contentForm">
        <form action="">
          <div>
            <label>Mã khóa học</label>
            <input type="text" placeholder="123">
          </div>
          <div>
            <label>Học phí</label>
            <input type="text" placeholder="Học phí">
          </div>
          <div>
            <label>Tên khóa học</label>
            <input type="text" placeholder="Tên khóa học">
          </div>
          <div>
            <label>Địa điểm tổ chức</label>
            <input type="text" placeholder="Địa điểm tổ chức">
          </div>
          <div>
            <label>Thời gian học</label>
            <input type="text" placeholder="Thời gian học">
          </div>
          <div>
            <label>Gảng viên</label>
            <input type="text" placeholder="Giảng viên">
          </div>
          <button class="btn btnCreate"> Tạo mới Khóa học</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
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
