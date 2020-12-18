<template>
  <div class="main-content main-content-exchange">
    <div class="page-heading">
      <div class="page-filter">
        <div class="add-box filter" @click="addNews">
            <span>Thêm mới</span>
            <img src=" /images/button.svg" alt="Add">
        </div>
        <form class="search-box filter">
          <input type="search" placeholder="Tìm kiếm">
          <button><img src="/images/loupe.svg" alt="Search"></button>
        </form>
      </div>
    </div>
    <div class="page-content">
      <div class="tabs">
        <a href="#" :class="{'active': tab === 'news'}" @click.prevent="tab = 'news'">Tin tức</a>
        <a href="#" :class="{'active': tab === 'qa'}" @click.prevent="tab = 'qa'">Câu hỏi thường gặp</a>
      </div>
      <dl class="classic-table equals" v-if="tab === 'news'">
        <dt>
          <div>STT</div>
          <div class="flex-3">Tiêu đề</div>
          <div>Thao tác</div>
        </dt>
        <dd>
          <div>1</div>
          <div class="flex-3">Góp ý tưởng hay - tăng nhanh doanh số</div>
          <div>
            <a class="action approve">Chỉnh sửa</a>
          </div>
        </dd>
      </dl>
      <dl class="classic-table equals" v-if="tab === 'qa'">
        <dt>
          <div>STT</div>
          <div class="flex-3">Tiêu đề</div>
          <div>Thao tác</div>
        </dt>
        <dd>
          <div>1</div>
          <div class="flex-3">Hướng dẫn lấy lại mật khẩu?</div>
          <div>
            <a class="action approve">Chỉnh sửa</a>
          </div>
        </dd>
      </dl>
      <div class="box-pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="10"
          :current-page="1"
          :total="20">
        </el-pagination>
      </div>
    </div>
    <FormCreateNews/>
  </div>
</template>
<script>
import FormCreateNews from '@/views/common/FormCreateNews'
export default {
  components: {
    FormCreateNews
  },
  data () {
    return {
      tab: 'news'
    }
  },
  methods: {
    addNews() {
      this.$store.dispatch('setDialogCreateNews', true)
    }
  }
}
</script>