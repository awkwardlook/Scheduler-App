<template>
   <div class='hero-container'>
      <div>
        <img src="@/assets/scheduler_logo2.png" alt="logo" id="logo"/>
      </div>
      <h1>Welcome to Scheduler</h1>
      <p>Plan your schedule</p>
      <p>Plan their schedule</p>
      <div class='hero-btns'>
      <!-- Button to get redirected to login page -->
      <a href="/login" class='hero-start'>
        <v-button id="start-btn">GET STARTED</v-button>
      </a>
      </div>
    </div>
    <br/>
    <div>
      <!-- Clients Logos -->
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
        <!-- Scheduler Introduction -->
        <div class="text">
        <h1>What is Scheduler?</h1>
        <p>We are a platform for you to plan the schedule for your employees and for your clients for meetings, 
          work and timetables.</p>
        </div>
        <div class="functionImage">
          <img src="/img/gg.gif" style="width:70%">
      </div>
    </div>
    <!-- Scheduler's Benefits Card -->
    <Card/>    
    <!-- Schedule Function Part -->
    <Function/>
    <!-- Footer -->
    <Footer/>
  </div>
</template>


<script>
import Card from './Card.vue';
import Footer from './Footer.vue';
import Function from './FunctionSchedule.vue';
import Button from '../Button/Button.vue'

export default {
  name: "LandingCard",
  components: {
    Card,
    Footer,
    Function,
    'v-button': Button
  }
}
</script>
<style>
.p .h1 {
  font-family: "Rosario";
}

#logo {
  width: 50%;
}
 
#welcome{
  position: relative;
  /* top: -180px; */
}

.hero-container {
  background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),  url('/img/landingpagebg.jpg') center center/cover no-repeat; 
  background-repeat: no-repeat;
  margin-top: 0px;
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

#start-btn {
  font-size: 24px;
  font-weight: bold;
  height: 60px;
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