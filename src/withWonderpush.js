import Vue from 'vue';
import WonderPush from './WonderPush';

const withWonderPush = (component, options = {}) => {
  return Vue.component('withWonderPush', {
    render(createElement) {
      return createElement(component, {
        props: {
          wp : WonderPush
        }
      })
    },
    // data(){
    //   return {
    //     wp : WonderPush
    //   }
    // },
  })
}

export default withWonderPush