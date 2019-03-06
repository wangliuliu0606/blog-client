import marked from 'marked'
import blog from '../../api/blog'

window.blog = blog

export default {
  data() {
    return {
      title: '',
      rawContent: '',
      user: {},
      createAt: ''
    }
  },

  created() {
    this.blogId = this.$route.params.blogId
    console.log(this.blogId)
    blog.getDetail({blogId:this.blogId}).then(res => {
      console.log(res.data)
      this.title = res.data.title
      this.rawContent = res.data.content
      this.user = res.data.user
      this.createAt = res.data.createdAt
    })
  },

  computed: {
    mardkown(){
      return marked(this.rawContent)
    }
  }


}
