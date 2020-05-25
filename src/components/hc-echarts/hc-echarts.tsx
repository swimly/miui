import { Component, Host, h, Element, Prop } from '@stencil/core';
// import * as echarts from 'echarts'
// import config from '../../utils/echarts'
@Component({
  tag: 'hc-echarts',
  styleUrl: 'hc-echarts.scss',
  shadow: true,
})
export class HcEcharts {
  @Prop() type: string;
  @Prop() data;
  @Prop() titles: string;
  @Prop() height: number = 200;
  @Element() el:HTMLElement
  componentDidLoad () {
  }
  render() {
    return (
      <Host>
        <div class="hc-echarts" style={{ height: `${this.height}px` }}></div>
      </Host>
    );
  }
}
