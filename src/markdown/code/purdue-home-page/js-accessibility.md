```javascript
// jQuery used since it's already implemented for Bootstrap
this.element.bind('mousedown keypress',function(e){
	if(e.type === "mousedown"){ //the container was interacted with a mouse
		this.element.classList.add('tiles__tile--mouse');
	}
	else if(e.type === "keypress"){ //the container was interacted with a keyboard
		this.element.classList.remove('tiles__tile--mouse');
	}
});
```