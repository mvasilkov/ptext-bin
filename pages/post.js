import axios from 'axios';
import React from 'react';
import '../styles/style.scss'
import marked from 'marked';
import Link from 'next/link';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      url: "http://project-text.com/df4fSv",
      schema: "palatino"
    };
  }
  
  handleChange = (e) => {
    this.setState({text: e.target.value});
  }

  handleClick = (e) => {
    console.log('>>>', this.state.text);
    // axios.post('/new', { contents: this.state.text })
    //   .then(r => {
    //     console.log('handleded', r);
    //     this.setState({url: r.url});
    //   })
  }

  changeFont = (e) => {
    console.log('changing');
    this.setState({schema: e.target.value});
  }

  render() {
    return (
      <div className='wrapper'>
        <div className="controls">
        <div className='url'><span>Url of text:</span>
        <Link href={this.state.url}><a>{this.state.url}</a></Link>
        </div>
          <div><select onChange={this.changeFont}>
              <option value='palatino'>Palatino</option>
              <option value='garamond'>Garamond</option>
              <option value='bookman'>Bookman</option>
          </select></div>
          <button onClick={this.handleClick}>Save</button>
        </div>
        <div className="add-text">
          <textarea className="raw" onChange={this.handleChange}></textarea>
        <article className={`preview ${this.state.schema}`} dangerouslySetInnerHTML={{__html: marked(this.state.text)}}></article>
        </div>
      </div>
    );
  }
}