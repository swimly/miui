import { Component, Host, h, Element, Event, EventEmitter } from '@stencil/core';
import Hammer from 'hammerjs'
@Component({
  tag: 'hc-touch',
  styleUrl: 'hc-touch.scss',
  shadow: true,
})
export class HcTouch {
  @Element() el: HTMLElement;
  @Event() vchange: EventEmitter;
  componentDidLoad() {
    this.bindTouch()
  }
  render() {
    return (
      <Host>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
  bindTouch() {
    this.hammerIt(this.el.shadowRoot.querySelector('.content'))
  }
  hammerIt(elm) {
    var _this = this
    var hammertime = new Hammer(elm, {});
    hammertime.get('pinch').set({
      enable: true
    });
    var posX = 0,
      posY = 0,
      scale = 1,
      last_scale = 1,
      last_posX = 0,
      last_posY = 0,
      max_pos_x = 0,
      max_pos_y = 0,
      transform = "",
      el = elm;

    hammertime.on('doubletap pan pinch panend pinchend', function (ev) {
      if (ev.type == "doubletap") {
        transform =
          "translate3d(0, 0, 0) " +
          "scale3d(2, 2, 1) ";
        scale = 2;
        last_scale = 2;
        try {
          if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() != "matrix(1, 0, 0, 1, 0, 0)") {
            transform =
              "translate3d(0, 0, 0) " +
              "scale3d(1, 1, 1) ";
            scale = 1;
            last_scale = 1;
          }
        } catch (err) { }
        el.style.webkitTransform = transform;
        transform = "";
      }

      //pan    
      if (scale != 1) {
        posX = last_posX + ev.deltaX;
        posY = last_posY + ev.deltaY;
        max_pos_x = Math.ceil((scale - 1) * el.clientWidth / 2);
        max_pos_y = Math.ceil((scale - 1) * el.clientHeight / 2);
        if (posX >= max_pos_x) {
          posX = max_pos_x;
        }
        if (posX <= -max_pos_x) {
          posX = -max_pos_x;
        }
        if (posY > max_pos_y) {
        }
        if (posY < -max_pos_y) {
          posY = -max_pos_y;
        }
        if (scale > 1) {
          _this.vchange.emit({
            value: true
          })
        }
      }


      //pinch
      if (ev.type == "pinch") {
        scale = Math.max(.999, Math.min(last_scale * (ev.scale), 4));
      }
      if (ev.type == "pinchend") { 
        last_scale = scale;
        // console.log(last_scale)
        if (last_scale <= 1.1) {
          _this.vchange.emit({
            value: false
          })
        }
       }

      //panend
      if (ev.type == "panend") {
        last_posX = posX < max_pos_x ? posX : max_pos_x;
        last_posY = posY < max_pos_y ? posY : max_pos_y;
      }

      if (scale != 1) {
        transform =
          "translate3d(" + posX + "px," + posY + "px, 0) " +
          "scale3d(" + scale + ", " + scale + ", 1)";
        // if (Math.abs(posX) == max_pos_x) {
        //   _this.vchange.emit({
        //     value: false
        //   })
        // }
      }

      if (transform) {
        el.style.webkitTransform = transform;
      }
    });
  }
}
