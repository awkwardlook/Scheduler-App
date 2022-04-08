<template>
	<button class='btns'>
		<slot>Button</slot>
	</button>
</template>

<style scoped>
.btns {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  margin: 6px;
  border-radius: 8px;
  transition-duration: 0.4s;
  color:white;
  background-color: #0069e0;
  font-size: 18px;
  font-weight: bold;
  height: 50px;
  width: auto;
  padding: 10px 20px;;
  cursor: pointer;
}

.btns:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  background-color: #25deff; /* Green */
  color: rgb(25, 27, 44);
}
</style>