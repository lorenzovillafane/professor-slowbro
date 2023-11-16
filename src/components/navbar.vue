<template>
    <nav class="relative px-4 py-4 flex justify-between  bg-pink-200 ">
    <a class="text-3xl font-bold leading-none flex flex-row items-center " href="/">
       <img class="w-1/4" src="../assets/logo-professor-slowbro-rounded.png" alt="logo"> 
    </a>
    <div class="lg:hidden">
        <button class="navbar-burger flex items-center text-white p-6">
            <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>
    </div>
    <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 ">
        <li> <router-link class="text-m text-black hover:text-gray-500" to="/">HOME</router-link></li>
        <li class="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </li>
        <li><router-link class="text-m  text-black hover:text-gray-500" to="/Vgc">VGC</router-link></li>
        <li class="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </li>
        <li><router-link class="text-m  text-black hover:text-gray-500" to="/Tcg">TCG</router-link></li>
        <li class="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </li>
        <li><router-link class="text-m  text-black hover:text-gray-500" to="/Unite">UNITE</router-link></li>
        <li class="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </li>
        <li><router-link class="text-m  text-black hover:text-gray-500" to="/Forum">FORUM</router-link></li>
    </ul>

</nav>
<div class="navbar-menu relative z-50 hidden">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-pink-200 overflow-y-auto">
        <div class="flex items-center mb-8">
            <a class="mr-auto text-3xl font-bold leading-none flex justify-center" href="/">
                <img class="w-1/3 " src="../assets/logo-professor-slowbro-rounded.png" alt="logo">
            </a>
            <button class="navbar-close">
                <svg class="h-6 w-6 text-white cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <div>
            <ul>
                <li class="mb-1">
                  <router-link class="block p-4 text-sm font-semibold text-black hover:bg-pink-50 hover:text-gray-400  rounded" to="/">HOME</router-link>
                </li>
                <li class="mb-1">
                    <router-link class="block p-4 text-sm font-semibold text-black hover:bg-pink-50 hover:text-gray-400  rounded" to="/Vgc">VGC</router-link>
                </li>
                <li class="mb-1">
                    <router-link class="block p-4 text-sm font-semibold text-black hover:bg-pink-50 hover:text-gray-400  rounded" to="/Tcg">TCG</router-link>
                </li>
                <li class="mb-1">
                    <router-link class="block p-4 text-sm font-semibold text-black hover:bg-pink-50 hover:text-gray-400  rounded" to="/Unite">UNITE</router-link>
                </li>
                <li class="mb-1">
                    <router-link class="block p-4 text-sm font-semibold text-black hover:bg-pink-50 hover:text-gray-400 rounded"  to="/Forum">FORUM</router-link>
                </li>
            </ul>
        </div>
        <div class="mt-auto">
            
            <p class="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2023</span>
            </p>
        </div>
    </nav>
</div>
</template>

<style  lang="scss" scoped>
h1{font-family: 'Lilita One', sans-serif;
-webkit-text-stroke-width: 0.5px;
-webkit-text-stroke-color: black;

}
li{font-family: 'Kanit', sans-serif;}



</style>


<script>

export default {
    name:'navbar'
}

document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

</script>