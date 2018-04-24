import React from 'react';
import axios from 'axios';
import '../styles/style.scss'
import marked from 'marked';

export default class extends React.Component {
  static async getInitialProps({res, query}) {
    const { data } = await axios(`http://localhost:3001/${query.id}`);
    if (data.code === 'ENOENT' ) {
      res.statusCode = 404;
      return {text: "404"};
    }
    return { text: data }
  }

  render() {
    const { text } = this.props;
    return (
        <div className="container">
        <nav><a>Home</a> <a>Export</a></nav>
        <header></header>
        <article dangerouslySetInnerHTML={{__html: marked(text)}}></article>
        </div>
    )
  }
}
