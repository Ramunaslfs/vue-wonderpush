<template>
  <div id="app">
    <h1>Connecting to wonderpush</h1>
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
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1{
  text-align: center;
  font-weight: bold;
}
p{
  text-align: center;
}
.firstVisit{
  background-color: #0090FF;
}
.firstVisit:hover{
  background-color: #A8CEEC;
}
.newsRead:hover{
  background-color: #66C8FC;
}
.gameOver:hover{
  background-color: #8DCFF3;
}
.like:hover{
  background-color: #D0CFCF;
}
.addToCart:hover{
  background-color: #B3B2B2;
}
.purchase:hover{
  background-color: #555454;
}
.nearEiffelTower:hover{
  background-color: #65CEAB;
}
.nearLouvre:hover{
  background-color: #43957A;
}
.inactiveUser:hover{
  background-color: #C26868;
}



.newsRead {
  background-color: #10ACFF;
}
.gameOver{
  background-color: #63C0F2;
}
.like{
  background-color: #ACD0E4;
}
.addToCart{
  background-color: #959595;
}
.purchase{
  background-color: #333333;
}
.nearEiffelTower{
  background-color: #33CC99;
}
.nearLouvre{
  background-color: #009966;
}
.inactiveUser{
  background-color: #DE7171;
}

.event {
  line-height: 3em;
  height: 3em;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: 150%;
}


.switch {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 56px;
  height: 20px;
  padding: 3px;
  background-color: white;
  border-radius: 18px;
  box-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, .05);
  cursor: pointer;
  background-image: linear-gradient(to bottom, #eee, white 25px);
}

.switch-input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.switch-label {
  position: relative;
  display: block;
  height: inherit;
  font-size: 10px;
  text-transform: uppercase;
  background: #eceeef;
  border-radius: inherit;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .12), inset 0 0 2px rgba(0, 0, 0, .15);
  transition: .15s ease-out;
  transition-property: opacity, background;
}
.switch-handle {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
  background-image: linear-gradient(to bottom, white 40%, #f0f0f0);
  transition: left .15s ease-out;
}

.wp-switch-wrapper{
  text-align: center;
  margin-bottom: 15px;
}

</style>
