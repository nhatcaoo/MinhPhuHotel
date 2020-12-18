<template>
  <div class="main-page">
    <div class="main-tabs">
      <div class="tabs tabs-new text-uppercase d-flex">
        <a
          href="#"
          :class="{ active: tab === 'member' }"
          @click.prevent="tab = 'member'"
          >Thành viên</a
        >
        <a
          href="#"
          :class="{ active: tab === 'contract' }"
          @click.prevent="tab = 'contract'"
          >Hợp đồng</a
        >
        <a
          href="#"
          :class="{ active: tab === 'appellation' }"
          @click.prevent="tab = 'appellation'"
          >Danh hiệu</a
        >
        <a
          href="#"
          :class="{ active: tab === 'temporary-sales' }"
          @click.prevent="tab = 'temporary-sales'"
          >Doanh số tạm tính</a
        >
        <a
          href="#"
          :class="{ active: tab === 'commissions' }"
          @click.prevent="tab = 'commissions'"
          >Hoa hồng</a
        >
        <a
          href="#"
          :class="{ active: tab === 'withdraw' }"
          @click.prevent="tab = 'withdraw'"
          >Lệnh rút tiền</a
        >
      </div>
      <div
        class="classic-table table-content"
        v-if="tab === 'member'"
        >
         <div class="d-flex">
           <ul class="main-table-left flex-1 main-table-item">
             <li class="flex-xleft">
               <p class="text flex-1">Tổng số thành viên trong hệ thống:</p>
               <span class="color-primary flex-1">1223</span>
             </li>
             <li class="flex-xleft">
               <p class="text flex-1">Thành viên mới đăng kí trong ngày:</p>
               <span class="color-primary flex-1">1223</span>
             </li>
             <li class="flex-xleft">
               <p class="text flex-1">Thành viên mới đăng kí trong tuần:</p>
               <span class="color-primary flex-1">1223</span>
             </li>
             <li class="flex-xleft">
               <p class="text flex-1">Thành viên mới đăng kí trong tháng:</p>
               <span class="color-primary flex-1">1223</span>
             </li>
           </ul>
           <ul class="main-table-right flex-1 main-table-item">
             <li class="flex-xleft">
               <p class="text flex-1">Số thành viên đã xác nhận KYC:</p>
               <span class="color-primary flex-1">1223</span>
             </li>
             <li class="flex-xleft">
               <p class="text flex-1">Số thành viên đang chờ xác nhận KYC:</p>
               <span class="color-primary flex-1">1223</span>
             </li>
             <li class="flex-xleft">
               <p class="text flex-1">Số thành viên chưa gửi form xác nhận:</p>
               <span class="color-primary flex-1">1223</span>
             </li>
           </ul>
         </div>
      </div>
      <div
        class="classic-table table-content"
        v-else-if="tab === 'contract'"
      >
        <div class="d-flex color-white">
          <ul class="main-table-left flex-1 main-table-item">
            <li class="flex-xleft">
              <p class="text flex-1">Số HD vào trong ngày hôm nay:</p>
              <span class="color-primary flex-1">1223</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Tổng số gói đã kích hoạt:</p>
              <span class="color-primary flex-1">1223</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Số gói kích hoạt trong tháng:</p>
              <span class="color-primary flex-1">1223</span>
            </li>
          </ul>
          <ul class="main-table-right flex-1 main-table-item">
            <li class="flex-xleft">
              <p class="text flex-1">Số gói đã hủy:</p>
              <span class="color-primary flex-1">1223</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Số gói đang chờ duyệt (21 ngày):</p>
              <span class="color-primary flex-1">1223</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Số gói đã duyệt chính thức:</p>
              <span class="color-primary flex-1">1223</span>
            </li>
          </ul>
         </div>
      </div>
      <div
        class="classic-table table-content"
        v-else-if="tab === 'appellation'"
      >
        <div class="d-flex color-white">
          <ul class="main-table-left flex-1 main-table-item">
            <li class="flex-xleft">
              <p class="text flex-1">Cộng tác viên:</p>
              <span class="color-primary flex-1">12293</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Chuyên viên kinh doanh (CA):</p>
              <span class="color-primary flex-1">122</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Trường nhóm (SM): </p>
              <span class="color-primary flex-1">23</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">P Kinh doanh (DM): </p>
              <span class="color-primary flex-1">2</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">T.p Kinh doanh (BM):: </p>
              <span class="color-primary flex-1">13</span>
            </li>
          </ul>
          <ul class="main-table-right flex-1 main-table-item">
            <li class="flex-xleft">
              <p class="text flex-1">P. Giám đốc (DD):</p>
              <span class="color-primary flex-1">1</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Giám đốc (DI):</p>
              <span class="color-primary flex-1">0</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Giám đốc khu vực (RD):</p>
              <span class="color-primary flex-1">0</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Giám đốc Miền (CD):</p>
              <span class="color-primary flex-1">0</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Chủ tịch bàn tròn triệu phú (MC):</p>
              <span class="color-primary flex-1">0</span>
            </li>
          </ul>
         </div>
      </div>
      <div
        class="classic-table table-content"
        v-else-if="tab === 'temporary-sales'"
      >
        <div class="d-flex color-white">
          <ul class="main-table-left flex-1 main-table-item">
            <li class="flex-xleft">
              <p class="text flex-1">Tổng số thưởng tuyển dụng:</p>
              <span class="color-primary flex-1">1223BV</span>
            </li>
          </ul>
          <ul class="main-table-right flex-1 main-table-item">
            <li class="flex-xleft">
              <p class="text flex-1">Tổng thưởng bán lẽ:</p>
              <span class="color-primary flex-1">0BV</span>
            </li>
          </ul>
         </div>
      </div>
      <div
        class="classic-table table-content"
        v-else-if="tab === 'commissions'"
      >
        <div class="d-flex color-white">
          <ul class="main-table-left flex-1 main-table-item">
            <li class="flex-xleft">
              <p class="text flex-1">Hoa hồng chào mừng :</p>
              <span class="color-primary flex-1">212,773</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Hoa hồng tuyển dụng:</p>
              <span class="color-primary flex-1">123</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Hoa hồng thu nhập tuyến dưới:</p>
              <span class="color-primary flex-1">64,325</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Hoa hồng danh hiệu:</p>
              <span class="color-primary flex-1">145666</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Hoa hồng đồng chia:</p>
              <span class="color-primary flex-1">122356</span>
            </li>
          </ul>
          <ul class="main-table-right flex-1 main-table-item">
            <li class="flex-xleft">
              <p class="text flex-1">Hoa hồng Besthome:</p>
              <span class="color-primary flex-1">100,777</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Hoa hồng tương trợ:</p>
              <span class="color-primary flex-1">2,732</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Hoa hồng bán lẻ:</p>
              <span class="color-primary flex-1">2435657</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Hoa hồng phi nhân thọ:</p>
              <span class="color-primary flex-1">465768</span>
            </li>
          </ul>
         </div>
      </div>
      <div
        class="classic-table table-content"
        v-else-if="tab === 'withdraw'"
      >
        <div class="d-flex color-white">
          <ul class="main-table-left flex-1 main-table-item">
            <li class="flex-xleft">
              <p class="text flex-1">Tổng số dư BV của các thành viên:</p>
              <span class="color-primary flex-1">12299093</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Tổng số BV đã thanh toán:</p>
              <span class="color-primary flex-1">1223</span>
            </li>
          </ul>
          <ul class="main-table-right flex-1 main-table-item">
            <li class="flex-xleft">
              <p class="text flex-1">Tổng số BV chờ thanh toán:</p>
              <span class="color-primary flex-1">23</span>
            </li>
            <li class="flex-xleft">
              <p class="text flex-1">Tổng số BV đã hủy lệnh:</p>
              <span class="color-primary flex-1">923</span>
            </li>
          </ul>
         </div>
      </div>
    </div>
    <div class="box-bottom-page d-flex">
      <div class="box-note flex-1">
        <div class="box-note-lable top-box d-flex">
          <h6 class="text-uppercase">GHI CHÚ</h6>
          <button class="btn-transparent btn-radius border-primary text-uppercase">Lưu</button>
        </div>
        <textarea rows="4" cols="50" class="note-content content" placeholder="Thêm ghi chú.."></textarea>
      </div>
      <div class="table-bottom flex-2">
        <div class="top-box d-flex">
          <h6 class="text-uppercase">khách hàng có sinh nhật</h6>
          <div class="box-pagination">
            <el-pagination
              background
              layout="prev, next"
              :page-size="10"
              :current-page="1"
              :total="20">
            </el-pagination>
          </div>
        </div>
        <table class="content table-content">
          <thead class="table-content-title">
            <tr class="text-uppercase">
              <td>Họ & tên</td>
              <td>Số CMT</td>
              <td>Số ĐT</td>
              <td>Ngày sinh</td>
              <td>Địa chỉ</td>
              <td>THAO TÁC</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trần Thu Hương</td>
              <td>Trần Thu Hương</td>
              <td>Trần Thu Hương</td>
              <td>Trần Thu Hương</td>
              <td>Trần Thu Hương</td>
              <td><button class="action-on-table btn-bg-primary btn-radius">Gửi email</button></td>
            </tr>
            <tr>
              <td>Trần Thu Hương</td>
              <td>Trần Thu Hương</td>
              <td>Trần Thu Hương</td>
              <td>Trần Thu Hương</td>
              <td>Trần Thu Hương</td>
              <td><button class="action-on-table btn-bg-primary btn-radius">Gửi email</button></td>
            </tr>
            <tr>
              <td>Trần Thu Hương</td>
              <td>Trần Thu Hương</td>
              <td>Trần Thu Hương</td>
              <td>Trần Thu Hương</td>
              <td>Trần Thu Hương</td>
              <td><button class="action-on-table btn-bg-primary btn-radius">Gửi email</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      tab: 'member'
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
