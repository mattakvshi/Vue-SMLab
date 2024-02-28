<template>
  <div id="app">
    <div id="nav">
        <router-link class="nav" to="/">Home</router-link>
        <router-link class="nav" to="/about">About</router-link>
        <router-link class="nav" to="/new">Add new artivle</router-link>
    </div>
    <router-view class="container"/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #2c3e50;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  /* отображаем курсор в виде руки при наведении; некоторые
  считают, что необходимо оставлять стрелочный вид для кнопок */
  cursor: pointer;
}

.nav{
  padding: 10px 15px;
  margin: 0 20px;
  font-style: none;
  text-decoration: none;
  font-size: 20px;
  color:darkslategray;

  border: solid 1px darkslategray;
  border-radius: 10px;
}
.nav:hover {
  opacity: 0.6;
}

#nav{
  margin: 40px 0;
}

</style>
