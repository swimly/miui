import { Component, Host, h, Element } from '@stencil/core';
import MeScroll from '../../utils/mescroll.js'
@Component({
  tag: 'hc-infinite',
  styleUrl: 'hc-infinite.scss',
  shadow: true,
})
export class HcInfinite {
  @Element() el:HTMLElement;
  componentDidLoad () {
    var mescroll = MeScroll(this.el.shadowRoot.querySelector('#mescroll'), {
      down: {
        callback: () => {
          setTimeout(() => {
            mescroll.endSuccess()
          }, 3000)
        } //下拉刷新的回调,别写成downCallback(),多了括号就自动执行方法了
      },
      up: {
        callback: () => {
          setTimeout(() => {
            mescroll.endErr()
          }, 3000)
        }
      }
    })
  }
  render() {
    return (
      <Host>
        <div id="mescroll" class="mescroll">
          <div>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
