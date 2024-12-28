<template>
    <div>
      <WujieVue
        width="100%"
        height="100%"
        name="connect-react"
        :url="$rfUrl + 'connect'"
        :props="{store:$TempStore}"
      />
    </div>
  </template>
  
  <script>
  export default {
   computed: {
     microAppProps() {
       return { router: this.$router}
     },
   },
  };
  </script>
  
  <style></style>
  