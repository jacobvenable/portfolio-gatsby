```scss
/* font-size conversion via scss */
$font-size-px:16;
@function convert-toRem($i){
	@return $i/$font-size-px*1rem
}
.event__title{
	font-size:convert-toRem(20); /* 1.25rems (20px) */
}
.event__description{
	font-size:convert-toRem(14); /* 0.875rems (14px) */
}
```