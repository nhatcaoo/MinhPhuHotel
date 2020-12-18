<template>
  <div class="main-page">
    <div class="page-heading">
      <div class="page-filter">
        <form class="search-box filter">
          <input type="search" placeholder="Nhập ID user">
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
              <th>User</th>
              <th>tên Besthome</th>
              <th>Tỉnh thành</th>
              <th>ngày tạo</th>
              <th>ngày khóa</th>
              <th>thao tác</th>
            </tr>
          </thead>
          <div class="borderTable"></div>
          <tbody>
            <tr>
              <td>2026</td>
              <td class="number">nguyenhang@gmail.com</td>
              <td>Nguyễn Thị Hằng</td>
              <td>Hà Nội</td>
              <td>01/01/2020</td>
              <td>01/01/2020 </td>
              <td><el-switch></el-switch></td>
            </tr>
            <tr>
              <td>2026</td>
              <td class="number">nguyenhang@gmail.com</td>
              <td>Nguyễn Thị Hằng</td>
              <td>Hà Nội</td>
              <td>01/01/2020</td>
              <td>01/01/2020 </td>
              <td><el-switch></el-switch></td>
            </tr>
            <tr>
              <td>2026</td>
              <td class="number">nguyenhang@gmail.com</td>
              <td>Nguyễn Thị Hằng</td>
              <td>Hà Nội</td>
              <td>01/01/2020</td>
              <td>01/01/2020 </td>
              <td><el-switch></el-switch></td>
            </tr>
            <tr>
              <td>2026</td>
              <td class="number">nguyenhang@gmail.com</td>
              <td>Nguyễn Thị Hằng</td>
              <td>Hà Nội</td>
              <td>01/01/2020</td>
              <td>01/01/2020 </td>
              <td><el-switch></el-switch></td>
            </tr>
            <tr>
              <td>2026</td>
              <td class="number">nguyenhang@gmail.com</td>
              <td>Nguyễn Thị Hằng</td>
              <td>Hà Nội</td>
              <td>01/01/2020</td>
              <td>01/01/2020 </td>
              <td><el-switch></el-switch></td>
            </tr>
            <tr>
              <td>2026</td>
              <td class="number">nguyenhang@gmail.com</td>
              <td>Nguyễn Thị Hằng</td>
              <td>Hà Nội</td>
              <td>01/01/2020</td>
              <td>01/01/2020 </td>
              <td><el-switch></el-switch></td>
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