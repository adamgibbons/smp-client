<template>
  <menu class="user-menu" :class="{expanded: userMenuIsOpen === true}">
    <div @click="toggleUserMenu">
      <span class="fa fa-times"></span>
    </div>
    <div class="menu-item" @click="toggleUserMenu">
      <router-link v-show="!user.id" to="/login">Login</router-link>
    </div>
    <div class="menu-item" @click="toggleUserMenu">
      <router-link v-show="!user.id" to="/register">Sign Up</router-link>
    </div>
    <div v-show="user.id" class="menu-item" @click="logoutUser">
      <router-link v-show="user.id" to="/login">Logout</router-link>
    </div>
  </menu>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters(['authenticated', 'user', 'userMenuIsOpen']),
  methods: {
    ...mapActions(['loadUserProfile', 'setUserId', 'logout', 'toggleUserMenu']),
    logoutUser () {
      this.logout()
      this.toggleUserMenu()
    }
  },
  data () {
    return {
      menuIsOpen: false
    }
  }
}
</script>

<style scoped>
.user-menu {
  position: absolute;
  background-color: #182746;
  width: 100%;
  margin: 0;
  padding: 0;
  top: -150px;
  transition: all 0.2s ease-in-out;
  z-index: 200;
  opacity: .5;
}

.user-menu.expanded {
  top: 0;
  opacity: 1;
}

.user-menu .fa-times {
  position: absolute;
  right: 1rem;
  top: .9rem;
  color: white;
  font-size: 1.33em;
}

.user-menu .menu-item {
  margin: .66em 3em .66em 0em;
}

.user-menu .menu-item a {
  display: block;
  text-decoration: none;
  color: white;
  padding: .66em 1.5em;
}
</style>
