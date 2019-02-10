<template>
  <div id="app">
    <Menu :menuItems="menuItems" />
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
import menuItems from "./data/menuItems";

export default {
  name: "app",
  components: {
    Header,
    Menu
  },
  data: () => ({
    menuItems
  })
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-size: 20px;
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
</style>
