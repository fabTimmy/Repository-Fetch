<template>
    <div id="single-repo-data"> 
    <table>
        <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      <tr v-for="repo in repos" :key="repo.id">
        <td>{{ repo.id }}</td>
        <td>{{ repo.name }}</td>
      </tr>
      <h3>{{ $route.params.id }}</h3>
      <RouterLink to="/">Go Home</RouterLink>
    </table>
    </div> 
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                id: this.$route.params.id,
                repos: {},
            };
        },
        // methods: {
        //         getRequest() {
        //         },
        //     },
        //     watch: {
        //         function(){
        //             this.getRequest()
        //         }
        //     },
            created() {
                axios.get(`(https://api.github.com/users/fabTimmy/repos?${this.id})`)
                .then((data) => {
                    console.log(data.data);
                    this.repos = data.data[this.id];
                }
                )
        }
        }
</script>

<style scoped >
#single-repo-data{
    display: flex;
    background-color: #000;
    justify-content: center;
    height: 100vh;
    text-align: center;
    color: #fff !important;
    
}
h3{

}
</style>