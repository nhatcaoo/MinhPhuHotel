<template>
  <div class="main-page listReportNonLife">
    <div class="page-heading">
      <button class="btn-search filter btn btn-export btn-export-top">
        <span>tải xuống bản excel</span>
        <img src="/images/download-to-storage-drive.svg" alt="Add">
      </button>
      <div class="page-filter searchPage">
        <form>
          <div class="searchBox">
            <select class="search-box-select filter selectpicker">
              <option>Số hợp đồng</option>
              <option>Đã xác nhận</option>
              <option>đã bị hủy</option>
              <option>chờ</option>
            </select>
            <div class="search-box filter">
              <input type="search" placeholder="ID, Tên đăng nhập">
              <button><img src="/images/loupe.svg" alt="Search"></button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="listCourse">
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tài khoản Thường</th>
              <th>Giá trị</th>
              <th>Từ số hợp đồng</th>
              <th>Ngày tạo</th>
            </tr>
          </thead>
          <div class="borderTable"></div>
          <tbody>
            <tr>
              <td>2026</td>
              <td>tranthica</td>
              <td>12345678</td>
              <td>YB12345678</td>
              <td>00:00:00<br> 22-09-2020</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>tranthica</td>
              <td>12345678</td>
              <td>YB12345678</td>
              <td>00:00:00<br> 22-09-2020</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>tranthica</td>
              <td>12345678</td>
              <td>YB12345678</td>
              <td>00:00:00<br> 22-09-2020</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>tranthica</td>
              <td>12345678</td>
              <td>YB12345678</td>
              <td>00:00:00<br> 22-09-2020</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>tranthica</td>
              <td>12345678</td>
              <td>YB12345678</td>
              <td>00:00:00<br> 22-09-2020</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>tranthica</td>
              <td>12345678</td>
              <td>YB12345678</td>
              <td>00:00:00<br> 22-09-2020</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>tranthica</td>
              <td>12345678</td>
              <td>YB12345678</td>
              <td>00:00:00<br> 22-09-2020</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>tranthica</td>
              <td>12345678</td>
              <td>YB12345678</td>
              <td>00:00:00<br> 22-09-2020</td>
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