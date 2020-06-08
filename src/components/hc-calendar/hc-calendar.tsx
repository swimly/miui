import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';
import {get3MonthDays, get3WeekDays, dateFormat, getRangeMonthDays, DisDate} from '../../utils/calendar'
@Component({
  tag: 'hc-calendar',
  styleUrl: 'hc-calendar.scss',
  shadow: true,
})
export class HcCalendar {
  @Prop() type: string;
  @Prop() date: string = dateFormat('YYYY/mm/dd', new Date());
  @Prop() range: number;
  @Prop() weekday: number = new Date(this.date).getDay();
  @Element() el: HTMLElement;
  data;
  @Watch('date')
  dateHandle (v: string) {
    this.el.shadowRoot.querySelector('hc-calendar-head').setAttribute('date', v)
    this.el.setAttribute('date', v)
  }
  componentDidLoad () {
    var content = this.el.shadowRoot.querySelector('hc-calendar-content')
    var head = this.el.shadowRoot.querySelector('hc-calendar-head')
    content.addEventListener('vswitch', this.onSwitch.bind(this))
    head.addEventListener('vtypechange', this.onTypeChange.bind(this))
    head.addEventListener('vdatechange', this.onDateChange.bind(this))
  }
  render() {
    this.data = this.type == 'week' ? get3WeekDays(this.date) : this.range ? getRangeMonthDays(this.date, this.range) : get3MonthDays(this.date)
    var now = new Date()
    var y = now.getFullYear()
    var m = now.getMonth() + 1
    var d = now.getDate()
    let dom;
    // 月滚动视图
    if (this.type === 'week') {
      dom = (
        <hc-calendar-content {...{
          width: this.el.offsetWidth,
          'is-week': this.type == 'week'
          }}
        >
          {
            this.data.map((week) => (
              <hc-calendar-week {...{
                width: this.el.offsetWidth
              }}>
                {
                  week.days.map((day) => (
                    <hc-calendar-day {...{
                      year: day.year, 
                      month: day.month, 
                      day: day.day, 
                      weekday: day.weekday,
                      week: day.week,
                      'is-today': day.year == y && day.month == m && day.day == d,
                      'is-current': day.day == d,
                      'is-week': true,
                      'is-cweek': day.weekday == this.weekday
                    }}>{day.day}</hc-calendar-day>
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
          width: this.el.offsetWidth, 
          range: this.range,
          vertical: this.range ? true: false
        }}>
          {
            this.data.map((month) => (
              <hc-calendar-month {...{
                width: this.el.offsetWidth, 
                month: month.month,
                range: this.range,
                multiple: this.data[0].month !== this.data[this.data.length - 1].month
              }}>
                {
                  month.days.map((week) => (
                    <hc-calendar-week>
                      {
                        week.map((day) => (
                          <hc-calendar-day {...{
                            year: day.year, 
                            month: day.month, 
                            day: day.day, 
                            week: day.week, 
                            weekday: day.weekday,
                            range: this.range,
                            'is-today': day.year == y && day.month == m && day.day == d,
                            'is-current': day.day == d,
                            'is-month': day.month == month.month
                          }}>{day.day}</hc-calendar-day>
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
    return (
      <Host>
        <hc-calendar-head {...{date: this.date, type: this.type}}></hc-calendar-head>
        <slot>
          {dom}
        </slot>
      </Host>
    );
  }
  onSwitch (e) {
    if (this.type !== 'week') {
      var time = new Date(this.date)
      var year = time.getFullYear()
      var month = time.getMonth() + 1
      var day = time.getDate()
      if (e.detail == 'next') {
        year = month < 12 ? year : year + 1
        month = month < 12 ? month + 1 : 1
      } else {
        year = month > 1 ? year : year - 1
        month = month > 1 ? month - 1 : 12
      }
      this.date = `${year}/${month}/${day}`
    } else {
      if (e.detail == 'next') {
        this.date = DisDate(this.date, 7)
      } else {
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
  }
}
