<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Title from '@/mixin/title'
export default {
  name: 'App',
  mixins: [ Title ],
  computed: {
  }
}
</script>
