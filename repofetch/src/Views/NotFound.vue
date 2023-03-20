<template>
  <div>
    <h1>404!!</h1>
    <h3>This page is not found</h3>

    <br />
    <br />
    <br />
    <br />
    <button type="button" @click="redirectMe()" class="btn btn-primary">Go Home</button>
  </div>
</template>
<script>
export default {
  methods: {
    redirectMe() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
div {
  color: #fff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  padding: 3rem;
  border-radius: 1rem;
}
button {
  background: #1c64ac;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  border: none;
  border-radius: 0.7rem;
  padding: 0.7rem 1.4rem;
  margin: 1rem;
  cursor: pointer;
}
button:hover {
  background: #1c64acde;
  color: #fff;
  font-weight: 300;
  font-size: 1.1rem;
  padding: 0.7rem 1.4rem;
  transition: 1s ease all;
  opacity: 0.8;
}
h1{
  color: #f2f2f2;
}
.img {
  width: 100px;
}
</style>
