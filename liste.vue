<template>
  <div class="container">
  <h1>Deine Aktivitäten</h1>
  <table>
    <tr>
      <th>Aktivität</th>
      <th id="dauer" v-on:click="sort">Dauer</th>
      <th>Führer</th>
      <th>Mittagessen</th>
      <th>Länge in km (Nur bei Wanderungen und Fahrrad-Touren)</th>
    </tr>
  <tr v-for="buchung in buchungen" :key="buchung">
    <td>{{buchung.aktivitaet}}</td>
    <td>{{buchung.dauer}}</td>
    <td>{{buchung.fuehrer}}</td>
    <td>{{buchung.mittagessen}}</td>
    <td>{{buchung.laenge}}</td>
  </tr>
  </table>
  <neuer-eintrag></neuer-eintrag>
</div>
</template>

<script>
  import neuerEintrag from "./neuer-eintrag.vue"
  export default {
    name: "Liste",
    components: {neuerEintrag},
    props: ["buchungen"],
    methods: {
      sort: function() {
        this.$emit("sort-dauer")
      }
    }
  }
  </script>

<style>
.container {
  margin: 1em;
  padding: 8em;
  border-radius: 10px;
  }

tr, td {
  border-top: solid;
  border-bottom: solid;
  border-color: lightgrey;
  border-spacing: 0px;
  border-collapse: collapse;
  empty-cells: hide;
}

th {
  padding: 0.5em;
  color: #708090;
}

#dauer:hover {
  cursor: pointer;
  color: #F08080;
}
</style>