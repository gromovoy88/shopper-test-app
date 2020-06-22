<template>
  <div class="user-info">
    <div class="user-info-edit">
      <div class="field">
        <span class="label">Last Name</span>
        <div class="control">
          <input
            type="text"
            class="last-name"
            :value="user.last_name"
            @change="lastNameChange"
          >
        </div>
      </div>
      <div class="field">
        <span class="label">First Name</span>
        <div class="control">
          <input
            type="text"
            class="first-name"
            :value="user.first_name"
            @change="firstNameChange"
          >
        </div>
      </div>
    </div>
    <div
      v-if="usersPosts.length !== 0"
      class="user-info-posts"
    >
      <div class="post-list-counter">
        <span>Count of all users posts {{ usersPosts.length }}</span>
      </div>
      <div class="post-list-wrapper" v-if="isShowAllPosts && usersPosts.length > 1">
        <ul class="post-list">
          <post-item
            v-for="post in usersPosts"
            :key="post.id"
            :post="post"
          />
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
          <post-item :post="usersPosts[0]"/>
        </ul>
      </div>
    </div>
    <div v-else class="user-info-posts--empty">
      <div class="post-alert">
        <span>User dont have any posts</span>
      </div>
    </div>
  </div>
</template>

<script>
import usersApi from '@/api';
import AUserPostItem from '@/components/A-UserPostItem.vue';

export default {
  name: 'UserInfo',
  components: {
    'post-item': AUserPostItem,
  },
  props: {
    user: Object,
  },
  watch: {
    user(newUser) {
      if (newUser) {
        this.getUsersPosts().then((result) => {
          this.usersPosts = result;
        });
      }
    },
  },
  data() {
    return {
      usersPosts: [],
      isShowAllPosts: false,
    };
  },
  methods: {
    firstNameChange(e) {
      this.$emit('first-name-change', e.target.value);
    },
    lastNameChange(e) {
      this.$emit('last-name-change', e.target.value);
    },
    async getUsersPosts() {
      const usersPosts = [];
      const posts = await usersApi.getPosts();
      posts.forEach((item) => {
        if (item.user_id === this.user.id) {
          usersPosts.push(item);
        }
      });
      return usersPosts;
    },
  },
};
</script>

<style lang="scss">
.user-info {
  &-edit {
    margin-bottom: 20px;
  }

  &-posts {
    border: 1px solid lightgray;
    padding: 12px;

    &--empty {
      border: 1px solid lightgray;
      padding: 12px;
      color: gray;
    }
  }
}

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
