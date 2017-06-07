<template>
	<div id="app">
		<div class="content">
			<div class="main-content">
				<router-view></router-view>
			</div>
		</div>
		<div class="left">
			导航
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
	}
	#app {
		width: 100%;
		height: 100%;
	}
	.left {
		float: left;
		width: 200px;
		height: 100%;
		margin-left: -100%;
		overflow-y: auto;
		background: #ffffff;
		border-right: #e9edf1 1px solid;
	}
	
	.content {
		width: 100%;
		height: 100%;
		float: left;
	}
	
	.main-content {
		height: 100%;
		margin-left: 200px;
		overflow-y: scroll;
		position: relative;
	}
</style>