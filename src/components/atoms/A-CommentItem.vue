<template>
  <li class="comment-item">
    <div class="comment-item-author">
      <span>Author: {{ comment.name }}</span>
    </div>
    <div class="comment-item-body">
      <p>{{ comment.body }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    comment: Object,
  },
};
</script>

<style scoped lang="scss">
</style>
