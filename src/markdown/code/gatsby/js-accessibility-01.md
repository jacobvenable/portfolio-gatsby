```javascript
import Accordions from './Accordions';

function SomeComponent(){
	return(
		<Accordions>

			{/* start of accordion group 1 */}
			<button>Accordion Group Button 1</button>
				<p>Content for the 1st accordion group.</p>
				<p>Content for the 1st accordion group continued.</p>
			{/* end of accordion group 1*/}


			{/* start of accordion group 2 */}
			<button>Accordion Group Button 2</button>
				<p>Content for the 2nd accordion group.</p>
				<p>Content for the 2nd accordion group continued.</p>
			{/* end of accordion group 2 */}

		</Accordions>
	);
}
```