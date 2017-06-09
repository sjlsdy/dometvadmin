<template>
	<div>
		{{user}}
		<div class="head">
			<el-dropdown style="float: right;">
				<span class="el-dropdown-link">
					欢迎您： {{user.username}}<i class="el-icon-caret-bottom el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>
						<router-link :to="{ name: 'loginout'}">退出登录</router-link>
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="content">
			<div class="main-content">
				<router-view></router-view>
			</div>
		</div>
		<div class="left">
			<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
				<el-menu-item index="1"><i class="el-icon-menu"></i>
					<router-link :to="{ name: 'main'}">后台首页</router-link>
				</el-menu-item>
				<el-menu-item index="3"><i class="el-icon-menu"></i>
					<router-link :to="{ name: 'silder'}">幻灯片</router-link>
				</el-menu-item>
				<el-submenu index="2">
					<template slot="title"><i class="el-icon-message"></i>后台首页</template>
					<el-menu-item-group>
						<template slot="title">分组一</template>
						<el-menu-item index="1-1">选项1</el-menu-item>
						<el-menu-item index="1-2">选项2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="1-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
						<template slot="title">选项4</template>
						<el-menu-item index="1-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="4"><i class="el-icon-setting"></i>导航三</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>

<script>
	export default {
		created () {
			this.user = JSON.parse(localStorage.user);
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		data() {
			return {
				user: {
					username: 'sjl'
				}
			}
		}
	}
</script>

<style>

</style>