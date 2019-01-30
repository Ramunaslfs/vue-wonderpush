<template>
  <div>
    <p>Wonderpush</p>
  </div>
</template>

<script>
export default {
  name : 'WonderPush',
  props: {
    options : {
      webKey: "a6a00ccf60ffee04cb201cead4304fc4db8fa8e0a2823a77466e8c8ebeed4e25",
      applicationName : "Google News",
      notificationDefaultUrl : 'https://news.google.com/',
      notificationIcon : 'https://news.google.com/logo/50x50.png'
    }
  }
}
</script>
