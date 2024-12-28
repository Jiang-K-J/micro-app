<template>
    <div>
      <WujieVue
        width="100%"
        height="100%"
        name="vue"
        :url="$rfUrl + 'skip'"
        :props="$microAppProps"
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
  