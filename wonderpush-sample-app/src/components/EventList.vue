<template>
  <div id="eventlist">
    <div class="first-visit">{{lookUpEvent.firstVisit}}</div>
    <div class="news-read">{{lookUpEvent.newsRead}}</div>
    <div class="game-over">{{lookUpEvent.gameOver}}</div>
    <div class="like">{{lookUpEvent.like}}</div>
    <div class="add-to-cart">{{lookUpEvent.addToCart}}</div>
    <div class="purchase">{{lookUpEvent.purchase}}</div>
    <div class="near-eiffel-tower">{{lookUpEvent.nearEiffelTower}}</div>
    <div class="near-louvre">{{lookUpEvent.nearLouvre}}</div>
    <div class="inactive-user">{{lookUpEvent.inactiveUser}}</div>
  </div>
</template>

<script>
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
}
</script>

<style scoped>
#eventlist div {
  line-height: 3em;
  height: 3em;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: 150%;
}
.first-visit{
  background-color: #0090FF;
}
.first-visit:hover {
  background-color: #A8CEEC;
}
.news-read{
  background-color: #10ACFF;
}
.news-read:hover {
  background-color: #66C8FC;
}
.game-over{
  background-color: #63C0F2;
}
.game-over:hover {
  background-color: #8DCFF3;
}
.like{
  background-color: #ACD0E4;
}
.like:hover {
  background-color: #D0CFCF;
}
.add-to-cart{
  background-color: #959595;
}
.add-to-cart:hover {
  background-color: #B3B2B2; 
}
.purchase{
  background-color: #333333;
}
.purchase:hover {
  background-color: #555454;
}
.near-eiffel-tower{
  background-color: #33CC99;
}
.near-eiffel-tower:hover{
  background-color: #65CEAB;
}
.near-louvre{
  background-color: #009966;
}
.near-louvre:hover {
  background-color: #43957A;
}
.inactive-user{
  background-color: #43957A;
}
.inactive-user:hover {
  background-color: #C26868;
}
</style>

