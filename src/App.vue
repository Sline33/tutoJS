<template>
  <div id="myApplication">
    <h1>{{ title }}</h1>
    <input v-model="title" v-on:change="callMethod">
  </div>
</template>

<script>
module.exports = {
    data: function() {
        return{
            title: 'Titre de mon application',
        }
    },
    methods: {
        callMethod: function(event) {
            alert('Hello: ' + this.title);
        }
    }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>