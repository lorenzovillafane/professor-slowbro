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

        </main>

        <footer>

        </footer>
    </body>
</template>
<style  lang="scss" scoped>
h1{font-family: 'Kanit', sans-serif;
    }
main {
    padding: 30px;
    border: 1px solid rgba(255, 255, 255, .25);
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
}
</style>