O<template>
  <div class="home">
    <o-header/>
    <o-content>
      <o-users/>
    </o-content>
  </div>
</template>

<script>
import OHeader from '@/components/O-Header.vue';
import OContent from '@/components/O-Content.vue';
import OUsers from '@/components/O-Users.vue';

export default {
  name: 'Home',
  components: {
    OHeader,
    OContent,
    OUsers,
  },
};
</script>
