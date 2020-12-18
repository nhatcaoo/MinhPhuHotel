<template>
  <router-view/>
</template>

<script>
export default {
    created () {
      this.$router.push({ name: 'Login' })
    }
}
</script>
