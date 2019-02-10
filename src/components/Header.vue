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

header:before,
header:after {
  background: transparent;
  border-bottom: 200px solid #fff;
  bottom: -200px;
  content: "";
  height: 50px;
  position: absolute;
  z-index: 4;
  width: 50%;
}

header:before {
  border-radius: 0 0 0 100%;
  border-left: 200px solid #fff;
  left: -200px;
}

header:after {
  border-radius: 0 0 100% 0;
  border-right: 200px solid #fff;
  right: -200px;
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
