<script>
import axios from "axios";
export default {
  data: function () {
    return {
      email: "",
      password: "",
      password_confirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      axios
        .post("/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label class="form-label">Email:</label>
        <input type="email" v-model="email" class="form-control" />
      </div>
      <div>
        <label class="form-label">Password:</label>
        <input type="password" v-model="password" class="form-control" />
      </div>
      <div>
        <label class="form-label">Confirm Password:</label>
        <input type="password" v-model="password_confirmation" class="form-control" />
      </div>
      <input type="submit" value="Submit" class="btn btn-primary mt-4" />
    </form>
  </div>
</template>
