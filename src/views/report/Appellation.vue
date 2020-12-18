<template>
  <div class="main-page productPage reportPartner">
    <div class="page-filter">
        <form>
          <div class="searchBox">
            <select class="search-box-select filter selectpicker">
              <option>Chọn cấp bặc</option>
              <option>Chuyên viên kinh doanh</option>
              <option>Trưởng nhóm</option>
              <option>Phó phòng kinh doanh</option>
              <option>Trưởng phòng kinh doanh</option>
              <option>phó giám đốc</option>
              <option>giám đốc</option>
              <option>giám đốc khu vực</option>
            </select>
            <div class="search-box filter">
              <input type="search" placeholder="Username">
              <button><img src="/images/loupe.svg" alt="Search"></button>
            </div>
          </div>
        </form>
      </div>
    <div class="page-content">
      <div class="tabs">
        <a href="#" :class="{'active': tab === 'life'}" @click.prevent="tab = 'life'">Danh hiệu</a>
        <a href="#" :class="{'active': tab === 'non-life'}" @click.prevent="tab = 'non-life'">Hoa hồng đồng chia</a>
      </div>
      <div class="classic-table equals listCourse" v-if="tab === 'life'">
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Thông tin</th>
                <th>Cấp bậc</th>
                <th>Số dư</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>47884</td>
                <td>
                  <div>
                    <span>vuthinu</span>
                    <span class="number">(vuthinubs95@gmail.com)</span>
                  </div>
                  <div>
                    <span>Họ tên</span>
                    <span> Vũ thị Nụ</span>
                  </div>
                  <div>
                    <span>Ngày tạo</span>
                    <span> 09-25-2020 15:08:04</span>
                  </div>
                  <div>
                    <span>Lần đăng nhập cuối cùng</span>
                    <span> 09-25-2020 15:08:04</span>
                  </div>
                  <div>
                    <span>Người giới thiệu</span>
                    <span class="number"> lelien (lelien25260112@gmail.com)</span>
                  </div>
                </td>
                <td>Thành viên</td>
                <td>200.000 VND</td>
              </tr>
              <tr>
                <td>47884</td>
                <td>
                  <div>
                    <span>vuthinu</span>
                    <span class="number">(vuthinubs95@gmail.com)</span>
                  </div>
                  <div>
                    <span>Họ tên</span>
                    <span> Vũ thị Nụ</span>
                  </div>
                  <div>
                    <span>Ngày tạo</span>
                    <span> 09-25-2020 15:08:04</span>
                  </div>
                  <div>
                    <span>Lần đăng nhập cuối cùng</span>
                    <span> 09-25-2020 15:08:04</span>
                  </div>
                  <div>
                    <span>Người giới thiệu</span>
                    <span class="number"> lelien (lelien25260112@gmail.com)</span>
                  </div>
                </td>
                <td>Thành viên</td>
                <td>200.000 VND</td>
              </tr>
              <tr>
                <td>47884</td>
                <td>
                  <div>
                    <span>vuthinu</span>
                    <span class="number">(vuthinubs95@gmail.com)</span>
                  </div>
                  <div>
                    <span>Họ tên</span>
                    <span> Vũ thị Nụ</span>
                  </div>
                  <div>
                    <span>Ngày tạo</span>
                    <span> 09-25-2020 15:08:04</span>
                  </div>
                  <div>
                    <span>Lần đăng nhập cuối cùng</span>
                    <span> 09-25-2020 15:08:04</span>
                  </div>
                  <div>
                    <span>Người giới thiệu</span>
                    <span class="number"> lelien (lelien25260112@gmail.com)</span>
                  </div>
                </td>
                <td>Thành viên</td>
                <td>200.000 VND</td>
              </tr>
              <tr>
                <td>47884</td>
                <td>
                  <div>
                    <span>vuthinu</span>
                    <span class="number">(vuthinubs95@gmail.com)</span>
                  </div>
                  <div>
                    <span>Họ tên</span>
                    <span> Vũ thị Nụ</span>
                  </div>
                  <div>
                    <span>Ngày tạo</span>
                    <span> 09-25-2020 15:08:04</span>
                  </div>
                  <div>
                    <span>Lần đăng nhập cuối cùng</span>
                    <span> 09-25-2020 15:08:04</span>
                  </div>
                  <div>
                    <span>Người giới thiệu</span>
                    <span class="number"> lelien (lelien25260112@gmail.com)</span>
                  </div>
                </td>
                <td>Thành viên</td>
                <td>200.000 VND</td>
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
      <div class="classic-table equals listCourse" v-if="tab === 'non-life'">
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>DS tổng trong tháng</th>
                <th>Các danh hiệu</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100.000.000.000</td>
                <td>chuyên viên 3</td>
                <td>
                  <a class="btn"> Trả thưởng</a>
                </td>
              </tr>
              <tr>
                <td>100.000.000.000</td>
                <td>chuyên viên 3</td>
                <td>
                  <a class="btn"> Trả thưởng</a>
                </td>
              </tr>
              <tr>
                <td>100.000.000.000</td>
                <td>chuyên viên 3</td>
                <td>
                  <a class="btn"> Trả thưởng</a>
                </td>
              </tr>
              <tr>
                <td>100.000.000.000</td>
                <td>chuyên viên 3</td>
                <td>
                  <a class="btn"> Trả thưởng</a>
                </td>
              </tr>
              <tr>
                <td>100.000.000.000</td>
                <td>chuyên viên 3</td>
                <td>
                  <a class="btn"> Trả thưởng</a>
                </td>
              </tr>
              <tr>
                <td>100.000.000.000</td>
                <td>chuyên viên 3</td>
                <td>
                  <a class="btn"> Trả thưởng</a>
                </td>
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
      tab: 'life'
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