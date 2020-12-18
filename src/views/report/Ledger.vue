<template>
  <div class="main-page listReportNonLife ledger">
    <div class="page-heading searchBox">
      <button class="btn-search filter btn btn-export btn-export-top">
        <span>tải xuống bản excel</span>
        <img src="/images/download-to-storage-drive.svg" alt="Add">
      </button>
      <div class="page-filter searchPage">
        <form>
          <div class="searchBox">
            <select class="search-box-select filter selectpicker">
              <option>Chọn loại giao dịch</option>
              <option>HH Chào mừng</option>
              <option>HH tuyển dụng</option>
              <option>HH Thu nhập tuyến dưới</option>
              <option>HH Danh hiệu</option>
              <option>HH Đồng chia</option>
              <option>HH Besthome</option>
              <option>HH tương trợ</option>
              <option>HH bán lẻ</option>
            </select>
            <el-date-picker
              v-model="date"
              type="daterange"
              prefix-icon = "none"
              format="dd/MM/yyyy"
              start-placeholder="Ngày tháng" >
            </el-date-picker>
            <div class="search-box filter">
              <input type="search" placeholder="Username, số hợp đồng">
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
              <th>Tài khoản</th>
              <th>Hợp đồng nhận</th>
              <th>Số tiền</th>
              <th>Số dư</th>
              <th>Ngày tạo</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <div class="borderTable"></div>
          <tbody>
            <tr>
              <td>2026</td>
              <td>nhancachviet <br> <span class="number">giaoducnhancach@gmail.com</span></td>
              <td>YB12345678</td>
              <td>123456 VNĐ</td>
              <td>
                <div>
                  <span>Trước</span>
                  <span>36,1234</span>
                </div>
                <div>
                  <span>Sau</span>
                  <span>36,2343</span>
                </div>
              </td>
              <td>00:00:00<br> 22-09-2020</td>
              <td>Thưởng HHBH phi nhân thọ</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>nhancachviet <br> <span class="number">giaoducnhancach@gmail.com</span></td>
              <td>YB12345678</td>
              <td>123456 VNĐ</td>
              <td>
                <div>
                  <span>Trước</span>
                  <span>36,1234</span>
                </div>
                <div>
                  <span>Sau</span>
                  <span>36,2343</span>
                </div>
              </td>
              <td>00:00:00<br> 22-09-2020</td>
              <td>Thưởng HHBH phi nhân thọ</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>nhancachviet <br> <span class="number">giaoducnhancach@gmail.com</span></td>
              <td>YB12345678</td>
              <td>123456 VNĐ</td>
              <td>
                <div>
                  <span>Trước</span>
                  <span>36,1234</span>
                </div>
                <div>
                  <span>Sau</span>
                  <span>36,2343</span>
                </div>
              </td>
              <td>00:00:00<br> 22-09-2020</td>
              <td>Thưởng HHBH phi nhân thọ</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>nhancachviet <br> <span class="number">giaoducnhancach@gmail.com</span></td>
              <td>YB12345678</td>
              <td>123456 VNĐ</td>
              <td>
                <div>
                  <span>Trước</span>
                  <span>36,1234</span>
                </div>
                <div>
                  <span>Sau</span>
                  <span>36,2343</span>
                </div>
              </td>
              <td>00:00:00<br> 22-09-2020</td>
              <td>Thưởng HHBH phi nhân thọ</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>nhancachviet <br> <span class="number">giaoducnhancach@gmail.com</span></td>
              <td>YB12345678</td>
              <td>123456 VNĐ</td>
              <td>
                <div>
                  <span>Trước</span>
                  <span>36,1234</span>
                </div>
                <div>
                  <span>Sau</span>
                  <span>36,2343</span>
                </div>
              </td>
              <td>00:00:00<br> 22-09-2020</td>
              <td>Thưởng HHBH phi nhân thọ</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>nhancachviet <br> <span class="number">giaoducnhancach@gmail.com</span></td>
              <td>YB12345678</td>
              <td>123456 VNĐ</td>
              <td>
                <div>
                  <span>Trước</span>
                  <span>36,1234</span>
                </div>
                <div>
                  <span>Sau</span>
                  <span>36,2343</span>
                </div>
              </td>
              <td>00:00:00<br> 22-09-2020</td>
              <td>Thưởng HHBH phi nhân thọ</td>
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