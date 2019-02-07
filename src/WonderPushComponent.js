import WonderPush from './WonderPush'

export default {
  render: function (createElement) {
    WonderPush.init(this.$props.options);
    return createElement(
      'div',
      this.$slots.default
    )
  },
  props: {
    options: {
      type: Object,
    }
  }
}
