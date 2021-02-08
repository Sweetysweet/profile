<template>
  <div class="home">
    <Profile :users="USERS"/>
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Profile
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getAllUsers()
    })
  },

  computed: {
    ...mapGetters({
      USERS: 'users/GET_USERS'
    })
  },

  methods: {
    ...mapActions({
      getAllUsers: 'users/getAllUsers'
    })
  }
}
</script>
