<template>
  <div class="container">
    <h1>Wähle deine Aktivität aus</h1>
    <form>
      <label for="aktivität">Art der Aktivität:</label>
      <select id="aktivität" name="aktivität" v-model="aktivitaet" required>
        <option>Wanderung</option>
        <option>Fahrrad-Tour</option>
        <option>Site-Seeing-Bustour</option>
      </select>
      <br>
      <label for="dauer">Dauer in Stunden:</label>
      <select id="dauer" name="dauer" v-model="dauer" required>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <br>
      <br>
      <span>Mit Führer?</span>
      <input id="mitFuehrer" type="radio" value="ja" name="fuehrer" v-model="fuehrer">
      <label for="mitFuehrer">Ja</label>
      <input id="ohneFuehrer" type="radio" value="nein" name="fuehrer" v-model="fuehrer">
      <label for="ohneFuehrer">Nein</label>
      <br>
      <br>
      <input id="mitMittagessen" type="radio" value="mit Mittagessen" name="mittagessen" v-model="mittagessen">
      <label for="mitMittagessen">Mit Mittagessen</label>
      <input id="kMittagessen" type="radio" value="kein Mittagessen" name="mittagessen" v-model="mittagessen">
      <label for="kMittagessen">Kein Mittagessen</label>
      <br>
      <br>
      <label for="laenge">Falls du eine Wanderung oder Fahrrad-Tour ausgewählt hast:</label>
      <input id="laenge" type="number" name="laenge" min="1" max="50" v-model="laenge">
      <span>km</span>
      <br>
      <br>
      <div class="button-container">
        <button id="submit-button" type="reset" v-on:click="speichern">Speichern</button>
        <router-link to="/liste"><button id="submit-button" type="button" v-on:click="einfuegen">Zur Liste</button></router-link>
        <router-link to="/liste"><button id="zurueck-button" type="button">Abbrechen</button></router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Neueingabe",
  data() {
    return {
          buchungen: [],
          aktivitaet:"",
          dauer:"",
          fuehrer:"",
          mittagessen:"",
          laenge:""
        }
      },
      methods: {
        speichern: function() {
          this.buchungen.push({aktivitaet: this.aktivitaet,dauer: this.dauer, fuehrer: this.fuehrer, mittagessen: this.mittagessen, laenge: this.laenge})
        },
        einfuegen: function() {
          this.$emit("change", this.buchungen)
        }
      }
}
</script>

<style>
  #zurueck-button {
    background-color: #ccced1;
    margin:2em;
    width: 10em;
    border-radius: 3px;
}

#submit-button {
    background-color: #F08080;
    margin:2em;
    width: 8em;
    border-radius: 3px;
}

#submit-button:hover {
    background-color: #d3cacc;
    cursor: pointer;
  }
</style>