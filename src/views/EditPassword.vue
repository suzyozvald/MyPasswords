<template>
  <div id="unos">
    <div>
      <h4 id="txt" class="text-center mb-5">
        Edit password for site '{{ this.$route.params.site }}'
      </h4>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <form @submit.prevent="edit(password)">
            <div class="form-group">
              <label id="txt">New password</label>
              <input
                v-model="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary mt-5">
              Change password
            </button>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <img
      src="@/assets/changepass.png"
      alt=""
      width="700"
      height="400"
      class="rounded mx-auto d-block"
    />
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return store;
  },
  methods: {
    edit(password) {
      var edit = firebase
        .firestore()
        .collection("passwords")
        .doc(this.userEmail)
        .collection(this.userEmail)
        .where("site", "==", this.$route.params.site);
      edit
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            doc.ref.set(
              {
                password: password,
              },
              { merge: true }
            );
          });
        })
        .then(alert("Edit successful"));
    },
  },
};
</script>
<style>
#txt {
  color: rgb(2, 5, 153);
}
</style>
