<template>
    <div>
        <h3>RepoData</h3>
    </div> 
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                RepoDatas: '',
                id: ''
            };
        },
        created() {
            this.id = this.$route.params.id;
            axios.get(`?id=${this.id}`).then((response) => {
                this.RepoDatas = response.data[this.id];
            })
        //     Axios.get(`https://api.github.com/users/fabTimmy/repos`).then((response => {
        //   this.repos = response.data;
        // }))
        }
    }
</script>