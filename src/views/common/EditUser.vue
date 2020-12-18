<template>
  <div :class="[dialogVisibleEditUser ? 'active' : '', 'popup flex-center']">
    <div class="popup-inner">
      <div class="popup-close" @click="closeModal">X</div>
      <div class="popup-title">
        <h2 class="text-center">CHỈNH SỬA TÀI KHOẢN USER</h2>
      </div>
      <form action="" class="form-popup">
          <div class="fields d-flex">
            <div class="flex-ycenter d-flex flex-1">
              <label for="">Tên đăng nhập</label>
              <input type="text">
            </div>
            <div class="flex-ycenter d-flex flex-1">
              <label for="">Email</label>
              <input type="text">
            </div>
          </div>
          <div class="fields d-flex">
            <div class="flex-ycenter d-flex flex-1">
              <label for="">Họ tên</label>
              <input type="text">
            </div>
            <div class="flex-ycenter d-flex flex-1">
              <label for="">Số CMND</label>
              <input type="text">
            </div>
          </div>
          <div class="fields d-flex">
            <div class="flex-ycenter d-flex flex-1">
              <label for="">Điện thoại</label>
              <input type="text">
            </div>
            <div class="flex-ycenter d-flex flex-1">
              <label for="">Trạng thái</label>
              <el-select v-model="status" filterable  placeholder="Chọn">
                <el-option
                  v-for="item in listStatus"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="form-bottom text-uppercase d-flex">
            <button class="btn-radius btn-dack btn" @click="closeModal">Hủy bỏ</button>
            <button class="btn-radius btn">Lưu cài đặt</button>
          </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      dialogVisibleCreateNews: false,
      listStatus: [
        {value: 1, label: 'HOẠT ĐỘNG'},
        {value: 2, label: 'KHÓA'},
        {value: 3, label: 'CHỜ XÁC NHẬN'},
      ],
      status: {}
    }
  },
  computed: {
    dialogVisibleEditUser () {
      return this.$store.getters.dialogVisibleEditUser
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch('setDialogEditUser', false)
    },
    onSubmit() {
    }
  }
}
</script>
