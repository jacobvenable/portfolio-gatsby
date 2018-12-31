import React from 'react';

class CodeSection extends React.Component {

	constructor(props) {
    super(props);
    this.language = props.language || '';
    this.code = props.code || '';
  }

  getHtml(){
    return {__html: this.code};
  }

  render(props){
    return (
      <pre className={`language-${this.language}`}>
        <code dangerouslySetInnerHTML={this.getHtml()}/>
      </pre>
    );
  }

}

export default CodeSection;