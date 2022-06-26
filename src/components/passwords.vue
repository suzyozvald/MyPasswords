<template>
  <div>
    <div class="card">
      <div class="comptext">
        <div class="row">
          <div id="s" class="column">
            <h6><b id="txt">Password for: </b>{{ password.site }}</h6>
          </div>
          <div id="s" class="column">
            <h6><b id="txt">Password:</b> {{ password.password }}</h6>
          </div>
          <div id="s" class="column">
            <h6><b id="txt">Note:</b> {{ password.note }}</h6>
          </div>
          <div id="s" class="column">
            <b
              id="edit"
              v-on:click="
                $router.push({
                  name: 'EditPassword',
                  params: { site: password.site },
                })
              "
              >Edit</b
            >
          </div>
          <div id="s" class="column">
            <b id="delete" v-on:click="remove(password.site)">Delete</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#delete {
  color: red;
}
#delete:hover {
  text-decoration: underline;
  cursor: pointer;
}
#edit {
  color: rgb(0, 26, 255);
}
#edit:hover {
  text-decoration: underline;
  cursor: pointer;
}
#s {
  margin-right: 5%;
}
</style>

<script>
import store from "../store";
export default {
  data() {
    return store;
  },
  props: ["password"],
  methods: {
    remove(site) {
      var remove = firebase
        .firestore()
        .collection("passwords")
        .doc(this.userEmail)
        .collection(this.userEmail)
        .where("site", "==", site);
      remove
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            doc.ref.delete();
          });
        })
        .then(alert("Delete successful"));
    },
  },
};
</script>
