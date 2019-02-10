<template>
  <header>
    <div class="content-wrapper">
      <h1>{{ title }}</h1>
    </div>
    <Overlay background-color="rgba(59,22,17,0.6)" />
  </header>
</template>

<script>
import Overlay from "./Overlay.vue";

export default {
  name: "app-header",
  props: ["title"],
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

.content-wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 2;
}

h1 {
  color: #fff;
  font-weight: 700;
}
</style>
