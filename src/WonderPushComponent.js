import WonderPush from './WonderPush'

export default {
  render: function (createElement) {
    return createElement(
      'div',
      this.$slots.default
    )
  },
  props: [
    "webKey",
    "applicationName",
    "notificationDefaultUrl",
    "notificationIcon"
  ],
  mounted(){
    const options = Object.assign({}, this.$props)
    WonderPush.init(options);
  }
}
