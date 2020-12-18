import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import DashboardLayout from '@/views/layout/DashboardLayout'
import AuthLayout from '@/views/layout/AuthLayout'

// Pages
import LoginComponent from '@/views/auth/login'
import OverviewComponent from '@/views/overview/overview'
import AccountComponent from '@/views/account/Account'
import ContractByUserComponent from '@/views/account/ContractByUser'
import ContractComponent from '@/views/report/Contract'
import ProvisionalCommissionComponent from '@/views/report/ProvisionalCommission'
import AppellationComponent from '@/views/report/Appellation'
import LedgerComponent from '@/views/report/Ledger'
import ReportComponent from '@/views/report/ReportPartner'
import ListCourseComponent from '@/views/course/ListCourse'
import CreateCourseComponent from '@/views/course/CreateCourse'
import ListClassComponent from '@/views/course/ListClass'
import NonLifeContractComponent from '@/views/nonlife/NonLifeContract'
import ReportNonLifeComponent from '@/views/nonlife/ReportNonLife'
import ProductNonLifeComponent from '@/views/nonlife/ProductNonLife'
import ExchangeManageComponent from '@/views/manage/Exchange'
import NewsManageComponent from '@/views/manage/News'
import ContractManageComponent from '@/views/manage/Contract'
import NotfoundComponent from '@/views/404'
import CreateBestHomeComponent from '@/views/besthome/CreateBestHome'
import ContractBestHomeComponent from '@/views/besthome/ContractBestHome'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    component: AuthLayout,
    hidden: true,
    meta: { requiresAuth: false },
    children: [
      {
        name: 'Login',
        path: '/login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '/',
    component: AuthLayout,
    hidden: true,
    meta: { requiresAuth: false },
    children: [
      {
        name: 'LandingPage',
        path: '/',
        component: () => import("@/views/landingPage/LandingPage.vue")
      }
    ]
  },
  {
    path: '/home',
    component: DashboardLayout,
    redirect: { name: 'Overview' },
    meta: {title: 'Trang chủ', roles: ['System Admin'], requiresAuth: true },
    children: [
      {
        path: '/trangchu',
        name: 'Overview',
        component: OverviewComponent,
        meta: { title: 'Trang chủ'}
      }
    ]
  },
  {
    path: '/account',
    component: DashboardLayout,
    redirect: { name: 'Account' },
    meta: { title: 'Tài khoản', requiresAuth: true, roles: ['System Admin'] },
    children: [
      {
        hidden: true,
        path: '',
        name: 'Account',
        component: AccountComponent,
        meta: { title: 'Tài khoản'}
      },
      {
        hidden: true,
        path: ':user/contract',
        name: 'ContractByUser',
        component: ContractByUserComponent,
        meta: { title: 'Tài khoản'},
      }
    ]
  },
  {
    path: '/report',
    component: DashboardLayout,
    redirect: { name: 'Contract' },
    meta: { title: 'Báo cáo', requiresAuth: true, roles: ['System Admin'] },
    children: [
      {
        path: 'contract',
        name: 'Contract',
        component: ContractComponent,
        meta: { title: 'HĐ Bảo hiểm'}
      },
      {
        path: 'provisional',
        name: 'ProvisionalCommission',
        component: ProvisionalCommissionComponent,
        meta: { title: 'Hoa Hồng Tạm tính'}
      },
      {
        path: 'report-partner',
        name: 'Report Partner',
        component: ReportComponent,
        meta: { title: 'Báo cáo đối tác'}
      },
      {
        path: 'appellation',
        name: 'Appellation',
        component: AppellationComponent,
        meta: { title: 'Danh hiệu'}
      },
      {
        path: 'ledger',
        name: 'Ledger',
        component: LedgerComponent,
        meta: { title: 'Sổ cái'}
      }
    ]
  },
  {
    path: '/manage',
    component: DashboardLayout,
    redirect: { name: 'Exchange' },
    meta: { title: 'Quản lý', requiresAuth: true },
    children: [
      {
        path: 'exchange',
        name: 'Exchange',
        component: ExchangeManageComponent,
        meta: { title: 'Giao dịch'}
      },
      {
        path: 'contract',
        name: 'ContractManage',
        component: ContractManageComponent,
        meta: { title: 'Hợp đồng'}
      },
      {
        path: 'news',
        name: 'NewsManage',
        component: NewsManageComponent,
        meta: { title: 'Tin tức'}
      }
    ]
  },
  {
    path: '/non-life',
    component: DashboardLayout,
    redirect: { name: 'NonLifeContract' },
    meta: { title: 'Phi Nhân Thọ', requiresAuth: true, roles: ['System Admin'] },
    children: [
      {
        path: 'contract',
        name: 'NonLifeContract',
        component: NonLifeContractComponent,
        meta: { title: 'HĐ Phi nhân thọ'}
      },
      {
        path: 'report',
        name: 'ReportNonLife',
        component: ReportNonLifeComponent,
        meta: { title: 'Báo Cáo thường'}
      },
      {
        path: 'product',
        name: 'ProducttNonLife',
        component: ProductNonLifeComponent,
        meta: { title: 'SP phi nhân thọ'}
      }
    ]
  },
  {
    path: '/course',
    component: DashboardLayout,
    redirect: { name: 'ListCourse' },
    meta: { title: 'Khóa học', requiresAuth: true, roles: ['System Admin'] },
    children: [
      {
        path: 'list',
        name: 'ListCourse',
        component: ListCourseComponent,
        meta: { title: 'Danh sách'}
      },
      {
        path: 'create',
        name: 'CreateCourse',
        component: CreateCourseComponent,
        meta: { title: 'Tạo Mới'}
      },
      {
        path: 'list-class',
        name: 'ListClass',
        component: ListClassComponent,
        meta: { title: 'Danh sách lớp'}
      }
    ]
  },
  {
    path: '/best-home',
    component: DashboardLayout,
    redirect: { name: 'CreateBestHome' },
    meta: { title: 'Besthome', requiresAuth: true, roles: ['System Admin'] },
    children: [
      {
        path: 'create',
        name: 'CreateBestHome',
        component: CreateBestHomeComponent,
        meta: { title: 'Tạo Besthome'}
      },
      {
        path: 'contract',
        name: 'COntractBestHome',
        component: ContractBestHomeComponent,
        meta: { title: 'HĐ BEsthome'}
      }
    ]
  },
  {
    path: '/404',
    // component: NotfoundComponent,
    component: DashboardLayout,
    hidden: true,
    name: 'PageNotFound',
    redirect: { name: '404' },
    meta: { requiresAuth: false },
    children: [
      {
        path: '',
        name: '404',
        component: NotfoundComponent,
        meta: { title: '404 Page'}
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true, meta: { requiresAuth: false } }
]

// Router catch exception
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location)
    .catch(() => console.log('Routing is not changed'))
}
const DEFAULT_TITLE = 'Some Default Title';
Router.afterEach((to, from) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  linkActiveClass: "active",
  routes: routes
})
