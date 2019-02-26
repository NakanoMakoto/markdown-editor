import React, {Component} from 'react';
import marked from 'marked';

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: ''
    };

    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown(event) {
    this.setState({
      preview: marked(event.target.value)
    });
  }

  render() {
    console.log(this.state.preview);
    return (<div>
      <h1>Write Markdown here</h1>
      <textarea onChange={this.updateMarkdown}></textarea>
      <div dangerouslySetInnerHTML={{
          __html: this.state.preview
        }}></div>
    </div>);
  }
}

export default Markdown;