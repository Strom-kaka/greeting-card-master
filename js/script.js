
window.onload = function(){
	var music = document.getElementById('music');
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var page3 = document.getElementById('page3');
	var audio = document.getElementsByTagName('audio')[0];
	
	//当音乐播放停止时候，自动停止光盘旋转
	audio.addEventListener('ended',function(event){
		music.setAttribute('class','');
	},false);

	//点击音乐图标，控制播放暂停音乐
	music.addEventListener('touchstart',function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute('class','play');
		}else{
			audio.pause();
			this.setAttribute('class','');
		}		
	},false)

//跳转页面
	page1.addEventListener('touchstart',function(event){
		page1.style.display = 'none';
		page2.style.display = 'block';
		page3.style.display = 'block';
		page3.style.top     = '100%';
		
		setTimeout(function(){
			page2.setAttribute('class','page fadeOut');
			page3.setAttribute('class','page fadeIn');
		},5500);
	},false)
}