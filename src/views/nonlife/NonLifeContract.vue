<template>
  <div class="main-page nonLifePage">
    <div class="page-heading">
      <div class="page-filter searchPage">
        <form>
          <div class="searchBox">
            <select class="search-box-select filter selectpicker">
              <option>Trạng Thái</option>
              <option>Đã xác nhận</option>
              <option>đã bị hủy</option>
              <option>chờ</option>
            </select>
            <div class="search-box filter">
              <input type="search" placeholder="Người tạo">
            </div>
            <div class="search-box filter">
              <input type="search" placeholder="Người bán">
            </div>
            <select class="search-box-select filter selectpicker">
              <option>Loại bảo hiểm</option>
              <option>BH-Sức khỏe - bảo việt an gia</option>
              <option>BH ung thư - cancecash</option>
              <option>BH sức khỏe - mediacare</option>
              <option>VBI Care</option>
              <option>VBI Care</option>
              <option>VBI Care</option>
              <option>VBI Care</option>
              <option>VBI Care</option>
              <option>VBI Care</option>
              <option>VBI Care</option>
              <option>VBI Care</option>
              <option>VBI Care</option>
              <option>VBI Care</option>
              <option>VBI Care</option>
              <option>VBI Care</option>
            </select>
          </div>
          <div class="number-box">
            <div class="total">
              <div>
                <span>Tổng số bản ghi</span>
                <span class="number">1815</span>
              </div>
              <div>
                <span>Tổng giá trị HĐ</span>
                <span class="number">1,560,647,212</span>
              </div>
            </div>
            <button class="btn-search filter btn">
              <span>Tìm kiếm</span>
              <img src=" /images/loupe.svg" alt="Add">
            </button>
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
              <th>Loại BH</th>
              <th>Người tạo - bán </th>
              <th>Ngày hiệu lực</th>
              <th>Thông tin HĐ </th>
              <th>Giá trị</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <div class="borderTable"></div>
          <tbody>
            <tr>
              <td>2026</td>
              <td>BH sức khỏe - Bảo Việt An Gia</td>
              <td> 
                <div>
                  <span>Người tạo</span>
                  <span>csbestlife1</span>
                </div>
                <div>
                  <span>Người bán</span>
                  <span>oanhdoa</span>
                </div>
              </td>
              <td>00:00:00 22-02-2020</td>
              <td> 
                <div>
                  <span>Tên hợp đồng</span>
                  <span>NGUYỄN THỊ XUÂN</span>
                </div>
                <div>
                  <span>Tên khách hàng</span>
                  <span>NGUYỄN THỊ XUÂN</span>
                </div>
                <div>
                  <span>Số HĐ</span>
                  <span>d10bvp20hd 451</span>
                </div>
                <div>
                  <span>Nguồn</span>
                  <span>SYSTEM</span>
                </div>
              </td>
              <td>1.450.000 VNĐ</td>
              <td>
                <a href="#" class="btn">Chỉnh sửa</a>
                <a href="#" class="btn btn-confirm">Xác nhận</a>
                <a href="#" class="btn btn-cancel">Hủy</a>   
              </td>
            </tr>
            <tr>
              <td>2026</td>
              <td>BH sức khỏe - Bảo Việt An Gia</td>
              <td> 
                <div>
                  <span>Người tạo</span>
                  <span>csbestlife1</span>
                </div>
                <div>
                  <span>Người bán</span>
                  <span>oanhdoa</span>
                </div>
              </td>
              <td>00:00:00 22-02-2020</td>
              <td> 
                <div>
                  <span>Tên hợp đồng</span>
                  <span>NGUYỄN THỊ XUÂN</span>
                </div>
                <div>
                  <span>Tên khách hàng</span>
                  <span>NGUYỄN THỊ XUÂN</span>
                </div>
                <div>
                  <span>Số HĐ</span>
                  <span>d10bvp20hd 451</span>
                </div>
                <div>
                  <span>Nguồn</span>
                  <span>SYSTEM</span>
                </div>
              </td>
              <td>1.450.000 VNĐ</td>
              <td>
                <a href="#" class="btn">Chỉnh sửa</a>
                <a href="#" class="btn btn-confirm">Xác nhận</a>
                <a href="#" class="btn btn-cancel">Hủy</a>   
              </td>
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
          <button class="btn">Lưu</button>
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