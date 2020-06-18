import { Component, Host, h, Prop, Element, Watch, Method, Event, EventEmitter } from '@stencil/core';
import {get3MonthDays, get3WeekDays, dateFormat, getRangeMonthDays, DisDate, getDiffDates} from '../../utils/calendar'
@Component({
  tag: 'hc-calendar',
  styleUrl: 'hc-calendar.scss',
  shadow: true,
})
export class HcCalendar {
  @Prop() type: string;
  @Prop() date: string = dateFormat('YYYY/MM/DD', new Date());
  @Prop() range: number;
  @Prop() current: string = dateFormat('YYYY/MM/DD', new Date());
  @Prop() weekday: number = new Date(this.date).getDay();
  @Prop() section: string = '';
  @Prop() padding: number = 0;
  @Prop() header: string = 'title,diff,today,type'
  @Prop() command: boolean;
  @Prop() showButtons: boolean;
  @Element() el: HTMLElement;
  @Event() vchange: EventEmitter;
  @Event() vdone: EventEmitter;
  data;
  select;
  $drawer;
  @Watch('date')
  dateHandle (v: string) {
    this.el.shadowRoot.querySelector('hc-calendar-head').setAttribute('date', v)
    this.el.setAttribute('date', v)
  }
  @Watch('current')
  currentHandle (v: string) {
    this.el.setAttribute('current', v)
    var week = (new Date(v)).getDay()
    this.weekday = week == 0 ? 7 : week
    this.vchange.emit({
      date: v
    })
  }
  @Watch('weekday')
  weekdayHandl (v: string) {
    this.el.setAttribute('weekday', v)
  }
  @Watch('section')
  sectionHandle (v: string) {
    this.el.setAttribute('section', v)
  }
  componentDidLoad () {
    this.select = this.section ? this.section.split(',') : []
    this.$drawer = this.el.shadowRoot.querySelector('hc-drawer')
  }
  render() {
    var section = this.section.split(',')
    this.data = this.type == 'week' ? get3WeekDays(this.date) : this.range ? getRangeMonthDays(this.date, this.range) : get3MonthDays(this.date)
    if (this.section.split(',').length > 1) {
      var dif = getDiffDates(section[0], section[1]).join(',')
    }
    var now = new Date(this.current)
    var d = now.getDate()
    var time = new Date()
    let dom;
    var width = this.el.offsetWidth - this.padding * 2
    // 月滚动视图
    if (this.type === 'week') {
      dom = (
        <hc-calendar-content {...{
          width: width,
          'is-week': this.type == 'week'
          }}
          onVswitch={this.onSwitch.bind(this)}
        >
          {
            this.data.map((week) => (
              <hc-calendar-week {...{
                width: width
              }}>
                {
                  week.days.map((day, index) => (
                    <hc-calendar-day {...{
                      index: index,
                      year: day.year, 
                      month: day.month, 
                      day: day.day, 
                      weekday: day.weekday,
                      week: day.week,
                      'is-today': day.year == time.getFullYear() && day.month == time.getMonth() + 1 && day.day == time.getDate(),
                      'is-current': day.day == d,
                      'is-week': true,
                      'is-cweek': day.weekday == this.weekday
                    }}
                    onVclick={this.onClick.bind(this)}
                    >{day.day}</hc-calendar-day>
                  ))
                }
              </hc-calendar-week>
            ))
          }
        </hc-calendar-content>
      )
    // 月试图
    } else {
      dom = (
        <hc-calendar-content {...{
          width: width, 
          range: this.range,
          vertical: this.range ? true: false
        }}
        onVswitch={this.onSwitch.bind(this)}
        >
          {
            this.data.map((month, i) => (
              <hc-calendar-month {...{
                width: width, 
                year: month.year,
                month: month.month,
                range: this.range,
                index: i
              }}
              onVmonthchange={this.onMonthChange.bind(this)}
              >
                {
                  month.days.map((week) => (
                    <hc-calendar-week>
                      {
                        week.map((day, index) => (
                          <hc-calendar-day {...{
                            index: index,
                            year: day.year, 
                            month: day.month, 
                            day: day.day, 
                            week: day.week, 
                            weekday: day.weekday,
                            range: this.range,
                            section: dif,
                            'is-today': day.year == time.getFullYear() && day.month == time.getMonth() + 1 && day.day == time.getDate(),
                            'is-current': day.day == d,
                            'is-month': day.month == month.month
                          }}
                          onVclick={this.onClick.bind(this)}
                          onVrange={this.onRange.bind(this)}
                          >{day.day}</hc-calendar-day>
                        ))
                      }
                    </hc-calendar-week>
                  ))
                }
              </hc-calendar-month>
            ))
          }
        </hc-calendar-content>
      )
    }
    var doms = (
      <div style={{padding: `${this.padding}px`}}>
        <hc-calendar-head {...{
          date: this.date, type: this.type, range: this.range, header: this.header
        }}
        onVtypechange={this.onTypeChange.bind(this)}
        onVdatechange={this.onDateChange.bind(this)}
        ></hc-calendar-head>
        <slot>
          {dom}
        </slot>
      </div>
    )
    var footer = (<div></div>)
    if (this.showButtons) {
      footer = (
        <hc-row class="footer">
          <hc-col span={12}>
            <hc-button onClick={this.destory.bind(this)} type="info" rounder={true}>取消</hc-button>
          </hc-col>
          <hc-col align="right" span={12}>
            <hc-button onClick={this.destory.bind(this)} type="primary" rounder={true}>确定</hc-button>
          </hc-col>
        </hc-row>
      )
    }
    var content
    if (this.command) {
      content = (
        <hc-drawer place="down" rounder>
          {doms}
          {footer}
        </hc-drawer>
      )
    }
    return (
      <Host style={{padding: `${this.padding}px`}}>
        {this.command ? content : doms}
      </Host>
    );
  }
  onSwitch (e) {
    // 切换月份
    if (this.type !== 'week') {
      var time = new Date(this.date)
      var year = time.getFullYear()
      var month = time.getMonth() + 1
      var day = time.getDate()
      if (e.detail == 'next') {
        // 下个月
        year = month < 12 ? year : year + 1
        month = month < 12 ? month + 1 : 1
      } else {
        // 上个月
        year = month > 1 ? year : year - 1
        month = month > 1 ? month - 1 : 12
      }
      this.date = `${year}/${month}/${day}`
      // 切换星期
    } else {
      if (e.detail == 'next') {
        // 下周
        this.date = DisDate(this.date, 7)
      } else {
        // 上周
        this.date = DisDate(this.date, -7)
      }
    }
    
  }
  onTypeChange (e) {
    if (!this.range) {
      this.type = e.detail
    }
  }
  onDateChange (e) {
    this.date = e.detail
    this.current = e.detail
  }
  onMonthChange (e) {
    this.el.shadowRoot.querySelector('hc-calendar-head').setTitle(`${e.detail.year}/${e.detail.month}/1`)
  }
  onClick (e) {
    this.date = e.detail.date
    this.current = e.detail.date
    this.weekday = e.detail.weekday
  }
  onRange (e) {
    if (this.section) {
      this.onClear()
    }
    if (this.select.length < 2) {
      // 处理选中，始终保证小的日期在前面
      if ((new Date(e.detail.date)).getTime() < (new Date(this.select[0])).getTime()) {
        this.select.push(this.select[0])
        this.select[0] = e.detail.date
      } else {
        this.select.push(e.detail.date)
      }
    } else {
      this.select = []
      this.select.push(e.detail.date)
    }
    if (this.select.length == 2) {
      this.section = this.select.join(',')
    }
  }
  onClear () {
    // 提高查找效率，只查找上次选中的日期
    var days = this.el.shadowRoot.querySelectorAll('hc-calendar-day[select]')
    days.forEach(day => {
      day.removeAttribute('select')
      day.removeAttribute('begin')
      day.removeAttribute('end')
    })
  }
  @Method()
  async destory () {
    this.$drawer.destory()
    this.vdone.emit({
      date: this.range ? this.section : this.current
    })
    setTimeout(() => {
      if (this.command) {
        setTimeout(() => {
          document.body.removeChild(this.el)
        }, 300)
      }
    }, 300)
  }
  @Method()
  async generate (option: object = null) {
    if (option) {
      var calendar = document.createElement('hc-calendar')
      for (let key in option) {
        var prop;
        if (typeof option[key] == 'object') {
          prop = JSON.stringify(option[key])
        } else {
          prop = option[key]
        }
        calendar.setAttribute(key, prop)
      }
      calendar.setAttribute('padding', `15`)
      calendar.setAttribute('command', 'true')
      calendar.setAttribute('show-buttons', 'true')
      document.body.appendChild(calendar)
      calendar.generate()
      return calendar;
    } else {
      setTimeout(() => {
        this.$drawer.generate()
      }, 30)
    }
  }
}
