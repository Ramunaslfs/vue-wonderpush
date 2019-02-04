<template>
  <div>
  <div>{{mon}}</div>
  <div>{{moi}} {{a}}</div>

  </div>
</template>


<script>
// import WonderPush from './WonderPush';
export default {
  name: 'WonderPushComponent',
  props :['a', 'moi'],
  data(){
    return {
      mon: 'gbsg',
    }
  }
}
</script>



