<script>
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="container">
    <Transition name="route">
      <RouterView />
    </Transition>
  </div>
</template>

<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto
  }

  /* route animations */
  .route-enter-from {
    opacity: 0;
  }
  .route-enter-active, .route-leave-active {
  transition: all 0.3s ease-out;
}
</style>