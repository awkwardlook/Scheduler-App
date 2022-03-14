<template>
    <div class="card-container">
        <div class="card">
            <img src="/img/time.svg" alt="Avatar" class="card-img">
            <div class="card-text">
                <h4><b>Save up to 15 hours per week building the schedule.</b></h4>
            </div> 
        </div>
        <div class="card">
            <img src="/img/office.svg" alt="Avatar" class="card-img">
            <div class="card-text">
                <h4><b>Make your workplace more efficient.</b></h4> 
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  flex-direction: row;
  align-items: stretch;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  margin: 20px;
  max-width: 400px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(95, 89, 89, 0.2);
}

.card-img {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 60%;
    max-width: 100%;
    height: 60%;
    max-height: 100%;
    object-fit: contain;
    transition: all 0.2s linear;
    align-content: center;
    }

.card-text {
  padding: 2px 16px;
  text-align: center;
}
</style>