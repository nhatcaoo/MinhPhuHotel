export default {
  data () {
    return {
      title: 'Best Life'
    }
  },
  computed: {
  },
  methods: {
    setTitle: function () {
      if (this.$route && this.$route.meta && this.$route.meta.title) {
        document.title = '' + this.$route.meta.title + ' | ' + this.title
      } else {
        document.title = this.title
      }
    }
  },
  watch: {
    '$route' () {
      this.setTitle()
    }
  }
}
