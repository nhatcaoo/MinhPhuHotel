<template>
  <div class="main-body">
    <div class="main-header flex-box">
      <div class="flex-1">
        <h2 class="title">{{title}}</h2>
      </div>
      <div class="flex-1 profile">
        <div class="name">MY PROFILE</div>
        <img src="/images/icons/logout.svg" alt="">
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    } 
  },
  computed: {
    title () {
      return this.$route.meta.title
    }
  }
}
</script>>
