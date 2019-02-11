<template>
  <div id="eventlist">
    <div v-for="k in Object.keys(lookUpEvent)" :key=k>
      <EventToTrack
        :dictionnary="lookUpEvent"
        :event="k"
      />
    </div>
  </div>
</template>

<script>
import EventToTrack from './EventToTrack'
import {withWonderPush} from 'vue-wonderpush'

export default {
  name : 'EventList',
  data () {
    return {
      lookUpEvent: {
        firstVisit: 'First Visit',
        newsRead: 'News Read',
        gameOver: 'Game Over',
        like: 'Like',
        addToCart: 'Add To Cart',
        purchase: 'Purchase',
        nearEiffelTower: 'Near Eiffel Tower',
        nearLouvre: 'Near Louvre',
        inactiveUser: 'Inactive User'
      }
    }
  },
  components: { EventToTrack: withWonderPush(EventToTrack, {waitWonderPushReady: true}) }
}
</script>


