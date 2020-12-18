<template>
  <div :class="[dialogVisibleCreateNews ? 'active' : '', 'popup']">
    <div class="popup-inner">
      <div class="popup-title">
        <h2>Thêm mới tin tức</h2>
      </div>
      <div class="popup-content formatted">
        <form action="#" class="flex-box" @submit.prevent="onSubmit" @keypress.enter.prevent>
          <div class="fields flex-1">
            <div class="field-row">
              <div class="field">
                <input type="text" placeholder="Tiêu đề">
              </div>
              <div class="field">
                <input type="text" placeholder="Mô tả ngắn">
              </div>
            </div>
            <div class="field-row">
              <div class="field">
                <select name="">
                  <option value="">Trạng thái</option>
                </select>
              </div>
              <div class="field">
                <input type="text" placeholder="Người tạo">
              </div>
            </div>
            <div class="field-row">
              <div class="field-double">
                <ckeditor :editor="editor" :height="500"></ckeditor>
              </div>
            </div>
            <div class="field-row field-submit">
              <div class="field-double">
                <button @click.prevent="close()">Huỷ bỏ</button>
                <button>Lưu bài viết</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  data () {
    return {
      editor: ClassicEditor
    }
  },
  computed: {
    dialogVisibleCreateNews () {
      return this.$store.getters.dialogVisibleCreateNews
    }
  },
  methods: {
    close() {
      this.$store.dispatch('setDialogCreateNews')
    }
  }
}
</script>