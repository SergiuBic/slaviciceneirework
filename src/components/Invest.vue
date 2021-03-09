<template>
   <div>
     <div class="title text-center font-weight-bold justify-center mx-auto h2" > Investitii </div>
     <div class="text-center">
    <v-progress-circular
      :class="{inactive: !this.loading}"
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="teal"
    >
      {{ value }}
    </v-progress-circular>
    <div :class="{inactive: this.loading}">
    <div v-for="(data,index) in apiData" :key="index" class="mb-2 pa-5">
     <v-card 
        class="text-center"
        elevation="11"
        shaped
      >
      <v-card-title class="text-body-1 justify-center font-weight-bold  mainTitle"  >
             {{data[1]}}
      </v-card-title>
   
      <v-divider></v-divider>
      <v-card-title class="text-body-2 justify-center font-weight-medium amber accent-1" >
             {{data[2]}}
      </v-card-title>
      <v-divider></v-divider>
   
      <v-list-item class="mx-auto justify-center pa-2 amber lighten-4 filetitle" width="260px" max-width="320px" :href="data[3]">
          Fisier: <v-icon>mdi-file-download</v-icon>{{formatData(data[3])}}
      </v-list-item>
      
      </v-card>
    </div>
    </div>
    </div>
</div>
   
</template>

<script>
import axios from 'axios'
export default {
     name: 'Investitii',
     data(){
        return{
             apiData: [],
             formatedData: [],
             loading: true,
             interval: {},
             value: 0,
        }

     },
    mounted () {
    axios
      .get('http://slavicidashboard.herokuapp.com/')
      .then(response => {this.apiData = response.data, this.apiData.shift()})
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)

    this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 500)
  },
  beforeDestroy () {
      if(this.loading === false){
      clearInterval(this.interval)
      }
    },
methods: {
  formatData(data){
     return data.toString().split("/")[data.toString().split("/").length-1].replace(/[_,.]|pdf|%20/gm, " ")
  },
 
}

}
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
.inactive {display: none;}
.mainTitle, .filetitle {border: 3.5px solid #fad462;}
</style>