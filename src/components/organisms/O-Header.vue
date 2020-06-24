<template>
  <div class="header-container">
    <div class="header">
      <div class="logo">
        <img src="../../assets/logo.png" alt="Logotype" class="logo-img">
        <div class="logo-text">
          <span>
            <strong>Test app for shopper</strong>
          </span>
        </div>
      </div>
      <m-navigation
        :navigation-links="navigationLinks"
      />
    </div>
  </div>
</template>

<script>
import MNavigation from '@/components/molecules/M-Navigation.vue';

export default {
  name: 'Header',
  props: {
    msg: String,
  },
  components: {
    MNavigation,
  },
  data() {
    return {
      navigationLinks: [
        {
          name: 'Homepage',
          href: '/',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  max-width: 1350px;
  width: 100%;
  margin: 0px auto;
  padding: 0px 15px;

  &-container {
    width: 100%;
    background-color: ghostwhite;
  }
}

.logo {
  display: flex;
  align-items: center;
  height: 50px;

  &-img {
    width: auto;
    height: 100%;
  }
}
</style>
