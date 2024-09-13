<template>
  <div class="pt-28 grid grid-cols-12 gap-3 default-layout h-[95vh]">
    <div class="col-span-12 md:col-span-2 h-fit flex flex-row md:flex-col gap-3">
      <router-link
        :to="{name: 'serviceList'}"
        class="hover:underline"
      >
        Service List
      </router-link>
      <router-link
        :to="{name: 'order'}"
        class="hover:underline"
      >
        Order
      </router-link>
      <router-link
        :to="{name: 'review'}"
        class="hover:underline"
      >
        Review
      </router-link>
    </div>

    <div class="col-span-12 md:col-span-10 max-h-full overflow-y-scroll bg-background p-3">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>