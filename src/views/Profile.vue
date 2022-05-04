<template>
  <div class="d-flex flex-column align-items-center justify-content-center h-100">
    <button class="btn btn-secondary w-50 m-3" @click="logout()">Logout</button>
  </div>
  <Footer></Footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/Footer.vue";
import * as API from "../../API";
export default defineComponent({
  components: {
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    async logout() {
      try {
        await API.logout();
        this.$router.push("/login");
      } catch (e) {
        console.error(e);
      }
    },
  },
});
</script>
