<script>
import Vue from 'vue';
import VueDropdownMenu from '@/vue-dropdown-menu.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueDropdownMenu
  },
  methods: {

    test() {
      alert("Hello! ✌️")
    }

  }
});
</script>

<template>
  <div id="app">
    
    <vue-dropdown-menu menu-title="Vue Dropdown Menu" dark-mode="auto">

      <section class="option">
        <a href="#">This is basic link</a>
        <span class="desc">This is Vue dropdown menu basic link</span>
      </section>

      <section class="option">
        <button @click="test">This is button for method</button>
        <span class="desc">This is Vue dropdown menu method button</span>
      </section>

    </vue-dropdown-menu>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap');

body {
  background: #f9f9f9;
  //background: #222;
}

* {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  box-sizing: border-box; padding: 0; margin: 0
}

#app {
  display: flex;
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: center;
}

</style>
