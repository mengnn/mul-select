# mul-select
一个可自定义的多级联动组件

### 首先引入依赖文件

```html
// 样式表
<link rel="stylesheet" href="css/mul-select.css">
// js文件
<script src="js/mul-select.js" type="text/javascript" charset="utf-8"></script>
```

### 其次在需要用的地方加入html文件

```html
<div class="input-box" style="position: relative;">
     <input type="text" readonly class="mul-input" id="mul-input" >
</div>
```

### 然后初始化并自定义你要显示的数据

```js
// 初始化
var vl = "oneLevel": [
        {
            "value": "地球1",
            "twoLevel": [
                {
                    "value": "中国1-21",
                    "threeLevel": [
                        {
                            "value": "湖北省1-21-31",
                            "fourLevel": [
                                {
                                    "value": "武汉市1-21-31-41",
                                    "fiveLevel": [
                                        {
                                            "value": "硚口区1-21-31-41-51"
                                        },
                                        {
                                            "value": "江岸区1-21-31-41-52"
                                        }
                                    ]
                                },
                                {
                                    "value": "咸宁市1-21-31-42",
                                    "fiveLevel": [
                                        {
                                            "value": "区1-21-31-42-51"
                                        },
                                        {
                                            "value": "区1-21-31-42-52"
                                        }
                                    ]
                                }
                            ]
                        },
						{
						    "value": "湖北省1-21-32",
						    "fourLevel": [
						        {
						            "value": "武汉市1-21-32-41",
						            "fiveLevel": [
						                {
						                    "value": "硚口区1-21-32-41-51"
						                },
						                {
						                    "value": "江岸区1-21-32-41-52"
						                }
						            ]
						        },
						        {
						            "value": "咸宁市1-21-32-42",
						            "fiveLevel": [
						                {
						                    "value": "区1-21-32-42-51"
						                },
						                {
						                    "value": "区1-21-32-42-52"
						                }
						            ]
						        }
						    ]
						}
                    ]
                },
				{
				    "value": "中国1-22",
				    "threeLevel": [
				        {
				            "value": "湖北省1-22-31",
				            "fourLevel": [
				                {
				                    "value": "武汉市1-22-31-41",
				                    "fiveLevel": [
				                        {
				                            "value": "硚口区1-22-31-41-51"
				                        },
				                        {
				                            "value": "江岸区1-22-31-41-52"
				                        }
				                    ]
				                },
				                {
				                    "value": "咸宁市1-22-31-42",
				                    "fiveLevel": [
				                        {
				                            "value": "区1-22-31-42-51"
				                        },
				                        {
				                            "value": "区1-22-31-42-52"
				                        }
				                    ]
				                }
				            ]
				        },
						{
						    "value": "湖北省1-22-32",
						    "fourLevel": [
						        {
						            "value": "武汉市1-22-32-41",
						            "fiveLevel": [
						                {
						                    "value": "硚口区1-22-32-41-51"
						                },
						                {
						                    "value": "江岸区1-22-32-41-52"
						                }
						            ]
						        },
						        {
						            "value": "咸宁市1-22-32-42",
						            "fiveLevel": [
						                {
						                    "value": "区1-22-32-42-51"
						                },
						                {
						                    "value": "区1-22-32-42-52"
						                }
						            ]
						        }
						    ]
						}
				    ]
				}
            ]
        }
    ]
}

// 初始化方法
mulClick('mul-input',['一级','二级','三级','四级','五级'],vl)
```

