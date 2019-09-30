<template>
  <div class="pagination">
    <ul>
      <li v-for="i in maxPages">
        <a href='#'
           :class="{'active': currentPage === i}"
           @click="$emit('change', i)">
          {{ i }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      default: 1,
      required: true 
    },
    maxPages: {
      type: Number,
      default: 1,
      required: true 
    } 
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  text-align: left;
  list-style-type: square;

}
li {
  display: block;
}

</style>
