<template lang="pug">
.profile
  b-container
    b-row
      b-col(v-for="user in users", :key="user.photo_id" lg="6")
        b-row
          b-col(lg="6").profile__img-photo
            img(:src="getImgPath(user.photo_prev)")
          b-col(lg="6").profile__img-selfie
            img(:src="getImgPath(user.photo_prev)")
        b-row.mt-3.mb-3
          b-col.profile__bid
            span.far.fa-clock.c-orange.mr-1
            span.profie__bid-title заявка, {{ user.created_at }}
          b-col.profile__actions
            button.profile__actions-verify.outline.bg-green(@click="methodHandler('verify',user)")
              span.fas.fa-user-shield.white
            button.profile__actions-dverify.outline.bg-red(@click="methodHandler('unverify',user)")
              span.far.fa-window-close.white
            button.profile__actions-zoom.outline.bg-blue.ml-3
              span.far.far.fa-eye.white
        b-row.user
          b-col
            b-row
              b-col.profile__user-avatar(lg="3")
                img.profile__user-avatar-img(:src="getImgPath(user.user.avatar)")
              b-col(lg="auto")
                span.profile__user-name.c-blue.mr-1 {{ user.user.name }}
                span.profile__user-years.c-grey ({{ user.user.years }})
                .profile__user-location {{ user.user.city }}

          b-col
            .profile-account__actions.d-flex
              button.d-flex.outline.bg-orange(@click="methodHandler('ban-service', user)")
                span.profile-account__actions-ban--portait.fas.fa-portrait.white
                span.profile-account__actions-ban--portait.fas.fa-ban.white
              button.d-flex.outline.bg-red(@click="methodHandler('ban-device', user)")
                span.profile-account__actions-ban--mobile.fas.fa-mobile-alt.white
                span.profile-account__actions-ban--mobile.fas.fa-ban.white
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions({
      verifyUser: 'users/verifyUser',
      unverifyUser: 'users/unverifyUser',
      banservice: 'users/banservice',
      bandevice: 'users/bandevice',
    }),
    getImgPath(url) {
      return url
    },
    methodHandler(method, user) {
      
      let userData = {
        'photo_id': user.photo_id,
        'user_id': user.user.user_id
      }

      switch (method) {
        case 'verify':
          this.verifyUser(userData)
          break;
        case 'unverify':
          this.unverifyUser(userData)
          break;
        case 'ban-service':
          this.banservice(userData)
          break;
        case 'ban-device':
          this.bandevice(userData)
          break;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../assets/sass/global'
@import '../assets/sass/helper'
.profile
  &__img
    width: 540px
    &-photo,
    &-selfie
      img
        max-height: 100%
        max-width: 100%
  &__bid
    span
      color: $orange
  &-account
    &__actions
      display: flex
      svg
        width: 16px
        height: 16px
  &__user
    &-avatar
      max-width: 200px
      &-img
        width: 100%
    &-name
      font-weight: 700
</style>
