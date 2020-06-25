<template>
  <div class="comment-list-wrapper" v-if="comments.length !== 0 && showComments">
    <ul class="comment-list">
      <li
        v-for="comment in comments"
        :key="comment.id"
      >
        <comment-item :comment="comment" />
      </li>
    </ul>
  </div>
</template>

<script>
import ACommentItem from '@/components/atoms/A-CommentItem.vue';

export default {
  name: 'CommentList',
  components: {
    'comment-item': ACommentItem,
  },
  props: {
    showComments: Boolean,
    comments: Array,
  },
};
</script>

<style lang="scss">

.post {
  &-list {
    list-style-type: none;
    padding-left: 0px;

    &-counter {
      text-align: left;
      font-size: 10px;
      color: grey;
    }
  }

  &-item {
    text-align: left;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 12px;

    &:last-child {
      padding-bottom: 0px;
      border-bottom: none;
    }

    &-title {
      font-weight: bold;
      font-size: 14px;
    }

    &-comment {
      font-size: 12px;
    }
  }
}
</style>
