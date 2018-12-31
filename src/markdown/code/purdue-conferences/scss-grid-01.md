```scss
/* example of using @supports */
.panels{
	// flexbox styles for browsers that don't support @supports
	display:flex;
	flex-flow:row wrap;
	justify-content:flex-start;
	align-items:stretch;
	&__panel{
		flex:1 1 auto;
	}
	@supports (display:grid){
		// grid styles for browsers that support @supports
		display:grid;
		grid-template-columns:1fr 1fr;
		grid-template-rows:0.75fr 0.25fr 0.73fr 0.15fr 0.75fr;
		grid-template-areas:
			"panel--0 panel--1" 
			"panel--0 panel--2" 
			"panel--3 panel--2" 
			"panel--4 panel--2" 
			"panel--4 panel--5";
		&__panel{
			&--1{
				grid-area:panel--0;
			}
		}
	}
}
```