<template>
   <div class="justify-center">
        <div class="title h2 justify-center font-weight-bold text-center">Atelier</div>
        <v-divider class="ma-3"></v-divider>
        <v-card
  elevation="13"
  outlined
  tile
>
<v-card-title class="justify-center text-center"> Fabricăm peleți și bricheți. Atelier de confecții metalice.</v-card-title>
</v-card>

<v-divider></v-divider>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
     
       v-for="(item,i) in items"
      :key="i"
      :src="item.src"

    >
   
    </v-carousel-item>
  </v-carousel>
 <v-divider></v-divider>
 <v-spacer></v-spacer>
<div  class="d-flex flex-row justify-center align-center text-center mx-auto" >
 <video v-for="(video,index) in videos" :key="index"  width="400" class="ml-16" autoplay controls>
  <source :src="video.src" type="video/mp4">
  Your browser does not support HTML video.
</video>
<v-spacer></v-spacer>
</div>

       </div>
   
    
</template>

<script>

export default {
     name: 'Atelier',
     data(){return {
         items: [
         {src: require('../assets/22.jpg')},
         {src: require('../assets/23.jpg')},
         {src: require('../assets/24.jpg')},
         {src: require('../assets/25.jpg')},
         {src: require('../assets/26.jpg')},
         {src: require('../assets/27.jpg')},
         {src: require('../assets/28.jpg')},
         {src: require('../assets/29.jpg')},
         {src: require('../assets/30.jpg')},
         {src: require('../assets/33.jpg')},

     ],
     videos: [
      {src: require('../assets/30.mp4')},
     {src: require('../assets/31.mp4')}],
     }
    },

}
</script>