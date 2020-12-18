<template>
  <div class="main-page">
    <div class="page-heading">
      <div class="page-filter">
        <div class="add-box filter">
            <span>Thêm mới</span>
            <img src=" /images/button.svg" alt="Add">
        </div>
        <form class="search-box filter">
          <input type="search" placeholder="Tìm kiếm">
          <button><img src="/images/loupe.svg" alt="Search"></button>
        </form>
      </div>
    </div>
    <div class="listCourse">
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Thông tin khóa học</th>
              <th>Giá trị</th>
              <th>Thời gian</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <div class="borderTable"></div>
          <tbody>
            <tr>
              <td>2026</td>
              <td>
                <div>
                  <span>Tên khóa học</span>
                  <span>Best Finance - Bản đồ tư duy tài chính</span>
                </div>
                <div>
                  <span>Mã khóa học</span>
                  <span>BF02</span>
                </div>
                <div>
                  <span>Giáo viên</span>
                  <span>Đỗ Mạnh Hùng</span>
                </div>
                <div>
                  <span>Địa chỉ</span>
                  <span>Hà Nội</span>
                </div>
              </td>
              <td>5.500.000 VNĐ</td>
              <td>
                <div>
                  <span>Ngày bắt đầu</span>
                  <span>07 - 12 - 2020</span>
                </div>
                <div>
                  <span>Ngày kết thúc</span>
                  <span>07 - 12 - 2020</span>
                </div>
              </td>
              <td>Hoạt động</td>
              <td>
                <a href="#" class="btn"> Chỉnh sửa</a>
                <a href="#" class="btn btn-save"> Lưu </a>
              </td>
            </tr>
            <tr>
              <td>2026</td>
              <td>
                <div >
                  <span>Tên khóa học</span>
                  <span>Best Finance - Bản đồ tư duy tài chính</span>
                </div>
                <div>
                  <span>Mã khóa học</span>
                  <span>BF02</span>
                </div>
                <div>
                  <span>Giáo viên</span>
                  <span>Đỗ Mạnh Hùng</span>
                </div>
                <div>
                  <span>Địa chỉ</span>
                  <span>Hà Nội</span>
                </div>
              </td>
              <td>5.500.000 VNĐ</td>
              <td>
                <div>
                  <span>Ngày bắt đầu</span>
                  <span>07 - 12 - 2020</span>
                </div>
                <div>
                  <span>Ngày kết thúc</span>
                  <span>07 - 12 - 2020</span>
                </div>
              </td>
              <td>Hoạt động</td>
              <td>
                <a href="#" class="btn"> Chỉnh sửa</a>
                <a href="#" class="btn btn-save"> Lưu </a>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
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