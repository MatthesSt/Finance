<template>
  <div class="d-flex flex-column" style="height: 90%">
    <h3 class="pt-4">Ausgaben</h3>
    <div class="d-flex flex-column align-items-center my-5 overflow-auto" style="height: 0; flex: 1">
      <div class="list mt-1" v-for="expense in expenses" :key="expense.use">
        <div>{{ expense.date }}</div>
        <div>{{ expense.use }}</div>
        <div>{{ expense.cost }}€</div>
      </div>
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
      expenses: [] as API.Expense[],
    };
  },
  async mounted() {
    this.expenses = await API.getExpenses();
  },
});
</script>
<style lang="scss" scoped>
.list {
  background-color: white;
  border-radius: 5px;
  width: 70%;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
}
</style>
