<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      
      app
    >
         <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Meniu
          </v-list-item-title>
  
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon  :color="item.color">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app  color="dark-grey"
  dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    
      <v-toolbar-title>
  <v-img
  lazy-src="./assets/logo.png"
  max-height="45"
  max-width="371"
  src="./assets/logo.png"
></v-img>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>

      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view/>
        </v-fade-transition>
      </v-container>

    </v-main>
    <v-btn
  elevation="2"
  outlined
  text
  bottom
  center
  class="font-weight-thin body-2"
>Slavici Cenei &#169; 2021 - All rights reserved.</v-btn>
  </v-app>
</template>
<script>

 export default {
    data: () => (
      { drawer: false,
        items: [
          { title: 'Investitii', icon: 'mdi-currency-usd',color: "teal",to:"/investitii" },
          { title: 'Atelier', icon: 'mdi-hammer-wrench',color: "orange",to:"/atelier"},
          { title: 'Hala Industriala', icon: 'mdi-warehouse',color: "blue",to:"/hala" },
        ],
        right: null, }
      ),
  
    }
</script>
