<template>
  <div id="footer" class="d-flex justify-content-center">
    <button class="btn tabLink shadow-none" @click="$router.push('/')">Home</button>
    <button class="btn tabLink shadow-none" @click="$router.push('/stats')">Stats</button>
    <button class="btn tabLink shadow-none" @click="$router.push('/profile')">Profile</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return { console, window };
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
#footer {
  background-color: grey;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.tabLink {
  width: 100%;
  border-width: 0px 1px;
  border-color: black;
  border-style: solid;
  border-radius: 0px;
  border-collapse: collapse;
}
</style>
