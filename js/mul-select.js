$(".mul-select-tab").find("span").click(function(){
	let thisIndex = $(this).index();
	$(this).addClass("active").siblings().removeClass("active")
})

var ObjectVal = '';

// console.log(ObjectVal.oneLevel)


// console.log(oneLecal)

let lastVal=''; //最后的结果
let eleId = "";
// var TABVAL = ['一级','二级','三级','四级','五级']
var TABVAL = [];
let oneIndex,
    twoIndex,
	threeIndex,
	fourIndex,
	fiveIndex; //每次点击的index
let oneText,
    twoText,
	threeText,
	fourText,
	fiveText; //每次点击的index


function oneInit(ObjectVal){
	let oneLecal = [];
	let textList = ''; //li标签
	
	// 一级
	oneLecal = ObjectVal.oneLevel.map((item) =>{
		return item.value
	})
	oneLecal.forEach((val) => {
		// console.log(val)
		textList += `<li onclick="selectUl1(this,event)">
						<span>${val}</span>
					</li>`
	})
	
	$(".mul-select-content").append(`<div class="mul-select-html">
										<ul class="mul-select-ul mul-select-ul1">
											${textList}
										</ul>
									</div>`)
}


// oneInit(ObjectVal)

/*******************************************************************************/

function twoInit(ObjectVal,index){
	let twoLecal = [];
	let textList = '';
	let contentLength = $(".mul-select-content").children(".mul-select-html").length;
	// console.log(contentLength)
	
	// 二级
	twoLecal = ObjectVal.oneLevel[index].twoLevel.map((item) =>{
		return item.value
	})
	twoLecal.forEach((val) => {
		textList += `<li onclick="selectUl2(this,event)">
						<span>${val}</span>
					</li>`
	})
	
	if (contentLength >= 2) {
		$(".mul-select-content").find(".mul-select-html").eq(1).html(`<ul class="mul-select-ul mul-select-ul2">
																			${textList}
																		</ul>`)
	}else {
		$(".mul-select-content").append(`<div class="mul-select-html">
											<ul class="mul-select-ul mul-select-ul2">
												${textList}
											</ul>
										</div>`)
	}
}

function selectUl1(obj,event){
	event.stopPropagation()
	let thisIndex = $(obj).index();
	oneIndex = thisIndex;
	oneText = $(obj).find("span").text();
	$(obj).addClass('active').siblings().removeClass('active')
	// twoInit(ObjectVal,oneIndex)
	// $(".mul-select-content").find(".mul-select-html").eq(1).show().siblings().hide();
	$(".mul-select-tab").find("span").eq(1).addClass('active').siblings().removeClass("active");
	
	
	// 如果没有下一级了
	// console.log(ObjectVal.oneLevel[oneIndex].twoLevel[twoIndex].threeLevel)
	if(ObjectVal.oneLevel[oneIndex].twoLevel == undefined) {
		$(".mul-select").hide();
		$(".mul-select-content").find(".mul-select-html").eq(0).siblings().remove();
		lastVal = oneText;
		get(eleId,lastVal);
		// $(".mul-select-content").find(".mul-select-html").eq(2).show().siblings().hide();
	}else {
		twoInit(ObjectVal,oneIndex)
		$(".mul-select-content").find(".mul-select-html").eq(1).show().siblings().hide();
	}
}

/*******************************************************************************/

function threeInit(ObjectVal,index1,index2){
	let threeLecal = [];
	let textList = '';
	let contentLength = $(".mul-select-content").children(".mul-select-html").length;
	
	// 三级
	// console.log(index1,index2)
	threeLecal = ObjectVal.oneLevel[index1].twoLevel[index2].threeLevel.map((item) =>{
		return item.value
	})
	threeLecal.forEach((val) => {
		textList += `<li onclick="selectUl3(this,event)">
						<span>${val}</span>
					</li>`
	})
	
	if (contentLength >= 3) {
		$(".mul-select-content").find(".mul-select-html").eq(2).html(`<ul class="mul-select-ul mul-select-ul3">
																			${textList}
																		</ul>`)
	}else {
		$(".mul-select-content").append(`<div class="mul-select-html">
											<ul class="mul-select-ul mul-select-ul3">
												${textList}
											</ul>
										</div>`)
	}
}


function selectUl2(obj,event){
	event.stopPropagation()
	let thisIndex = $(obj).index();
	twoIndex = thisIndex;
	twoText = $(obj).find("span").text();
	$(obj).addClass('active').siblings().removeClass('active')
	$(".mul-select-tab").find("span").eq(2).addClass('active').siblings().removeClass("active");
	
	// 如果没有下一级了
	// console.log(ObjectVal.oneLevel[oneIndex].twoLevel[twoIndex].threeLevel)
	if(ObjectVal.oneLevel[oneIndex].twoLevel[twoIndex].threeLevel == undefined) {
		$(".mul-select").hide();
		$(".mul-select-content").find(".mul-select-html").eq(0).siblings().remove();
		lastVal = oneText+"/"+twoText;
		get(eleId,lastVal);
		// $(".mul-select-content").find(".mul-select-html").eq(2).show().siblings().hide();
	}else {
		threeInit(ObjectVal,oneIndex,twoIndex)
		$(".mul-select-content").find(".mul-select-html").eq(2).show().siblings().hide();
	}
	
	
}


/*******************************************************************************/

function fourInit(ObjectVal,index1,index2,index3){
	let fourLecal = [];
	let textList = '';
	let contentLength = $(".mul-select-content").children(".mul-select-html").length;
	
	// 三级
	// console.log(index1,index2)
	fourLecal = ObjectVal.oneLevel[index1].twoLevel[index2].threeLevel[index3].fourLevel.map((item) =>{
		return item.value
	})
	fourLecal.forEach((val) => {
		textList += `<li onclick="selectUl4(this,event)">
						<span>${val}</span>
					</li>`
	})
	
	if (contentLength >= 4) {
		$(".mul-select-content").find(".mul-select-html").eq(3).html(`<ul class="mul-select-ul mul-select-ul4">
																			${textList}
																		</ul>`)
	}else {
		$(".mul-select-content").append(`<div class="mul-select-html">
											<ul class="mul-select-ul mul-select-ul4">
												${textList}
											</ul>
										</div>`)
	}
}


function selectUl3(obj,event){
	event.stopPropagation()
	let thisIndex = $(obj).index();
	threeIndex = thisIndex;
	threeText = $(obj).find("span").text();
	$(obj).addClass('active').siblings().removeClass('active')
	$(".mul-select-tab").find("span").eq(3).addClass('active').siblings().removeClass("active");
	
	if(ObjectVal.oneLevel[oneIndex].twoLevel[twoIndex].threeLevel[threeIndex].fourLevel == undefined) {
		$(".mul-select").hide();
		$(".mul-select-content").find(".mul-select-html").eq(0).siblings().remove();
		lastVal = oneText+"/"+twoText+"/"+threeText;
		get(eleId,lastVal)
	}else {
		fourInit(ObjectVal,oneIndex,twoIndex,threeIndex)
		$(".mul-select-content").find(".mul-select-html").eq(3).show().siblings().hide();
	}
	
}


/*******************************************************************************/

function fiveInit(ObjectVal,index1,index2,index3,index4){
	let fiveLecal = [];
	let textList = '';
	let contentLength = $(".mul-select-content").children(".mul-select-html").length;
	
	// 三级
	// console.log(index1,index2)
	fiveLecal = ObjectVal.oneLevel[index1].twoLevel[index2].threeLevel[index3].fourLevel[index4].fiveLevel.map((item) =>{
		return item.value
	})
	// console.log(fiveLecal)
	fiveLecal.forEach((val) => {
		textList += `<li onclick="selectUl5(this,event)">
						<span>${val}</span>
					</li>`
	})
	
	if (contentLength >= 5) {
		$(".mul-select-content").find(".mul-select-html").eq(4).html(`<ul class="mul-select-ul mul-select-ul4">
																			${textList}
																		</ul>`)
	}else {
		$(".mul-select-content").append(`<div class="mul-select-html">
											<ul class="mul-select-ul mul-select-ul4">
												${textList}
											</ul>
										</div>`)
	}
}


function selectUl4(obj,event){
	event.stopPropagation()
	let thisIndex = $(obj).index();
	fourIndex = thisIndex;
	fourText = $(obj).find("span").text();
	$(obj).addClass('active').siblings().removeClass('active')
	$(".mul-select-tab").find("span").eq(4).addClass('active').siblings().removeClass("active");
	
	if(ObjectVal.oneLevel[oneIndex].twoLevel[twoIndex].threeLevel[threeIndex].fourLevel[fourIndex].fiveLevel == undefined) {
		$(".mul-select").hide();
		$(".mul-select-content").find(".mul-select-html").eq(0).siblings().remove();
		lastVal = oneText+"/"+twoText+"/"+threeText+"/"+fourText;
		get(eleId,lastVal)
	}else {
		fiveInit(ObjectVal,oneIndex,twoIndex,threeIndex,fourIndex)
		$(".mul-select-content").find(".mul-select-html").eq(4).show().siblings().hide();
	}
	
}


function selectUl5(obj,event){
	event.stopPropagation()
	let thisIndex = $(obj).index();
	fiveIndex = thisIndex;
	fiveText = $(obj).find("span").text();
	$(obj).addClass('active').siblings().removeClass('active')
	
	// if(ObjectVal.oneLevel[oneIndex].twoLevel[twoIndex].threeLevel[threeIndex].fourLevel[fourIndex].fiveLevel == undefined) {
	// 	$(".mul-select").hide();
	// 	lastVal = oneText+"/"+twoText+"/"+threeText+"/"+fourText;
	// 	get(eleId,lastVal)
	// }else {
	// 	fiveInit(ObjectVal,oneIndex,twoIndex,threeIndex,fourIndex)
	// 	$(".mul-select-content").find(".mul-select-html").eq(4).show().siblings().hide();
	// }
	
	$(".mul-select").hide();
	$(".mul-select-content").find(".mul-select-html").eq(0).siblings().remove();
	lastVal = oneText+"/"+twoText+"/"+threeText+"/"+fourText+"/"+fiveText;
	get(eleId,lastVal)
}


function init(ele,tabval) {
	eleId = ele
	let tabList = ''
	tabval.forEach((val,index) => {
		if(index == 0) {
			tabList += `<span class="active" onclick="tabClick(this,event)">${val}</span>`
		}else {
			tabList += `<span onclick="tabClick(this,event)">${val}</span>`
		}
		
	})
	let childLength = $("#"+ele).parent().children(".mul-select").length;
	// console.log(childLength)
	if(childLength == 0) {
		$("#"+ele).parent().append(`<div class="mul-select">
								<div class="mul-select-wrap">
									<div class="mul-select-tab">
										${tabList}
									</div>
									<div class="mul-select-content">
										
									</div>
								</div>
							</div>`)
		oneInit(ObjectVal)
	}else {
		$(".mul-select").show()
		$("#"+ele).parent().find(".mul-select").find(".mul-select-tab").find("span").eq(0).addClass('active').siblings().removeClass("active");
		$("#"+ele).parent().find(".mul-select").find(".mul-select-content").find(".mul-select-html").eq(0).show().siblings().hide();
	}
	
}

function tabClick(obj,event){
	event.stopPropagation();
	let thisIndex = $(obj).index();
	$(obj).addClass("active").siblings().removeClass("active")
	$(obj).parent().parent().find(".mul-select-content").find(".mul-select-html").hide();
	$(obj).parent().parent().find(".mul-select-content").find(".mul-select-html").eq(thisIndex).show();
}

function get(ele,val) {
	$("#"+ele).val(val)
}

$("body,html").click(function(event){
	event.stopPropagation()
	$(".mul-select").hide();
	$(".mul-select-content").find(".mul-select-html").eq(0).siblings().remove();
})

var mulClick = function(ele,tabval,object) {
	ObjectVal = object
	$("#"+ele).click(function(event){
		event.stopPropagation()
		init(ele,tabval)
	})
}

// mulClick('mul-input')