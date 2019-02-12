<template>
  <li @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <a :href="url" :data-hover="label">
      <span>{{ label }}</span>
    </a>
    <transition name="unfold">
      <div v-if="showSubMenu">
        HALLO SUBCONTENT IS DIT OFZO
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  name: "menu-item",
  props: {
    url: String,
    label: String
  },
  data: function() {
    return {
      showSubMenu: false
    };
  },
  methods: {
    onMouseOver: function(e) {
      this.showSubMenu = true;
    },
    onMouseLeave: function(e) {
      this.showSubMenu = false;
    }
  }
};
</script>

<style scoped>
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
li a:hover:before {
  color: #e84e2b;
}
li a span {
  color: #fff;
  display: block;
  transition: left 0.2s ease, color 0.2s ease;
}
li a:before {
  color: #383230;
  content: attr(data-hover);
  left: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  transition: all 0.5s ease;
}
.unfold-enter-active,
.unfold-leave-active {
  transition: opacity 0.5s;
}
.unfold-enter,
.unfold-leave-to {
  opacity: 0;
}
</style>
