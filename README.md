# 1. 使用 craco 配置

### 1. 配置别名

##### 1. 安装 craco

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

### 2. 配置 less

##### 1. 安装 craco-less

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

##### 1. 安装 normalize.css

```
npm i normalize.css
```

# 2. hooks

### 1. useState的初始化值, 只在组件第一次渲染时有效
