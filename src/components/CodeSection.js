import React from 'react';

/**
 * A functional React component used to place a code section, highlighted via PrismJS, on a page.
 * @param {string} props.language - The language of the code being highlighted.
 * @param {string} props.code - The actual code being placed within the code section. This should already be passed through the gatsby-remark-prismjs plugin https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/?=prismjs.
 */
function CodeSection(props) {
  return (
    <pre className={`language-${props.language}`}>
      <code dangerouslySetInnerHTML={{__html:props.code}}/>
    </pre>
  );
}

export default CodeSection;