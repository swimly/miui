import { Component, Host, h, Element } from '@stencil/core';
// import hljs from 'highlight.js'
@Component({
  tag: 'hc-code',
  styleUrl: 'hc-code.scss',
  shadow: true,
})
export class HcCode {
  @Element() el:HTMLElement
  code = 'div';
  componentDidLoad () {
    
    console.log(this.code)
  }
  render() {
    // var children = Array.from(this.el.children)
    // var wrap = document.createElement('div')
    // children.forEach(dom => {
    //   wrap.appendChild(dom)
    // })
    // this.code = hljs.highlight('html', wrap.innerHTML).value
    return (
      <Host>
        <div innerHTML={this.code}></div>
      </Host>
    );
  }

}
