import blog from '../../api/blog'

export default {
  data(){
    return {
      blogs: [],
      user: {},
      page: 1,
      total: 0
    }
  },

  created() {
    this.userId = this.$route.params.userId
    this.page = this.$route.query.page || 1
    blog.getBlogsByUserId(this.userId, {page: this.page})
      .then(res => {
        console.log(res)
        this.page = res.page
        this.total = res.total
        this.blogs = res.data
        if(res.data.length > 0 ) {
          this.user = res.data[0].user
        }
      })
  },

  methods: {
    onPageChange(newPage){
      blog.getBlogsByUserId(this.userId, {page: newPage})
      .then(res => {
        console.log(res.data)
        this.page = res.page
        this.total = res.total
        this.blogs = res.data
        this.$router.push({path: `/user/${this.userId}`,query: {page: newPage}})
      })
    },

    splitDate(dateStr){
      let dateObj = typeof dateStr === 'object' ?  dateStr: new Date(dateStr)
      return {
        day: dateObj.getDay(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },

  }
}
