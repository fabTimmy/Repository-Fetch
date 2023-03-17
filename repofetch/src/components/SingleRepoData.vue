<template>
    <div id="single-repo-data"> 
    <table>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Language</th>
      </tr>
      <tr>
        <td>{{ repos.id }}</td>
        <td>{{ repos.name }}</td>
        <td>{{ repos.language }}</td>
      </tr>
    </table>
      <h3>{{ $route.params.id }}</h3>
      <RouterLink to="/">Go Home</RouterLink>
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
        mounted() {
                    axios.get(`(https://api.github.com/users/fabTimmy/repos${this.id})`)
                    .then(repo => {
                        this.repos = repo.data.filter( repos => {
                            return repos.id === this.id
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
        }
        }
</script>

<style scoped >
#single-repo-data{
    display: flex;
    flex-direction: column;
    /* background-color: #000; */
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    color: #fff !important;
    
}
table{
    border: 1px solid #ccc;
    border-collapse: collapse;
    min-width: 50vw;
    margin: auto;
    border-radius: 0.7rem;
}
th {
  background: #1c64ac;
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
}
th,
td {
  border: 1px solid #ccc;
  padding: 0.7rem 1.4rem;
}
h3{

}
</style>