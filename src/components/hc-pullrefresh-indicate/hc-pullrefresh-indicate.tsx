import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'hc-pullrefresh-indicate',
  styleUrl: 'hc-pullrefresh-indicate.scss',
  shadow: true,
})
export class HcPullrefreshIndicate {
  @Prop() height: number;
  @Prop() status: number = 0;
  @Prop() loading: boolean;
  @Prop() labels: string = '下拉刷新,松手刷新,加载中,加载成功,加载失败';
  @Prop() icons: string = 'falling,rising,loading,success,cry'
  @Watch('status')
  statusHandle (v: number) {
    if (v == 2) {
      this.loading = true
    } else {
      this.loading = false
    }
  }
  render() {
    var labels = this.labels.split(',')
    var icons = this.icons.split(',')
    return (
      <Host style={{
        height: `${this.height}px`
      }}>
        <slot>
          <hc-row valign="center">
            <hc-icon spin={this.loading} size={24} name={icons[this.status]}></hc-icon>
            <span>{labels[this.status]}</span>
          </hc-row>
        </slot>
      </Host>
    );
  }

}
