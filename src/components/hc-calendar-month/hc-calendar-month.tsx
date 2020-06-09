import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'hc-calendar-month',
  styleUrl: 'hc-calendar-month.scss',
  shadow: true,
})
export class HcCalendarMonth {
  @Prop() index: number;
  @Prop() width: number;
  @Prop() month: number;
  @Prop() year: number;
  @Prop() range: number;
  @Element() el: HTMLElement;
  @Event() vmonthchange: EventEmitter;
  componentDidLoad () {
    if (this.range) {
      this.bindObverse()
      if (this.index == 0) {
        this.el.shadowRoot.querySelector('.title').classList.add('hide')
      }
    }
  }
  render() {
    var title = (<span></span>)
    if (this.range) {
      title = (<h2 {...{year: this.year, month: this.month}} class="title">{this.year}年{this.month}月</h2>)
    }
    return (
      <Host {...{month: this.month, range: this.range, year: this.year}} style={{width: `${this.width}px`}}>
        {title}
        <slot></slot>
      </Host>
    );
  }
  bindObverse () {
    var io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry && entry.isIntersecting) {
          this.vmonthchange.emit({
            year: entry.target.getAttribute('year'),
            month: entry.target.getAttribute('month')
          })
        }
      })
    })
    io.observe(this.el.shadowRoot.querySelector('.title'))
  }
}
