<template>
  <div id="app">
    <p>Connecting to wonderpush</p>
    <!-- <WonderPush/> -->
    <SwitchButton/>
    <EventList/>
    <router-view/>
  </div>
</template>

<script>
// import WonderPush from '@/components/WonderPush';
import EventList from '@/components/EventList';
import SwitchButton from '@/components/SwitchButton';

export default {
  name: 'App',
  components : {
    // WonderPush,
    EventList,
    SwitchButton
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
