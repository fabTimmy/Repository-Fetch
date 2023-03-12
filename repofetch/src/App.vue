<template>
  <div>
    <Pagination  
      :totalPages="6"
      :perPage="5"
      :currentPage="currentPage"
      @pagechanged="onPageChange"/>
  </div>
</template>

<script>
import Pagination from './components/Pagination.vue';
export default {
  name: 'App',
  components: {
    Pagination,
  },
  data () {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
