import Vue from 'vue';
import WonderPush from './WonderPush';

const withWonderPush = (WrappedComponent, options = {}) => ({
  data(){
    return {
      ready: false
    }
  },
  mounted(){
    WonderPush.ready( wp => {
      this.$props.wonderPush = wp;
      this.$data.ready = true;
    })
  },
  props: {
    dictionnary: WrappedComponent.props.dictionnary,
    event: WrappedComponent.props.event,
    wonderpush: WonderPush
  },
  render (createElement) {
    const waitWonderPushReady = options && options.waitWonderPushReady
    return waitWonderPushReady && !this.$data.ready ?
      null :
      createElement(WrappedComponent, { props: this.$props });
  }
});





export default withWonderPush