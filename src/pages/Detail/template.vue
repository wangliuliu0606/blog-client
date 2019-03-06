<template>
  <div id="detail">
    <section class="user_info">
       <img class="avatar" :src="user.avatar" :title="user.username" :alt="user.username">
       <h3>{{title}}</h3>
       <p><router-link :to="`/user/${user.id}`">{{user.username}}</router-link> 发布于{{friendDate(createAt)}}</p>
    </section>
    <section class="article" v-html="mardkown"></section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
