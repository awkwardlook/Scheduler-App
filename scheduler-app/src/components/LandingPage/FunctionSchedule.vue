<template>
    <div class="main-container" style="background-color: #fff">
        <div class="function-container">
            <div class="text">
            <h2>Schedule</h2>
            <h4> Real Time Availabilities</h4>
            <p style="font-size:16px;color:rgb(78, 66, 66);">With a connected schedule, know which of your employees are available before planning next week's schedule</p>
            <h4>Schedule Your Staff Easily</h4>
            <p style="font-size:16px;color:rgb(78, 66, 66);">Just by approving the shifts, a smart timesheet allocates shifts for you!</p>
            </div>
            <img src="/img/calendar.png" class="func_img">
        </div>
         <div class="function-container">
            <img src="/img/analytics.png" class="func_img">
            <div class="text">
                <h2>Analytics</h2>
                <h4>Work Peformance Report</h4>
                <p>
                Keep track of how your stores and employee are doing. <br>
                Have access to real time analytics.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.function-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.func_img {
    flex-basis: 20%;
}

.text {
    font-size: 20px;
    padding-left: 40px;
    text-align: justify;
}

.text > p {
font-size: 16px; 
color: rgb(78, 66, 66);
}

</style>