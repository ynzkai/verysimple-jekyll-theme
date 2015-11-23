$(document).ready(function() {
	$container = $(".speak-panel");

	$container.init_robot({
		container: $container, 
		interval: 200,
		pausekey: '`',
		deletekey: '@',
		newline: '<',
		loop: false
	});

	//设置网页头部的说话文本
	var msg = ".`.`.`.`.`.`.`.`.`.`@<\
Hi, I'm ZK.<\
A web developer.```<\
I like many many things,<\
such as c/c++, ruby, js, iOS,<\
html, css, drawing and design,<\
and so on...```<\
but now,<\
I focus on ruby and RoR.```<\
Ruby is beautiful.  -EOF-<\
click me to say again.";

	$container.speak(msg);
	$container.click(function () {
		$(this).speak(msg);
	});


	//设置about页面的技能值
	var skills = new Array();
	var $a = $("#ruby");
	var $b = $("#javascript");
	var $c = $("#HTML");
	var $d = $("#CSS");
	var $e = $("#Cpp");
	$a.w = "90%"
	$b.w = "75%";
	$c.w = "80%";
	$d.w = "80%";
	$e.w = "60%";
	skills.push($a);
	skills.push($b);
	skills.push($c);
	skills.push($d);
	skills.push($e);
	for(var i=0; i<skills.length; i++) {
		skills[i].animate({width: skills[i].w}, "slow").text(skills[i].attr("id") + " " + skills[i].w);
	}
});
