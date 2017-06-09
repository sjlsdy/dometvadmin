<template>
	<div id="app">
		<router-view style="width: 100%; height: 100%;"></router-view>
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
		overflow: hidden;
	}
	
	a:link {
		text-decoration: none;
	}
	a:hover {
		color: #00B7FF;
	}
	a:active {
		color: #48576a;
	}
	a:visited {
		color: #48576a;
	}
	
	#app {
		width: 100%;
		height: 100%;
	}
	
	.head {
		width: 100%;
		height: 59px;
		border-bottom: #ddd 1px solid;
		position: fixed;
		z-index: 999;
	}
	
	.left {
		float: left;
		width: 200px;
		height: 100%;
		margin-left: -100%;
		margin-top: 60px;
		margin-bottom: -60px;
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
		margin-top: 60px;
		margin-bottom: -60px;
		overflow-y: scroll;
		position: relative;
	}
</style>