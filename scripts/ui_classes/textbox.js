var Textbox=function(parentScreen, x,y,width,height)
{
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.text="";
	this.keyMap=[];
	this.capsLock=false;//will this do any good?
	//context.fillStyle = color;
	//context.font = size + "px " + b.style;
	//context.fillText(b.text, b.x, b.y);


	this.createKeyEvent=function(event){
		var obj=this;
		return function(event){
			var key = event.keyCode;
			obj.keyMap[key]=event.type=='keydown';
			if(obj.keyMap[key]==true){
				if(key==8)
				{
					obj.text=obj.text.slice(0,-1);
				}
				else if(!(key>=112&&key<=123)&&!(key>=33&&key<=40)&&(key<91||key>93)&&(key<45||key>46)){//ignore function keys, arrow keys, doc navigation keys (pgup, etc.),window/select keys, insert key,
					//alert(key);
					var shiftHeld=obj.keyMap[16];
					//alert(shiftHeld);
					if(shiftHeld==undefined||shiftHeld==false)
					{
						if(key>=65&&key<=90)//letters
							obj.text+=String.fromCharCode(key+32);
						else if (key>=48&&key<=57||key==32)//numerals and space
							obj.text+=String.fromCharCode(key);
						else if(key>=96&&key<=105)//numpad numerals
						{
							obj.text+=String.fromCharCode(key-48);
						}
						else
						{
							var charCode;
							switch(key)
							{
								case 192:
									charCode=96;
									break;
								case 189: case 109:// - hyphen-minus
									charCode=45;
									break;
								case 187:
									charCode=61;
									break;

								case 219:
									charCode=91;
									break;
								case 221:
									charCode=93;
									break;
								case 220:
									charCode=92;
									break;

								case 186:
									charCode=59;
									break;
								case 222:
									charCode=39;
									break;

								case 188:
									charCode=44;
									break;
								case 190: case 110://full stop
									charCode=46;
									break;
								case 191: case 111: // / slash/divide
									charCode=47;
									break;

								//numpad
								case 106:
									charCode=42;
									break;
								case 107:
									charCode=43;
									break;
								




							}
							obj.text+=String.fromCharCode(charCode);
						}
					}

					else 
					{
						if(key>=65&&key<=90||key==32)//letters and space
							obj.text+=String.fromCharCode(key);
						else{
							var charCode;
							switch(key)
							{
								//normal number keys

								case 49:
									charCode=33;
									break;
								case 50:
									charCode=64;
									break;
								case 51:
									charCode=35;
									break;
								case 52:
									charCode=36;
									break;
								case 53:
									charCode=37;
									break;
								case 54:
									charCode=94;
									break;
								case 55:
									charCode=38;
									break;
								case 56: case 106://asterisk
									charCode=42;
									break;
								case 57:
									charCode=40;
									break;
								case 48:
									charCode=41;
									break;
								

								case 192:
									charCode=126;
									break;
								case 189: 
									charCode=95;
									break;
								case 187: case 107://+ sign
									charCode=43;
									break;

								case 219:
									charCode=123;
									break;
								case 221:
									charCode=125;
									break;
								case 220:
									charCode=124;
									break;

								case 186:
									charCode=58;
									break;
								case 222:
									charCode=34;
									break;

								case 188:
									charCode=60;
									break;
								case 190: 
									charCode=62;
									break;
								case 191: 
									charCode=63;
									break;

								//numpad
								case 111: // / slash/divide
									charCode=47;
									break;
								
								case 109:// - hyphen-minus
									charCode=45;
									break;
							}
							obj.text+=String.fromCharCode(charCode);
						}
					}
				}
			}
			obj.redraw();
			/*switch(key)
			{
				default: break;
			}*/
		}
	}
	this.keyEvent=this.createKeyEvent();

	this.draw=function(){
		context.fillText(this.text, this.x, this.y, this.width, this.height);
	}
	this.redraw=function(){
		parentScreen.drawScreen(parentScreen.bgImage);
	}
	this.onClick=function(){
		document.onkeydown=document.onkeyup=this.keyEvent;
		
	}
}