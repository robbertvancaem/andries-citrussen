<template>
  <header>
    <Overlay background-color="rgba(59,22,17,0.6)" />
  </header>
</template>

<script>
import Overlay from "./Overlay";

export default {
  name: "app-header",
  components: {
    Overlay
  }
};
</script>

<style scoped>
header {
  background: url("../assets/backgrounds/office.jpg");
  background-position: center center;
  background-size: cover;
  height: 60vh;
  min-height: 400px;
  position: relative;
}
</style>
