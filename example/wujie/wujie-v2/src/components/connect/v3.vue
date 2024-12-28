<template>
  <div>
    <WujieVue
      width="100%"
      height="100%"
      name="connect-vue"
      :url="$v3Url + 'connect'"
      :props="{store:$TempStore}"
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
