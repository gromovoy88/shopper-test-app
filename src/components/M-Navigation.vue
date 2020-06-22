<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li
        class="navigation-item"
        v-for="(link, key) in navigationLinks"
        :key="key"
      >
        <router-link
          class="navigation-item--link"
          :to="link.href"
        >
          <span>{{link.name}}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    navigationLinks: Array,
  },
};
</script>

<style scoped lang="scss">
</style>
