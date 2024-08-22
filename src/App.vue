<template>
  <section :class="{ bodyColorSet: route.path === '/' }">
    <div class="container" style="height: 100vh">
      <RouterView />
    </div>
  </section>
</template>

<style lang="scss">
@media (min-width: 476px) {
  .bodyColorSet {
    background: linear-gradient(-5deg, white 0%, white 45%, #ffd370 45%, #ffd370 100%);
  }
}
</style>

<script setup>
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
