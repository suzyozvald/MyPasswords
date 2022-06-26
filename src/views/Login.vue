<template>
  <div>
    <div class="row">
      <div class="col">
        <h4 id="txt" class="text-center mb-5">Welcome to MyPasswords</h4>
      </div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form @submit.prevent="login">
          <div class="form-group">
            <label id="txt" for="exampleInputEmail1"
              >Enter e-mail and password to Login</label
            >
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="E-mail"
            />
          </div>
          <div class="form-group">
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              aria-describedby="loginHelp"
              placeholder="Password"
            />
            <small id="loginHelp" class="form-text text-muted"
              ><router-link to="/register"
                >No account? Register</router-link
              ></small
            >
          </div>
          <button type="submit" class="btn btn-primary mt-5">Unlock</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
    <img
      src="@/assets/login.png"
      alt=""
      width="450"
      height="400"
      class="rounded mx-auto d-block"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function (error) {
          console.log(error);
          alert("Login not sucessful!");
        })
        .then(() => {
          this.$router.push("/PasswordList");
        });
    },
  },
};
</script>

<style>
#txt {
  color: rgb(2, 5, 153);
}
</style>
