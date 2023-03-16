<template>
    <div id="single-repo-data"> 
    <table>
        <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      <tr>
        <td>{{ repos.id }}</td>
        <td>{{ repos.name }}</td>
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
        methods: {
                makeRequest() {
                    axios.get(`(https://api.github.com/users/fabTimmy/repos?${this.id})`)
                    .then((data) => {
                        console.log(data.data);
                        this.repos = data.data[this.id];
                    }
                    )
                },
            },
            watch: {
                function(){
                    this.makeRequest()
                }
            },
            created() {
                this.makeRequest()
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