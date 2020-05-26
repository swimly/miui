/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';

export namespace Components {
interface HcActionsheet {
'destory': () => Promise<void>;
'mode': string;
'titles': string;
}
interface HcActionsheetItem {}
interface HcAlert {
'clickable': boolean;
'destory': () => Promise<void>;
'display': boolean;
'generate': (option?: object) => Promise<void>;
'masker': boolean;
}
interface HcBadge {
'background': string;
'dot': boolean;
'max': number;
'value': number;
}
interface HcButton {
'conner': boolean;
'icon': string;
'plain': boolean;
'rounder': boolean;
'type': string;
}
interface HcCalendar {}
interface HcCell {
'arrowIcon': string;
'href': string;
'icon': string;
'iconSize': number;
'label': string;
'value': string;
}
interface HcCheckbox {
'checked': boolean;
'icon': string;
'name': string;
'value': string;
}
interface HcCheckboxGroup {}
interface HcCol {
'align': string;
'flex': number;
'span': number;
}
interface HcCollapse {
'accordion': boolean;
}
interface HcCollapseItem {
'destory': () => Promise<void>;
'generate': () => Promise<void>;
'visible': boolean;
}
interface HcCountdown {}
interface HcDialog {}
interface HcDrawer {
'clickable': boolean;
'command': boolean;
'content': string;
'destory': () => Promise<void>;
'display': boolean;
'generate': (option?: object) => Promise<void>;
'masker': boolean;
'place': string;
'rounder': boolean;
}
interface HcDropdown {}
interface HcEcharts {
'data': any;
'height': number;
'titles': string;
'type': string;
}
interface HcForm {
'range': string;
}
interface HcFormItem {
'direction': string;
'label': string;
'range': string;
'value': string;
}
interface HcHeader {
'label': string;
}
interface HcIcon {
'color': string;
'name': string;
'size': number;
'spin': boolean;
}
interface HcImage {
'fit': string;
'height': number;
'lazy': boolean;
'radius': number;
'src': string;
'status': number;
'watermark': string;
'width': number;
}
interface HcIndexbar {
'index': number;
'letter': string;
'offset': number;
}
interface HcIndexbarGroup {}
interface HcIndexbarItem {}
interface HcIndexbarTitle {}
interface HcInfinite {}
interface HcInput {
'align': string;
'clearIcon': string;
'clearable': boolean;
'conner': boolean;
'dark': boolean;
'iconColor': string;
'iconSize': number;
'light': boolean;
'maxLength': number;
'minLength': number;
'placeholder': string;
'prefixIcon': string;
'rows': number;
'size': string;
'suffixIcon': string;
'type': string;
'value': string;
}
interface HcList {
'size': string;
}
interface HcListItem {
'appendColor': string;
'appendIcon': string;
'cover': string;
'coverHeight': number;
'coverWidth': number;
'date': string;
'heading': string;
'size': string;
'type': string;
}
interface HcMasker {
'clickable': boolean;
'command': boolean;
'destory': () => Promise<void>;
'display': boolean;
'fill': string;
'generate': (option?: object) => Promise<void>;
'offset': number;
'place': string;
}
interface HcNoticebar {
'closable': boolean;
'color': string;
'destory': () => Promise<void>;
'icon': string;
'scrollable': boolean;
'speed': number;
}
interface HcNotify {
'align': string;
'closable': boolean;
'destory': () => Promise<void>;
'duration': number;
'generate': (option?: Object) => Promise<void>;
'icon': string;
'place': string;
'show': () => Promise<void>;
'visible': boolean;
}
interface HcPage {}
interface HcPanel {}
interface HcPicker {
'current': number;
'itemHeight': number;
'rate': number;
'vis': number;
}
interface HcPickerItem {
'active': boolean;
'height': number;
}
interface HcPickerView {
'destory': () => Promise<void>;
'parse': (source: any, value: any) => Promise<{ source: any; data: any[]; value: any[]; valueString: any; }>;
'titles': string;
}
interface HcPopover {
'masker': boolean;
'offset': number;
'place': string;
'visible': boolean;
}
interface HcPopoverItem {}
interface HcProgress {}
interface HcRadio {
'checked': boolean;
'icon': string;
'name': string;
'value': string;
}
interface HcRadioGroup {}
interface HcRate {
'activeColor': string;
'activeIcon': string;
'half': boolean;
'label': string;
'size': number;
'value': number;
'voidColor': string;
'voidIcon': string;
}
interface HcRateItem {
'active': boolean;
'activeColor': string;
'activeIcon': string;
'half': boolean;
'label': string;
'size': number;
'voidColor': string;
'voidIcon': string;
}
interface HcRipple {
'color': string;
'mask': boolean;
'size': number;
}
interface HcRow {
'justify': string;
'valign': string;
}
interface HcSearch {
'clearable': boolean;
'icon': string;
'iconSize': number;
'placeholder': string;
'shape': string;
}
interface HcSignature {
'background': string;
'clear': () => Promise<void>;
'fetchData': () => Promise<any>;
'file': string;
'penColor': string;
'penWeight': number;
}
interface HcSkeleton {
'animation': boolean;
'avatar': boolean;
'cover': boolean;
'loaded': () => Promise<void>;
'loading': () => Promise<void>;
'reverse': boolean;
'rows': number;
'titles': boolean;
'visible': boolean;
}
interface HcSlider {
'color': string;
'disabled': boolean;
'max': number;
'min': number;
'readonly': boolean;
'size': string;
'step': number;
'value': number;
}
interface HcSquare {
'autoplay': boolean;
'column': number;
'row': number;
}
interface HcSquareItem {}
interface HcStepper {}
interface HcSticky {
'offset': number;
}
interface HcSwipemenu {}
interface HcSwipemenuItem {
'color': string;
}
interface HcSwiper {
'autoplay': boolean;
'current': number;
'duration': number;
'height': number;
'indicate': string;
'loop': boolean;
'slideNext': () => Promise<void>;
'slidePrev': () => Promise<void>;
'slideTo': (index: any, duration?: number) => Promise<void>;
'vertical': boolean;
'width': number;
}
interface HcSwiperItem {
'height': number;
'width': number;
}
interface HcSwitch {
'activeIcon': string;
'checked': boolean;
'iconSize': number;
'offIcon': string;
'type': string;
}
interface HcTab {
'align': string;
'current': number;
'direction': string;
}
interface HcTabItem {
'index': number;
}
interface HcTag {
'background': string;
'closable': boolean;
'color': string;
'plain': boolean;
}
interface HcText {
'background': string;
'color': string;
'fontSize': string;
'indent': number;
'max': number;
'open': boolean;
'padding': string;
'row': number;
}
interface HcTitle {
'label': string;
'more': string;
'subTitle': string;
}
interface HcToast {
'display': boolean;
'duration': number;
'fill': string;
'generate': (option?: object) => Promise<void>;
'icon': string;
'iconSize': number;
'place': string;
'theme': string;
}
interface HcVideo {
'autoplay': boolean;
'controls': boolean;
'current': number;
'duration': number;
'height': number;
'loaded': number;
'muted': boolean;
'network': number;
'play': boolean;
'poster': string;
'preload': string;
'src': string;
}
interface HcVideoControls {
'current': number;
'duration': number;
'muted': boolean;
'play': boolean;
}
interface HcView {}
}

declare global {
  
  
interface HTMLHcActionsheetElement extends Components.HcActionsheet, HTMLStencilElement {}
var HTMLHcActionsheetElement: {
  prototype: HTMLHcActionsheetElement;
  new (): HTMLHcActionsheetElement;
};

interface HTMLHcActionsheetItemElement extends Components.HcActionsheetItem, HTMLStencilElement {}
var HTMLHcActionsheetItemElement: {
  prototype: HTMLHcActionsheetItemElement;
  new (): HTMLHcActionsheetItemElement;
};

interface HTMLHcAlertElement extends Components.HcAlert, HTMLStencilElement {}
var HTMLHcAlertElement: {
  prototype: HTMLHcAlertElement;
  new (): HTMLHcAlertElement;
};

interface HTMLHcBadgeElement extends Components.HcBadge, HTMLStencilElement {}
var HTMLHcBadgeElement: {
  prototype: HTMLHcBadgeElement;
  new (): HTMLHcBadgeElement;
};

interface HTMLHcButtonElement extends Components.HcButton, HTMLStencilElement {}
var HTMLHcButtonElement: {
  prototype: HTMLHcButtonElement;
  new (): HTMLHcButtonElement;
};

interface HTMLHcCalendarElement extends Components.HcCalendar, HTMLStencilElement {}
var HTMLHcCalendarElement: {
  prototype: HTMLHcCalendarElement;
  new (): HTMLHcCalendarElement;
};

interface HTMLHcCellElement extends Components.HcCell, HTMLStencilElement {}
var HTMLHcCellElement: {
  prototype: HTMLHcCellElement;
  new (): HTMLHcCellElement;
};

interface HTMLHcCheckboxElement extends Components.HcCheckbox, HTMLStencilElement {}
var HTMLHcCheckboxElement: {
  prototype: HTMLHcCheckboxElement;
  new (): HTMLHcCheckboxElement;
};

interface HTMLHcCheckboxGroupElement extends Components.HcCheckboxGroup, HTMLStencilElement {}
var HTMLHcCheckboxGroupElement: {
  prototype: HTMLHcCheckboxGroupElement;
  new (): HTMLHcCheckboxGroupElement;
};

interface HTMLHcColElement extends Components.HcCol, HTMLStencilElement {}
var HTMLHcColElement: {
  prototype: HTMLHcColElement;
  new (): HTMLHcColElement;
};

interface HTMLHcCollapseElement extends Components.HcCollapse, HTMLStencilElement {}
var HTMLHcCollapseElement: {
  prototype: HTMLHcCollapseElement;
  new (): HTMLHcCollapseElement;
};

interface HTMLHcCollapseItemElement extends Components.HcCollapseItem, HTMLStencilElement {}
var HTMLHcCollapseItemElement: {
  prototype: HTMLHcCollapseItemElement;
  new (): HTMLHcCollapseItemElement;
};

interface HTMLHcCountdownElement extends Components.HcCountdown, HTMLStencilElement {}
var HTMLHcCountdownElement: {
  prototype: HTMLHcCountdownElement;
  new (): HTMLHcCountdownElement;
};

interface HTMLHcDialogElement extends Components.HcDialog, HTMLStencilElement {}
var HTMLHcDialogElement: {
  prototype: HTMLHcDialogElement;
  new (): HTMLHcDialogElement;
};

interface HTMLHcDrawerElement extends Components.HcDrawer, HTMLStencilElement {}
var HTMLHcDrawerElement: {
  prototype: HTMLHcDrawerElement;
  new (): HTMLHcDrawerElement;
};

interface HTMLHcDropdownElement extends Components.HcDropdown, HTMLStencilElement {}
var HTMLHcDropdownElement: {
  prototype: HTMLHcDropdownElement;
  new (): HTMLHcDropdownElement;
};

interface HTMLHcEchartsElement extends Components.HcEcharts, HTMLStencilElement {}
var HTMLHcEchartsElement: {
  prototype: HTMLHcEchartsElement;
  new (): HTMLHcEchartsElement;
};

interface HTMLHcFormElement extends Components.HcForm, HTMLStencilElement {}
var HTMLHcFormElement: {
  prototype: HTMLHcFormElement;
  new (): HTMLHcFormElement;
};

interface HTMLHcFormItemElement extends Components.HcFormItem, HTMLStencilElement {}
var HTMLHcFormItemElement: {
  prototype: HTMLHcFormItemElement;
  new (): HTMLHcFormItemElement;
};

interface HTMLHcHeaderElement extends Components.HcHeader, HTMLStencilElement {}
var HTMLHcHeaderElement: {
  prototype: HTMLHcHeaderElement;
  new (): HTMLHcHeaderElement;
};

interface HTMLHcIconElement extends Components.HcIcon, HTMLStencilElement {}
var HTMLHcIconElement: {
  prototype: HTMLHcIconElement;
  new (): HTMLHcIconElement;
};

interface HTMLHcImageElement extends Components.HcImage, HTMLStencilElement {}
var HTMLHcImageElement: {
  prototype: HTMLHcImageElement;
  new (): HTMLHcImageElement;
};

interface HTMLHcIndexbarElement extends Components.HcIndexbar, HTMLStencilElement {}
var HTMLHcIndexbarElement: {
  prototype: HTMLHcIndexbarElement;
  new (): HTMLHcIndexbarElement;
};

interface HTMLHcIndexbarGroupElement extends Components.HcIndexbarGroup, HTMLStencilElement {}
var HTMLHcIndexbarGroupElement: {
  prototype: HTMLHcIndexbarGroupElement;
  new (): HTMLHcIndexbarGroupElement;
};

interface HTMLHcIndexbarItemElement extends Components.HcIndexbarItem, HTMLStencilElement {}
var HTMLHcIndexbarItemElement: {
  prototype: HTMLHcIndexbarItemElement;
  new (): HTMLHcIndexbarItemElement;
};

interface HTMLHcIndexbarTitleElement extends Components.HcIndexbarTitle, HTMLStencilElement {}
var HTMLHcIndexbarTitleElement: {
  prototype: HTMLHcIndexbarTitleElement;
  new (): HTMLHcIndexbarTitleElement;
};

interface HTMLHcInfiniteElement extends Components.HcInfinite, HTMLStencilElement {}
var HTMLHcInfiniteElement: {
  prototype: HTMLHcInfiniteElement;
  new (): HTMLHcInfiniteElement;
};

interface HTMLHcInputElement extends Components.HcInput, HTMLStencilElement {}
var HTMLHcInputElement: {
  prototype: HTMLHcInputElement;
  new (): HTMLHcInputElement;
};

interface HTMLHcListElement extends Components.HcList, HTMLStencilElement {}
var HTMLHcListElement: {
  prototype: HTMLHcListElement;
  new (): HTMLHcListElement;
};

interface HTMLHcListItemElement extends Components.HcListItem, HTMLStencilElement {}
var HTMLHcListItemElement: {
  prototype: HTMLHcListItemElement;
  new (): HTMLHcListItemElement;
};

interface HTMLHcMaskerElement extends Components.HcMasker, HTMLStencilElement {}
var HTMLHcMaskerElement: {
  prototype: HTMLHcMaskerElement;
  new (): HTMLHcMaskerElement;
};

interface HTMLHcNoticebarElement extends Components.HcNoticebar, HTMLStencilElement {}
var HTMLHcNoticebarElement: {
  prototype: HTMLHcNoticebarElement;
  new (): HTMLHcNoticebarElement;
};

interface HTMLHcNotifyElement extends Components.HcNotify, HTMLStencilElement {}
var HTMLHcNotifyElement: {
  prototype: HTMLHcNotifyElement;
  new (): HTMLHcNotifyElement;
};

interface HTMLHcPageElement extends Components.HcPage, HTMLStencilElement {}
var HTMLHcPageElement: {
  prototype: HTMLHcPageElement;
  new (): HTMLHcPageElement;
};

interface HTMLHcPanelElement extends Components.HcPanel, HTMLStencilElement {}
var HTMLHcPanelElement: {
  prototype: HTMLHcPanelElement;
  new (): HTMLHcPanelElement;
};

interface HTMLHcPickerElement extends Components.HcPicker, HTMLStencilElement {}
var HTMLHcPickerElement: {
  prototype: HTMLHcPickerElement;
  new (): HTMLHcPickerElement;
};

interface HTMLHcPickerItemElement extends Components.HcPickerItem, HTMLStencilElement {}
var HTMLHcPickerItemElement: {
  prototype: HTMLHcPickerItemElement;
  new (): HTMLHcPickerItemElement;
};

interface HTMLHcPickerViewElement extends Components.HcPickerView, HTMLStencilElement {}
var HTMLHcPickerViewElement: {
  prototype: HTMLHcPickerViewElement;
  new (): HTMLHcPickerViewElement;
};

interface HTMLHcPopoverElement extends Components.HcPopover, HTMLStencilElement {}
var HTMLHcPopoverElement: {
  prototype: HTMLHcPopoverElement;
  new (): HTMLHcPopoverElement;
};

interface HTMLHcPopoverItemElement extends Components.HcPopoverItem, HTMLStencilElement {}
var HTMLHcPopoverItemElement: {
  prototype: HTMLHcPopoverItemElement;
  new (): HTMLHcPopoverItemElement;
};

interface HTMLHcProgressElement extends Components.HcProgress, HTMLStencilElement {}
var HTMLHcProgressElement: {
  prototype: HTMLHcProgressElement;
  new (): HTMLHcProgressElement;
};

interface HTMLHcRadioElement extends Components.HcRadio, HTMLStencilElement {}
var HTMLHcRadioElement: {
  prototype: HTMLHcRadioElement;
  new (): HTMLHcRadioElement;
};

interface HTMLHcRadioGroupElement extends Components.HcRadioGroup, HTMLStencilElement {}
var HTMLHcRadioGroupElement: {
  prototype: HTMLHcRadioGroupElement;
  new (): HTMLHcRadioGroupElement;
};

interface HTMLHcRateElement extends Components.HcRate, HTMLStencilElement {}
var HTMLHcRateElement: {
  prototype: HTMLHcRateElement;
  new (): HTMLHcRateElement;
};

interface HTMLHcRateItemElement extends Components.HcRateItem, HTMLStencilElement {}
var HTMLHcRateItemElement: {
  prototype: HTMLHcRateItemElement;
  new (): HTMLHcRateItemElement;
};

interface HTMLHcRippleElement extends Components.HcRipple, HTMLStencilElement {}
var HTMLHcRippleElement: {
  prototype: HTMLHcRippleElement;
  new (): HTMLHcRippleElement;
};

interface HTMLHcRowElement extends Components.HcRow, HTMLStencilElement {}
var HTMLHcRowElement: {
  prototype: HTMLHcRowElement;
  new (): HTMLHcRowElement;
};

interface HTMLHcSearchElement extends Components.HcSearch, HTMLStencilElement {}
var HTMLHcSearchElement: {
  prototype: HTMLHcSearchElement;
  new (): HTMLHcSearchElement;
};

interface HTMLHcSignatureElement extends Components.HcSignature, HTMLStencilElement {}
var HTMLHcSignatureElement: {
  prototype: HTMLHcSignatureElement;
  new (): HTMLHcSignatureElement;
};

interface HTMLHcSkeletonElement extends Components.HcSkeleton, HTMLStencilElement {}
var HTMLHcSkeletonElement: {
  prototype: HTMLHcSkeletonElement;
  new (): HTMLHcSkeletonElement;
};

interface HTMLHcSliderElement extends Components.HcSlider, HTMLStencilElement {}
var HTMLHcSliderElement: {
  prototype: HTMLHcSliderElement;
  new (): HTMLHcSliderElement;
};

interface HTMLHcSquareElement extends Components.HcSquare, HTMLStencilElement {}
var HTMLHcSquareElement: {
  prototype: HTMLHcSquareElement;
  new (): HTMLHcSquareElement;
};

interface HTMLHcSquareItemElement extends Components.HcSquareItem, HTMLStencilElement {}
var HTMLHcSquareItemElement: {
  prototype: HTMLHcSquareItemElement;
  new (): HTMLHcSquareItemElement;
};

interface HTMLHcStepperElement extends Components.HcStepper, HTMLStencilElement {}
var HTMLHcStepperElement: {
  prototype: HTMLHcStepperElement;
  new (): HTMLHcStepperElement;
};

interface HTMLHcStickyElement extends Components.HcSticky, HTMLStencilElement {}
var HTMLHcStickyElement: {
  prototype: HTMLHcStickyElement;
  new (): HTMLHcStickyElement;
};

interface HTMLHcSwipemenuElement extends Components.HcSwipemenu, HTMLStencilElement {}
var HTMLHcSwipemenuElement: {
  prototype: HTMLHcSwipemenuElement;
  new (): HTMLHcSwipemenuElement;
};

interface HTMLHcSwipemenuItemElement extends Components.HcSwipemenuItem, HTMLStencilElement {}
var HTMLHcSwipemenuItemElement: {
  prototype: HTMLHcSwipemenuItemElement;
  new (): HTMLHcSwipemenuItemElement;
};

interface HTMLHcSwiperElement extends Components.HcSwiper, HTMLStencilElement {}
var HTMLHcSwiperElement: {
  prototype: HTMLHcSwiperElement;
  new (): HTMLHcSwiperElement;
};

interface HTMLHcSwiperItemElement extends Components.HcSwiperItem, HTMLStencilElement {}
var HTMLHcSwiperItemElement: {
  prototype: HTMLHcSwiperItemElement;
  new (): HTMLHcSwiperItemElement;
};

interface HTMLHcSwitchElement extends Components.HcSwitch, HTMLStencilElement {}
var HTMLHcSwitchElement: {
  prototype: HTMLHcSwitchElement;
  new (): HTMLHcSwitchElement;
};

interface HTMLHcTabElement extends Components.HcTab, HTMLStencilElement {}
var HTMLHcTabElement: {
  prototype: HTMLHcTabElement;
  new (): HTMLHcTabElement;
};

interface HTMLHcTabItemElement extends Components.HcTabItem, HTMLStencilElement {}
var HTMLHcTabItemElement: {
  prototype: HTMLHcTabItemElement;
  new (): HTMLHcTabItemElement;
};

interface HTMLHcTagElement extends Components.HcTag, HTMLStencilElement {}
var HTMLHcTagElement: {
  prototype: HTMLHcTagElement;
  new (): HTMLHcTagElement;
};

interface HTMLHcTextElement extends Components.HcText, HTMLStencilElement {}
var HTMLHcTextElement: {
  prototype: HTMLHcTextElement;
  new (): HTMLHcTextElement;
};

interface HTMLHcTitleElement extends Components.HcTitle, HTMLStencilElement {}
var HTMLHcTitleElement: {
  prototype: HTMLHcTitleElement;
  new (): HTMLHcTitleElement;
};

interface HTMLHcToastElement extends Components.HcToast, HTMLStencilElement {}
var HTMLHcToastElement: {
  prototype: HTMLHcToastElement;
  new (): HTMLHcToastElement;
};

interface HTMLHcVideoElement extends Components.HcVideo, HTMLStencilElement {}
var HTMLHcVideoElement: {
  prototype: HTMLHcVideoElement;
  new (): HTMLHcVideoElement;
};

interface HTMLHcVideoControlsElement extends Components.HcVideoControls, HTMLStencilElement {}
var HTMLHcVideoControlsElement: {
  prototype: HTMLHcVideoControlsElement;
  new (): HTMLHcVideoControlsElement;
};

interface HTMLHcViewElement extends Components.HcView, HTMLStencilElement {}
var HTMLHcViewElement: {
  prototype: HTMLHcViewElement;
  new (): HTMLHcViewElement;
};
  interface HTMLElementTagNameMap {
    'hc-actionsheet': HTMLHcActionsheetElement;
    'hc-actionsheet-item': HTMLHcActionsheetItemElement;
    'hc-alert': HTMLHcAlertElement;
    'hc-badge': HTMLHcBadgeElement;
    'hc-button': HTMLHcButtonElement;
    'hc-calendar': HTMLHcCalendarElement;
    'hc-cell': HTMLHcCellElement;
    'hc-checkbox': HTMLHcCheckboxElement;
    'hc-checkbox-group': HTMLHcCheckboxGroupElement;
    'hc-col': HTMLHcColElement;
    'hc-collapse': HTMLHcCollapseElement;
    'hc-collapse-item': HTMLHcCollapseItemElement;
    'hc-countdown': HTMLHcCountdownElement;
    'hc-dialog': HTMLHcDialogElement;
    'hc-drawer': HTMLHcDrawerElement;
    'hc-dropdown': HTMLHcDropdownElement;
    'hc-echarts': HTMLHcEchartsElement;
    'hc-form': HTMLHcFormElement;
    'hc-form-item': HTMLHcFormItemElement;
    'hc-header': HTMLHcHeaderElement;
    'hc-icon': HTMLHcIconElement;
    'hc-image': HTMLHcImageElement;
    'hc-indexbar': HTMLHcIndexbarElement;
    'hc-indexbar-group': HTMLHcIndexbarGroupElement;
    'hc-indexbar-item': HTMLHcIndexbarItemElement;
    'hc-indexbar-title': HTMLHcIndexbarTitleElement;
    'hc-infinite': HTMLHcInfiniteElement;
    'hc-input': HTMLHcInputElement;
    'hc-list': HTMLHcListElement;
    'hc-list-item': HTMLHcListItemElement;
    'hc-masker': HTMLHcMaskerElement;
    'hc-noticebar': HTMLHcNoticebarElement;
    'hc-notify': HTMLHcNotifyElement;
    'hc-page': HTMLHcPageElement;
    'hc-panel': HTMLHcPanelElement;
    'hc-picker': HTMLHcPickerElement;
    'hc-picker-item': HTMLHcPickerItemElement;
    'hc-picker-view': HTMLHcPickerViewElement;
    'hc-popover': HTMLHcPopoverElement;
    'hc-popover-item': HTMLHcPopoverItemElement;
    'hc-progress': HTMLHcProgressElement;
    'hc-radio': HTMLHcRadioElement;
    'hc-radio-group': HTMLHcRadioGroupElement;
    'hc-rate': HTMLHcRateElement;
    'hc-rate-item': HTMLHcRateItemElement;
    'hc-ripple': HTMLHcRippleElement;
    'hc-row': HTMLHcRowElement;
    'hc-search': HTMLHcSearchElement;
    'hc-signature': HTMLHcSignatureElement;
    'hc-skeleton': HTMLHcSkeletonElement;
    'hc-slider': HTMLHcSliderElement;
    'hc-square': HTMLHcSquareElement;
    'hc-square-item': HTMLHcSquareItemElement;
    'hc-stepper': HTMLHcStepperElement;
    'hc-sticky': HTMLHcStickyElement;
    'hc-swipemenu': HTMLHcSwipemenuElement;
    'hc-swipemenu-item': HTMLHcSwipemenuItemElement;
    'hc-swiper': HTMLHcSwiperElement;
    'hc-swiper-item': HTMLHcSwiperItemElement;
    'hc-switch': HTMLHcSwitchElement;
    'hc-tab': HTMLHcTabElement;
    'hc-tab-item': HTMLHcTabItemElement;
    'hc-tag': HTMLHcTagElement;
    'hc-text': HTMLHcTextElement;
    'hc-title': HTMLHcTitleElement;
    'hc-toast': HTMLHcToastElement;
    'hc-video': HTMLHcVideoElement;
    'hc-video-controls': HTMLHcVideoControlsElement;
    'hc-view': HTMLHcViewElement;
  }
}

declare namespace LocalJSX {
interface HcActionsheet {
'mode'?: string;
'titles'?: string;
}
  interface HcActionsheetItem {}
  interface HcAlert {
'clickable'?: boolean;
'display'?: boolean;
'masker'?: boolean;
}
  interface HcBadge {
'background'?: string;
'dot'?: boolean;
'max'?: number;
'value'?: number;
}
  interface HcButton {
'conner'?: boolean;
'icon'?: string;
'plain'?: boolean;
'rounder'?: boolean;
'type'?: string;
}
  interface HcCalendar {}
  interface HcCell {
'arrowIcon'?: string;
'href'?: string;
'icon'?: string;
'iconSize'?: number;
'label'?: string;
'value'?: string;
}
  interface HcCheckbox {
'checked'?: boolean;
'icon'?: string;
'name'?: string;
'onVchange'?: (event: CustomEvent<any>) => void;
'value'?: string;
}
  interface HcCheckboxGroup {}
  interface HcCol {
'align'?: string;
'flex'?: number;
'span'?: number;
}
  interface HcCollapse {
'accordion'?: boolean;
}
  interface HcCollapseItem {
'onVchange'?: (event: CustomEvent<any>) => void;
'visible'?: boolean;
}
  interface HcCountdown {}
  interface HcDialog {}
  interface HcDrawer {
'clickable'?: boolean;
'command'?: boolean;
'content'?: string;
'display'?: boolean;
'masker'?: boolean;
'place'?: string;
'rounder'?: boolean;
}
  interface HcDropdown {}
  interface HcEcharts {
'data'?: any;
'height'?: number;
'titles'?: string;
'type'?: string;
}
  interface HcForm {
'range'?: string;
}
  interface HcFormItem {
'direction'?: string;
'label'?: string;
'range'?: string;
'value'?: string;
}
  interface HcHeader {
'label'?: string;
}
  interface HcIcon {
'color'?: string;
'name'?: string;
'onVclick'?: (event: CustomEvent<any>) => void;
'size'?: number;
'spin'?: boolean;
}
  interface HcImage {
'fit'?: string;
'height'?: number;
'lazy'?: boolean;
'radius'?: number;
'src'?: string;
'status'?: number;
'watermark'?: string;
'width'?: number;
}
  interface HcIndexbar {
'index'?: number;
'letter'?: string;
'offset'?: number;
'onVchange'?: (event: CustomEvent<any>) => void;
}
  interface HcIndexbarGroup {}
  interface HcIndexbarItem {}
  interface HcIndexbarTitle {}
  interface HcInfinite {}
  interface HcInput {
'align'?: string;
'clearIcon'?: string;
'clearable'?: boolean;
'conner'?: boolean;
'dark'?: boolean;
'iconColor'?: string;
'iconSize'?: number;
'light'?: boolean;
'maxLength'?: number;
'minLength'?: number;
'onVchange'?: (event: CustomEvent<any>) => void;
'placeholder'?: string;
'prefixIcon'?: string;
'rows'?: number;
'size'?: string;
'suffixIcon'?: string;
'type'?: string;
'value'?: string;
}
  interface HcList {
'size'?: string;
}
  interface HcListItem {
'appendColor'?: string;
'appendIcon'?: string;
'cover'?: string;
'coverHeight'?: number;
'coverWidth'?: number;
'date'?: string;
'heading'?: string;
'size'?: string;
'type'?: string;
}
  interface HcMasker {
'clickable'?: boolean;
'command'?: boolean;
'display'?: boolean;
'fill'?: string;
'offset'?: number;
'onVclick'?: (event: CustomEvent<any>) => void;
'place'?: string;
}
  interface HcNoticebar {
'closable'?: boolean;
'color'?: string;
'icon'?: string;
'onVhide'?: (event: CustomEvent<any>) => void;
'scrollable'?: boolean;
'speed'?: number;
}
  interface HcNotify {
'align'?: string;
'closable'?: boolean;
'duration'?: number;
'icon'?: string;
'place'?: string;
'visible'?: boolean;
}
  interface HcPage {}
  interface HcPanel {}
  interface HcPicker {
'current'?: number;
'itemHeight'?: number;
'onVchange'?: (event: CustomEvent<any>) => void;
'rate'?: number;
'vis'?: number;
}
  interface HcPickerItem {
'active'?: boolean;
'height'?: number;
}
  interface HcPickerView {
'titles'?: string;
}
  interface HcPopover {
'masker'?: boolean;
'offset'?: number;
'place'?: string;
'visible'?: boolean;
}
  interface HcPopoverItem {
'onVclick'?: (event: CustomEvent<any>) => void;
}
  interface HcProgress {}
  interface HcRadio {
'checked'?: boolean;
'icon'?: string;
'name'?: string;
'onVchange'?: (event: CustomEvent<any>) => void;
'value'?: string;
}
  interface HcRadioGroup {}
  interface HcRate {
'activeColor'?: string;
'activeIcon'?: string;
'half'?: boolean;
'label'?: string;
'size'?: number;
'value'?: number;
'voidColor'?: string;
'voidIcon'?: string;
}
  interface HcRateItem {
'active'?: boolean;
'activeColor'?: string;
'activeIcon'?: string;
'half'?: boolean;
'label'?: string;
'size'?: number;
'voidColor'?: string;
'voidIcon'?: string;
}
  interface HcRipple {
'color'?: string;
'mask'?: boolean;
'size'?: number;
}
  interface HcRow {
'justify'?: string;
'valign'?: string;
}
  interface HcSearch {
'clearable'?: boolean;
'icon'?: string;
'iconSize'?: number;
'placeholder'?: string;
'shape'?: string;
}
  interface HcSignature {
'background'?: string;
'file'?: string;
'onVchange'?: (event: CustomEvent<any>) => void;
'penColor'?: string;
'penWeight'?: number;
}
  interface HcSkeleton {
'animation'?: boolean;
'avatar'?: boolean;
'cover'?: boolean;
'reverse'?: boolean;
'rows'?: number;
'titles'?: boolean;
'visible'?: boolean;
}
  interface HcSlider {
'color'?: string;
'disabled'?: boolean;
'max'?: number;
'min'?: number;
'onVchange'?: (event: CustomEvent<any>) => void;
'readonly'?: boolean;
'size'?: string;
'step'?: number;
'value'?: number;
}
  interface HcSquare {
'autoplay'?: boolean;
'column'?: number;
'row'?: number;
}
  interface HcSquareItem {}
  interface HcStepper {}
  interface HcSticky {
'offset'?: number;
}
  interface HcSwipemenu {}
  interface HcSwipemenuItem {
'color'?: string;
}
  interface HcSwiper {
'autoplay'?: boolean;
'current'?: number;
'duration'?: number;
'height'?: number;
'indicate'?: string;
'loop'?: boolean;
'onVchange'?: (event: CustomEvent<any>) => void;
'vertical'?: boolean;
'width'?: number;
}
  interface HcSwiperItem {
'height'?: number;
'width'?: number;
}
  interface HcSwitch {
'activeIcon'?: string;
'checked'?: boolean;
'iconSize'?: number;
'offIcon'?: string;
'onVchange'?: (event: CustomEvent<any>) => void;
'type'?: string;
}
  interface HcTab {
'align'?: string;
'current'?: number;
'direction'?: string;
'onVchange'?: (event: CustomEvent<any>) => void;
}
  interface HcTabItem {
'index'?: number;
'onVchange'?: (event: CustomEvent<any>) => void;
}
  interface HcTag {
'background'?: string;
'closable'?: boolean;
'color'?: string;
'onVclose'?: (event: CustomEvent<any>) => void;
'plain'?: boolean;
}
  interface HcText {
'background'?: string;
'color'?: string;
'fontSize'?: string;
'indent'?: number;
'max'?: number;
'open'?: boolean;
'padding'?: string;
'row'?: number;
}
  interface HcTitle {
'label'?: string;
'more'?: string;
'subTitle'?: string;
}
  interface HcToast {
'display'?: boolean;
'duration'?: number;
'fill'?: string;
'icon'?: string;
'iconSize'?: number;
'place'?: string;
'theme'?: string;
}
  interface HcVideo {
'autoplay'?: boolean;
'controls'?: boolean;
'current'?: number;
'duration'?: number;
'height'?: number;
'loaded'?: number;
'muted'?: boolean;
'network'?: number;
'play'?: boolean;
'poster'?: string;
'preload'?: string;
'src'?: string;
}
  interface HcVideoControls {
'current'?: number;
'duration'?: number;
'muted'?: boolean;
'onVmute'?: (event: CustomEvent<any>) => void;
'onVplay'?: (event: CustomEvent<any>) => void;
'onVprogress'?: (event: CustomEvent<any>) => void;
'play'?: boolean;
}
  interface HcView {
'onVscroll'?: (event: CustomEvent<any>) => void;
}

  interface IntrinsicElements {
    'hc-actionsheet': HcActionsheet;
    'hc-actionsheet-item': HcActionsheetItem;
    'hc-alert': HcAlert;
    'hc-badge': HcBadge;
    'hc-button': HcButton;
    'hc-calendar': HcCalendar;
    'hc-cell': HcCell;
    'hc-checkbox': HcCheckbox;
    'hc-checkbox-group': HcCheckboxGroup;
    'hc-col': HcCol;
    'hc-collapse': HcCollapse;
    'hc-collapse-item': HcCollapseItem;
    'hc-countdown': HcCountdown;
    'hc-dialog': HcDialog;
    'hc-drawer': HcDrawer;
    'hc-dropdown': HcDropdown;
    'hc-echarts': HcEcharts;
    'hc-form': HcForm;
    'hc-form-item': HcFormItem;
    'hc-header': HcHeader;
    'hc-icon': HcIcon;
    'hc-image': HcImage;
    'hc-indexbar': HcIndexbar;
    'hc-indexbar-group': HcIndexbarGroup;
    'hc-indexbar-item': HcIndexbarItem;
    'hc-indexbar-title': HcIndexbarTitle;
    'hc-infinite': HcInfinite;
    'hc-input': HcInput;
    'hc-list': HcList;
    'hc-list-item': HcListItem;
    'hc-masker': HcMasker;
    'hc-noticebar': HcNoticebar;
    'hc-notify': HcNotify;
    'hc-page': HcPage;
    'hc-panel': HcPanel;
    'hc-picker': HcPicker;
    'hc-picker-item': HcPickerItem;
    'hc-picker-view': HcPickerView;
    'hc-popover': HcPopover;
    'hc-popover-item': HcPopoverItem;
    'hc-progress': HcProgress;
    'hc-radio': HcRadio;
    'hc-radio-group': HcRadioGroup;
    'hc-rate': HcRate;
    'hc-rate-item': HcRateItem;
    'hc-ripple': HcRipple;
    'hc-row': HcRow;
    'hc-search': HcSearch;
    'hc-signature': HcSignature;
    'hc-skeleton': HcSkeleton;
    'hc-slider': HcSlider;
    'hc-square': HcSquare;
    'hc-square-item': HcSquareItem;
    'hc-stepper': HcStepper;
    'hc-sticky': HcSticky;
    'hc-swipemenu': HcSwipemenu;
    'hc-swipemenu-item': HcSwipemenuItem;
    'hc-swiper': HcSwiper;
    'hc-swiper-item': HcSwiperItem;
    'hc-switch': HcSwitch;
    'hc-tab': HcTab;
    'hc-tab-item': HcTabItem;
    'hc-tag': HcTag;
    'hc-text': HcText;
    'hc-title': HcTitle;
    'hc-toast': HcToast;
    'hc-video': HcVideo;
    'hc-video-controls': HcVideoControls;
    'hc-view': HcView;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
    'hc-actionsheet': LocalJSX.HcActionsheet & JSXBase.HTMLAttributes<HTMLHcActionsheetElement>;
    'hc-actionsheet-item': LocalJSX.HcActionsheetItem & JSXBase.HTMLAttributes<HTMLHcActionsheetItemElement>;
    'hc-alert': LocalJSX.HcAlert & JSXBase.HTMLAttributes<HTMLHcAlertElement>;
    'hc-badge': LocalJSX.HcBadge & JSXBase.HTMLAttributes<HTMLHcBadgeElement>;
    'hc-button': LocalJSX.HcButton & JSXBase.HTMLAttributes<HTMLHcButtonElement>;
    'hc-calendar': LocalJSX.HcCalendar & JSXBase.HTMLAttributes<HTMLHcCalendarElement>;
    'hc-cell': LocalJSX.HcCell & JSXBase.HTMLAttributes<HTMLHcCellElement>;
    'hc-checkbox': LocalJSX.HcCheckbox & JSXBase.HTMLAttributes<HTMLHcCheckboxElement>;
    'hc-checkbox-group': LocalJSX.HcCheckboxGroup & JSXBase.HTMLAttributes<HTMLHcCheckboxGroupElement>;
    'hc-col': LocalJSX.HcCol & JSXBase.HTMLAttributes<HTMLHcColElement>;
    'hc-collapse': LocalJSX.HcCollapse & JSXBase.HTMLAttributes<HTMLHcCollapseElement>;
    'hc-collapse-item': LocalJSX.HcCollapseItem & JSXBase.HTMLAttributes<HTMLHcCollapseItemElement>;
    'hc-countdown': LocalJSX.HcCountdown & JSXBase.HTMLAttributes<HTMLHcCountdownElement>;
    'hc-dialog': LocalJSX.HcDialog & JSXBase.HTMLAttributes<HTMLHcDialogElement>;
    'hc-drawer': LocalJSX.HcDrawer & JSXBase.HTMLAttributes<HTMLHcDrawerElement>;
    'hc-dropdown': LocalJSX.HcDropdown & JSXBase.HTMLAttributes<HTMLHcDropdownElement>;
    'hc-echarts': LocalJSX.HcEcharts & JSXBase.HTMLAttributes<HTMLHcEchartsElement>;
    'hc-form': LocalJSX.HcForm & JSXBase.HTMLAttributes<HTMLHcFormElement>;
    'hc-form-item': LocalJSX.HcFormItem & JSXBase.HTMLAttributes<HTMLHcFormItemElement>;
    'hc-header': LocalJSX.HcHeader & JSXBase.HTMLAttributes<HTMLHcHeaderElement>;
    'hc-icon': LocalJSX.HcIcon & JSXBase.HTMLAttributes<HTMLHcIconElement>;
    'hc-image': LocalJSX.HcImage & JSXBase.HTMLAttributes<HTMLHcImageElement>;
    'hc-indexbar': LocalJSX.HcIndexbar & JSXBase.HTMLAttributes<HTMLHcIndexbarElement>;
    'hc-indexbar-group': LocalJSX.HcIndexbarGroup & JSXBase.HTMLAttributes<HTMLHcIndexbarGroupElement>;
    'hc-indexbar-item': LocalJSX.HcIndexbarItem & JSXBase.HTMLAttributes<HTMLHcIndexbarItemElement>;
    'hc-indexbar-title': LocalJSX.HcIndexbarTitle & JSXBase.HTMLAttributes<HTMLHcIndexbarTitleElement>;
    'hc-infinite': LocalJSX.HcInfinite & JSXBase.HTMLAttributes<HTMLHcInfiniteElement>;
    'hc-input': LocalJSX.HcInput & JSXBase.HTMLAttributes<HTMLHcInputElement>;
    'hc-list': LocalJSX.HcList & JSXBase.HTMLAttributes<HTMLHcListElement>;
    'hc-list-item': LocalJSX.HcListItem & JSXBase.HTMLAttributes<HTMLHcListItemElement>;
    'hc-masker': LocalJSX.HcMasker & JSXBase.HTMLAttributes<HTMLHcMaskerElement>;
    'hc-noticebar': LocalJSX.HcNoticebar & JSXBase.HTMLAttributes<HTMLHcNoticebarElement>;
    'hc-notify': LocalJSX.HcNotify & JSXBase.HTMLAttributes<HTMLHcNotifyElement>;
    'hc-page': LocalJSX.HcPage & JSXBase.HTMLAttributes<HTMLHcPageElement>;
    'hc-panel': LocalJSX.HcPanel & JSXBase.HTMLAttributes<HTMLHcPanelElement>;
    'hc-picker': LocalJSX.HcPicker & JSXBase.HTMLAttributes<HTMLHcPickerElement>;
    'hc-picker-item': LocalJSX.HcPickerItem & JSXBase.HTMLAttributes<HTMLHcPickerItemElement>;
    'hc-picker-view': LocalJSX.HcPickerView & JSXBase.HTMLAttributes<HTMLHcPickerViewElement>;
    'hc-popover': LocalJSX.HcPopover & JSXBase.HTMLAttributes<HTMLHcPopoverElement>;
    'hc-popover-item': LocalJSX.HcPopoverItem & JSXBase.HTMLAttributes<HTMLHcPopoverItemElement>;
    'hc-progress': LocalJSX.HcProgress & JSXBase.HTMLAttributes<HTMLHcProgressElement>;
    'hc-radio': LocalJSX.HcRadio & JSXBase.HTMLAttributes<HTMLHcRadioElement>;
    'hc-radio-group': LocalJSX.HcRadioGroup & JSXBase.HTMLAttributes<HTMLHcRadioGroupElement>;
    'hc-rate': LocalJSX.HcRate & JSXBase.HTMLAttributes<HTMLHcRateElement>;
    'hc-rate-item': LocalJSX.HcRateItem & JSXBase.HTMLAttributes<HTMLHcRateItemElement>;
    'hc-ripple': LocalJSX.HcRipple & JSXBase.HTMLAttributes<HTMLHcRippleElement>;
    'hc-row': LocalJSX.HcRow & JSXBase.HTMLAttributes<HTMLHcRowElement>;
    'hc-search': LocalJSX.HcSearch & JSXBase.HTMLAttributes<HTMLHcSearchElement>;
    'hc-signature': LocalJSX.HcSignature & JSXBase.HTMLAttributes<HTMLHcSignatureElement>;
    'hc-skeleton': LocalJSX.HcSkeleton & JSXBase.HTMLAttributes<HTMLHcSkeletonElement>;
    'hc-slider': LocalJSX.HcSlider & JSXBase.HTMLAttributes<HTMLHcSliderElement>;
    'hc-square': LocalJSX.HcSquare & JSXBase.HTMLAttributes<HTMLHcSquareElement>;
    'hc-square-item': LocalJSX.HcSquareItem & JSXBase.HTMLAttributes<HTMLHcSquareItemElement>;
    'hc-stepper': LocalJSX.HcStepper & JSXBase.HTMLAttributes<HTMLHcStepperElement>;
    'hc-sticky': LocalJSX.HcSticky & JSXBase.HTMLAttributes<HTMLHcStickyElement>;
    'hc-swipemenu': LocalJSX.HcSwipemenu & JSXBase.HTMLAttributes<HTMLHcSwipemenuElement>;
    'hc-swipemenu-item': LocalJSX.HcSwipemenuItem & JSXBase.HTMLAttributes<HTMLHcSwipemenuItemElement>;
    'hc-swiper': LocalJSX.HcSwiper & JSXBase.HTMLAttributes<HTMLHcSwiperElement>;
    'hc-swiper-item': LocalJSX.HcSwiperItem & JSXBase.HTMLAttributes<HTMLHcSwiperItemElement>;
    'hc-switch': LocalJSX.HcSwitch & JSXBase.HTMLAttributes<HTMLHcSwitchElement>;
    'hc-tab': LocalJSX.HcTab & JSXBase.HTMLAttributes<HTMLHcTabElement>;
    'hc-tab-item': LocalJSX.HcTabItem & JSXBase.HTMLAttributes<HTMLHcTabItemElement>;
    'hc-tag': LocalJSX.HcTag & JSXBase.HTMLAttributes<HTMLHcTagElement>;
    'hc-text': LocalJSX.HcText & JSXBase.HTMLAttributes<HTMLHcTextElement>;
    'hc-title': LocalJSX.HcTitle & JSXBase.HTMLAttributes<HTMLHcTitleElement>;
    'hc-toast': LocalJSX.HcToast & JSXBase.HTMLAttributes<HTMLHcToastElement>;
    'hc-video': LocalJSX.HcVideo & JSXBase.HTMLAttributes<HTMLHcVideoElement>;
    'hc-video-controls': LocalJSX.HcVideoControls & JSXBase.HTMLAttributes<HTMLHcVideoControlsElement>;
    'hc-view': LocalJSX.HcView & JSXBase.HTMLAttributes<HTMLHcViewElement>;
    }
  }
}
  