<template>
  <div class="font-audiowide">
    <Navbar />
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  export default {
    components: {
      Navbar
    }
  }
</script>