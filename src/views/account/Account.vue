<template>
  <div>
    <div class="main-page">
      <div class="box-top-page d-flex flex-ycenter">
        <h4 class="title-page text-uppercase">Tổng số tài khoản: 7172</h4>
        <div class="d-flex">
          <div class="box-search">
            <input type="text" placeholder="Nhập tên hoặc Email, CMND">
            <img src="/images/icons/search.svg" alt="">
          </div>
          <div class="box-download" v-if="tab === 'account'">
            <button class="btn">TẢI XUỐNG BẢN EXCEL<img src="/images/icons/download.svg" alt=""></button>
          </div>
        </div>
      </div>
      <div class="main-tabs">
        <div class="tabs tabs-new ">
          <a
            href="#"
            :class="{ active: tab === 'account' }"
            @click.prevent="tab = 'account'"
            >TÀI KHOẢN USER</a
          >
          <a
            href="#"
            :class="{ active: tab === 'verifile' }"
            @click.prevent="tab = 'verifile'"
            >XÁC MINH KYC</a
          >
          <a
            href="#"
            :class="{ active: tab === 'birthday' }"
            @click.prevent="tab = 'birthday'"
            >KHÁCH HÀNG CÓ SINH NHẬT</a
          >
        </div>
        <dl
            class="classic-table back-table equals"
            v-if="tab === 'account'"
          >
            <dt class="text-uppercase">
              <div class="flex-1">stt</div>
              <div class="flex-1">trạng thái</div>
              <div class="flex-2 text-center">thông tin</div>
              <div class="flex-1">SỐ dư</div>
              <div class="flex-1">thao tác</div>
            </dt>
            <dd class="h-top">
              <div class="flex-1">001</div>
              <div class="flex-1 flex-column">
                <button class="btn-transparent btn-radius border-primary color-primary btn-default">Enable</button>
              </div>
              <div class="flex-2 d-flex info-user-on-table">
                <ul class="info-user-on-table-item box-ul-li-table item-left flex-2">
                  <li>vuthinu (<span class="color-primary">vuthinubs95@gmail.com</span>)</li>
                  <li>Họ tên: Vũ Thị Nụ</li>
                  <li>Số CMND: 174531620</li>
                  <li>Số điện thoại: 0932682413</li>
                  <li>Ngày tạo: 09-25-2020 15:08:04</li>
                </ul>
                <ul class="info-user-on-table-item box-ul-li-table item-left flex-3">
                  <li>Thành phố: Thanh Hóa</li>
                  <li>Lần đăng nhập cuối: 09-25-2020 15:09:22</li>
                  <li>Người giới thiệu: lelien (<span class="color-primary">lelien25260112@gmail.com</span>)</li>
                  <li>CodeBestlife:</li>
                </ul>
              </div>
              <div class="flex-1">
                <ul class="box-ul-li-table">
                  <li>Số dư chính: VNĐ</li>
                  <li>Số dư lãnh đạo: 0 VNĐ</li>
                  <li>Số dư hh hỗ trợ: 0 VNĐ</li>
                  <li>DS tích lũy lãnh đạo: 0 VNĐ</li>
                </ul>
              </div>
              <div class="">
                <button class="btn-radius  btn-bg-primary btn-default btn" @click="openContractByUser()">Hợp đồng</button>
                <button class="btn-radius  btn-bg-primary btn-default btn" @click="openEditUser()">Chỉnh sửa</button>
              </div>
            </dd>
            <dd class="h-top">
              <div class="flex-1">001</div>
              <div class="flex-column">
                <button class="btn-transparent btn-radius border-orange color-orange btn-default mb-10">Disable</button>
                <button class="btn-radius btn-bg-orange btn-default mt-10">Gửi lại email</button>
              </div>
              <div class="flex-2 d-flex info-user-on-table">
                <ul class="info-user-on-table-item box-ul-li-table item-left flex-2">
                  <li>vuthinu (<span class="color-primary">vuthinubs95@gmail.com</span>)</li>
                  <li>Họ tên: Vũ Thị Nụ</li>
                  <li>Số CMND: 174531620</li>
                  <li>Số điện thoại: 0932682413</li>
                  <li>Ngày tạo: 09-25-2020 15:08:04</li>
                </ul>
                <ul class="info-user-on-table-item box-ul-li-table item-left flex-3">
                  <li>Thành phố: Thanh Hóa</li>
                  <li>Lần đăng nhập cuối: 09-25-2020 15:09:22</li>
                  <li>Người giới thiệu: lelien (<span class="color-primary">lelien25260112@gmail.com</span>)</li>
                  <li>CodeBestlife:</li>
                </ul>
              </div>
              <div class="flex-1">
                <ul class="box-ul-li-table">
                  <li>Số dư chính: VNĐ</li>
                  <li>Số dư lãnh đạo: 0 VNĐ</li>
                  <li>Số dư hh hỗ trợ: 0 VNĐ</li>
                  <li>DS tích lũy lãnh đạo: 0 VNĐ</li>
                </ul>
              </div>
              <div class="">
                <button class="btn-radius text-uppercase btn-bg-primary btn-default btn" @click="openContractByUser()">Hợp đồng</button>
                <button class="btn-radius text-uppercase btn-bg-primary btn-default btn" @click="openEditUser()">Chỉnh sửa</button>
              </div>
            </dd>
            <div class="box-pagination">
              <el-pagination
                background
                layout="prev, pager, next"
                :page-size="10"
                :current-page="1"
                :total="20">
              </el-pagination>
          </div>
        </dl>
        <dl
          class="classic-table back-table equals"
          v-else-if="tab === 'verifile'"
        >
          <dt class="text-uppercase">
            <div class="flex-1">stt</div>
            <div class="flex-1">trạng thái</div>
            <div class="flex-2 text-center">thông tin</div>
            <div class="flex-1">hình ảnh</div>
            <div class="flex-1">thao tác</div>
          </dt>
          <dd class="h-top">
            <div class="flex-1">001</div>
            <div class="flex-1 flex-column">
              <button class="btn-transparent btn-radius border-orange color-orange btn-default mb-10">Chờ phê duyệt</button>
            </div>
            <div class="flex-2 d-flex info-user-on-table">
              <ul class="info-user-on-table-item box-ul-li-table item-left flex-2">
                <li>vuthinu (<span class="color-primary">vuthinubs95@gmail.com</span>)</li>
                <li>Họ tên: Vũ Thị Nụ</li>
                <li>Số CMND: 174531620</li>
                <li>Số điện thoại: 0932682413</li>
                <li>Ngày tạo: 09-25-2020 15:08:04</li>
              </ul>
              <ul class="info-user-on-table-item box-ul-li-table item-left flex-3">
                <li>Thành phố: Thanh Hóa</li>
                <li>Lần đăng nhập cuối: 09-25-2020 15:09:22</li>
                <li>Người giới thiệu: lelien (<span class="color-primary">lelien25260112@gmail.com</span>)</li>
                <li>CodeBestlife:</li>
              </ul>
            </div>
            <div class="flex-1 images">
              <img src="/images/logo.svg" alt="" class="image-table">
            </div>
            <div class="">
              <button class="btn-radius  btn-bg-primary btn-default btn">Phê duyệt</button>
              <button class="btn-radius  btn-bg-orange btn-default btn">Xóa</button>
            </div>
          </dd>
          <dd class="h-top">
            <div class="flex-1">001</div>
            <div class="flex-column">
              <button class="btn-transparent btn-radius border-orange color-orange btn-default mb-10">Chờ phê duyệt</button>
            </div>
            <div class="flex-2 d-flex info-user-on-table">
              <ul class="info-user-on-table-item box-ul-li-table item-left flex-2">
                <li>vuthinu (<span class="color-primary">vuthinubs95@gmail.com</span>)</li>
                <li>Họ tên: Vũ Thị Nụ</li>
                <li>Số CMND: 174531620</li>
                <li>Số điện thoại: 0932682413</li>
                <li>Ngày tạo: 09-25-2020 15:08:04</li>
              </ul>
              <ul class="info-user-on-table-item box-ul-li-table item-left flex-3">
                <li>Thành phố: Thanh Hóa</li>
                <li>Lần đăng nhập cuối: 09-25-2020 15:09:22</li>
                <li>Người giới thiệu: lelien (<span class="color-primary">lelien25260112@gmail.com</span>)</li>
                <li>CodeBestlife:</li>
              </ul>
            </div>
            <div class="flex-1">
              <img src="/images/logo.svg" alt="" class="image-table">
            </div>
            <div class="">
              <button class="btn-radius  btn-bg-primary btn-default btn">Phê duyệt</button>
              <button class="btn-radius  btn-bg-orange btn-default btn">Xóa</button>
            </div>
          </dd>
          <div class="box-pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="10"
              :current-page="1"
              :total="20">
            </el-pagination>
          </div>
        </dl>
        <dl
          class="classic-table back-table equals birthday-table"
          v-else-if="tab === 'birthday'"
        >
          <dt class="text-uppercase">
            <div class="flex-1">stt</div>
            <div class="flex-1">HỌ TÊN</div>
            <div class="flex-1">SỐ CMND</div>
            <div class="flex-1">SỐ ĐT</div>
            <div class="flex-1">NGÀY SINH</div>
            <div class="flex-1">ĐỊA CHỈ</div>
            <div class="flex-1">thao tác</div>
          </dt>
          <dd class="flex-ycenter">
            <div class="flex-1">001</div>
            <div class="flex-1">nguyễn văn a</div>
            <div class="flex-1">001</div>
            <div class="flex-1">001</div>
            <div class="flex-1">01/01/2001</div>
            <div class="flex-1">ha noi</div>
            <div class="flex-1">
              <button class="btn btn-small">Gửi email</button>
            </div>
          </dd>
          <dd class="flex-ycenter">
            <div class="flex-1">001</div>
            <div class="flex-1">nguyễn văn a</div>
            <div class="flex-1">001</div>
            <div class="flex-1">001</div>
            <div class="flex-1">01/01/2001</div>
            <div class="flex-1">ha noi</div>
            <div class="flex-1">
              <button class="btn btn-small">Gửi email</button>
            </div>
          </dd>
          <dd class="flex-ycenter">
            <div class="flex-1">001</div>
            <div class="flex-1">nguyễn văn a</div>
            <div class="flex-1">001</div>
            <div class="flex-1">001</div>
            <div class="flex-1">01/01/2001</div>
            <div class="flex-1">ha noi</div>
            <div class="flex-1">
              <button class="btn btn-small">Gửi email</button>
            </div>
          </dd>
          <dd class="flex-ycenter">
            <div class="flex-1">001</div>
            <div class="flex-1">nguyễn văn a</div>
            <div class="flex-1">001</div>
            <div class="flex-1">001</div>
            <div class="flex-1">01/01/2001</div>
            <div class="flex-1">ha noi</div>
            <div class="flex-1">
              <button class="btn btn-small">Gửi email</button>
            </div>
          </dd>
          <dd class="flex-ycenter">
            <div class="flex-1">001</div>
            <div class="flex-1">nguyễn văn a</div>
            <div class="flex-1">001</div>
            <div class="flex-1">001</div>
            <div class="flex-1">01/01/2001</div>
            <div class="flex-1">ha noi</div>
            <div class="flex-1">
              <button class="btn btn-small">Gửi email</button>
            </div>
          </dd>
          <div class="box-pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="10"
              :current-page="1"
              :total="20">
            </el-pagination>
          </div>
        </dl>
      </div>
    </div>
    <FormEditUser/>
  </div>
</template>

<script>
import FormEditUser from '@/views/common/EditUser'
export default {
  components: {
    FormEditUser
  },
  name: 'login',
  data() {
    return {
      tab: 'account'
    }
  },
  computed: {

  },
  mounted() {
  },
  methods: {
    openEditUser () {
      this.$store.dispatch('setDialogEditUser', true)
    },
    openContractByUser () {
      this.$router.push({ name: 'ContractByUser' })
    }
  }
}
</script>
