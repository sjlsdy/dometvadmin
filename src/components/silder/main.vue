<template>
	<div>
		<div style="padding: 20px;">
			<h3>幻灯片</h3>
			<div>
				<el-button type="text" @click="addSilderVisible = true">添加</el-button>
				<el-dialog title="添加幻灯片" :visible.sync="addSilderVisible">
					<el-form :model="form">
						<el-form-item label="标题" :label-width="formLabelWidth">
							<el-input v-model="form.title" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="地址" :label-width="formLabelWidth">
							<el-input v-model="form.url" auto-complete="off"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="addSilderVisible = false">取 消</el-button>
						<el-button type="primary" @click="add">确 定</el-button>
					</div>
				</el-dialog>
			</div>
			<el-table :data="data" style="width: 100%">
				<el-table-column prop="id" label="#" width="60">
				</el-table-column>
				<el-table-column prop="title" label="名称" width="180">
				</el-table-column>
				<el-table-column prop="url" label="地址">
				</el-table-column>
				<el-table-column label="操作" width="120">
					<template scope="scope">
						<el-button @click.native.prevent="del(scope.$index, data)" type="text" size="small">
							移除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		created() {
			this.ajaxData();
		},
		methods: {
			ajaxData() {
				var _self = this;
				this.$ajax.get('/api/silder')
					.then(function(response) {
						//console.log(response.data);
						_self.data = response.data;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			add() {
				var _self = this;
				_self.addSilderVisible = false;
				_self.$ajax.get('/api/addSilder', {
						params: {
							title: _self.form.title,
							url: _self.form.url
						}
					})
					.then(function(response) {
						_self.$message(response.data.msg);
						_self.form = {
							title: '',
							url: ''
						};
						_self.ajaxData();
					})
					.catch(function(error) {
						//_self.$message.error(error);
					});
			},
			del(index, rows) {
				var _self = this;
				_self.$ajax.get('/api/delSilder', {
						params: {
							id: rows[index]['id']
						}
					})
					.then(function(response) {
						_self.$message(response.data.msg);
						_self.form = {
							title: '',
							url: ''
						};
						_self.ajaxData();
					})
					.catch(function(error) {
						//_self.$message.error(error);
					});
			}
		},
		data() {
			return {
				data: [],
				addSilderVisible: false,
				form: {
					title: '',
					url: ''
				},
				formLabelWidth: '120px'
			}
		}
	}
</script>

<style>

</style>