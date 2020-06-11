<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      :clipped="clipped"
      :hide-overlay="overlay"
      :absolute="abs"
    >
      <v-list>
        <v-list-item
          link
          v-for="({ path, icon, name }, i) in links"
          :key="i"
          router
          :to="path"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-icon class="mx-4" large>
        mdi-youtube
      </v-icon>-->
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2 ml-3"
          contain
          src="./assets/mmtop-white.png"
          transition="scale-transition"
          width="200"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://dev.mmtap.com" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    drawer: true,
    clipped: true,
    overlay: true,
    abs: true,
    links: [
      { path: "/", icon: "", name: "系统配置" },
      { path: "/csdn", icon: "", name: "CSDN" },
      { path: "/cnblog", icon: "", name: "cnblogs" },
      // { path: "", icon: "", name: "segmentfault" },
      // { path: "", icon: "", name: "v2ex" },
      // { path: "", icon: "", name: "oschina" },
      { path: "/jianshu", icon: "", name: "简书" },
      // { path: "", icon: "", name: "掘金" },
      // { path: "", icon: "", name: "开发者头条" }
    ]
  })
};
</script>
