<template>
  <div>
    <HeadNavbar />
    <Content />
  </div>
</template>

<script>
  'use strict'
  
  import HeadNavbar from './HeadNavbar'
  import Content from './Content'

  export default {
    name: 'Home',
    components: {
      HeadNavbar,
      Content
    }
  }
</script>