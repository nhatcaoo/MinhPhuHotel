<template>
  <div class="main-page productPage reportPartner">
    <div class="page-filter searchPage">
      <form>
        <div class="searchBox">
          <select class="search-box-select filter selectpicker">
            <option>Trạng thái</option>
            <option>HĐ phát sinh</option>
            <option>HĐ qua 21 ngày</option>
            <option>HĐ đang xử lý</option>
          </select> 
          <select class="search-box-select filter selectpicker">
            <option>Đối tác</option>
            <option>cathay</option>
            <option>fubon</option>
            <option>gen</option>
            <option>daiichi</option>
            <option>Phú Hưng</option>
            <option>Khác</option>
          </select> 
          <el-date-picker
            v-model="date"
            type="daterange"
            prefix-icon = "none"
            format="dd/MM/yyyy"
            start-placeholder="Ngày tháng" >
          </el-date-picker>
          <button class="btn-search filter btn"><span>Tìm kiếm</span><img src=" /images/loupe.svg" alt="Add"></button>
        </div>
      </form>
    </div>
    <div class="page-content">
      <div class="tabs">
        <a href="#" :class="{'active': tab === 'life'}" @click.prevent="tab = 'life'">Nhân thọ</a>
        <a href="#" :class="{'active': tab === 'non-life'}" @click.prevent="tab = 'non-life'">Phi nhân thọ</a>
      </div>
      <div class="classic-table equals listCourse" v-if="tab === 'life'">
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>Trạng Thái</th>
                <th>Đối tác</th>
                <th>Số lượng</th>
                <th>Tổng Phí</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HĐ phát sinh</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>HĐ phát sinh</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>HĐ phát sinh</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>HĐ phát sinh</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>HĐ phát sinh</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>HĐ phát sinh</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>HĐ phát sinh</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>HĐ phát sinh</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
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
                <th>Tên sản phẩm</th>
                <th>Đối tác</th>
                <th>Số lượng</th>
                <th>Tổng Phí</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VIB sức khỏe</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>VIB sức khỏe</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>VIB sức khỏe</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>VIB sức khỏe</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>VIB sức khỏe</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>VIB sức khỏe</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>VIB sức khỏe</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
              </tr>
              <tr>
                <td>VIB sức khỏe</td>
                <td>cathay</td>
                <td>10</td>
                <td>100.00.00 VND</td>
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