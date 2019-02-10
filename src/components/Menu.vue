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
  padding: 20px 20px;
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
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
  font-weight: 600;
  padding-left: 40px;
  text-decoration: none;
}
</style>
