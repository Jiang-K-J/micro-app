<template>
  <div>
    <WujieVue
      width="100%"
      height="100%"
      name="skip-vue"
      :url="$v3Url + 'skip'"
      :props="$microAppProps"
      :plugins="[
        {
          patchElementHook,
        },
      ]"
    />
  </div>
</template>

<script></script>

<style></style>
