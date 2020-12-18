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
      <input type="text" placeholder="Số hợp đồng">
      <input type="text" placeholder="Tên - ID - Username">
      <button class="btn-search">Tìm kiếm</button>
    </div>
    <div class="page-content">
      <div class="tabs">
        <a href="#" :class="{'active': tab === 'pay'}" @click.prevent="tab = 'pay'">Trả thưởng</a>
        <a href="#" :class="{'active': tab === 'contract'}" @click.prevent="tab = 'contract'">Hợp đồng</a>
      </div>
      <dl class="classic-table equals" v-if="tab === 'contract'">
        <dt>
          <div>Loại ví</div>
          <div>Khách hàng</div>
          <div>Hợp đồng</div>
          <div>Thời gian</div>
          <div>Phí bảo hiểm</div>
          <div>Thao tác</div>
        </dt>
        <dd>
          <div>Main</div>
          <div>Nguyễn Thị Thực</div>
          <div>
            <div class="flex-box">
              <span>Số HĐ:</span>
              <span>B12345678</span>
            </div>
            <div class="flex-box">
              <span>Số YC:</span>
              <span>1M123456</span>
            </div>
            <div class="flex-box">
              <span>Đại lý:</span>
              <span>Lê Thị Loan</span>
            </div>
            <div class="flex-box">
              <span>Người tạo:</span>
              <span>Đặng Thị Mỹ Duyên</span>
            </div>
          </div>
          <div>
            <div class="flex-box"><span>Ngày nộp hồ sơ:</span> 23/9/2020</div>
            <div class="flex-box"><span>Ngày chuyển:</span> 23/9/2020</div>
            <div class="flex-box"><span>Ngày phát hành:</span> 23/9/2020</div>
            <div class="flex-box"><span>Ngày bàn giao ACK:</span> 23/9/2020</div>
          </div>
          <div>12,140,000 VNĐ</div>
          <div>
            <a class="action approve">Phê duyệt</a>
            <a class="action reject">Từ chối</a>
          </div>
        </dd>
      </dl>
      <div class="box-pagination" v-if="tab === 'contract'">
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
      tab: 'contract'
    }
  }
}
</script>