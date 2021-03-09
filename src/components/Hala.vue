<template>
    <div >
     <v-card 
  class="mx-auto justify-center text-center font-weight-bold h2"
  max-width="360"
  elevation="10"
  outlined
  tile> <v-card-title class="text-center justify-center">Hala</v-card-title></v-card>   
        <v-divider class="mt-3"></v-divider>
<div class="d-flex flex-row justify-center" >
    <v-divider
  vertical
></v-divider>
<v-card elevation="2" v-for="(item,index) in items"
  :key="index" class="ma-3">
 <v-img

  :lazy-src="item.src"
  height="auto"
  width="250"
  :src="item.src"
></v-img>
</v-card>
<v-divider
  vertical
></v-divider>
</div>

<div class="title-center text-center mx-auto font-weight-bold">Hala industriala de inchiriat</div>
    </div>
</template>
<script>
export default {
     name: 'Hala',
     data(){return{
         items:[
             {src: require('../assets/1.jpg')},
             {src: require('../assets/2.jpg')},
             {src: require('../assets/3.jpg')},
             {src: require('../assets/4.jpg')},
         ]
     }},
     methods:{
      
     }
}
</script>