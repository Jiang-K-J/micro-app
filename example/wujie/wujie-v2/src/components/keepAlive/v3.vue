<template>
  <div>
    <WujieVue
      width="100%"
      height="100%"
      name="vue-keepAlive"
      :url="$v3Url + 'keepAlive'"
      :alive="true"
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
