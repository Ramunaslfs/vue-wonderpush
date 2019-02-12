# vue-wonderpush

This service lets you integrate Wonderpush in your Vue applications easily.
- [Official website](https://wonderpush.com)

## Features

## Installation and Quick Start

### 1- Installation:
You can install the module from a package manager of your choice directly from the command line

```sh
# Yarn
yarn add vue-wonderpush

# NPM
npm i vue-wonderpush

```


### 2- In your application

```javascript
import WonderPush from 'vue-wonderpush';
WonderPush.init({
  webKey: 'YOUR-WEBKEY-HERE',
});
```
Options available for wonderpush.init:
https://wonderpush.github.io/wonderpush-javascript-sdk/latest/WonderPush.html#.InitOptions


### 3- In your components

Integrate a wonderpush subscription:

```javascript
<template>
  <div className="switch-container">
    <div id="wonderpush-subscription-switch" data-on="YES" data-off="NO"></div>
  </div>
</template>

<script>
  export default {
    name: 'SwitchButton',
  }
</script>
```

Create a component who need wonderpush:

```javascript
import Wonderpush from 'vue-wonderpush';
<template>
  <div 
      v-bind:class= "['event', 'myEvent']"
      v-on:click="fireEvent()"
    > 
    Click this div to track "myEvent"
  </div>
</template>

<script>
  export default {
    props: [
      "wonderPush"
    ],
    methods: {
      fireEvent: function(){
        this.$props.wonderPush.trackEvent(this.$props.event)
      }
    }
  }
</script>
```

Give the wonderpush object on the import:

```javascript
<template>
  <EventToTrack/>
</template>

<script>
  import EventToTrack from './EventToTrack'
  import {withWonderPush} from 'vue-wonderpush'

  export default {
    name : 'ParentOfEventToTrack',
    components: { EventToTrack: withWonderPush(EventToTrack, {waitWonderPushReady: true}) }
  }
</script>
```

WithWonderPush take two arguments:
  - Component
  - options

Options available: 
  - waitWonderPushReady: boolean (default : false)

## Sample app
To help you with your implementaiton we provided a sample application. to run it
```bash
cd wonderpush-sample-app
yarn start
```
then go to [http://localhost:8080](http://localhost:8080)


## License

This module is released under the permissive [MIT License](http://revolunet.mit-license.org). Your contributions are always welcome.

## Development

Start the wonderpush-sample-app with npm start or yarn start will install and build library and install sample-app node_modules if they not exists.

After forking you will need to run the following from a command line to get your environment setup:

1. ```yarn install```

After install you have the following commands available to you from a command line:

1. ```gulp```
