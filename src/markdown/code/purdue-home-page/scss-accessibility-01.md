```scss
/* example of applied focus styles */
.tiles{
	&__tile{
		&--customize{
			&:link,&:visited{
				background-color:#c28e0e;
				color:#000;
			}
			&:hover,&:active,&:focus{
				background-color:lighten(#c28e0e,10%);
				color:#000;
			}
			&:focus{
				outline:solid 1px #c28e0e;
				outline-offset:2px;
			}
		}
	}
}
```