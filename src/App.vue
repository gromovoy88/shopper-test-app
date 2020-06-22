<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
}

input, select {
  width: 200px;
  height: 40px;
  padding: 0px 5px;
  border: 1px solid;

  &:last-child {
    margin-right: 0px;
  }
}

</style>
