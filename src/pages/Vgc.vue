<script>
import navbar from "../components/navbar.vue";

export default {
    name: "Home",
    components: {
        navbar
    }
}
</script>

<template>
    <body class="bg-pink-400  ">
        <header>
            <navbar />
        </header>

        <main class="m-12  container mx-auto  ">
         
            <div class="flex justify-center "><img class="w-full h-3/6 rounded-2xl " src="../assets/banner1.jpg"
                alt="pokemon-banner">
        </div>
        <h2 class="">VGC TEAMS</h2>
            <div class="flex flex-wrap flex-row justify-evenly  bg-pink-400 rounded-xl m-4" id="cardsVGC1">
                
                <img class="w-5/12 m-1 rounded-xl" src="../assets/teamsVGC/team1.jpg" alt="team1"/>
                <img class="w-5/12 m-1 rounded-xl" src="../assets/teamsVGC/team2.jpg" alt="team2"/>
                <img class="w-5/12 m-1 rounded-xl" src="../assets/teamsVGC/team3.jpg" alt="team3"/>
                <img class="w-5/12 m-1 rounded-xl" src="../assets/teamsVGC/team4.jpg" alt="team4"/>
            </div>

        </main>

        <footer>

        </footer>
    </body>
</template>
<style  lang="scss" scoped>
main {
    padding: 30px;
   
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.45);
    
}


@media (max-width: 1024px) {
    #cardsVGC1 img{width:100% ;}
  }
</style>
