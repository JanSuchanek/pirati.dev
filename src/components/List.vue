<template>
  <div class="list">
    <p>
       Nalezeno {{ resultIndexBeg }} - {{ resultIndexEnd }} z {{ totalData }} výsledků
    </p>
    <pagination
      @change="changePage"
      :current-page="page"
      :max-pages="totalPages">
    </pagination>  

    <div class="result"              
      v-for="item in items"
      :key="item._source.id">
      <div class="result-title">
        {{ item._source.title }}
      </div>
      <div class="result-link">
        <a :href="item._source.url">{{ item._source.url }}</a>
      </div>
      <div class="result-snipplet">
        <span class="result-date">{{ item._source.date }}</span>
        {{ item._source.snipplet }}
      </div>
    </div>

  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue"

export default {
  name: "List",
  props: {
    items: Array
  },
  data() {
    return {
      baseUrl: null,
      resultIndexBeg: 0,
      resultIndexEnd: 0,
      totalData: 0,
      totalPages: 0,
      page: 0,
      maxPages: 0,

    }
  },
  components: {
    Pagination
  },  
  methods: {
    changePage(page) {

    }  
  }
};
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
