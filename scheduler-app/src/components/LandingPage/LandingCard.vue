<template>
   <div class='hero-container'>
        <h1>Welcome to Scheduler</h1>
        <p>Plan you schedule</p>
        <p>Plan their schedule</p>
        <div class='hero-btns'>
        <a href="/login" class='hero-start'>
            <button
              class='btns'
            >
              GET STARTED
            </button>
          </a>
        </div>
      </div>
      <br/>
      <div>
        <h1 style="color:black"> Our Clients</h1>
        <div class="row">
          <div class="column">
            <img src="/img/GS.png" alt="Godlman Sachs" style="width:50%">
          </div>
          <div class="column">
            <img src="/img/google.png" alt="Google" style="width:50%" id="google">
          </div>
          <div class="column">
            <img src="/img/grubhub.png" alt="Grubhub" style="width:50%">
          </div>
          <div class="column">
            <img src="/img/IBM.jpg" alt="IBM" style="width:50%">
          </div>
          <div class="column">
            <img src="/img/intel.png" alt="Intel" style="width:50%">
          </div>
        </div>
        <br/>
        <div class="container">
          <div class="text">
          <h1>What is Scheduler?</h1>
          <p>We are a platform for you to plan the schedule for your employees and for your clients for meetings, 
            work and timetables.</p>
          </div>
          <div class="functionImage">
            <img src="/img/gg.gif">
        </div>
    </div>
    <Card/>
    <Footer/>
  </div>
</template>


<script>
import Card from './Card.vue';
import Footer from './Footer.vue';
export default {
  name: "LandingCard",
  components: {
    Card,
    Footer
  }
}
</script>
<style>
.p .h1 {
  font-family: "Rosario";
}
.hero-container {
  background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),  url('/img/landingpagebg.jpg') center center/cover no-repeat; 
  background-repeat: no-repeat;
  background-attachment: scroll;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
}

.hero-container > h1 {
  color: #fff;
  font-size: 70px;
  margin-top: -100px;
}

.hero-container > p {
  margin-top: 8px;
  color: #fff;
  font-size: 32px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}

.hero-btns {
  margin-top: 32px;
}

 .btns {
  margin: 6px;
  border-radius: 8px;
  transition-duration: 0.4s;
  color:white;
  background-color: #3182CE;
  font-size: 16px;
  padding: 10px 24px;;
}

.btns:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  background-color: #4CAF50; /* Green */
  color: cadetblue;
}

.fa-play-circle {
  margin-left: 4px;
}

.row {
  display: flex;
  margin: 20px;
}

/* Create three equal columns that sits next to each other */
.column {
  flex: 33.33%;
  padding: 5px;
}

#google {
  margin-top: 45px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

img {
  max-width: 100%
}

.functionImage {
  flex-basis: 70%
}

.text {
  font-size: 20px;
  padding-left: 40px;
  text-align: justify;
}

@media screen and (max-width: 960px) {
  .hero-container > h1 {
    font-size: 70px;
    margin-top: -150px;
  }
}

@media screen and (max-width: 768px) {
  .hero-container > h1 {
    font-size: 50px;
    margin-top: -100px;
  }

  .hero-container > p {
    font-size: 30px;
  }

  .btn-mobile {
    display: block;
    text-decoration: none;
  }

  .btn {
    width: 100%;
  }
}
</style>