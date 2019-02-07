<template>
  <div 
    v-bind:class= "['event', event]"
    v-on:click="fireEvent()"
  > 
    {{dictionnary[event]}}
  </div>
</template>

<script>
export default {
  props: [
    "dictionnary",
    "event",
    "wonderPush"
  ],
  methods: {
    fireEvent: () => this.$props.wonderPush.trackEvent(this.$props.event)
  }
}
</script>