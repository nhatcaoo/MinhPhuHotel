<template>
  <div class="main-page productPage">
    <div class="page-filter">
      <form class="search-box filter">
        <input type="search" placeholder="tên bảo hiểm">
        <button><img src="/images/loupe.svg" alt="Search"></button>
      </form>
    </div>
    <div class="page-content">
      <div class="tabs">
        <a href="#" :class="{'active': tab === 'create'}" @click.prevent="tab = 'create'">Thêm mới sản phẩm nhân thọ</a>
        <a href="#" :class="{'active': tab === 'edit'}" @click.prevent="tab = 'edit'">chỉnh sửa sản phẩm nhân thọ</a>
      </div>
      <div class="classic-table equals" v-if="tab === 'create'">
        <div class="formCreate">
          <div class="contentForm formCreateProduct">
            <form action="">
              <div>
                <label>Tên sản phẩm</label>
                <input type="text" placeholder="Tên sản phẩm">
              </div>
              <div>
                <label>Thưởng người bán</label>
                <div class="search-box filter">
                  <input type="text">
                  <button>0.0%</button>
                </div>
              </div>
              <div>
                <label>Trả thưởng cho UL</label>
                <select>
                  <option>Có</option>
                  <option>Không</option>
                </select>
              </div>
              <div>
                <label>INDEX</label>
                <input type="text">
              </div>
              <button class="btn btnCreate">Lưu sản phẩm</button>
            </form>

          </div>
        </div>
      </div>
      <div class="classic-table equals listCourse" v-if="tab === 'edit'">
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm nhân thọ</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>13</td>
                <td>Bảo hiểm sức khỏe - Bảo việt An Gia</td>
                <td>
                  <a  class="btn"> Chỉnh sửa</a>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>Bảo hiểm sức khỏe - Bảo việt An Gia</td>
                <td>
                  <a  class="btn"> Chỉnh sửa</a>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>Bảo hiểm sức khỏe - Bảo việt An Gia</td>
                <td>
                  <a  class="btn"> Chỉnh sửa</a>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>Bảo hiểm sức khỏe - Bảo việt An Gia</td>
                <td>
                  <a  class="btn"> Chỉnh sửa</a>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>Bảo hiểm sức khỏe - Bảo việt An Gia</td>
                <td>
                  <a  class="btn"> Chỉnh sửa</a>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>Bảo hiểm sức khỏe - Bảo việt An Gia</td>
                <td>
                  <a  class="btn"> Chỉnh sửa</a>
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