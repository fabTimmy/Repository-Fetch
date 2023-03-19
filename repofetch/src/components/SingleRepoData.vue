<template>
    <div name="single-repo-data"> 
    <table>
        <tr>
        <th>id</th>
        <th>Name</th>
        <th>Language</th>
      </tr>
      <tr>
        <td>{{ repos.id }}</td>
        <td>{{ repos.name }}</td>
        <td>{{ repos.language }}</td>
      </tr>
    </table>
      <RouterLink to="/"><button>Go Home</button></RouterLink>
    </div> 
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return {
                name: this.$route.params.id,
                repos: {},
            };
        },
        created() {
          console.log(this.$route.params)
          axios.get(`https://api.github.com/repos/fabTimmy/${this.name}`)
                    .then(repo => {
                        this.repos = {
                            id: repo.data.id,
                            name: repo.data.name,
                            language: repo.data.language,}
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
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    color: #fff !important;
    
}
table{
    border: 1px solname #ccc;
    border-collapse: collapse;
    min-wnameth: 50vw;
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
  border: 1px solname #ccc;
  padding: 0.7rem 1.4rem;
}
h3{

}
</style>