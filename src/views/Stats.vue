<template>
  <div class="d-flex flex-column align-items-center justify-content-center h-100">
    <div v-for="expense in expenses" :key="expense.use">{{ expense.use }}: {{ expense.cost }}</div>
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
      expenses: [] as API.Expense[],
    };
  },
  async mounted() {
    this.expenses = await API.getExpenses();
  },
});
</script>
<style lang="scss" scoped>
li {
  list-style-type: none;
}
</style>
