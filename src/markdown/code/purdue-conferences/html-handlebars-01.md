```html
@@if (type === 'default'){
	@@if(light === false){
		@@if(color === ""){
			<a href="#" class="button">Button Text</a>
		}
		@@if(color !== ""){
			@if(color == "campus gold"){
				<a href="#" class="button button--campusGold">Button Text</a>
			}
			@if(color == "black"){
				<a href="#" class="button button--black">Button Text</a>
			}
		}
	}
	@@if(light == true){
		@@if(color === ""){
			<a href="#" class="button button--light">Button Text</a>
		}
		@@if(color !== ""){
			@if(color == "campus gold"){
				<a href="#" class="button button--campusGold button--light">Button Text</a>
			}
			@if(color == "black"){
				<a href="#" class="button button--black button--light">Button Text</a>
			}
		}
	}
}
```
etc...