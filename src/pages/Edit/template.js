import blog from '../../api/blog'

export default {
  name: 'Create',
  data() {
    return {
      blogId: null,
      atIndex: false,
      title: '',
      description: '',
      content: '',
    }
  },

  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId: this.blogId})
      .then(res=>{
        this.title = res.data.title
        this.description = res.data.description
        this.content = res.data.content
        this.atIndex = res.data.atIndex
      })
  },

  methods: {
    onEdit(){
      blog.updateBlog({blogId: this.blogId},{title: this.title, content: this.title, description: this.description, atIndex: this.atIndex})
      .then(res=> {
        this.$message.success(res.msg)
        this.$router.push({path: `/detail/${res.data.id}`})
      })
    }
  },

  computed: {
    count1(){
      if (20- this.title.length< 0){
        return 0
      }else {
        return 20- this.title.length
      }
    },
    count2(){
      if (60- this.description.length< 0){
        return 0
      }else {
        return 60- this.description.length
      }
    },
    count3(){
      if (200- this.content.length< 0){
        return 0
      }else {
        return 200- this.content.length
      }
    }
  }

}
