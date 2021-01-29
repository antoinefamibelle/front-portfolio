<template>
  <div>
    <ListProjects />
  </div>
</template>

<script>
import ListProjects from "../components/Works/ListProjects.vue";

export default {
  name: "work",
  data: function () {
    return {};
  },
  components: {
    ListProjects,
  },
};
</script>

<style scoped>
.myContainer {
  padding-top: 25px;
}
</style>