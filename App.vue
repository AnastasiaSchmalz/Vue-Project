<template>
  <div id="app">
    <div id="nav-bar">
      <router-link to="/login"><p>Start</p></router-link>
    </div>
    <router-view v-on:change="aktualisieren" v-on:sort-dauer="sortieren" v-bind:buchungen="buchungen"></router-view>
  </div>
  </template>
  
  <script>
  import Login from "./components/login.vue";
  import Liste from "./components/liste.vue";
  import Neueingabe from "./components/neueingabe.vue";
  export default {
    name: "App",
    data() {
      return {
        buchungen:  []
      }
    },
    components: {
      Login,
      Liste,
      Neueingabe
    },
    methods: {
      aktualisieren: function (buchungen) {
        this.buchungen = this.buchungen.concat(buchungen),

        localStorage.setItem("buchungen", JSON.stringify(this.buchungen))
      },
      sortieren: function () {
        this.buchungen = this.buchungen.sort(function(a, b) {
          if (a.dauer > b.dauer) {
          return 1;
          }
          if (a.dauer < b.dauer) {
          return -1;
          }
          return 0;
          });
      }
    }
  };
  </script>
  
  <style>
  body {
      background-color: #DCDCDC;
      font-family: Helvetica, sans-serif;
      font-size: 1em;
    }
  
  .container {
      margin: 12em;
      padding: 6em;
      width: 50%;
      border-radius: 20px;
      background-color: #ffffff;
      }
  
  #nav-bar {
    width: 100%;
    height: 5%;
    background-color: #312f3b;
  }
  
  p {
    color: white;
    padding: 1em;
  }
  </style>
