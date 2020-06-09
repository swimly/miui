import { Component, Host, h, Prop, Element, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'hc-calendar-day',
  styleUrl: 'hc-calendar-day.scss',
  shadow: true,
})
export class HcCalendarDay {
  @Prop() index: number;
  @Prop() year: number;
  @Prop() month: number;
  @Prop() day: number;
  @Prop() week: number;
  @Prop() weekday: number;
  @Prop() range: number;
  @Prop() isToday: boolean;
  @Prop() isCurrent: boolean;
  @Prop() isMonth: boolean;
  @Prop() isWeek: boolean;
  @Prop() isCweek: boolean;
  @Prop() section: string = '';
  @Element() el: HTMLElement;
  @Event() vclick: EventEmitter;
  @Event() vrange: EventEmitter;
  @Watch('section')
  sectionHandle () {
    this.renderClass()
  }
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
    if (this.section) {
      this.el.setAttribute('section',  `${this.section}`)
    }
  }
  componentDidLoad () {
    this.renderClass()
  }
  render() {
    return (
      <Host {...{
        'is-today': this.isToday,
        'is-current': this.isCurrent,
        'is-month': this.isMonth,
        'is-week': this.isWeek,
        'is-cweek': this.isCweek
      }}
      onClick={this.onClick.bind(this)}
      >
        <slot></slot>
      </Host>
    );
  }
  onClick () {
    if (this.range) {
      this.vrange.emit({
        date: `${this.year}/${this.month}/${this.day}`
      })
      this.el.setAttribute('select', 'true')
      this.el.setAttribute('begin', 'true')
    } else {
      this.vclick.emit({
        date: `${this.year}/${this.month}/${this.day}`,
        year: this.year,
        month: this.month,
        day: this.day,
        weekday: this.weekday,
        week: this.week
      })
    }
  }
  renderClass () {
    if (this.range) {
      var dif = this.section.split(',')
      var date = `${this.year}/${this.month >= 10 ? this.month : '0' + this.month}/${this.day >= 10 ? this.day : '0' + this.day}`
      var index = dif.indexOf(date)
      if (index >= 0) {
        this.el.setAttribute('select', 'true')
        if (index == 0) {
          this.el.setAttribute('begin', 'true')
        }
        if (index == dif.length - 1) {
          this.el.setAttribute('end', 'true')
        }
      }
    }
  }
}
