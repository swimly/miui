import { Component, Host, h, Prop, Watch, Event, EventEmitter } from '@stencil/core';
import {dateFormat, getDiffDate} from '../../utils/calendar'
@Component({
  tag: 'hc-calendar-head',
  styleUrl: 'hc-calendar-head.scss',
  shadow: true,
})
export class HcCalendarHead {
  @Prop() date: string;
  @Prop() type: string;
  @Event() vtypechange: EventEmitter
  @Event() vdatechange: EventEmitter
  @Watch('date')
  dateHandle (v: string) {
    this.vdatechange.emit(v)
  }
  componentDidLoad () {
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
    var str = ''
    var today = (<span></span>);
    if (dif > 0) {
      str = `${dif}天前`
      today = (<hc-tag size="small" onClick={this.backToday.bind(this)} type="primary" rounder outline>今</hc-tag>)
    } else if (dif < 0) {
      str = `${-dif}天后`
      today = (<hc-tag size="small" onClick={this.backToday.bind(this)} type="primary" rounder outline>今</hc-tag>)
    } else {
      str = '今日'
    }
    var type = this.type == 'week' ? '周' : '月'
    return (
      <Host>
        <hc-row class="title">
          <hc-col span={10}>{dateFormat('YYYY年mm月', new Date(this.date))}</hc-col>
          <hc-col>
            <hc-tag rounder size='small'>{str}</hc-tag>
          </hc-col>
          <hc-col flex={1} align="right">
            {today}
            <hc-tag style={{marginLeft: `10px`}} type="primary" size="small" rounder outline onClick={this.changeType.bind(this)}>{type}</hc-tag>
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
}
