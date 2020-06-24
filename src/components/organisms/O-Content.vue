<template>
  <div class="content">
    <slot>Content will be here</slot>
  </div>
</template>

<script>

export default {
  name: 'Content',
};
</script>

<style scoped lang="scss">
.content {
  max-width: 1350px;
  width: 100%;
  margin: 25px auto;
  padding: 0px 15px;
}
</style>
