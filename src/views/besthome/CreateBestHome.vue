<template>
  <div class="main-page productPage reportPartner">
    <div class="page-filter">
      <div>
        <span>Tổng BESTHOME đang mở</span>
        <span class="number">1234</span>
      </div>
      <div>
        <span>Tổng BESTHOME đang khóa</span>
        <span class="number">1234</span>
      </div>
    </div>
    <div class="page-content">
      <div class="tabs">
        <a href="#" :class="{'active': tab === 'create'}" @click.prevent="tab = 'create'">Tạo mới besthome</a>
        <a href="#" :class="{'active': tab === 'list'}" @click.prevent="tab = 'list'">Danh sách besthome</a>
      </div>
      <div class="classic-table equals" v-if="tab === 'create'">
        <div class="formCreate">
          <div class="contentForm formCreateProduct">
            <form action="">
              <div>
                <label>Tên BESTHOME</label>
                <input type="text" placeholder="Tên BESTHOME">
              </div>
              <div>
                <label>User hưởng</label>
                <input type="text" placeholder="User hưởng">
              </div>
              <div>
                <label>% Hưởng</label>
                <div class="search-box filter">
                  <input type="text">
                  <button>0.0%</button>
                </div>
              </div>
              <div>
                <label>Tỉnh thành</label>
                <select>
                  <option>Hà nôi</option>
                  <option>HCM</option>
                </select>
              </div>
              <button class="btn btnCreate">Lưu BESTHOME</button>
            </form>

          </div>
        </div>
      </div>
      <div class="classic-table equals listCourse" v-if="tab === 'list'">
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>user</th>
                <th>Họ & tên</th>
                <th>Tỉnh thành</th>
                <th>Trạng thái</th>
                <th>Doanh số</th>
                <th>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>133</td>
                <td class="number">nguyenhang@gmail.com</td>
                <td>Nguyễn thị hằng</td>
                <td>Hà Nội</td>
                <td>Đã mở</td>
                <td>10.000.000 VNĐ</td>
                <td>01/01/2020</td>
              </tr>
              <tr>
                <td>133</td>
                <td class="number">nguyenhang@gmail.com</td>
                <td>Nguyễn thị hằng</td>
                <td>Hà Nội</td>
                <td>Đã mở</td>
                <td>10.000.000 VNĐ</td>
                <td>01/01/2020</td>
              </tr>
              <tr>
                <td>133</td>
                <td class="number">nguyenhang@gmail.com</td>
                <td>Nguyễn thị hằng</td>
                <td>Hà Nội</td>
                <td>Đã mở</td>
                <td>10.000.000 VNĐ</td>
                <td>01/01/2020</td>
              </tr>
              <tr>
                <td>133</td>
                <td class="number">nguyenhang@gmail.com</td>
                <td>Nguyễn thị hằng</td>
                <td>Hà Nội</td>
                <td>Đã mở</td>
                <td>10.000.000 VNĐ</td>
                <td>01/01/2020</td>
              </tr>
              <tr>
                <td>133</td>
                <td class="number">nguyenhang@gmail.com</td>
                <td>Nguyễn thị hằng</td>
                <td>Hà Nội</td>
                <td>Đã mở</td>
                <td>10.000.000 VNĐ</td>
                <td>01/01/2020</td>
              </tr>
              <tr>
                <td>133</td>
                <td class="number">nguyenhang@gmail.com</td>
                <td>Nguyễn thị hằng</td>
                <td>Hà Nội</td>
                <td>Đã mở</td>
                <td>10.000.000 VNĐ</td>
                <td>01/01/2020</td>
              </tr>
              <tr>
                <td>133</td>
                <td class="number">nguyenhang@gmail.com</td>
                <td>Nguyễn thị hằng</td>
                <td>Hà Nội</td>
                <td>Đã mở</td>
                <td>10.000.000 VNĐ</td>
                <td>01/01/2020</td>
              </tr>
            </tbody>
          </table>
        </div>
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
      tab: 'create'
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