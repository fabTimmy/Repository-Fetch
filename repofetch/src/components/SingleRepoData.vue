<template>
    <div name="single-repo-data"> 
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
    <br>
    <br>
    <br>
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
                            language: repo.data.language}
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
    border: 1px solid #ccc;
    color: #666;
    border-collapse: collapse;
    min-width: 50vw;
    margin: auto;
    border-radius: 0.7rem;
    background: rgb(245, 248, 248);
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
button{
    background: #1c64ac;
    color: #fff;
    /* font-weight: 600; */
    font-size: 1rem;
    text-align: center;
    border: none;
    border-radius: 0.7rem;
    padding: 0.7rem 1.4rem;
    margin: 1rem;
    cursor: pointer;
}
button:hover{
    background: #1c64acde;
    color: #fff;
    font-weight: 300;
    font-size: 1.1rem;
    padding: 0.7rem 1.4rem;
    transition: 1s ease all;
    opacity: 0.8;
}
</style>