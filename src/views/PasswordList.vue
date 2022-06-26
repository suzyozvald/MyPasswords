<template>
  <div>
    <div v-if="!authenticated">
      <h3 id="txt" class="text-center mb-5">You are not logged in!</h3>
    </div>
    <div v-if="authenticated">
      <h3 id="txt" class="text-center mb-5">
        All passwords for user {{ userEmail }}
      </h3>
      <div></div>
      <passwords
        class="komp"
        :key="password.id"
        :password="password"
        v-for="password in passwordlist"
      />
      <button
        id="button"
        class="btn btn-primary mt-5"
        @click="$router.push('AddPassword')"
      >
        Add new password
      </button>
    </div>
    <img
      src="@/assets/passwordlist.jpg"
      alt=""
      width="700"
      height="400"
      class="rounded mx-auto d-block"
    />
  </div>
</template>

<script>
import passwords from "@/components/passwords.vue";
import store from "../store";
export default {
  data() {
    return store;
  },
  components: {
    passwords,
  },
  mounted() {
    if (
      this.passwordlist.some((passwords) => passwords.id === doc.data().id) ==
      false
    ) {
      firebase
        .firestore()
        .collection("passwords")
        .doc(this.userEmail)
        .collection(this.userEmail)
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              let doc = change.doc;
              let passwords = doc.data();
              passwords.id = doc.id;
              this.passwordlist.push(passwords);
            } else if (change.type === "removed") {
              this.passwordlist = this.passwordlist.filter((passwordlist) => {
                return passwordlist.id != change.doc.id;
              });
            }
          });
        });
    }
  },
};
</script>

<style>
#button {
  margin-left: 20px;
}

#txt {
  color: rgb(2, 5, 153);
}

.komp {
  margin-left: 10px;
  margin-bottom: 10px;
}

.card {
  float: center;
  height: 30px;
  width: 50%;
  border: 2px solid rgb(2, 5, 153);
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
}

.comptext {
  margin-left: 5%;
}
</style>
