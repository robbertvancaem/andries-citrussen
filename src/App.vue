<template>
  <div id="app">
    <Menu :menuItems="menuItems" />
    <Header :title="homepageData.title" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";

import menuItems from "./data/menuItems";
import homepageData from "./data/homepage";

export default {
  name: "app",
  components: {
    Header,
    Menu
  },
  data: () => ({
    menuItems,
    homepageData
  })
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-size: 20px;
  overflow: hidden;
}

ul,
li {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: #e84e2b;
  color: #fff;
}

h1, h2, h3, h4, h5, h6, p {
    color: #383230
}
</style>
