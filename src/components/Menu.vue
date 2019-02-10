<template>
  <nav>
    <div class="logo">
      <a href="/" target="_self">
        <Logo />
      </a>
    </div>
    <ul>
      <li v-for="item in items" v-bind:key="item.key">
        <a :href="item.url" target="_self">
          <span>{{ item.label }}</span>
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Logo from "../assets/logo.svg";

export default {
  name: "app-menu",
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  components: {
    Logo
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
  height: calc(100% + 40px);
  left: -20px;
  top: -20px;
  transition: width 0.2s ease 0.2s;
  position: absolute;
  width: 0;
  z-index: -1;
}
nav:hover:before {
  width: calc(100% + 40px);
  transition: width 0.2s ease;
}
nav:hover li a span {
  left: 0;
  transition: left 0.2s ease 0.2s, color 0.2s ease;
}
nav:hover svg .logo-new1 {
  fill: #383230;
  transition: fill 0.2s ease;
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
li {
  align-items: center;
  display: flex;
  justify-content: center;
  list-style-type: none;
}
li:before {
  content: "\200B";
}
li a {
  color: #fff;
  display: flex;
  font-weight: 600;
  overflow: hidden;
  margin-left: 40px;
  position: relative;
  text-decoration: none;
}
li a:hover span {
  color: #e84e2b;
}
li a span {
  color: #383230;
  left: -100%;
  position: absolute;
  transition: left 0.2s ease, color 0.2s ease;
}
</style>
