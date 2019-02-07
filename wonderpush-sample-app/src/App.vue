<template>
  <div id="app">
    <p>Connecting to wonderpush</p>
    <WonderPush v-bind="options">
      <SwitchButton/>
      <EventList/>
    </WonderPush>
  </div>
</template>

<script>
import {WonderPush} from 'vue-wonderpush'
import EventList from './components/EventList';
import SwitchButton from './components/SwitchButton';

export default {
  name: 'App',
  components : {
    WonderPush,
    EventList,
    SwitchButton
  },
  data: function(){
    return {
      options: {
        webKey: "a6a00ccf60ffee04cb201cead4304fc4db8fa8e0a2823a77466e8c8ebeed4e25",
        applicationName: "React WonderPush Demo",
        notificationDefaultUrl: "https://www.wonderpush.com/demo/",
        notificationIcon: "../img/image.png"
      }
    }
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
