const path = require("path")
const CracoLessPlugin = require("craco-less")

module.exports = {
	// less
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyvars: { "@primary": "#1DA57A" },
						javascriptEnabled: true,
					},
				},
			},
		},
	],
	// webpack
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			// components: path.resolve(__dirname, "src/components"),
		},
	},
}
