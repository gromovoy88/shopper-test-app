import Vue from 'vue';

export const store = Vue.observable({
  users: [],
  posts: [],
  comments: [],
});

export const mutations = {
  setPosts(posts) {
    store.posts = posts;
  },
  setComments(comments) {
    store.comments = comments;
  },
  setUsers(users) {
    store.users = users;
  },
};

export const getters = {
  getPosts: () => this.store.posts,
  getComments: () => this.store.comments,
  getUsers: () => this.store.users,
};
