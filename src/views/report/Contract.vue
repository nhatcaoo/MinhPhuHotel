<template>
  <div class="main-page">
    <div class="page-heading">
      <div class="page-filter searchPage">
        <form>
          <div class="searchBox">
            <select class="search-box-select filter selectpicker">
              <option>Hình thức đăng kí</option>
              <option>đăng kí hộ</option>
              <option>Dăng kí chính chủ</option>
            </select> 
            <select class="search-box-select filter selectpicker">
              <option>áp dụng doanh số</option>
              <option>bán lẻ</option>
              <option>Hệ thống</option>
            </select>
            <el-date-picker
              v-model="date"
              type="daterange"
              prefix-icon = "none"
              format="dd/MM/yyyy"
              start-placeholder="Ngày tháng" >
            </el-date-picker>
            <select class="search-box-select filter selectpicker">
              <option>Trạng thái</option>
              <option>Bị dừng </option>
              <option>Đang hoạt động</option>
              <option>Chờ hoạt động</option>
            </select>
          </div>
          <div class="number-box">
            <div class="total">
              <div>
                <span>Tổng số gói</span>
                <span class="number">1815</span>
              </div>
              <div>
                <span>Tổng số điểm</span>
                <span class="number">1,560,647,212</span>
              </div>
              <div>
                <span>Tổng số tiền</span>
                <span class="number">1,560,647,212</span>
              </div>
            </div>
            <div class="buttonSearch">
              <div class="search-box filter">
                <input type="search" placeholder="username, số hợp đồng ">
                <button><img src="/images/loupe.svg" alt="Search"></button>
              </div>
              <button class="btn-search filter btn btn-export">
                <span>tải xuống bản excel</span>
                <img src="/images/download-to-storage-drive.svg" alt="Add">
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="listCourse">
      <div class="table tableNonLife">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tài khoản</th>
              <th>Chi phí</th>
              <th>Ngày tạo</th>
              <th>Ngày tính</th>
              <th>Thông tin hợp đồng</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <div class="borderTable"></div>
          <tbody>
            <tr>
              <td>2026</td>
              <td> 
                nhancachviet
                <br>
                <span class="number">giaoducnhancach@gmail.com</span>
              </td>
              <td> 
                <div>
                  <span>phí chính</span>
                  <span>10.000.000</span>
                </div>
                <div>
                  <span>phí phụ</span>
                  <span>1.000.000</span>
                </div>
              </td>
              <td>00:00:00 <br> 22-02-2020</td>
              <td>00:00:00 <br> 22-02-2020</td>
              <td> 
                <div>
                  <span>Thực giá</span>
                  <span>6,020,000đ</span>
                </div>
                <div>
                  <span>Mã HĐ</span>
                  <span>TMP1599210437</span>
                </div>
                <div>
                  <span>Điểm</span>
                  <span>210 BV</span>
                </div>
                <div>
                  <span>Bán lẻ</span>
                  <span>Không</span>
                </div>
                <div>
                  <span>Loại HĐ</span>
                  <span>ĐK hộ </span>
                </div>
              </td>
              <td>Bị dừng</td>
              <td>
                <a href="#" class="btn">Chỉnh sửa</a>
                <a href="#" class="btn btn-save">Lưu</a>   
              </td>
            </tr>
            <tr>
              <td>2026</td>
              <td> 
                nhancachviet
                <br>
                <span class="number">giaoducnhancach@gmail.com</span>
              </td>
              <td> 
                <div>
                  <span>phí chính</span>
                  <span>10.000.000</span>
                </div>
                <div>
                  <span>phí phụ</span>
                  <span>1.000.000</span>
                </div>
              </td>
              <td>00:00:00 <br> 22-02-2020</td>
              <td>00:00:00 <br> 22-02-2020</td>
              <td> 
                <div>
                  <span>Thực giá</span>
                  <span>6,020,000đ</span>
                </div>
                <div>
                  <span>Mã HĐ</span>
                  <span>TMP1599210437</span>
                </div>
                <div>
                  <span>Điểm</span>
                  <span>210 BV</span>
                </div>
                <div>
                  <span>Bán lẻ</span>
                  <span>Không</span>
                </div>
                <div>
                  <span>Loại HĐ</span>
                  <span>ĐK hộ </span>
                </div>
              </td>
              <td>Bị dừng</td>
              <td>
                <a href="#" class="btn">Chỉnh sửa</a>
                <a href="#" class="btn btn-save">Lưu</a>   
              </td>
            </tr>
            <tr>
              <td>2026</td>
              <td> 
                nhancachviet
                <br>
                <span class="number">giaoducnhancach@gmail.com</span>
              </td>
              <td> 
                <div>
                  <span>phí chính</span>
                  <span>10.000.000</span>
                </div>
                <div>
                  <span>phí phụ</span>
                  <span>1.000.000</span>
                </div>
              </td>
              <td>00:00:00 <br> 22-02-2020</td>
              <td>00:00:00 <br> 22-02-2020</td>
              <td> 
                <div>
                  <span>Thực giá</span>
                  <span>6,020,000đ</span>
                </div>
                <div>
                  <span>Mã HĐ</span>
                  <span>TMP1599210437</span>
                </div>
                <div>
                  <span>Điểm</span>
                  <span>210 BV</span>
                </div>
                <div>
                  <span>Bán lẻ</span>
                  <span>Không</span>
                </div>
                <div>
                  <span>Loại HĐ</span>
                  <span>ĐK hộ </span>
                </div>
              </td>
              <td>Bị dừng</td>
              <td>
                <a href="#" class="btn">Chỉnh sửa</a>
                <a href="#" class="btn btn-save">Lưu</a>   
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
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'login',
  components: {
    Datepicker
  },
  data() {
    return {
      date: ''
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