O<template>
  <div class="home">
    <o-header/>
    <o-content>
      <o-users/>
    </o-content>
  </div>
</template>

<script>
import OHeader from '@/components/organisms/O-Header.vue';
import OContent from '@/components/organisms/O-Content.vue';
import OUsers from '@/components/organisms/O-Users.vue';

export default {
  name: 'Home',
  components: {
    OHeader,
    OContent,
    OUsers,
  },
};
</script>
