<template>
  <div class="main-page nonLifePage">
    <div class="page-heading">
      <div class="page-filter searchPage">
        <form>
          <div class="searchBox">
            <select class="search-box-select filter selectpicker">
              <option>Trạng thái</option>
              <option>Bị hủy</option>
              <option>đã trả</option>
              <option>Chờ thanh toán </option>
            </select> 
            <select class="search-box-select filter selectpicker">
              <option>Loại thưởng</option>
              <option>Thưởng danh sách bán lẻ</option>
              <option>Thưởng tuyển dụng</option>
            </select> 
            <el-date-picker
              v-model="date"
              type="daterange"
              prefix-icon = "none"
              format="dd/MM/yyyy"
              start-placeholder="Ngày tháng" >
            </el-date-picker>
            <div class="search-box filter">
              <input type="search" placeholder="username, số hợp đồng ">
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
              <th>TÀi khoản nhận</th>
              <th>Thông tin ngày</th>
              <th>Hợp đồng</th>
              <th>Hành động</th>
              <th>Trạng thái</th>
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
                nhancachviet
                <br>
                <span class="number">giaoducnhancach@gmail.com</span>
              </td>
              <td> 
                <div>
                  <span>Ngày tạo</span>
                  <span>02-09-2020</span>
                </div>
                <div>
                  <span>Ngày tính</span>
                  <span>02-09-2020</span>
                </div>
              </td>
              <td>
                <div>
                  <span>Số HĐ</span>
                  <span>YM123456790</span>
                </div>
                <div>
                  <span>Số tiền</span>
                  <span>8,500,000</span>
                </div>
              </td>
              <td>Thưởng tuyển dụng <br>Gói: 2026</td>
              <td>Bị Hủy</td>
            </tr>
            <tr>
              <td>2026</td>
              <td> 
                nhancachviet
                <br>
                <span class="number">giaoducnhancach@gmail.com</span>
              </td>
              <td> 
                nhancachviet
                <br>
                <span class="number">giaoducnhancach@gmail.com</span>
              </td>
              <td> 
                <div>
                  <span>Ngày tạo</span>
                  <span>02-09-2020</span>
                </div>
                <div>
                  <span>Ngày tính</span>
                  <span>02-09-2020</span>
                </div>
              </td>
              <td>
                <div>
                  <span>Số HĐ</span>
                  <span>YM123456790</span>
                </div>
                <div>
                  <span>Số tiền</span>
                  <span>8,500,000</span>
                </div>
              </td>
              <td>Thưởng tuyển dụng <br>Gói: 2026</td>
              <td>Bị Hủy</td>
            </tr>
            <tr>
              <td>2026</td>
              <td> 
                nhancachviet
                <br>
                <span class="number">giaoducnhancach@gmail.com</span>
              </td>
              <td> 
                nhancachviet
                <br>
                <span class="number">giaoducnhancach@gmail.com</span>
              </td>
              <td> 
                <div>
                  <span>Ngày tạo</span>
                  <span>02-09-2020</span>
                </div>
                <div>
                  <span>Ngày tính</span>
                  <span>02-09-2020</span>
                </div>
              </td>
              <td>
                <div>
                  <span>Số HĐ</span>
                  <span>YM123456790</span>
                </div>
                <div>
                  <span>Số tiền</span>
                  <span>8,500,000</span>
                </div>
              </td>
              <td>Thưởng tuyển dụng <br>Gói: 2026</td>
              <td>Bị Hủy</td>
            </tr>
            <tr>
              <td>2026</td>
              <td> 
                nhancachviet
                <br>
                <span class="number">giaoducnhancach@gmail.com</span>
              </td>
              <td> 
                nhancachviet
                <br>
                <span class="number">giaoducnhancach@gmail.com</span>
              </td>
              <td> 
                <div>
                  <span>Ngày tạo</span>
                  <span>02-09-2020</span>
                </div>
                <div>
                  <span>Ngày tính</span>
                  <span>02-09-2020</span>
                </div>
              </td>
              <td>
                <div>
                  <span>Số HĐ</span>
                  <span>YM123456790</span>
                </div>
                <div>
                  <span>Số tiền</span>
                  <span>8,500,000</span>
                </div>
              </td>
              <td>Thưởng tuyển dụng <br>Gói: 2026</td>
              <td>Bị Hủy</td>
            </tr>
            <tr>
              <td>2026</td>
              <td> 
                nhancachviet
                <br>
                <span class="number">giaoducnhancach@gmail.com</span>
              </td>
              <td> 
                nhancachviet
                <br>
                <span class="number">giaoducnhancach@gmail.com</span>
              </td>
              <td> 
                <div>
                  <span>Ngày tạo</span>
                  <span>02-09-2020</span>
                </div>
                <div>
                  <span>Ngày tính</span>
                  <span>02-09-2020</span>
                </div>
              </td>
              <td>
                <div>
                  <span>Số HĐ</span>
                  <span>YM123456790</span>
                </div>
                <div>
                  <span>Số tiền</span>
                  <span>8,500,000</span>
                </div>
              </td>
              <td>Thưởng tuyển dụng <br>Gói: 2026</td>
              <td>Bị Hủy</td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="box-pagination">
        <div class="btn-footer">
          <button class="btn-search filter btn">
            <span>tải xuống bản excel</span>
            <img src="/images/download-to-storage-drive.svg" alt="Add">
          </button>
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