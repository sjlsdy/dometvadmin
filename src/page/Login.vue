<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="12" :offset="6">
				<div style="border: #ddd 1px solid; border-radius: 5px; padding: 20px;">
					<el-form label-width="80px" :model="form">
						<el-form-item label="账号">
							<el-input v-model="form.username"></el-input>
						</el-form-item>
						<el-form-item label="密码">
							<el-input v-model="form.password"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="login">登录</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	var md5 = require('md5');
	export default {
		methods: {
			login() {
				var _self = this;
				if(_self.form.username == '') {
					_self.$message.error("请填写登录名");
				} else if(_self.form.password == '') {
					_self.$message.error("请填写密码");
				} else {
					_self.$ajax.get('/api/login', {
							params: {
								username: _self.form.username,
								password: md5(_self.form.password)
							}
						})
						.then(function(response) {
							if(response.data.code == 0) {
								localStorage.user=JSON.stringify(response.data);
								console.log("=====")
								console.log(JSON.parse(localStorage.user))
								console.log("=====")
								_self.$message(response.data.msg);
								_self.$router.push('main/silder')
							} else {
								_self.$message.error(response.data.msg);
							}
						})
						.catch(function(error) {
							_self.$message.error(error);
						});
				}
			}
		},
		data() {
			return {
				form: {
					username: '',
					password: ''
				}
			};
		}
	}
</script>

<style>

</style>