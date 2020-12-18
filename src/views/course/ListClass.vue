<template>
  <div class="main-page listClass">
    <div class="page-heading">
      <div class="page-filter">
        <form>
          <div class="searchBox">
            <select class="search-box-select filter selectpicker">
              <option>Chọn khóa học</option>
              <option>BLF02</option>
              <option>BLF01</option>
              <option>BLF00</option>
            </select>
            <div class="search-box filter">
              <input type="search" placeholder="Email">
            </div>
            <select class="search-box-select filter selectpicker">
              <option>Trạng Thái</option>
              <option>Bị Hủy</option>
              <option>Chờ thanh toán</option>
              <option>Đã thanh toán</option>
            </select>
            <div class="search-box filter">
              <input type="search" placeholder="Tìm kiếm">
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
              <th>Thông tin học viên</th>
              <th>Thông tin khóa học</th>
              <th>Giá trị</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <div class="borderTable"></div>
          <tbody>
            <tr>
              <td>2026</td>
              <td>
                  <div>Nguyễn Thái Phong</div>
                  <div>thaiphong2609@gmail.com</div>
                  <div>0968765432</div>
                  <div>BL1234567890</div>
              </td>
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
              <td>Chờ thanh toán</td>
              <td>
                <a href="#" class="btn">Điểm danh</a>
              </td>
            </tr>
            <tr>
              <td>2026</td>
              <td>
                  <div>Nguyễn Thái Phong</div>
                  <div>thaiphong2609@gmail.com</div>
                  <div>0968765432</div>
                  <div>BL1234567890</div>
              </td>
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
              <td>Chờ thanh toán</td>
              <td>
                <a href="#" class="btn">Điểm danh</a>
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