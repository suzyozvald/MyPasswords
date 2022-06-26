<template>
  <div>
    <div>
      <h4 id="txt" class="text-center mb-5">Add password</h4>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <form @submit.prevent="add">
            <div class="form-group">
              <label id="txt" for="passwordField">Password for</label>
              <input
                v-model="site"
                class="form-control"
                id="site"
                placeholder="Website"
              />
            </div>
            <div class="form-group">
              <label id="txt">Password</label>
              <input
                v-model="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label id="txt">Note</label>
              <input
                v-model="Note"
                class="form-control"
                id="Note"
                placeholder="Note"
              />
            </div>
            <button type="submit" class="btn btn-primary mt-5">
              Add password
            </button>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return store;
  },
  methods: {
    add() {
      firebase
        .firestore()
        .collection("passwords")
        .doc(this.userEmail)
        .collection(this.userEmail)
        .doc(this.site)
        .set({
          id: this.userEmail,
          site: this.site,
          password: this.password,
          note: this.Note,
        })
        .then(alert("Password added successfully"))
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
