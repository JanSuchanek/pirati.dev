<template>
  <div class="search">

      <div class='search-row'>
          <form v-on:submit.prevent="onSubmit">
              <span class='search-phrase'>
                  <input type="text" name="query"
                  v-model="query" 
                  placeholder="co hledáš u Pirátů?">                  
              </span>
              
              <span class='search-button'>
                  <button>Vyhledat</button>
              </span>
          </form>
      </div>

      <div class='filter-row'>
          <span class='filter-checkbox' v-for="source in sources">
              <label :for="source.id">
                  <input type="checkbox" 
                  v-model="source.checked" 
                  :id="source.id" 
                  :class="{ filter_checked: source.checked }">
                  
                  <span 
                  :class="{ filter_checked: source.checked }" 
                  >{{ source.displayed }}</span>
              </label>
          </span>
      </div>

   
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: null,
      limit: 200,

      sources: [
          {
              "id": 1,
              "name": "forum",
              "displayed": "Fórum",
              "checked": true
          },
          {
              "id": 2,
              "name": "redmine",
              "displayed": "Redmine",
              "checked": true
          },
          {
              "id": 3,
              "name": "proplaceni",
              "displayed": "Proplácení",
              "checked": true
          },
      ],      
    }
  },
  methods: {
    onSubmit() {

      var queryData = {
          "size" : this.limit,
          "query" : {
              "bool": {
                "must" : [
                  { "match": { "fulltext" : this.query }},
                  { "bool":  { "should": [] 
                }
              }
            ]
          }
        }
      }



      this.sources.forEach(source => {
        if(source.checked){
          queryData.query.bool.must[1].bool.should.push({ "term" : { "source" : source.name }})
          //queryData.query.bool.must[1].bool.should.push({ "term" : { "source" : source.name }})
        }

      })


      this.$emit('change', queryData)
    }
  },
  watch: {
    page: {
      immediate: true,
      handler(newVal, oldVal) {
        if(this.query) {
          this.getData()
        }
      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
