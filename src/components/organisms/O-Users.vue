<template>
  <div class="users" v-if="users">
    <div class="user-select">
      <div class="field">
        <span class="label">Please select user</span>
        <div class="control">
          <select class="users-dropdown" @change="changeUser">
            <option disabled value="">Please select user</option>
            <option
              v-for="user in users"
              :key="user.id"
              :value="user.last_name"
            >
              <span>{{user.last_name}}</span>
            </option>
          </select>
        </div>
      </div>
    </div>
    <m-user-info
      v-if="currentUser"
      :user="currentUser"
      @first-name-change="changeUserFirstName"
      @last-name-change="changeUserLastName"
    />
  </div>
</template>

<script>
import { mutations, store } from '@/store';
import usersApi from '@/api';
import MUserInfo from '@/components/molecules/M-UserInfo.vue';

export default {
  name: 'Users',
  components: {
    MUserInfo,
  },
  data() {
    return {
      currentUser: null,
    };
  },
  async mounted() {
    usersApi.getUsers().then((users) => mutations.setUsers(users));
    usersApi.getPosts().then((posts) => mutations.setPosts(posts));
    usersApi.getComments()
      .then((comments) => mutations.setComments(comments))
      .catch(() => mutations.setComments([]));
  },
  methods: {
    setCurrentUser(lastName) {
      if (lastName) {
        this.currentUser = this.users.find((user) => user.last_name === lastName);
        return;
      }
      this.currentUser = null;
    },
    changeUser(e) {
      const userLastName = e.target.value || null;
      this.setCurrentUser(userLastName);
    },
    changeUserFirstName(value) {
      const { id } = this.currentUser;
      usersApi.editUsersData(id, {
        first_name: value,
      }).then(async () => {
        this.users = await usersApi.getUsers();
      });
    },
    changeUserLastName(value) {
      const { id } = this.currentUser;
      usersApi.editUsersData(id, {
        last_name: value,
      }).then(async () => {
        this.users = await usersApi.getUsers();
        this.setCurrentUser(value);
      });
    },
  },
  computed: {
    users() {
      return store.users;
    },
  },
};
</script>

<style lang="scss">
.field {
  text-align: left;
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0px;
  }
}

.users {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.user-select {
  margin-bottom: 20px;
}
</style>
