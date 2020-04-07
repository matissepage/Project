<template>
  <div>
    <v-app-bar fixed style = "background-color:rosybrown" dark>
      <balise>Instagram</balise>
    </v-app-bar>
    <div style="container">
      <v-card v-for="index in 3" :key="index">
        <v-img :src = "require('../assets/' + image[index - 1])"></v-img>
        <v-card-title>{{texte[index - 1]}}</v-card-title>
        <v-card-text>{{descr[index - 1]}}</v-card-text>
      <v-card-actions>
        <v-btn icon @click="likeItem()">
          <v-icon v-if="liked[index -1]" color="pink darken-1">mdi-heart</v-icon>
          <v-icon v-else>mdi-heart</v-icon>
        </v-btn>
        </v-card-actions>
      </v-card>
      <v-footer fixed style = "background-color:rosybrown" dark>
        <balise>Profile</balise>
      </v-footer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      image: ["picture1.jpeg", "picture2.jpeg", "picture3.jpeg"],
      texte: ["texte1", "texte2", "texte3"],
      descr: ["descr1", "descr2", "descr3"],
      liked: [false, false, false],
    }
  },
  methods: {
    likeItem () {
      this.liked = !this.liked;
      this.$store.commit('function', argument);
    }
  }
}

</script>

<style>
  .container {
    width: 350px;
    margin-top: 70px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
</style>