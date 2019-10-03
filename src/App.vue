<template>
  <div id="app">
    <router-view />

    <div class='footer'>
        Vyhledávání napříč Pirátským ekosystémem. Ve stadiu ProofOfConcept, nestabilní. Agreguje data z fóra, redmine a proplácení. <br>
        Licence: CC BY-SA | <a href='https://gitlab.com/Jarmil/pupik'>Zdrojový kód</a> | Připomínky na backend <a href='mailto:jarmil.halamicek@seznam.cz'>jarmil.halamicek@seznam.cz</a> nebo na frontend <a href='mailto:honza@suchanek.cz'>honza@suchanek.cz</a>
        <img src='http://vps1.pir-test.eu:8000/assets/cc-by-sa.png' class='license-image'>
    </div>    
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #00;
}


html {
    font-family: sans-serif;
}

.home {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
}

.searchbox-area {
    margin-top: 50px;
}

.search-title-name {
    font-weight: normal;
    font-size: 60px;
    /*+placement: 2px -8px;*/
    position: relative;
    left: 2px;
    top: -8px;
}

.search-phrase input {
    font-size: 20px;
    /*+border-radius: 70px;*/
    -moz-border-radius: 70px;
    -webkit-border-radius: 70px;
    -khtml-border-radius: 70px;
    border-radius: 70px;
    background-color: #FFFFFF;
    border: 1px solid #C1C1C1;
    padding-top: 9px;
    padding-bottom: 8px;
    padding-left: 28px;
    width: 50%;
}

.search-button button {
    color: #FFFFFF;
    background-color: #000000;
    /*+border-radius: 875px;*/
    -moz-border-radius: 875px;
    -webkit-border-radius: 875px;
    -khtml-border-radius: 875px;
    border-radius: 875px;
    border: 0px solid black;
    padding: 9px 27px;
    font-size: 20px;
}

.results-count {
    margin-top: 16px;
    font-size: 90%;
    color: #777777;
    margin-left: 21px;
}

.result {
    margin-top: 19px;
    margin-bottom: 20px;
    margin-left: 21px;
}

.result-title {
    font-weight: 600;
    font-size: 110%;
}

.result-link a {
    color: #0087F7;
}

.result-snipplet {
    color: #595959;
}

.footer {
    background-color: #383737;
    padding: 17px 39px 40px 40px;
    color: #FFFFFF;
    margin-top: 88px;
}

.license-image {
    float: left;
    margin-right: 15px;
    margin-top: 5px;
}

.footer a {
    color: #C7C7C7;
}

.hidden {
    display: none;
}

.search-title-logo-image {
    width: 56px;
    margin-left: 6px;
}

.filter-row {
    margin-top: 20px;
}

.filter-checkbox {
    border: 1px solid #949494;
    margin-right: 9px;
    /*+border-radius: 50px;*/
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    -khtml-border-radius: 50px;
    border-radius: 50px;
    padding: 6px 13px 6px 6px;
}

.filter_checked {
    font-weight: bold;
}
</style>
