import React from 'react';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index';

class CodeSection extends React.Component {

	constructor(props) {
    super(props);
    this.language = props.language || '';
    if(this.language !== 'css' && this.language !== 'c-like' && this.language !== 'javascript' && this.language !== 'markup'){
      loadLanguages([this.language]);
    }
    this.code = props.code || '';
    this.html = Prism.highlight(this.code,Prism.languages[this.language],this.language);
  }

  getHtml(){
    return {__html: this.html};
  }

  render(props){
    return (
      <pre className={`language-${this.language}`}>
        {<code dangerouslySetInnerHTML={this.getHtml()}/>}
      </pre>
    );
  }

}

export default CodeSection;