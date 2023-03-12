<template>
    <div>
        <main>
        <Repo />
        </main>
    </div>
</template>

<script>
import Repo from '../Repo.vue';
    export default {
        name: 'homePage',
        components: {
            Repo,
        }
    }

</script>

<style scoped>
main {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100vw !important;
  margin: auto !important;
  /* flex: 1 1 auto;  */
}

@media (min-width: 1024px) {
  /* .container{
    margin: auto;
    width: 100%;
  } */
  main {
    width: 80vw !important;
    margin: auto !important;
    flex: 1 1 auto; 
  }
}
</style>