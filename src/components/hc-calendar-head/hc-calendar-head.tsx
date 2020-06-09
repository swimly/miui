import { Component, Host, h, Prop, Watch, Event, EventEmitter, Method, Element } from '@stencil/core';
import {dateFormat, getDiffDate} from '../../utils/calendar'
@Component({
  tag: 'hc-calendar-head',
  styleUrl: 'hc-calendar-head.scss',
  shadow: true,
})
export class HcCalendarHead {
  @Prop() date: string;
  @Prop() type: string;
  @Prop() range: number;
  @Prop() header: string;
  @Event() vtypechange: EventEmitter
  @Event() vdatechange: EventEmitter
  @Element() el: HTMLElement;
  @Watch('date')
  dateHandle (v: string) {
    this.vdatechange.emit(v)
  }
  componentDidLoad () {
    var head = this.header.split(',')
    var titles = this.el.shadowRoot.querySelector('.title').querySelectorAll('hc-col')
    titles.forEach(tit => {
      var id = tit.getAttribute('id')
      if (head.indexOf(id) < 0) {
        tit.style.display = 'none'
      }
    })
  }
  render() {
    var arr = ['一', '二', '三', '四', '五', '六', '日']
    var weekday = (
      <hc-row class="week">
        {
          arr.map(item => (
            <hc-col flex={1} align="center">{item}</hc-col>
          ))
        }
      </hc-row>
    )
    var dif = getDiffDate(this.date)
    var diff = (<span></span>)
    var today = (<span></span>);
    if (!this.range) {
      if (dif > 0) {
        diff = <hc-tag rounder size='small'>{dif}天前</hc-tag>
        today = (<hc-tag size="small" onClick={this.backToday.bind(this)} type="primary" rounder outline>今</hc-tag>)
      } else if (dif < 0) {
        diff = <hc-tag rounder size='small'>{-dif}天后</hc-tag>
        today = (<hc-tag size="small" onClick={this.backToday.bind(this)} type="primary" rounder outline>今</hc-tag>)
      } else {
        diff = <hc-tag rounder size='small'>今日</hc-tag>
      }
    }
    var types = this.type == 'week' ? '周' : '月';
    var type;
    if (!this.range) {
      var type = (
        <hc-tag style={{marginLeft: `10px`}} type="primary" size="small" rounder outline onClick={this.changeType.bind(this)}>{types}</hc-tag>
      )
    } else {
      type = (<span></span>)
    }
    return (
      <Host>
        <hc-row class="title" align="center">
          <hc-col align="center" span={10} id="title">{dateFormat('YYYY年mm月', new Date(this.date))}</hc-col>
          <hc-col id="diff" flex={1}>
            {diff}
          </hc-col>
          <hc-col id="today">
            {today}
          </hc-col>
          <hc-col id="type" align="right">
            {type}
          </hc-col>
        </hc-row>
        {weekday}
        <slot></slot>
      </Host>
    );
  }
  changeType () {
    this.type = this.type == 'week' ? 'month' : 'week'
    this.vtypechange.emit(this.type)
  }
  backToday () {
    var time = new Date()
    this.date = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`
  }
  @Method()
  async setTitle (v) {
    this.el.shadowRoot.querySelector('#title').innerHTML = dateFormat('YYYY年mm月', new Date(v))
  }
}
