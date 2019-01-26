```handlebars
<a href="#"
	class="button 
		{{ifEquals this.light true 'button-light'}}
		{{ifEquals this.color 'campus gold' 'button--campusGold'}}
		{{ifEquals this.color 'black' 'button--black'}}
	">
		Button Text
</a>
```