<template>
  <div class="main-content main-content-exchange">
    <div class="page-filter">
      <el-date-picker
        v-model="date"
        type="daterange"
        prefix-icon = "none"
        format="dd/MM/yyyy"
        start-placeholder="Start Date"
        end-placeholder="End Date">
      </el-date-picker>
      <select name="">
        <option value="">Online</option>
        <option value="">Offline</option>
      </select>
      <button class="btn-search">Tìm kiếm</button>
    </div>
    <div class="page-content">
      <div class="tabs">
        <a href="#" :class="{'active': tab === 'pay'}" @click.prevent="tab = 'pay'">Trả thưởng</a>
        <a href="#" :class="{'active': tab === 'contract'}" @click.prevent="tab = 'contract'">Hợp đồng</a>
      </div>
      <dl class="classic-table equals" v-if="tab === 'pay'">
        <dt>
          <div>Loại ví</div>
          <div>Tài khoản</div>
          <div>Ngân hàng</div>
          <div>Số lượng</div>
          <div>Ngày tạo</div>
          <div>Trạng thái</div>
          <div>Thao tác</div>
        </dt>
        <dd>
          <div>Main</div>
          <div>
            <p>User ID: 1004</p>
            <p>Username: 1004</p>
            <p>Họ và tên: Nguyễn Văn Luân</p>
            <p>Số dư: 0,05</p>
          </div>
          <div>
            <p>Tên NH: Vietcombank</p>
            <p>Số TK: 0071000897141</p>
            <p>Chi nhánh: Hà Nội</p>
          </div>
          <div>10 * 23000 = 230.000 VNĐ</div>
          <div>23/9/2020</div>
          <div>
            <div class="status">Pending</div>
          </div>
          <div>
            <a class="action approve">Phê duyệt</a>
            <a class="action reject">Từ chối</a>
          </div>
        </dd>
        <dd>
          <div>Main</div>
          <div>
            <p>User ID: 1004</p>
            <p>Username: 1004</p>
            <p>Họ và tên: Nguyễn Văn Luân</p>
            <p>Số dư: 0,05</p>
          </div>
          <div>
            <p>Tên NH: Vietcombank</p>
            <p>Số TK: 0071000897141</p>
            <p>Chi nhánh: Hà Nội</p>
          </div>
          <div>10 * 23000 = 230.000 VNĐ</div>
          <div>23/9/2020</div>
          <div>
            <div class="status">Pending</div>
          </div>
          <div>
            <a class="action approve">Phê duyệt</a>
            <a class="action reject">Từ chối</a>
          </div>
        </dd>
      </dl>
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
  data () {
    return {
      date: '',
      tab: 'pay'
    }
  }
}
</script>