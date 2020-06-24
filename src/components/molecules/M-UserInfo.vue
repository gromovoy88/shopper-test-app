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
    <post-list
      :posts="usersPosts"
    />
  </div>
</template>

<script>
import { store } from '@/store';
import MPostList from '@/components/molecules/M-PostList.vue';

export default {
  name: 'UserInfo',
  components: {
    'post-list': MPostList,
  },
  props: {
    user: Object,
  },
  mounted() {
  },
  data() {
    return {
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
  },
  computed: {
    usersPosts() {
      return store.posts.filter((item) => item.user_id === this.user.id);
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
</style>
