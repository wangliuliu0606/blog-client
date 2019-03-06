<template>
  <div id="index">
    <section class="blog-posts">
      <router-link :to="`/detail/${blog.id}`" class="items" v-for="blog in blogs" :key="blog.id">
        <figure class="avatar">
          <img :src="blog.user.avatar" alt="">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
        <h3>{{blog.title}}<span> {{friendDate(blog.createdAt)}}</span></h3>
        <p>
          {{blog.description}}
        </p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page.sync="page"
        @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
