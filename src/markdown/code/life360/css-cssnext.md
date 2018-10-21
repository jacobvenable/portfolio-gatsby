```css
/* font-size conversion via cssnext */
:root{
	font-size:1rem;
	--baseFontSize:16; /* default font-size (in pixels) of most browsers */
}
.event__title{
	font-size:calc(20/var(--baseFontSize)*1rem); /* 1.25rems (20px) */
}
.event__description{
	font-size:calc(14/var(--baseFontSize)*1rem); /* 0.875rems (14px) */
}
```