<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
  methods: {
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <span v-if="!isLoggedIn">
      <router-link to="/signup">Signup</router-link>
    </span>
    |
    <span v-if="!isLoggedIn">
      <router-link to="/login">Login</router-link>
    </span>
    |
    <span v-if="isLoggedIn">
      <router-link to="/logout">Logout</router-link>
    </span>
    |
    <span>
      <router-link to="/accounts">All Players</router-link>
    </span>
    |
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
