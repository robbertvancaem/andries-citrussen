<template>
  <nav>
    <div class="logo">
      <a href="/" target="_self">
        <Logo />
      </a>
    </div>
    <ul>
      <menu-item v-for="item in items" v-bind="item" :key="item.key" />
    </ul>
  </nav>
</template>

<script>
import Logo from "../assets/logo.svg";
import MenuItem from "./MenuItem.vue";

export default {
  name: "app-menu",
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  components: {
    Logo,
    MenuItem
  },
  computed: {
    items: function() {
      return this.menuItems.map((item, i) => ({
        ...item,
        key: i
      }));
    }
  }
};
</script>

<style scoped>
nav {
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
}
nav:before {
  background: #fff;
  content: "";
  height: 0;
  left: -20px;
  top: -20px;
  transition: height 0.25s ease;
  transition-delay: 0.2s;
  position: absolute;
  width: calc(100% + 40px);
  z-index: -1;
}
nav:hover:before {
  height: calc(100% + 40px);
  transition-delay: 0s;
}
nav:hover svg .logo-new1 {
  fill: #383230;
  transition: fill 0.2s ease;
}
nav:hover >>> li a:before {
  opacity: 1;
  transform: translateY(0);
}
.logo {
  width: 320px;
}
.logo a {
  display: block;
  height: 100%;
}
svg {
  height: 100%;
  width: auto;
}
svg .logo-new0 {
  fill: #e84e2b;
}
svg .logo-new1 {
  fill: #fff;
  transition: fill 0.2s ease 0.3s;
}
ul {
  display: flex;
  flex: 0 1 auto;
}
</style>
