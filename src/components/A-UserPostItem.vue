<template>
  <li class="post-item">
    <div class="post-item-title">
      <span>Post id.{{ post.id }}. {{post.title}}</span>
    </div>
    <div class="post-item-comment">
      <p>{{post.body}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'UserPostItem',
  props: {
    post: Object,
  },
};
</script>

<style scoped lang="scss">
</style>
