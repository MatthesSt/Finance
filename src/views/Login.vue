<template>
  <div id="LoginPanel" class="d-flex flex-column justify-content-center align-items-center container">
    <div class="card card-default">
      <div class="card card-header">Login</div>
      <div class="card card-body">
        <form class="d-flex flex-column" @submit.prevent="register ? createAcc() : login()">
          <div class="text-start">
            <label class="form-label">Email:</label>
            <input class="form-control" type="email" v-model="email" required />
            <label class="form-label mt-2">Passwort:</label>
            <input class="form-control" type="password" v-model="password" required />
            <div v-if="register">
              <label class="form-label mt-2">Passwort bestätigen:</label>
              <input class="form-control" type="password" v-model="confirmPassword" required />
              <label class="form-label mt-2">Username:</label>
              <input class="form-control" type="text" v-model="username" required />
            </div>
          </div>
          <div class="d-flex flex-column align-items-center">
            <button v-if="!loading" class="btn btn-success mt-2" type="submit">{{ !register ? "einloggen" : "registrieren" }}</button>
            <div v-else class="spinner-border spinner-border-sm mt-2"></div>
            <div class="btn btn-primary mt-2" @click="register = !register">{{ register ? "hier einloggen" : "hier registrieren" }}</div>
          </div>
        </form>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as API from "../../API";

export default defineComponent({
  data() {
    return {
      register: false,
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      error: "",
      loading: false,
    };
  },
  methods: {
    async login() {
      try {
        this.loading = true;
        if (await API.login(this.email, this.password)) this.$router.push("/");
      } catch (e) {
        this.error = "Du konntest nicht angemeldet werden ";
      } finally {
        this.loading = false;
      }
    },
    async createAcc() {
      if (this.password !== this.confirmPassword) {
        this.error = "Die passwörter stimmen nicht überein";
        return;
      }
      try {
        this.loading = true;
        await API.register(this.email, this.password, this.username);
        this.$router.push("/");
      } catch (e) {
        this.error = "Du konntest nicht registriert werden ";
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
#LoginPanel {
  height: 100vh;
}
</style>
