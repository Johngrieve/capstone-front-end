/* eslint-disable vue/require-v-for-key */
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      accounts: [],
      currentAccount: {},
      newAccount: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/accounts.json").then((response) => {
      console.log("All Accounts", response.data);
      this.accounts = response.data;
    });
  },
  methods: {
    createAccount: function () {
      var params = {
        name: this.name,
        character: this.character,
        rank: this.rank,
        role: this.role,
      };
      axios
        .post("/accounts", params)
        .then((response) => {
          console.log("Successfully created new account", response.data);
          this.accounts.push(response.data);
          this.newAccount = {};
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="account in accounts" :key="account.id">
        <p>
          {{ account.name }}
        </p>
      </li>
    </ul>
  </div>
</template>
