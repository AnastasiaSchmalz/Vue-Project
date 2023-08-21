<template>
  <div class="container">
    <form>
      <h1>Login</h1>
      <label for="email">E-Mail:</label>
      <input id="email" type="text" name="email" required>
      <br>
      <label for="password">Passwort:</label><input id="password" type="text" name="password" required>
      <br>
      <br>
      <div class="button-container">
        <router-link id="login-button" to="/liste"><button type="button">Login</button></router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style>
#login-button {
    float: left;
    margin:1em;
    border-radius: 3px;
  }

#login-button:hover {
    background-color: #d3cacc;
    cursor: pointer;
  }
</style>
