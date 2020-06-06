import { Component, Host, h, Prop, Element } from '@stencil/core';
import {get3MonthDays, get3WeekDays} from '../../utils/calendar'
@Component({
  tag: 'hc-calendar',
  styleUrl: 'hc-calendar.scss',
  shadow: true,
})
export class HcCalendar {
  @Prop() type: string;
  @Prop() date: string;
  @Element() el: HTMLElement;
  data;
  componentDidLoad () {
  }
  render() {
    this.data = this.type == 'week' ? get3WeekDays('2020/6/6') : get3MonthDays('2020/6/6')
    console.log(this.data)
    let dom;
    if (this.type === 'week') {
      dom = (
        <hc-calendar-content {...{width: this.el.offsetWidth}}>
          {
            this.data.map((week) => (
              <hc-calendar-week>
                {
                  week.days.map((day) => (
                    <hc-calendar-day {...{year: day.year, month: day.month, day: day.day, week: day.week}}>{day.day}</hc-calendar-day>
                  ))
                }
              </hc-calendar-week>
            ))
          }
        </hc-calendar-content>
      )
    } else {
      dom = (
        <hc-calendar-content {...{width: this.el.offsetWidth}}>
          {
            this.data.map((month) => (
              <hc-calendar-month>
                {
                  month.days.map((week) => (
                    <hc-calendar-week>
                      {
                        week.map((day) => (
                          <hc-calendar-day {...{year: day.year, month: day.month, day: day.day, week: day.week}}>{day.day}</hc-calendar-day>
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
        <slot>
          {dom}
        </slot>
      </Host>
    );
  }

}
