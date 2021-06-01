import React, { PureComponent, createRef } from 'react';

class More extends PureComponent {
  componentDidMount() {
    if (window._MORE_ARTICLE) {
      this.container.current.appendChild(window._MORE_ARTICLE)
      window._MORE_ARTICLE.style.display = 'block'
    }
  }

  container = createRef()

  render() {
    return (
      <div ref={this.container} />
    );
  }
}

export default More;
