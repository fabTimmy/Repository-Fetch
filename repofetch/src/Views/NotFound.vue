<template>
    <div>
      <h1>404</h1>
      <h3>This page is not found</h3>
      <button
      type="button"
      @click="redirectMe()"
      class="btn btn-primary"
      >
      Go Home
      </button>
    </div>
  </template>
  <script>
  export default {
    methods: {
      redirectMe() {
        this.$router.push({ name: 'Home' })
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  