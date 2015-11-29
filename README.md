# verysimple-jekyll-theme

### 这是一个简单的jekyll模版

**Demo** <http://zkai.me>

### 如果你喜欢可以clone到本地，修改成你自己的blog。

	clone https://github.com/ynzkai/verysimple-jekyll-theme.git

### 增加页面

在根目录下新增一个文件，文件头保护如下内容

	---
	layout: category
	title: one
	category: algorithm
	---

### 修改头部文本内容

修改/js/main.js文件中的`var msg`文本。

	var msg = 'hello, world!<hello, jekyll!';

### 修改about页面中的技能条

1. 在about文件中增加`<div>`条目

		<div class="skill"">
		  <div class="skill">
			<div id="ruby" class="line"></div>
			<div id="javascript" class="line"></div>
			<div id="your-skill" class="line"></div>
		  </div>
		</div>

2. 在/js/main.js文件中增加几行代码

		var $foo = $("your-skill");
		$foo.w = "90%";
		skills.push($foo);
