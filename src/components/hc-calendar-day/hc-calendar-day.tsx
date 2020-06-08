import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'hc-calendar-day',
  styleUrl: 'hc-calendar-day.scss',
  shadow: true,
})
export class HcCalendarDay {
  @Prop() year: number;
  @Prop() month: number;
  @Prop() day: number;
  @Prop() week: number;
  @Prop() weekday: number;
  @Prop() date: string;
  @Prop() range: number;
  @Prop() isToday: boolean;
  @Prop() isCurrent: boolean;
  @Prop() isMonth: boolean;
  @Prop() isWeek: boolean;
  @Prop() isCweek: boolean;
  @Element() el: HTMLElement;
  componentWillRender () {
    if (this.year){
      this.el.setAttribute('year', `${this.year}`)
    }
    if (this.month){
      this.el.setAttribute('month', `${this.month}`)
    }
    if (this.day){
      this.el.setAttribute('day', `${this.day}`)
    }
    if (this.week){
      this.el.setAttribute('week', `${this.week}`)
    }
    if (this.range) {
      this.el.setAttribute('range',  `${this.range}`)
    }
    if (this.weekday) {
      this.el.setAttribute('weekday',  `${this.weekday}`)
    }
  }
  render() {
    return (
      <Host {...{
        'is-today': this.isToday,
        'is-current': this.isCurrent,
        'is-month': this.isMonth,
        'is-week': this.isWeek,
        'is-cweek': this.isCweek
      }}>
        <slot></slot>
      </Host>
    );
  }

}
