<template>
  <div>
<div id="wonderpush-subscription-switch" data-sentence="Recevoir nos dernières nouveautés par push notification web : " data-on="OUI" data-off="NON"></div>
  <wonder-push-component a="test" moi="bouba"/>
  </div>
</template>

<script>
// import WonderPush from 'vue-wonderpush';
import WonderPushComponent from '../../../src/WonderPushComponent.vue';

export default {
  name: 'SwitchButton',
  components:{
    WonderPushComponent
  }
}
</script>
