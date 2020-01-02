(function(){
	function Game(){
		this.food=new Food();
		this.snake=new Snake();
	}
	Game.prototype.render=function(){
		this.food.render();
		this.snake.render();
		
		start.onclick=function(){
			timeid=setInterval(fn.bind(this),150);
		}.bind(this);
		stop.onclick=function(){
			if(timeid){
				clearInterval(timeid);
			}
		}
		document.onkeydown=function(e){
			switch(e.keyCode){
				case 37:
					if(this.snake.direction==='right')break;
					this.snake.direction='left';break;
				case 38:
					if(this.snake.direction==='bottom')break;
					this.snake.direction='top';break;
				case 39:
					if(this.snake.direction==='left')break;
					this.snake.direction='right';break;
				case 40:
					if(this.snake.direction==='top')break;
					this.snake.direction='bottom';break;
			}
		}.bind(this);
	}
	function fn(){
		var maxX=map.offsetWidth/this.snake.width-1;
		var maxY=map.offsetHeight/this.snake.height-1;
		var head=this.snake.body[0];
		var x=this.snake.body[0].x*this.snake.width;
		var y=this.snake.body[0].y*this.snake.height;
		this.snake.move();
		if(head.x<0||head.y<0||head.x>maxX||head.y>maxY){
			alert('game over');
			clearInterval(timeid);
			return;
		}
		for(var i=1;i<this.snake.body.length;i++){
			if(this.snake.body[0].x==this.snake.body[i].x&&this.snake.body[0].y==this.snake.body[i].y){
				alert('game over');
				clearInterval(timeid);
				return;
			}
		}
		this.snake.render();
		if(this.food.x==x&&this.food.y==y){
			this.food.render();
			this.snake.body.push({x:0,y:0,col:'blue'});
			score+=10;
			scores.innerText=score;
		}
		
	}
	window.Game=Game;
})()
