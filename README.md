# 1. 使用craco配置

### 1. 配置别名

##### 1. 安装craco

```
npm i craco/croca@alpha -D( 使用与create-script 5以上 )
```

##### 2. 配置别名

```
module.exports = {
	
	// webpack
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			// components: path.resolve(__dirname, "src/components"),
		},
	},
}
```

### 2. 配置less

##### 1. 安装craco-less

```
npm i craco-less@2.1.0-alpha.0
```

##### 2.配置项

```
const CracoLessPlugin = require("craco-less")

module.exports = {
	// less
	plugins: [
		{
			plugin: CrocaLessPlugin,
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
	
}
```

### 3. 清除默认样式

##### 1. 安装normalize.css

```
npm i normalize.css
```

