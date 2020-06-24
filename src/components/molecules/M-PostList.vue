<template>
  <div
      v-if="posts.length !== 0"
      class="user-info-posts"
    >
      <div class="post-list-counter">
        <span>Count of all users posts {{ posts.length }}</span>
      </div>
      <div class="post-list-wrapper" v-if="isShowAllPosts && posts.length > 1">
        <ul class="post-list">
          <li
            v-for="post in posts"
            :key="post.id"
          >
            <post-item :post="post" />
          </li>
        </ul>
        <a
          :class="isShowAllPosts ? 'show-less' : 'show-more'"
          @click="isShowAllPosts = !isShowAllPosts"
        >
          <span>{{ isShowAllPosts ? 'Show less posts' : 'Show more posts' }}</span>
        </a>
      </div>
      <div class="post-list-wrapper--single" v-else>
        <ul class="post-list">
          <post-item :post="posts[0]"/>
        </ul>
      </div>
    </div>
    <div v-else class="user-info-posts--empty">
      <div class="post-alert">
        <span>User dont have any posts</span>
      </div>
    </div>
</template>

<script>
import MPostItem from '@/components/molecules/M-PostItem.vue';

export default {
  name: 'PostList',
  components: {
    'post-item': MPostItem,
  },
  props: {
    posts: Array,
  },
  data() {
    return {
      isShowAllPosts: false,
    };
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
