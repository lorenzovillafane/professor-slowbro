<template>
    <body>
          <div class="cards bg-pink-400">
            <div class='main'>
              <img class="newsImage" src="../assets/news1.png" alt="Hisuian Typhlosion" />
              <h2>Hisuian Typhlosion Is Appearing in 7-Star Tera Raid Battles</h2>
              <p class='description'>Fire–Tera Type Hisuian Typhlosion 
                with the Mightiest Mark will soon be 
                appearing at black Tera Raid crystals.
s
              </p>
              <div class='cardInfo'>
              
                <div class="duration">
                  <ins>◷</ins>
                  <p>November 01, 2023</p>
                </div>
              </div>
              <hr />
            
            </div>
          </div>
    </body>
</template>
<script>
export default {
    name:'cards'
}

</script>
<style  lang="scss" scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #000000;
  user-select: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.cards{
 
  max-width: 300px;
  margin: 1rem auto;
 
  border-radius: .7rem;
 

  hr{
    width: 100%;
    border: none;
    border-bottom: 1px solid #00000055;
    margin-top: 0;
  }
 
  .main{
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 1rem;
    .newsImage{
      border-radius: .5rem;
      max-width: 100%;
      height:100%;
      object-fit: cover;
    }
    h2{font-size: 20px;
    font-weight: bold;}
    .description{
      margin: .5rem 0;
      color: #000000;
    }
    .cardInfo{
      display: flex;
      justify-content: center;
      align-items: center;
      .duration{
        display: flex;
        align-items: center;
        color: #ffffff;
        margin-right: .2rem;
        ins{
          margin: .5rem;
          margin-bottom: .4rem;
        }
      }
    }
  
  }
  
 
}


</style>