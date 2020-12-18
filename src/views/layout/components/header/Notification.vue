<template>
  <div class="dropdown" v-if="false">
    <button class="p-0 mr-2 btn btn-link">
      <span class="icon-wrapper icon-wrapper-alt rounded-circle">
        <span class="icon-wrapper-bg bg-danger"></span>
        <i class="icon text-danger icon-anim-pulse ion-android-notifications"></i>
        <span class="badge badge-dot badge-dot-sm badge-danger">{{$t('TEXT_NOTIFICATION')}}</span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Notification"
}
</script>
