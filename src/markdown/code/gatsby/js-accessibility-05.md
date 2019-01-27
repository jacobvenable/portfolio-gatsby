```javascript
//code in the middle of the loop where we identify buttons and their corresponding panels

//generateId is a custom utility that will return a unique ID concatenated with an optional string
let contentKey = generateId('accordions__button');

//create AccordionContent sub-component (the panel)
let content = (
	<AccordionContent
		key={contentKey}
		ref={contentRef}
		childElements={accordionChildren}
	/>
)

//create AccordionButton sub-component and pass the contentKey to be used as the aria-controls attribute
let button = (
	<AccordionButton
		key={generateId('accordions__button')}
		contentKey={contentKey}
		element={accordionButton}
		{...accordionButton.props}
	>
			{accordionButton.props.children}
	</AccordionButton>
);
```