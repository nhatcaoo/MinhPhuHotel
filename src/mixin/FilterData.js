export default {
    data () {
      return {
        query: {
          email: '',
          kycStatus: '',
          userId: '',
          currency: [],
          time: null
        },
      }
    },
    watch: {
      $route () {
        this.fetch()
      }
    },
    computed: {
      pagination () {
        return this.$store.getters.pagination
      },
      users () {
        return this.$store.getters.users
      }
    },
    methods: {
      goToPage (page) {
        const temp = JSON.parse(JSON.stringify(this.pagination))
        temp.page = page
        this.$store.dispatch('setPagination', temp)
        let filterObj = this.buildQueryObj(true)
        filterObj.page = page - 1
        this.changeRouteParams(filterObj)
      },
      // search () {
      //   let query = this.query
      //   Object.keys(query).forEach(function(key) {
      //     switch (key) {
      //       case 'email':
      //         query[key] = query[key].trim()
      //         query[key] = query[key].toLowerCase()
      //         query[key] = query[key].trim()
      //         break
      //     }
      //   })
      //   let filterObj = Object.assign(this.buildQueryObj(true), query)
      //   filterObj.page = 0
      //   this.changeRouteParams(filterObj)
      // },
      buildQueryObj () {
        let filterObj = JSON.parse(JSON.stringify(this.$route.query))
        filterObj.page = this.$route.query.page ? this.$route.query.page : 0
        filterObj.size = this.$route.query.size ? this.$route.query.size : 10
        return filterObj
      },
      changeRouteParams (queryObj) {
        this.$router.push({ name: this.$route.name, query: queryObj })
      }
    }
  }
  