module.exports = {
	devServer: {
	open:true,
		proxy: {
			'/api': {
				target: 'http://5.sxqrkj.cn',//127.0.0.1:8000
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	}
}