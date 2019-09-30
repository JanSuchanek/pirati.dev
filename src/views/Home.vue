<template>
	<div class="home">
		<div class='search-title'>
			<!--
				<span class='search-title-logo'><img src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Logo_Pirátů.svg' class='search-title-logo-image' alt="Pirati"></span>
				<span class='search-title-name'>PUPÍK</span>
			-->
		</div>
		<Search @change="changeQuery" />
		<List :items="items" />        
	</div>
</template>

<script>

import Search from "@/components/Search.vue";
import List from "@/components/List.vue";

export default {
	name: "home",
	data() {
		return {
			items: [],
			url: 'http://vps1.pir-test.eu:9200/article/_search'
		}
	},
	components: {
		Search, List
	},
	methods: {
		changeQuery(queryData) {

			if(!queryData.query){
				return null
			}
			try {                   
				fetch(this.url, {
						method: 'POST',
						headers: {
								'Content-Type': 'application/json',
						},
						body: JSON.stringify(queryData),
				})
					.then(response => {
						return response.json()
					})
					.then(data => {
						if(data["hits"]){
							this.items = data["hits"]["hits"]
						}

				})
			} catch (e) {
					this.errors.push(e)
			}
		}  
	}
}

</script>
