<template>
  <div id="app">
    <div>
      <div class="container"></div>
      <div class="row">
        <div class="col">
          <nav class="navbar navbar-expand-lg navbar-light mb-2">
            <router-link class="navbar-brand" :to="{ name: 'PasswordList' }">
            </router-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="form-inline my-2 my-lg-0 mr-auto ml-5"></form>
              <div id="mp">
                <b v-on:click="$router.push('PasswordList')">My passwords</b>
              </div>
              <router-link
                v-if="!authenticated"
                class="btn btn-outline my-2 my-sm-0 mr-2"
                to="/login"
                >Login</router-link
              >
              <a v-if="authenticated"> {{ userEmail }} </a>
              <a
                v-if="authenticated"
                @click="logout"
                id="logout"
                class="btn btn-outline my-2 my-sm-0 mr-2"
                href="#"
                >Odjava</a
              >
              <router-link
                v-if="!authenticated"
                class="btn btn-outline my-2 my-sm-0 mr-2"
                to="/register"
                >Register</router-link
              >
            </div>
          </nav>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script type="text/javascript">
import store from "@/store.js";

export default {
  data() {
    return store;
  },

  methods: {
    logout() {
      firebase.auth().signOut().then(window.location.reload());
    },
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("User is logged in with email " + user.email);
        this.authenticated = true;
        this.userEmail = user.email;
        if (this.$route.name === "Login" || this.$route.name === "home")
          this.$router
            .push({ name: "PasswordList" })
            .catch((err) => console.log(err));
      } else {
        console.log("User is not logged in");
        this.authenticated = false;
        if (this.$route.name !== "Login")
          this.$router.push({ name: "Login" }).catch((err) => console.log(err));
      }
    });
  },
};
</script>

<style lang="scss">
#mp {
  margin-right: 30px;
  color: rgb(0, 26, 255);
}
#mp:hover {
  text-decoration: underline;
  cursor: pointer;
}

#logout:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
