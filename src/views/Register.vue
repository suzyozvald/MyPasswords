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
        <form @submit.prevent="signup">
          <div class="form-group">
            <label id="txt" for="exampleInputEmail1"
              >FIll in the form below to use MyPasswords.
              <strong> Password must be min of six characters.</strong>
            </label>
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
          </div>
          <div class="form-group">
            <input
              v-model="password2"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              aria-describedby="loginHelp"
              placeholder="Confirm password"
            />
          </div>
          <button type="submit" class="btn btn-primary mt-5">Register</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
    <img
      src="@/assets/register.png"
      alt=""
      width="700"
      height="400"
      class="rounded mx-auto d-block"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: "",
      email: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(this.$router.push("/PasswordList"))
        .catch((error) => {
          console.error(error);
          alert("Password must be min of six characters");
          this.errorMessage = error.message;
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
