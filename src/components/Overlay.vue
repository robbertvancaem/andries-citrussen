<template>
  <div class="overlay" :style="{ backgroundColor: backgroundColor }"></div>
</template>

<script>
export default {
  name: "app-overlay",
  props: {
    backgroundColor: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.overlay {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}
</style>
