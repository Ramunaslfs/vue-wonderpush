<template>
  <div class="switch-container">
<div id="wonderpush-subscription-switch" data-sentence="Recevoir nos dernières nouveautés par push notification web : " data-on="OUI" data-off="NON"></div>
  </div>
</template>

<script>
import WonderPush from 'vue-wonderpush';
console.log('WP', WonderPush)
export default {
  name: 'SwitchButton',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
