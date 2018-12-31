<div>@@if (type === 'default'){
	@@if(light === false){
		@@if(color === ""){
			&lt;a href="#" class="button"&gt;Button Text&lt;/a&gt;
		}
		@@if(color !== ""){
			@if(color == "campus gold"){
				&lt;a href="#" class="button button--campusGold"&gt;Button Text&lt;/a&gt;
			}
			@if(color == "black"){
				&lt;a href="#" class="button button--black"&gt;Button Text&lt;/a&gt;
			}
		}
	}
	@@if(light == true){
		@@if(color === ""){
			&lt;a href="#" class="button button--light"&gt;Button Text&lt;/a&gt;
		}
		@@if(color !== ""){
			@if(color == "campus gold"){
				&lt;a href="#" class="button button--campusGold button--light"&gt;Button Text&lt;/a&gt;
			}
			@if(color == "black"){
				&lt;a href="#" class="button button--black button--light"&gt;Button Text&lt;/a&gt;
			}
		}
	}
}</div>
etc...