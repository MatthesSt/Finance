<template>
  <div id="mainView">
    <h2 class="header"><i>FinanzApp</i></h2>
    <div class="container">
      <form @submit.prevent="addExpense()">
        <div class="text-start form-control">
          <label class="form-label" for="expense">Neue ausgabe:</label>
          <input class="form-control" id="expense" type="text" placeholder="zweck" required v-model="use" />
          <input class="form-control mt-2" type="number" placeholder="kosten" required v-model="cost" />
          <button type="submit" class="btn btn-success my-2">hinzufügen</button>
        </div>
      </form>
    </div>
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
    return {
      use: "",
      cost: 0,
      error: "",
    };
  },
  methods: {
    async addExpense() {
      try {
        let date = new Date().toLocaleDateString();
        await API.addExpense(this.use, this.cost, date);
      } catch (e) {
        this.error = "Ausgabe konnte nicht hinzugefügt werden";
      }
    },
  },
});
</script>
<style lang="scss">
.header {
  padding: 1em;
  font-weight: bold;
}
</style>
