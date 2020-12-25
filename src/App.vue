<template>
  <v-app>
    <v-app-bar
        app
        dense
        color="dark"
        dark
        hide-on-scroll
    >
      <div class="d-flex align-center">
        <span><v-icon> {{githubLogo}} </v-icon><a href="https://github.com/LearnDifferent" style="color: whitesmoke; text-decoration:none;"> LearnDifferent</a></span>
      </div>
      <div class="d-flex order-last">
        <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            src="./assets/logo.png"
            transition="scale-transition"
            width="40"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
          <!--这是一个切换按钮-->
<!--      <v-row no-gutters>-->
<!--        <v-col offset-lg="4">-->
<!--          <router-link to="/search" tag="span">-->
<!--            <br>-->
<!--            <v-btn depressed dark large>-->
<!--              Search-->
<!--            </v-btn>-->
<!--          </router-link>-->
<!--        </v-col>-->
<!--      </v-row>-->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import { mdiGithub } from '@mdi/js';
export default {
  name: 'App',

  components: {},

  data: () => ({
    githubLogo: mdiGithub
  }),
};
</script>
