/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6677:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _uikit_page_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var _uikit_page_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uikit_page_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_elements_page_elements_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5120);

 // elements



/***/ }),

/***/ 2956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(7055);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"head\"\u003E\u003Ca class=\"head__logo logo\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(8870), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ 733:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(7055);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (parseInt, starBorder, type) {pug_mixins["items-colors"] = pug_interp = function(colors){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate colors
;(function(){
  var $$obj = colors;
  if ('number' == typeof $$obj.length) {
      for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
        var value = $$obj[key];
pug_html = pug_html + "\u003Cdiv class=\"item-color\"\u003E";
if ((key.startsWith('Dark'))) {
const per = parseInt(key.replace('Dark Shade', ''))
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["item-color__view",`dark-${per}`], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["item-color__view",key.toLowerCase()], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"item-color__text\"\u003E\u003Ch6 class=\"item-color__name\"\u003E" + (pug.escape(null == (pug_interp = key) ? "" : pug_interp)) + "\u003C\u002Fh6\u003E\u003Cp class=\"item-color__code\"\u003E" + (pug.escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;
      var value = $$obj[key];
pug_html = pug_html + "\u003Cdiv class=\"item-color\"\u003E";
if ((key.startsWith('Dark'))) {
const per = parseInt(key.replace('Dark Shade', ''))
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["item-color__view",`dark-${per}`], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["item-color__view",key.toLowerCase()], [false,true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"item-color__text\"\u003E\u003Ch6 class=\"item-color__name\"\u003E" + (pug.escape(null == (pug_interp = key) ? "" : pug_interp)) + "\u003C\u002Fh6\u003E\u003Cp class=\"item-color__code\"\u003E" + (pug.escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

};
pug_mixins["items-types"] = pug_interp = function(types){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate types
;(function(){
  var $$obj = types;
  if ('number' == typeof $$obj.length) {
      for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
        var value = $$obj[key];
pug_html = pug_html + "\u003Cdiv class=\"item-type\"\u003E\u003Ch1" + (pug.attr("class", pug.classes(["item-type__name",`item-type__name--${key.toLowerCase()}`], [false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = key) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003Cp" + (pug.attr("class", pug.classes(["item-type__view",`type-${key.toLowerCase()}`], [false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;
      var value = $$obj[key];
pug_html = pug_html + "\u003Cdiv class=\"item-type\"\u003E\u003Ch1" + (pug.attr("class", pug.classes(["item-type__name",`item-type__name--${key.toLowerCase()}`], [false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = key) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003Cp" + (pug.attr("class", pug.classes(["item-type__view",`type-${key.toLowerCase()}`], [false,true]), false, true)) + "\u003E" + (pug.escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

};
pug_html = pug_html + "\u003Cdiv class=\"colors-and-type\"\u003E " + (null == (pug_interp = (__webpack_require__(2956).call)(this, locals)) ? "" : pug_interp) + "\u003Cdiv class=\"container\"\u003E\u003Cdiv class=\"colors-and-type__body\"\u003E\u003Cdiv class=\"colors\"\u003E";
pug_mixins["items-colors"]({
          'Dark Shade 100%':'#1F2041',
          'Dark Shade 75%':'#1F2041',
          'Dark Shade 50%':'#1F2041',
          'Dark Shade 25%':'#1F2041',
          'Dark Shade 5%':'#1F2041',
          'Purple':'#BC9CFF',
          'Green':'#6FCF97',
        });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"types\"\u003E";
pug_mixins["items-types"]({
          H1:'This one is the sub-section or widget title',
          H2:'Next one is the item title inside widgets',
          H3:'This is a label or CTA text',
          Body:'This is the body text which is used for most of the design, like paragraphs, lists, etc.',
        });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["field"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
if ((opts.label)) {
pug_html = pug_html + "\u003Clabel class=\"field__label type-h3\"\u003E\u003Cspan class=\"field__label-text\"\u003E" + (pug.escape(null == (pug_interp = (opts.label)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cinput" + (" class=\"field__input type-body\""+pug.attr("type", (opts.type), true, true)+pug.attr("name", opts.dataName, true, true)+pug.attr("placeholder", (opts.placeholder), true, true)+pug.attr("tabindex", (opts.tabindex), true, true)+pug.attr("required", (opts.required), true, true)) + "\u003E\u003C\u002Flabel\u003E";
}
else {
pug_html = pug_html + "\u003Cinput" + (" class=\"field__input type-body\""+pug.attr("type", (opts.type), true, true)+pug.attr("name", opts.dataName, true, true)+pug.attr("placeholder", (opts.placeholder), true, true)+pug.attr("tabindex", (opts.tabindex), true, true)+pug.attr("required", (opts.required), true, true)) + "\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["dropdown"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["dropdown","field",(opts.js ? 'js-dropdown' : '')], [false,false,true]), false, true)) + "\u003E";
pug_mixins["content"].call({
block: function(){
block && block();
}
}, opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["content"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var attributes = {
  'data-id': (opts.dropdownId),
  readonly: (opts.readonly),
  type: (opts.type),
  placeholder: (opts.placeholder),
  tabindex: (opts.tabindex),
  required: (opts.required),
}

if ((opts.label)) {
pug_html = pug_html + "\u003Cdiv class=\"dropdown__label field__label type-h3\"\u003E\u003Ch3 class=\"dropdown__label-text field__label-text\"\u003E" + (pug.escape(null == (pug_interp = (opts.label)) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cdiv class=\"dropdown__field\"\u003E\u003Cinput" + (pug.attrs(pug.merge([{"class": pug.classes(["dropdown__input","field__input","type-body",(opts.js ? 'js-dropdown__button' : '')], [false,false,false,true])},attributes]), true)) + "\u003E\u003Cdiv class=\"dropdown__arrow\"\u003E";
pug_mixins["arrow-svg"](opts.arrowSvg);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cdiv class=\"dropdown__field\"\u003E\u003Cinput" + (pug.attrs(pug.merge([{"class": pug.classes(["dropdown__input","field__input","type-body",(opts.js ? 'js-dropdown__button' : '')], [false,false,false,true])},attributes]), true)) + "\u003E\u003Cdiv class=\"dropdown__arrow\"\u003E";
pug_mixins["arrow-svg"](opts.arrowSvg);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
if ((opts.js)) {
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["dropdown__menu",(opts.js ? 'js-dropdown__menu' : '')], [false,true]), false, true)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
};
pug_mixins["masked-text-field"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"masked-text-field js-masked-text-field\"\u003E";
pug_mixins["field"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["item-quantity-dropdown"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["dropdown"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv" + (" class=\"iq-dropdown\""+pug.attr("data-id", (opts.id), true, true)) + "\u003E\u003Cdiv class=\"iq-dropdown__items\"\u003E";
// iterate opts.items
;(function(){
  var $$obj = opts.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var item = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv" + (" class=\"iq-dropdown-item\""+pug.attr("data-id", (item.id), true, true)) + "\u003E\u003Cp class=\"iq-dropdown-item__text type-h3\"\u003E" + (pug.escape(null == (pug_interp = (item.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"iq-dropdown-item__quantity-control\"\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"decrement-button\"\u003E-\u003C\u002Fbutton\u003E\u003Cspan class=\"iq-dropdown-item__count type-h3\"\u003E" + (pug.escape(null == (pug_interp = (item.itemCount)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"increment-button\"\u003E+          \u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var item = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv" + (" class=\"iq-dropdown-item\""+pug.attr("data-id", (item.id), true, true)) + "\u003E\u003Cp class=\"iq-dropdown-item__text type-h3\"\u003E" + (pug.escape(null == (pug_interp = (item.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"iq-dropdown-item__quantity-control\"\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"decrement-button\"\u003E-\u003C\u002Fbutton\u003E\u003Cspan class=\"iq-dropdown-item__count type-h3\"\u003E" + (pug.escape(null == (pug_interp = (item.itemCount)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"increment-button\"\u003E+          \u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if ((opts.buttons)) {
pug_html = pug_html + "\u003Cdiv class=\"iq-dropdown__buttons\"\u003E\u003Cdiv class=\"iq-dropdown__button type-h3\" data-name=\"clear\"\u003Eочистить\u003C\u002Fdiv\u003E\u003Cdiv class=\"iq-dropdown__button type-h3\" data-name=\"apply\"\u003Eприменить\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
}, opts);
};
pug_mixins["air-datepicker-calendar"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"air-datepicker-calendar js-air-datepicker-calendar js-dropdown\"\u003E\u003Cdiv class=\"air-datepicker-calendar__dropdown-lists\"\u003E\u003Cdiv class=\"air-datepicker-calendar__dropdown js-dropdown__button\"\u003E";
pug_mixins["dropdown"](opts.drop1);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if ((opts.drop2)) {
pug_html = pug_html + "\u003Cdiv class=\"air-datepicker-calendar__dropdown js-dropdown__button\"\u003E";
pug_mixins["dropdown"](opts.drop2);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"air-datepicker-calendar__menu js-air-datepicker-calendar__menu js-dropdown__menu\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["subscription-text-field"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"subscription-text-field\"\u003E";
pug_mixins["dropdown"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["checkbox-list"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul class=\"checkbox-list\"\u003E";
// iterate opts.items
;(function(){
  var $$obj = opts.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var item = $$obj[pug_index3];
pug_html = pug_html + "\u003Cli class=\"checkbox-list__item item-checkbox\"\u003E\u003Clabel class=\"item-checkbox__label\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug.attr("checked", item.isChecked, true, true)) + "\u003E\u003Cdiv class=\"item-checkbox__pseudo-flag\"\u003E\u003C\u002Fdiv\u003E\u003Cp class=\"item-checkbox__text type-body\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var item = $$obj[pug_index3];
pug_html = pug_html + "\u003Cli class=\"checkbox-list__item item-checkbox\"\u003E\u003Clabel class=\"item-checkbox__label\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug.attr("checked", item.isChecked, true, true)) + "\u003E\u003Cdiv class=\"item-checkbox__pseudo-flag\"\u003E\u003C\u002Fdiv\u003E\u003Cp class=\"item-checkbox__text type-body\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
};
pug_mixins["expandable-checkbox-list"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"expandable-checkbox-list js-dropdown\"\u003E\u003Cdiv class=\"expandable-checkbox-list__field dropdown__field js-dropdown__button\"\u003E\u003Cdiv class=\"expandable-checkbox-list__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"expandable-checkbox-list__arrow dropdown__arrow\"\u003E";
pug_mixins["arrow-svg"](opts.arrowSvg);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"expandable-checkbox-list__menu js-dropdown__menu\"\u003E";
pug_mixins["checkbox-list"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["item-info-row"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"item-info-row\"\u003E\u003Cimg" + (" class=\"item-info-row__image\""+pug.attr("src", opts.imgPath, true, true)+" alt=\"smail\"") + "\u003E\u003Cdiv class=\"item-info-row__content\"\u003E\u003Cdiv class=\"item-info-row__title\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-info-row__text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["checkbox-buttons"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"checkbox-buttons\"\u003E\u003Cdiv class=\"checkbox-buttons__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"checkbox-buttons__menu\"\u003E";
pug_mixins["checkbox-list"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["radio-buttons"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"radio-buttons\"\u003E";
if ((options.title)) {
pug_html = pug_html + "\u003Cdiv class=\"radio-buttons__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (options.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"radio-buttons__body\"\u003E\u003Cdiv class=\"radio-button\"\u003E\u003Clabel class=\"radio-button__label\"\u003E" + (pug.escape(null == (pug_interp = (options.radio__1)) ? "" : pug_interp)) + "\u003Cinput" + (" class=\"radio-button__input\""+" type=\"radio\""+pug.attr("name", options.name, true, true)+pug.attr("checked", true, true, true)) + "\u003E\u003Cspan class=\"radio-button__pseudo-flag\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"radio-button\"\u003E\u003Clabel class=\"radio-button__label\"\u003E" + (pug.escape(null == (pug_interp = (options.radio__2)) ? "" : pug_interp)) + "\u003Cinput" + (" class=\"radio-button__input\""+" type=\"radio\""+pug.attr("name", options.name, true, true)) + "\u003E\u003Cspan class=\"radio-button__pseudo-flag\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["toggle-buttons"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"toggle-buttons\"\u003E";
if ((options.title)) {
pug_html = pug_html + "\u003Cdiv class=\"toggle-buttons__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (options.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"toggle-buttons__body\"\u003E\u003Cdiv class=\"toggle-button\"\u003E\u003Clabel class=\"toggle-button__label\"\u003E" + (pug.escape(null == (pug_interp = (options.text)) ? "" : pug_interp)) + "\u003Cinput class=\"toggle-button__input\" type=\"checkbox\"\u003E\u003Cspan class=\"toggle-button__pseudo-flag\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["like-button"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"like-button\"\u003E";
if ((opts.likeTitle)) {
pug_html = pug_html + "\u003Cdiv class=\"like-button__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.likeTitle)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"like-button__body\"\u003E\u003Cdiv class=\"like-button__image\"\u003E\u003C\u002Fdiv\u003E\u003Cinput" + (" class=\"like-button__value\""+" type=\"text\""+pug.attr("value", (opts.val), true, true)+pug.attr("disabled", true, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["rate-button"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"rate-button\"\u003E";
if ((opts.title)) {
pug_html = pug_html + "\u003Cdiv class=\"rate-button__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"rate-button__row\"\u003E";
let star = starBorder = 0;
while (star < opts.star) {
pug_html = pug_html + "\u003Cdiv class=\"rate-button__star\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(5720), true, true)+" alt=\"star\"") + "\u003E\u003C\u002Fdiv\u003E";
star += 1;
}
while (starBorder < opts.starBorder) {
pug_html = pug_html + "\u003Cdiv class=\"rate-button__star-border\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(7981), true, true)+" alt=\"star-border\"") + "\u003E\u003C\u002Fdiv\u003E";
starBorder += 1;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["rich-checkbox-buttons"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"rich-checkbox-buttons\"\u003E";
if ((opts.title)) {
pug_html = pug_html + "\u003Cdiv class=\"rich-checkbox-buttons__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cul class=\"rich-checkbox-buttons__list checkbox-list\"\u003E";
// iterate opts.items
;(function(){
  var $$obj = opts.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var item = $$obj[pug_index4];
pug_html = pug_html + "\u003Cli class=\"rich-checkbox-buttons__item item-checkbox\"\u003E\u003Clabel class=\"rich-checkbox-buttons__item-label item-checkbox__label\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug.attr("checked", item.isChecked, true, true)) + "\u003E\u003Cdiv class=\"item-checkbox__pseudo-flag\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"rich-checkbox-buttons__item-body\"\u003E\u003Cp class=\"rich-checkbox-buttons__item-text type-body\"\u003E" + (pug.escape(null == (pug_interp = (item.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"rich-checkbox-buttons__item-subtext\"\u003E" + (pug.escape(null == (pug_interp = (item.subtext)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var item = $$obj[pug_index4];
pug_html = pug_html + "\u003Cli class=\"rich-checkbox-buttons__item item-checkbox\"\u003E\u003Clabel class=\"rich-checkbox-buttons__item-label item-checkbox__label\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug.attr("checked", item.isChecked, true, true)) + "\u003E\u003Cdiv class=\"item-checkbox__pseudo-flag\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"rich-checkbox-buttons__item-body\"\u003E\u003Cp class=\"rich-checkbox-buttons__item-text type-body\"\u003E" + (pug.escape(null == (pug_interp = (item.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"rich-checkbox-buttons__item-subtext\"\u003E" + (pug.escape(null == (pug_interp = (item.subtext)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["item-comment"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"item-comment\"\u003E\u003Cdiv class=\"item-comment__person\"\u003E";
pug_mixins["item-info-row"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-comment__content\"\u003E\u003Cdiv class=\"item-comment__like-button\"\u003E";
pug_mixins["like-button"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cp class=\"item-comment__text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.commentText)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["range-slider"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"range-slider\"\u003E\u003Cdiv class=\"range-slider__row\"\u003E\u003Cdiv class=\"range-slider__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = opts.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"range-slider__values\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"js-nouislider-plugin\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button-color"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"button-color\"\u003E\u003Cdiv class=\"button-color__text type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button-border"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"button-border\"\u003E\u003Cdiv class=\"button-border__text type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button-arrow"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca class=\"button-arrow\" href=\".\u002Fsearch-room.html\"\u003E\u003Cdiv class=\"button-arrow__text type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"button-arrow__arrow\"\u003E \u003Csvg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z\" fill=\"#BC9CFF\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
};
pug_mixins["pagination"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"pagination\"\u003E";
if ((opts.title)) {
pug_html = pug_html + "\u003Cdiv class=\"pagination__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = opts.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cul class=\"pagination__list\"\u003E\u003Cli class=\"pagination__item pagination__item--active\"\u003E1\u003C\u002Fli\u003E\u003Cli class=\"pagination__item\"\u003E2\u003C\u002Fli\u003E\u003Cli class=\"pagination__item\"\u003E3\u003C\u002Fli\u003E\u003Cli class=\"pagination__item\"\u003E...\u003C\u002Fli\u003E\u003Cli class=\"pagination__item\"\u003E15\u003C\u002Fli\u003E\u003Cli class=\"pagination__item pagination__button-next type-body\"\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cp class=\"pagination__count-info\"\u003E1 – 12 из 100+ вариантов аренды\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["bullet-list"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"bullet-list\"\u003E\u003Cdiv class=\"bullet-list__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = opts.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cul class=\"bullet-list__list\"\u003E";
// iterate opts.items
;(function(){
  var $$obj = opts.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var item = $$obj[pug_index5];
pug_html = pug_html + "\u003Cli class=\"bullet-list__item type-body\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var item = $$obj[pug_index5];
pug_html = pug_html + "\u003Cli class=\"bullet-list__item type-body\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["images-slider"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"images-slider js-images-slider\"\u003E\u003Cdiv class=\"images-slider__filter\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__line js-images-slider__line\"\u003E";
// iterate opts
;(function(){
  var $$obj = opts;
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var imgPath = $$obj[pug_index6];
pug_html = pug_html + "\u003Cdiv class=\"images-slider__slide ibg js-images-slider__slide\"\u003E\u003Cimg" + (pug.attr("src", imgPath, true, true)+" alt=\"image room\"") + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var imgPath = $$obj[pug_index6];
pug_html = pug_html + "\u003Cdiv class=\"images-slider__slide ibg js-images-slider__slide\"\u003E\u003Cimg" + (pug.attr("src", imgPath, true, true)+" alt=\"image room\"") + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__control\"\u003E\u003Cdiv class=\"images-slider__control-previous js-images-slider__control-previous\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__control-next js-images-slider__control-next\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__control-progress js-images-slider__control-progress\"\u003E\u003Cdiv class=\"js-images-slider__control-progress-item js-images-slider__control-progress-item--active\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["header"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cheader class=\"header\"\u003E\u003Cdiv class=\"container\"\u003E\u003Cdiv class=\"header__body\"\u003E\u003Cdiv class=\"header__logo\"\u003E";
pug_mixins["logo"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__menu menu js-menu\"\u003E\u003Cdiv class=\"menu__icon icon-menu\"\u003E\u003Cdiv class=\"icon-menu__body\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__body\"\u003E\u003Cnav class=\"menu__nav\"\u003E\u003Cul class=\"menu__list\"\u003E";
// iterate opts.menuItems
;(function(){
  var $$obj = opts.menuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var item = $$obj[pug_index7];
if ((item.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu item-menu--has-submenu js-item-menu--has-submenu\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link type-body\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["arrow-svg"]({name: 'expand-more', fill: '#1F2041', opacity: '0.5'});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu\"\u003E";
// iterate item.submenuItems
;(function(){
  var $$obj = item.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var itemSubmenu = $$obj[pug_index8];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link type-body\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var itemSubmenu = $$obj[pug_index8];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link type-body\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu\"\u003E\u003Ca" + (" class=\"item-menu__link type-body\""+pug.attr("href", (item.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var item = $$obj[pug_index7];
if ((item.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu item-menu--has-submenu js-item-menu--has-submenu\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link type-body\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["arrow-svg"]({name: 'expand-more', fill: '#1F2041', opacity: '0.5'});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu\"\u003E";
// iterate item.submenuItems
;(function(){
  var $$obj = item.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var itemSubmenu = $$obj[pug_index9];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link type-body\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var itemSubmenu = $$obj[pug_index9];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link type-body\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu\"\u003E\u003Ca" + (" class=\"item-menu__link type-body\""+pug.attr("href", (item.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fnav\u003E\u003Cdiv class=\"header__buttons\"\u003E\u003Cdiv class=\"btn header__button-sign-in\"\u003E";
pug_mixins["button-border"](opts.buttonSingIn);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn header__button-sign-up\"\u003E";
pug_mixins["button-color"](opts.buttonSingUp);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";
};
pug_mixins["arrow-svg"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ((opts.name == 'expand-more')) {
pug_html = pug_html + "\u003Csvg width=\"13\" height=\"8\" viewBox=\"0 0 13 8\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M11.3301 0.578125L12.7363 1.98438L6.73633 7.98438L0.736328 1.98438L2.14258 0.578125L6.73633 5.17188L11.3301 0.578125Z\" fill=" + (pug.escape(null == (pug_interp = opts.fill) ? "" : pug_interp)) + " fill-opacity=" + (pug.escape(null == (pug_interp = opts.opacity) ? "" : pug_interp)) + " \u002F\u003E\u003C\u002Fsvg\u003E";
}
if ((opts.name == 'arrow-forward')) {
pug_html = pug_html + "\u003Csvg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z\" fill=" + (pug.escape(null == (pug_interp = opts.fill) ? "" : pug_interp)) + " \u002F\u003E\u003C\u002Fsvg\u003E";
}
};
pug_mixins["footer"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cfooter class=\"footer\"\u003E\u003Cdiv class=\"footer__container container\"\u003E\u003Cdiv class=\"footer__row\"\u003E\u003Cdiv class=\"footer__block-logo block-logo\"\u003E\u003Cdiv class=\"block-logo__icon\"\u003E";
pug_mixins["logo"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cp class=\"block-logo__text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.blockLogoText)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cnav class=\"footer__nav nav-footer\"\u003E";
// iterate opts.navItems
;(function(){
  var $$obj = opts.navItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var navItem = $$obj[pug_index10];
pug_html = pug_html + "\u003Cdiv class=\"nav-footer__item\"\u003E\u003Ch3 class=\"nav-footer__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = navItem.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cul class=\"nav-footer__list nav-footer-list\"\u003E";
// iterate navItem.links
;(function(){
  var $$obj = navItem.links;
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var navListLink = $$obj[pug_index11];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link type-body\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var navListLink = $$obj[pug_index11];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link type-body\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var navItem = $$obj[pug_index10];
pug_html = pug_html + "\u003Cdiv class=\"nav-footer__item\"\u003E\u003Ch3 class=\"nav-footer__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = navItem.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cul class=\"nav-footer__list nav-footer-list\"\u003E";
// iterate navItem.links
;(function(){
  var $$obj = navItem.links;
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var navListLink = $$obj[pug_index12];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link type-body\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var navListLink = $$obj[pug_index12];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link type-body\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fnav\u003E\u003Cdiv class=\"footer__subscribe subscribe-footer\"\u003E\u003Ch3 class=\"subscribe-footer__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.subscribe.title)) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cp class=\"subscribe-footer__text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.subscribe.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"subscribe-footer__field\"\u003E";
pug_mixins["subscription-text-field"](opts.subscribe.field);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__copy copy\"\u003E\u003Cdiv class=\"copy__row\"\u003E\u003Cdiv class=\"copy__logo\"\u003E";
pug_mixins["logo"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cp class=\"copy__text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.copy.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"copy__social social\"\u003E";
// iterate opts.copy.icons
;(function(){
  var $$obj = opts.copy.icons;
  if ('number' == typeof $$obj.length) {
      for (var pug_index13 = 0, $$l = $$obj.length; pug_index13 < $$l; pug_index13++) {
        var copyIcon = $$obj[pug_index13];
pug_html = pug_html + "\u003Cimg" + (" class=\"social__icon\""+pug.attr("src", (copyIcon.src), true, true)+pug.attr("alt", (copyIcon.alt), true, true)) + "\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index13 in $$obj) {
      $$l++;
      var copyIcon = $$obj[pug_index13];
pug_html = pug_html + "\u003Cimg" + (" class=\"social__icon\""+pug.attr("src", (copyIcon.src), true, true)+pug.attr("alt", (copyIcon.alt), true, true)) + "\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";
};
pug_mixins["logo"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (" class=\"logo\""+pug.attr("href", (opts.logo.href), true, true)) + "\u003E\u003Cimg" + (pug.attr("src", (opts.logo.logoIcon), true, true)+" alt=\"logo\"") + "\u003E\u003Cimg" + (pug.attr("src", (opts.logo.logoText), true, true)+" alt=\"logo\"") + "\u003E\u003C\u002Fa\u003E";
};
pug_mixins["field"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"field\"\u003E";
if ((opts.label)) {
pug_html = pug_html + "\u003Clabel class=\"field__label type-h3\"\u003E\u003Cspan class=\"field__label-text\"\u003E" + (pug.escape(null == (pug_interp = (opts.label)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cinput" + (" class=\"field__input type-body\""+pug.attr("type", (opts.type), true, true)+pug.attr("name", opts.dataName, true, true)+pug.attr("placeholder", (opts.placeholder), true, true)+pug.attr("tabindex", (opts.tabindex), true, true)+pug.attr("required", (opts.required), true, true)) + "\u003E\u003C\u002Flabel\u003E";
}
else {
pug_html = pug_html + "\u003Cinput" + (" class=\"field__input type-body\""+pug.attr("type", (opts.type), true, true)+pug.attr("name", opts.dataName, true, true)+pug.attr("placeholder", (opts.placeholder), true, true)+pug.attr("tabindex", (opts.tabindex), true, true)+pug.attr("required", (opts.required), true, true)) + "\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["dropdown"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["dropdown","field",(opts.js ? 'js-dropdown' : '')], [false,false,true]), false, true)) + "\u003E";
pug_mixins["content"].call({
block: function(){
block && block();
}
}, opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["content"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var attributes = {
  'data-id': (opts.dropdownId),
  readonly: (opts.readonly),
  type: (opts.type),
  placeholder: (opts.placeholder),
  tabindex: (opts.tabindex),
  required: (opts.required),
}

if ((opts.label)) {
pug_html = pug_html + "\u003Cdiv class=\"dropdown__label field__label type-h3\"\u003E\u003Ch3 class=\"dropdown__label-text field__label-text\"\u003E" + (pug.escape(null == (pug_interp = (opts.label)) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cdiv class=\"dropdown__field\"\u003E\u003Cinput" + (pug.attrs(pug.merge([{"class": pug.classes(["dropdown__input","field__input","type-body",(opts.js ? 'js-dropdown__button' : '')], [false,false,false,true])},attributes]), true)) + "\u003E\u003Cdiv class=\"dropdown__arrow\"\u003E";
pug_mixins["arrow-svg"](opts.arrowSvg);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cdiv class=\"dropdown__field\"\u003E\u003Cinput" + (pug.attrs(pug.merge([{"class": pug.classes(["dropdown__input","field__input","type-body",(opts.js ? 'js-dropdown__button' : '')], [false,false,false,true])},attributes]), true)) + "\u003E\u003Cdiv class=\"dropdown__arrow\"\u003E";
pug_mixins["arrow-svg"](opts.arrowSvg);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
if ((opts.js)) {
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["dropdown__menu",(opts.js ? 'js-dropdown__menu' : '')], [false,true]), false, true)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
};
pug_mixins["masked-text-field"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"masked-text-field js-masked-text-field\"\u003E";
pug_mixins["field"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["item-quantity-dropdown"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["dropdown"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv" + (" class=\"iq-dropdown\""+pug.attr("data-id", (opts.id), true, true)) + "\u003E\u003Cdiv class=\"iq-dropdown__items\"\u003E";
// iterate opts.items
;(function(){
  var $$obj = opts.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index14 = 0, $$l = $$obj.length; pug_index14 < $$l; pug_index14++) {
        var item = $$obj[pug_index14];
pug_html = pug_html + "\u003Cdiv" + (" class=\"iq-dropdown-item\""+pug.attr("data-id", (item.id), true, true)) + "\u003E\u003Cp class=\"iq-dropdown-item__text type-h3\"\u003E" + (pug.escape(null == (pug_interp = (item.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"iq-dropdown-item__quantity-control\"\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"decrement-button\"\u003E-\u003C\u002Fbutton\u003E\u003Cspan class=\"iq-dropdown-item__count type-h3\"\u003E" + (pug.escape(null == (pug_interp = (item.itemCount)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"increment-button\"\u003E+          \u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index14 in $$obj) {
      $$l++;
      var item = $$obj[pug_index14];
pug_html = pug_html + "\u003Cdiv" + (" class=\"iq-dropdown-item\""+pug.attr("data-id", (item.id), true, true)) + "\u003E\u003Cp class=\"iq-dropdown-item__text type-h3\"\u003E" + (pug.escape(null == (pug_interp = (item.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"iq-dropdown-item__quantity-control\"\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"decrement-button\"\u003E-\u003C\u002Fbutton\u003E\u003Cspan class=\"iq-dropdown-item__count type-h3\"\u003E" + (pug.escape(null == (pug_interp = (item.itemCount)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbutton class=\"iq-dropdown-item__quantity-button\" type=\"button\" data-action=\"increment-button\"\u003E+          \u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if ((opts.buttons)) {
pug_html = pug_html + "\u003Cdiv class=\"iq-dropdown__buttons\"\u003E\u003Cdiv class=\"iq-dropdown__button type-h3\" data-name=\"clear\"\u003Eочистить\u003C\u002Fdiv\u003E\u003Cdiv class=\"iq-dropdown__button type-h3\" data-name=\"apply\"\u003Eприменить\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
}, opts);
};
pug_mixins["air-datepicker-calendar"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"air-datepicker-calendar js-air-datepicker-calendar js-dropdown\"\u003E\u003Cdiv class=\"air-datepicker-calendar__dropdown-lists\"\u003E\u003Cdiv class=\"air-datepicker-calendar__dropdown js-dropdown__button\"\u003E";
pug_mixins["dropdown"](opts.drop1);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if ((opts.drop2)) {
pug_html = pug_html + "\u003Cdiv class=\"air-datepicker-calendar__dropdown js-dropdown__button\"\u003E";
pug_mixins["dropdown"](opts.drop2);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"air-datepicker-calendar__menu js-air-datepicker-calendar__menu js-dropdown__menu\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["subscription-text-field"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"subscription-text-field\"\u003E";
pug_mixins["dropdown"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["checkbox-list"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul class=\"checkbox-list\"\u003E";
// iterate opts.items
;(function(){
  var $$obj = opts.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index15 = 0, $$l = $$obj.length; pug_index15 < $$l; pug_index15++) {
        var item = $$obj[pug_index15];
pug_html = pug_html + "\u003Cli class=\"checkbox-list__item item-checkbox\"\u003E\u003Clabel class=\"item-checkbox__label\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug.attr("checked", item.isChecked, true, true)) + "\u003E\u003Cdiv class=\"item-checkbox__pseudo-flag\"\u003E\u003C\u002Fdiv\u003E\u003Cp class=\"item-checkbox__text type-body\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index15 in $$obj) {
      $$l++;
      var item = $$obj[pug_index15];
pug_html = pug_html + "\u003Cli class=\"checkbox-list__item item-checkbox\"\u003E\u003Clabel class=\"item-checkbox__label\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug.attr("checked", item.isChecked, true, true)) + "\u003E\u003Cdiv class=\"item-checkbox__pseudo-flag\"\u003E\u003C\u002Fdiv\u003E\u003Cp class=\"item-checkbox__text type-body\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
};
pug_mixins["expandable-checkbox-list"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"expandable-checkbox-list js-dropdown\"\u003E\u003Cdiv class=\"expandable-checkbox-list__field dropdown__field js-dropdown__button\"\u003E\u003Cdiv class=\"expandable-checkbox-list__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"expandable-checkbox-list__arrow dropdown__arrow\"\u003E";
pug_mixins["arrow-svg"](opts.arrowSvg);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"expandable-checkbox-list__menu js-dropdown__menu\"\u003E";
pug_mixins["checkbox-list"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["item-info-row"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"item-info-row\"\u003E\u003Cimg" + (" class=\"item-info-row__image\""+pug.attr("src", opts.imgPath, true, true)+" alt=\"smail\"") + "\u003E\u003Cdiv class=\"item-info-row__content\"\u003E\u003Cdiv class=\"item-info-row__title\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-info-row__text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["checkbox-buttons"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"checkbox-buttons\"\u003E\u003Cdiv class=\"checkbox-buttons__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"checkbox-buttons__menu\"\u003E";
pug_mixins["checkbox-list"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["radio-buttons"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"radio-buttons\"\u003E";
if ((options.title)) {
pug_html = pug_html + "\u003Cdiv class=\"radio-buttons__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (options.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"radio-buttons__body\"\u003E\u003Cdiv class=\"radio-button\"\u003E\u003Clabel class=\"radio-button__label\"\u003E" + (pug.escape(null == (pug_interp = (options.radio__1)) ? "" : pug_interp)) + "\u003Cinput" + (" class=\"radio-button__input\""+" type=\"radio\""+pug.attr("name", options.name, true, true)+pug.attr("checked", true, true, true)) + "\u003E\u003Cspan class=\"radio-button__pseudo-flag\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"radio-button\"\u003E\u003Clabel class=\"radio-button__label\"\u003E" + (pug.escape(null == (pug_interp = (options.radio__2)) ? "" : pug_interp)) + "\u003Cinput" + (" class=\"radio-button__input\""+" type=\"radio\""+pug.attr("name", options.name, true, true)) + "\u003E\u003Cspan class=\"radio-button__pseudo-flag\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["toggle-buttons"] = pug_interp = function(options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"toggle-buttons\"\u003E";
if ((options.title)) {
pug_html = pug_html + "\u003Cdiv class=\"toggle-buttons__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (options.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"toggle-buttons__body\"\u003E\u003Cdiv class=\"toggle-button\"\u003E\u003Clabel class=\"toggle-button__label\"\u003E" + (pug.escape(null == (pug_interp = (options.text)) ? "" : pug_interp)) + "\u003Cinput class=\"toggle-button__input\" type=\"checkbox\"\u003E\u003Cspan class=\"toggle-button__pseudo-flag\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["like-button"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"like-button\"\u003E";
if ((opts.likeTitle)) {
pug_html = pug_html + "\u003Cdiv class=\"like-button__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.likeTitle)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"like-button__body\"\u003E\u003Cdiv class=\"like-button__image\"\u003E\u003C\u002Fdiv\u003E\u003Cinput" + (" class=\"like-button__value\""+" type=\"text\""+pug.attr("value", (opts.val), true, true)+pug.attr("disabled", true, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["rate-button"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"rate-button\"\u003E";
if ((opts.title)) {
pug_html = pug_html + "\u003Cdiv class=\"rate-button__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"rate-button__row\"\u003E";
let star = starBorder = 0;
while (star < opts.star) {
pug_html = pug_html + "\u003Cdiv class=\"rate-button__star\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(5720), true, true)+" alt=\"star\"") + "\u003E\u003C\u002Fdiv\u003E";
star += 1;
}
while (starBorder < opts.starBorder) {
pug_html = pug_html + "\u003Cdiv class=\"rate-button__star-border\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(7981), true, true)+" alt=\"star-border\"") + "\u003E\u003C\u002Fdiv\u003E";
starBorder += 1;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["rich-checkbox-buttons"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"rich-checkbox-buttons\"\u003E";
if ((opts.title)) {
pug_html = pug_html + "\u003Cdiv class=\"rich-checkbox-buttons__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cul class=\"rich-checkbox-buttons__list checkbox-list\"\u003E";
// iterate opts.items
;(function(){
  var $$obj = opts.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index16 = 0, $$l = $$obj.length; pug_index16 < $$l; pug_index16++) {
        var item = $$obj[pug_index16];
pug_html = pug_html + "\u003Cli class=\"rich-checkbox-buttons__item item-checkbox\"\u003E\u003Clabel class=\"rich-checkbox-buttons__item-label item-checkbox__label\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug.attr("checked", item.isChecked, true, true)) + "\u003E\u003Cdiv class=\"item-checkbox__pseudo-flag\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"rich-checkbox-buttons__item-body\"\u003E\u003Cp class=\"rich-checkbox-buttons__item-text type-body\"\u003E" + (pug.escape(null == (pug_interp = (item.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"rich-checkbox-buttons__item-subtext\"\u003E" + (pug.escape(null == (pug_interp = (item.subtext)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index16 in $$obj) {
      $$l++;
      var item = $$obj[pug_index16];
pug_html = pug_html + "\u003Cli class=\"rich-checkbox-buttons__item item-checkbox\"\u003E\u003Clabel class=\"rich-checkbox-buttons__item-label item-checkbox__label\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug.attr("checked", item.isChecked, true, true)) + "\u003E\u003Cdiv class=\"item-checkbox__pseudo-flag\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"rich-checkbox-buttons__item-body\"\u003E\u003Cp class=\"rich-checkbox-buttons__item-text type-body\"\u003E" + (pug.escape(null == (pug_interp = (item.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"rich-checkbox-buttons__item-subtext\"\u003E" + (pug.escape(null == (pug_interp = (item.subtext)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Flabel\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["item-comment"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"item-comment\"\u003E\u003Cdiv class=\"item-comment__person\"\u003E";
pug_mixins["item-info-row"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-comment__content\"\u003E\u003Cdiv class=\"item-comment__like-button\"\u003E";
pug_mixins["like-button"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cp class=\"item-comment__text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.commentText)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["range-slider"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"range-slider\"\u003E\u003Cdiv class=\"range-slider__row\"\u003E\u003Cdiv class=\"range-slider__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = opts.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"range-slider__values\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"js-nouislider-plugin\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button-color"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"button-color\"\u003E\u003Cdiv class=\"button-color__text type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button-border"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"button-border\"\u003E\u003Cdiv class=\"button-border__text type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button-arrow"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca class=\"button-arrow\" href=\".\u002Fsearch-room.html\"\u003E\u003Cdiv class=\"button-arrow__text type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.text)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"button-arrow__arrow\"\u003E \u003Csvg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z\" fill=\"#BC9CFF\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
};
pug_mixins["pagination"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"pagination\"\u003E";
if ((opts.title)) {
pug_html = pug_html + "\u003Cdiv class=\"pagination__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = opts.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cul class=\"pagination__list\"\u003E\u003Cli class=\"pagination__item pagination__item--active\"\u003E1\u003C\u002Fli\u003E\u003Cli class=\"pagination__item\"\u003E2\u003C\u002Fli\u003E\u003Cli class=\"pagination__item\"\u003E3\u003C\u002Fli\u003E\u003Cli class=\"pagination__item\"\u003E...\u003C\u002Fli\u003E\u003Cli class=\"pagination__item\"\u003E15\u003C\u002Fli\u003E\u003Cli class=\"pagination__item pagination__button-next type-body\"\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cp class=\"pagination__count-info\"\u003E1 – 12 из 100+ вариантов аренды\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["bullet-list"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"bullet-list\"\u003E\u003Cdiv class=\"bullet-list__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = opts.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cul class=\"bullet-list__list\"\u003E";
// iterate opts.items
;(function(){
  var $$obj = opts.items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index17 = 0, $$l = $$obj.length; pug_index17 < $$l; pug_index17++) {
        var item = $$obj[pug_index17];
pug_html = pug_html + "\u003Cli class=\"bullet-list__item type-body\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index17 in $$obj) {
      $$l++;
      var item = $$obj[pug_index17];
pug_html = pug_html + "\u003Cli class=\"bullet-list__item type-body\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["images-slider"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"images-slider js-images-slider\"\u003E\u003Cdiv class=\"images-slider__filter\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__line js-images-slider__line\"\u003E";
// iterate opts
;(function(){
  var $$obj = opts;
  if ('number' == typeof $$obj.length) {
      for (var pug_index18 = 0, $$l = $$obj.length; pug_index18 < $$l; pug_index18++) {
        var imgPath = $$obj[pug_index18];
pug_html = pug_html + "\u003Cdiv class=\"images-slider__slide ibg js-images-slider__slide\"\u003E\u003Cimg" + (pug.attr("src", imgPath, true, true)+" alt=\"image room\"") + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index18 in $$obj) {
      $$l++;
      var imgPath = $$obj[pug_index18];
pug_html = pug_html + "\u003Cdiv class=\"images-slider__slide ibg js-images-slider__slide\"\u003E\u003Cimg" + (pug.attr("src", imgPath, true, true)+" alt=\"image room\"") + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__control\"\u003E\u003Cdiv class=\"images-slider__control-previous js-images-slider__control-previous\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__control-next js-images-slider__control-next\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"images-slider__control-progress js-images-slider__control-progress\"\u003E\u003Cdiv class=\"js-images-slider__control-progress-item js-images-slider__control-progress-item--active\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["header"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cheader class=\"header\"\u003E\u003Cdiv class=\"container\"\u003E\u003Cdiv class=\"header__body\"\u003E\u003Cdiv class=\"header__logo\"\u003E";
pug_mixins["logo"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__menu menu js-menu\"\u003E\u003Cdiv class=\"menu__icon icon-menu\"\u003E\u003Cdiv class=\"icon-menu__body\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__body\"\u003E\u003Cnav class=\"menu__nav\"\u003E\u003Cul class=\"menu__list\"\u003E";
// iterate opts.menuItems
;(function(){
  var $$obj = opts.menuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index19 = 0, $$l = $$obj.length; pug_index19 < $$l; pug_index19++) {
        var item = $$obj[pug_index19];
if ((item.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu item-menu--has-submenu js-item-menu--has-submenu\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link type-body\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["arrow-svg"]({name: 'expand-more', fill: '#1F2041', opacity: '0.5'});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu\"\u003E";
// iterate item.submenuItems
;(function(){
  var $$obj = item.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index20 = 0, $$l = $$obj.length; pug_index20 < $$l; pug_index20++) {
        var itemSubmenu = $$obj[pug_index20];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link type-body\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index20 in $$obj) {
      $$l++;
      var itemSubmenu = $$obj[pug_index20];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link type-body\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu\"\u003E\u003Ca" + (" class=\"item-menu__link type-body\""+pug.attr("href", (item.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index19 in $$obj) {
      $$l++;
      var item = $$obj[pug_index19];
if ((item.submenuItems)) {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu item-menu--has-submenu js-item-menu--has-submenu\"\u003E\u003Cdiv class=\"item-menu__body\"\u003E\u003Cdiv class=\"item-menu__link type-body\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"item-menu__arrow\"\u003E";
pug_mixins["arrow-svg"]({name: 'expand-more', fill: '#1F2041', opacity: '0.5'});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"item-menu__submenu submenu\"\u003E";
// iterate item.submenuItems
;(function(){
  var $$obj = item.submenuItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index21 = 0, $$l = $$obj.length; pug_index21 < $$l; pug_index21++) {
        var itemSubmenu = $$obj[pug_index21];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link type-body\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index21 in $$obj) {
      $$l++;
      var itemSubmenu = $$obj[pug_index21];
pug_html = pug_html + "\u003Cli class=\"submenu__item\"\u003E\u003Ca" + (" class=\"submenu__link type-body\""+pug.attr("href", (itemSubmenu.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = itemSubmenu.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"menu__item item-menu\"\u003E\u003Ca" + (" class=\"item-menu__link type-body\""+pug.attr("href", (item.href), true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fnav\u003E\u003Cdiv class=\"header__buttons\"\u003E\u003Cdiv class=\"btn header__button-sign-in\"\u003E";
pug_mixins["button-border"](opts.buttonSingIn);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn header__button-sign-up\"\u003E";
pug_mixins["button-color"](opts.buttonSingUp);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";
};
pug_mixins["arrow-svg"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ((opts.name == 'expand-more')) {
pug_html = pug_html + "\u003Csvg width=\"13\" height=\"8\" viewBox=\"0 0 13 8\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M11.3301 0.578125L12.7363 1.98438L6.73633 7.98438L0.736328 1.98438L2.14258 0.578125L6.73633 5.17188L11.3301 0.578125Z\" fill=" + (pug.escape(null == (pug_interp = opts.fill) ? "" : pug_interp)) + " fill-opacity=" + (pug.escape(null == (pug_interp = opts.opacity) ? "" : pug_interp)) + " \u002F\u003E\u003C\u002Fsvg\u003E";
}
if ((opts.name == 'arrow-forward')) {
pug_html = pug_html + "\u003Csvg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z\" fill=" + (pug.escape(null == (pug_interp = opts.fill) ? "" : pug_interp)) + " \u002F\u003E\u003C\u002Fsvg\u003E";
}
};
pug_mixins["footer"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cfooter class=\"footer\"\u003E\u003Cdiv class=\"footer__container container\"\u003E\u003Cdiv class=\"footer__row\"\u003E\u003Cdiv class=\"footer__block-logo block-logo\"\u003E\u003Cdiv class=\"block-logo__icon\"\u003E";
pug_mixins["logo"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cp class=\"block-logo__text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.blockLogoText)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cnav class=\"footer__nav nav-footer\"\u003E";
// iterate opts.navItems
;(function(){
  var $$obj = opts.navItems;
  if ('number' == typeof $$obj.length) {
      for (var pug_index22 = 0, $$l = $$obj.length; pug_index22 < $$l; pug_index22++) {
        var navItem = $$obj[pug_index22];
pug_html = pug_html + "\u003Cdiv class=\"nav-footer__item\"\u003E\u003Ch3 class=\"nav-footer__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = navItem.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cul class=\"nav-footer__list nav-footer-list\"\u003E";
// iterate navItem.links
;(function(){
  var $$obj = navItem.links;
  if ('number' == typeof $$obj.length) {
      for (var pug_index23 = 0, $$l = $$obj.length; pug_index23 < $$l; pug_index23++) {
        var navListLink = $$obj[pug_index23];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link type-body\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index23 in $$obj) {
      $$l++;
      var navListLink = $$obj[pug_index23];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link type-body\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index22 in $$obj) {
      $$l++;
      var navItem = $$obj[pug_index22];
pug_html = pug_html + "\u003Cdiv class=\"nav-footer__item\"\u003E\u003Ch3 class=\"nav-footer__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = navItem.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cul class=\"nav-footer__list nav-footer-list\"\u003E";
// iterate navItem.links
;(function(){
  var $$obj = navItem.links;
  if ('number' == typeof $$obj.length) {
      for (var pug_index24 = 0, $$l = $$obj.length; pug_index24 < $$l; pug_index24++) {
        var navListLink = $$obj[pug_index24];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link type-body\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index24 in $$obj) {
      $$l++;
      var navListLink = $$obj[pug_index24];
pug_html = pug_html + "\u003Cli class=\"nav-footer-list__item\"\u003E\u003Ca" + (" class=\"nav-footer-list__link type-body\""+pug.attr("href", navListLink.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = navListLink.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fnav\u003E\u003Cdiv class=\"footer__subscribe subscribe-footer\"\u003E\u003Ch3 class=\"subscribe-footer__title type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.subscribe.title)) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cp class=\"subscribe-footer__text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.subscribe.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"subscribe-footer__field\"\u003E";
pug_mixins["subscription-text-field"](opts.subscribe.field);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__copy copy\"\u003E\u003Cdiv class=\"copy__row\"\u003E\u003Cdiv class=\"copy__logo\"\u003E";
pug_mixins["logo"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cp class=\"copy__text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.copy.text)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"copy__social social\"\u003E";
// iterate opts.copy.icons
;(function(){
  var $$obj = opts.copy.icons;
  if ('number' == typeof $$obj.length) {
      for (var pug_index25 = 0, $$l = $$obj.length; pug_index25 < $$l; pug_index25++) {
        var copyIcon = $$obj[pug_index25];
pug_html = pug_html + "\u003Cimg" + (" class=\"social__icon\""+pug.attr("src", (copyIcon.src), true, true)+pug.attr("alt", (copyIcon.alt), true, true)) + "\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index25 in $$obj) {
      $$l++;
      var copyIcon = $$obj[pug_index25];
pug_html = pug_html + "\u003Cimg" + (" class=\"social__icon\""+pug.attr("src", (copyIcon.src), true, true)+pug.attr("alt", (copyIcon.alt), true, true)) + "\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";
};
pug_mixins["logo"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (" class=\"logo\""+pug.attr("href", (opts.logo.href), true, true)) + "\u003E\u003Cimg" + (pug.attr("src", (opts.logo.logoIcon), true, true)+" alt=\"logo\"") + "\u003E\u003Cimg" + (pug.attr("src", (opts.logo.logoText), true, true)+" alt=\"logo\"") + "\u003E\u003C\u002Fa\u003E";
};
pug_mixins["find-room"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"find-room card\"\u003E\u003Cdiv class=\"card__item\"\u003E\u003Ch3 class=\"find-room__title card__title type-h1\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E";
pug_mixins["air-datepicker-calendar"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E";
pug_mixins["item-quantity-dropdown"](opts.iqDropdown);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E";
pug_mixins["button-arrow"](opts.buttonArrow);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["account-registration"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cform class=\"account-registration card\" action=\"#\"\u003E\u003Cdiv class=\"card__item\"\u003E\u003Ch3 class=\"account-registration__title type-h1\"\u003E" + (pug.escape(null == (pug_interp = opts.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E\u003Cdiv class=\"card__group\"\u003E";
pug_mixins["field"](opts.fieldName);
pug_mixins["field"](opts.fieldSurname);
pug_mixins["radio-buttons"](opts.radioButtons);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E";
pug_mixins["masked-text-field"](opts.maskedTextField);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E\u003Cdiv class=\"card__group\"\u003E";
pug_mixins["field"](opts.fieldEmail);
pug_mixins["field"](opts.fieldPassword);
pug_mixins["toggle-buttons"](opts.toggleButton);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E";
pug_mixins["button-arrow"](opts.buttonArrow);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E\u003Cdiv class=\"card__space-between\"\u003E\u003Cp class=\"card__account-actions-text type-body\"\u003EУже есть аккаунт на Toxin\u003C\u002Fp\u003E";
pug_mixins["button-border"](opts.buttonBorder);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E";
};
pug_mixins["room-reservation"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cform class=\"card room-reservation\" action=\"#\"\u003E\u003Cdiv class=\"card__item card__space-between room-info\"\u003E\u003Ch3 class=\"room-info__number\"\u003E\u003Cspan class=\"room-info__number-numbers\"\u003E" + (pug.escape(null == (pug_interp = ('№ ' + opts.number + ' ')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"room-info__number-characteristic type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.characteristic)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fh3\u003E\u003Cdiv class=\"room-info__price\"\u003E\u003Cspan class=\"room-info__price-worth\"\u003E" + (pug.escape(null == (pug_interp = (opts.worth + '₽ ')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"room-info__price-text\"\u003Eв сутки\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E";
pug_mixins["air-datepicker-calendar"](opts);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E";
pug_mixins["item-quantity-dropdown"](opts.iqDropdown);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E\u003Ctable class=\"room-reservation__table\"\u003E\u003Ctbody\u003E\u003Ctr\u003E\u003Ctd class=\"room-reservation__table-title\"\u003E\u003Cspan\u003E9 990₽ х 4 суток\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\u003Ctd class=\"room-reservation__table-icon\"\u003E\u003C\u002Ftd\u003E\u003Ctd class=\"room-reservation__table-worth\"\u003E\u003Cspan\u003E39 960₽\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd class=\"room-reservation__table-title\"\u003EСбор за услуги: скидка \u003Cspan\u003E2 179₽\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\u003Ctd class=\"room-reservation__table-icon\"\u003E\u003Cdiv class=\"room-reservation__table-icon-true\"\u003Ei\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E\u003Ctd class=\"room-reservation__table-worth\"\u003E\u003Cspan\u003E0₽\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd class=\"room-reservation__table-title\"\u003EСбор за дополнительные услуги\u003C\u002Ftd\u003E\u003Ctd class=\"room-reservation__table-icon\"\u003E\u003Cdiv class=\"room-reservation__table-icon-true\"\u003Ei\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E\u003Ctd class=\"room-reservation__table-worth\"\u003E\u003Cspan\u003E300₽\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"room-reservation__total-costs card__item card__space-between type-h2\"\u003E\u003Cspan class=\"room-reservation__total-costs-text\"\u003EИтого\u003C\u002Fspan\u003E\u003Cspan class=\"room-reservation__total-costs-numbers\"\u003E38 081₽\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E";
pug_mixins["button-arrow"](opts.buttonArrow);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E";
};
pug_mixins["signing-in"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"signing-in card\"\u003E\u003Cdiv class=\"card__item\"\u003E\u003Cdiv class=\"signing-in__title type-h1\"\u003E" + (pug.escape(null == (pug_interp = (opts.title)) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item card__group\"\u003E";
pug_mixins["field"](opts.fieldName);
pug_mixins["field"](opts.fieldSurname);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item signing-in__button-arrow\"\u003E";
pug_mixins["button-arrow"](opts.buttonArrow);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__item\"\u003E\u003Cdiv class=\"card__space-between\"\u003E\u003Cp class=\"card__account-actions-text type-body\"\u003E" + (pug.escape(null == (pug_interp = (opts.accountActionsText)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
pug_mixins["button-border"](opts.buttonBorder);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["room-card"] = pug_interp = function(opts){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"room-card card\"\u003E";
pug_mixins["images-slider"](opts.images);
pug_html = pug_html + "\u003Cdiv class=\"room-card__body\"\u003E\u003Cdiv class=\"card__space-between room-info\"\u003E\u003Ch3 class=\"room-info__number\"\u003E\u003Cspan class=\"room-info__number-numbers\"\u003E" + (pug.escape(null == (pug_interp = ('№ ' + opts.number + ' ')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if ((opts.characteristic)) {
pug_html = pug_html + "\u003Cspan class=\"room-info__number-characteristic type-h3\"\u003E" + (pug.escape(null == (pug_interp = (opts.characteristic)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fh3\u003E\u003Cdiv class=\"room-info__price\"\u003E\u003Cspan class=\"room-info__price-worth\"\u003E" + (pug.escape(null == (pug_interp = (opts.worth + '₽ ')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"room-info__price-text\"\u003Eв сутки\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__space-between\"\u003E";
pug_mixins["rate-button"](opts.rateButton);
pug_html = pug_html + "\u003Cdiv class=\"room-card__reviews\"\u003E\u003Cspan class=\"room-card__reviews-count\"\u003E" + (pug.escape(null == (pug_interp = (opts.reviewsCount + ' ')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"room-card__reviews-text\"\u003EОтзывов\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + (null == (pug_interp = (__webpack_require__(2956).call)(this, locals)) ? "" : pug_interp) + "\u003Cdiv class=\"form-elements\"\u003E\u003Cdiv class=\"form-elements__column\"\u003E";
pug_mixins["field"]({
      label: 'text field',
      type: 'email',
      name: 'text-field',
      placeholder: 'Email',
      tabindex: 1,
      required: true,
    });
pug_mixins["item-quantity-dropdown"]({
      js: true,
			readonly: true,
      id: 'guests', 
      dropdownId: 'drop1',
      label: 'dropdown', 
      type,
      arrowSvg: {
        name: 'expand-more', 
        fill: '#1F2041',
        opacity: '0.5'
      },
      placeholder: 'Сколько гостей', 
      buttons: true, 
      arrowSvg: {
        name: 'expand-more', 
        fill: '#1F2041',
        opacity: '0.5'
      },
      items: [
        { text:'взрослые', id: 'item1', itemCount: 2 },
        { text:'дети', id: 'item2', itemCount: 0 },
        { text:'младенцы', id: 'item3', itemCount: 1 },
      ],
      tabindex: 1
    });
pug_mixins["item-quantity-dropdown"]({
      js: true,
			readonly: true,
      id: 'facilities', 
      dropdownId: 'drop2',
      label: 'dropdown', 
      type:'text',
      arrowSvg: {
        name: 'expand-more', 
        fill: '#1F2041',
        opacity: '0.5'
      },
      placeholder: 'Удобства', 
      buttons: false, 
      items: [
        { text:'спальни', id: 'item1', itemCount: 2 },
        { text:'кровати', id: 'item2', itemCount: 2 },
        { text:'ванные комнаты', id: 'item3', itemCount: 0 },
      ],
      tabindex: 1
    });
pug_mixins["masked-text-field"]({
      label: 'masked text field',
      type: 'text',
      name: 'masked-text-field',
      placeholder: 'ДД.ММ.ГГ',
      tabindex: 1,
      required: true,
    });
pug_mixins["air-datepicker-calendar"]({
      drop1:{
        js: false, 
				readonly: true,
        dropdownId: 'drop1',
        label: 'date dropdown', 
        type: 'text', 
        placeholder: 'ДД.ММ.ГГГГ', 
        tabindex: 1,
        arrowSvg: {
          name: 'expand-more', 
          fill: '#1F2041',
          opacity: '0.5'
        }
      },
      drop2: {
        js: false, 
				readonly: true,
        dropdownId: 'drop2',
        label: 'date dropdown', 
        type: 'text', 
        placeholder: 'ДД.ММ.ГГГГ', 
        tabindex: 1,
        arrowSvg: {
          name: 'expand-more', 
          fill: '#1F2041',
          opacity: '0.5'
        }
      }
    });
pug_mixins["air-datepicker-calendar"]({
      drop1:{
        js: false,
				readonly: true,
        dropdownId: 'drop3',
        label: 'date dropdown', 
        type: 'text', 
        placeholder: 'ДД.ММ.ГГГГ', 
        tabindex: 1,
        arrowSvg: {
          name: 'expand-more', 
          fill: '#1F2041',
          opacity: '0.5'
        }
      },
    });
pug_mixins["subscription-text-field"]({
      js: false, 
			readonly: false,
      dropdownId: false,
      label: 'subscription text field', 
      type: 'email', 
      placeholder: 'Email', 
      tabindex: 1,
      arrowSvg: {
        name: 'arrow-forward', 
        fill: "#BC9CFF",
        opacity: null,
      }
    });
pug_mixins["expandable-checkbox-list"]({
      title: 'expandable checkbox list',
      items:[
        {text:'Завтрак', isChecked: false},
        {text:'Письменный стол', isChecked: true},
        {text:'Стул для кормления', isChecked: true},
        {text:'Кроватка', isChecked: true},
        {text:'Телевизор', isChecked: false},
        {text:'Шампунь', isChecked: false},
      ],
      arrowSvg: {
        name: 'expand-more', 
        fill: '#1F2041',
        opacity: '0.5'
      }
    });
pug_mixins["item-info-row"]({
      title: 'Комфорт', 
      text: 'Шумопоглощающие стены', 
      imgPath: __webpack_require__(750)
    });
pug_mixins["item-info-row"]({
      title: 'Удобство', 
      text: 'Окно в каждой из спален', 
      imgPath: __webpack_require__(1682)
    });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-elements__column\"\u003E";
pug_mixins["checkbox-buttons"]({
      title: 'Checkbox Buttons',
      items:[
        {text:'Можно курить', isChecked: false},
        {text:'Можно с питомцами', isChecked: true},
        {text:'Можно пригласить гостей (до 10 человек)', isChecked: true},
      ],
    });
pug_mixins["radio-buttons"]({
      title: 'Radio Buttons',
      radio__1: 'Мужчина', 
      radio__2: 'Женщина', 
      name: 'radio'
    });
pug_mixins["toggle-buttons"]({
      title: 'Toggle', 
      text: 'Получать спецпредложения'
    });
pug_mixins["like-button"]({
      likeTitle: 'like button',
      val: 5
    });
pug_mixins["rate-button"]({
      title: 'rate button',
      star: 4,
      starBorder:1
    });
pug_mixins["rich-checkbox-buttons"]({
      title: 'rich checkbox buttons',
      items: [
        {text: 'Широкий коридор', subtext: 'Ширина коридоров в номере не менее 91 см.'},
        {text: 'Помощник для инвалидов', subtext: 'На 1 этаже вас встретит специалист  и проводит до номера.'},
      ]
    });
pug_mixins["item-comment"]({
      title: 'Мурад Сарафанов', 
      text: '5 дней назад', 
      imgPath: __webpack_require__(2774),
      val: 5,
      commentText: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-elements__column\"\u003E";
pug_mixins["range-slider"]({
      title: "range"
    });
pug_mixins["button-color"]({
      text: 'color',
    });
pug_mixins["button-border"]({
      text: 'color',
    });
pug_mixins["button-arrow"]({
      text: 'color',
    });
pug_mixins["pagination"]({
      title: 'pagination'
    });
pug_mixins["bullet-list"]({
        title: 'bullet list',
        items: [
          {text: 'Нельзя с питомцами'},
          {text: 'Без вечеринок и мероприятий'},
          {text: 'Время прибытия — после 13:00, а выезд до 12:00'},
        ]
    });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E" + (null == (pug_interp = (__webpack_require__(2956).call)(this, locals)) ? "" : pug_interp) + "\u003Cdiv class=\"form-elements\"\u003E\u003Cdiv class=\"form-elements__column\"\u003E";
pug_mixins["find-room"]({
      title: 'Найдём номера под ваши пожелания',
      drop1:{
        js: false, 
        readonly: true,
        dropdownId: 'drop1',
        label: 'прибытие', 
        type: 'text', 
        placeholder: 'ДД.ММ.ГГГГ', 
        tabindex: 1,
        arrowSvg: {
          name: 'expand-more', 
          fill: '#1F2041',
          opacity: '0.5'
        }
      },
      drop2: {
        js: false, 
        readonly: true,
        dropdownId: 'drop2',
        label: 'выезд', 
        type: 'text', 
        placeholder: 'ДД.ММ.ГГГГ', 
        tabindex: 1,
        arrowSvg: {
          name: 'expand-more', 
          fill: '#1F2041',
          opacity: '0.5'
        }
      },
      iqDropdown:{
        js: true,
        readonly: true,
        id: 'guests', 
        dropdownId: 'drop3',
        label: 'гости', 
        type: 'text',
        placeholder: 'Сколько гостей', 
        arrowSvg: {
          name: 'expand-more', 
          fill: '#1F2041',
          opacity: '0.5'
        },
        buttons: true, 
        items: [
          { text:'взрослые', id: 'item1', itemCount: 0 },
          { text:'дети', id: 'item2', itemCount: 0 },
          { text:'младенцы', id: 'item3', itemCount: 0 },
        ],
        tabindex: 1
      },
      buttonArrow:{
        text: 'подобрать номер',
      },
    });
pug_mixins["account-registration"]({
      title: 'Регистрация аккаунта',
      fieldName: {
        label: false,
        type: 'text',
        name: 'name',
        placeholder: 'Имя',
        tabindex: 1,
        required: true,
      },
      fieldSurname: {
        label: false,
        type: 'text',
        name: 'surname',
        placeholder: 'Фамилия',
        tabindex: 1,
        required: true,
      },
      radioButtons: {
        title: false,
        radio__1: 'Мужчина', 
        radio__2: 'Женщина', 
        name: 'radio'
      },
      maskedTextField: {
        label: 'дата рождения',
        type: 'text',
        name: 'birthday',
        placeholder: 'ДД.ММ.ГГГГ',
        tabindex: 1,
        required: true,
      },
      fieldEmail: {
        label: 'данные для входа в сервис',
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        tabindex: 1,
        required: true,
      },
      fieldPassword: {
        label: false,
        type: 'password',
        name: 'password',
        placeholder: 'Пароль',
        tabindex: 1,
        required: true,
      },
      toggleButton: {
        title: false, 
        text: 'Получать спецпредложения'
      },
      buttonArrow: {
        text: 'перейти к оплате',
      },
      accountActionsText: 'Уже есть аккаунт на Toxin',
      buttonBorder: {
        text: 'войти',
      }
    });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-elements__column\"\u003E";
pug_mixins["room-reservation"]({
      number: '888',
      characteristic: 'ЛЮКС',
      worth: '9 990',
      drop1:{
        js: false, 
        readonly: true,
        dropdownId: 'drop1',
        label: 'прибытие', 
        type: 'text', 
        placeholder: 'ДД.ММ.ГГГГ', 
        tabindex: 1,
        arrowSvg: {
          name: 'expand-more', 
          fill: '#1F2041',
          opacity: '0.5'
        }
      },
      drop2: {
        js: false, 
        readonly: true,
        dropdownId: 'drop2',
        label: 'выезд', 
        type: 'text', 
        placeholder: 'ДД.ММ.ГГГГ', 
        tabindex: 1,
        arrowSvg: {
          name: 'expand-more', 
          fill: '#1F2041',
          opacity: '0.5'
        }
      },
      iqDropdown:{
        js: true,
        readonly: true,
        id: 'guests', 
        dropdownId: 'drop3',
        label: 'гости', 
        type: 'text',
        placeholder: 'Сколько гостей', 
        arrowSvg: {
          name: 'expand-more', 
          fill: '#1F2041',
          opacity: '0.5'
        },
        buttons: true, 
        items: [
          { text:'взрослые', id: 'item1', itemCount: 0 },
          { text:'дети', id: 'item2', itemCount: 0 },
          { text:'младенцы', id: 'item3', itemCount: 0 },
        ],
        tabindex: 1
      },
      buttonArrow: {
        text: 'забронировать',
      },
    });
pug_mixins["signing-in"]({
      title: 'Войти',
      fieldName: {
        label: false,
        type: 'text',
        name: 'name',
        placeholder: 'Имя',
        tabindex: 1,
        required: true,
      },
      fieldSurname: {
        label: false,
        type: 'text',
        name: 'surname',
        placeholder: 'Фамилия',
        tabindex: 1,
        required: true,
      },
      buttonArrow: {
        text: 'Войти',
      },
      accountActionsText: 'Нет аккаунта на Toxin?',
      buttonBorder: {
        text: 'создать',
      }
    });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-elements__column\"\u003E";
pug_mixins["room-card"]({
      images: [
        __webpack_require__(4820),
        __webpack_require__(7098),
        __webpack_require__(8986),
        __webpack_require__(9349),
      ],
      number: '888',
      characteristic: 'ЛЮКС',
      worth: '9 990',
      rateButton: {
        title: false,
        star: 5,
        starBorder:0
      },
      reviewsCount:'145'
    });
pug_mixins["room-card"]({
      images: [
        __webpack_require__(1612),
        __webpack_require__(9608),
        __webpack_require__(876),
      ],
      number: '840',
      characteristic: false,
      worth: '9 990',
      rateButton: {
        title: false,
        star: 4,
        starBorder:1
      },
      reviewsCount:'65'
    });
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E" + (null == (pug_interp = (__webpack_require__(2956).call)(this, locals)) ? "" : pug_interp) + "\u003Cdiv class=\"page-blocks\"\u003E";
pug_mixins["header"]({
    logo:{
      href: 'https://changeme',
      logoIcon: __webpack_require__(2720),
      logoText: __webpack_require__(2678),
    },
    menuItems: [
      {text: 'О нас', href: "нас", submenuItems: false},
      {text: 'Услуги', href: "Услуги", submenuItems: [
        {text: 'Услуга 1', href: "1", submenuItems: false},
        {text: 'Услуга 2', href: "2", submenuItems: false},
        {text: 'Услуга 3', href: "3", submenuItems: false},
      ]},
      {text: 'Вакансии', href: "Вакансии", submenuItems: false},
      {text: 'Новости', href: "Новости", submenuItems: false},
      {text: 'Соглашения', href: "Соглашения", submenuItems: false},
    ],
    buttonSingIn:{
      text: 'Войти'
    },
    buttonSingUp:{
      text: 'зарегистрироваться'
    }
  });
pug_mixins["footer"]({
    logo:{
      href: 'https://changeme',
      logoIcon: __webpack_require__(2720),
      logoText: __webpack_require__(2678),
    },
    blockLogoText: 'Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»',
    navItems:[
      {
        title: "навигация", 
        links: [
          {href: 'http://chagneme', text: 'О нас'},
          {href: 'http://chagneme', text: 'Новости'},
          {href: 'http://chagneme', text: 'Служба поддержки'},
          {href: 'http://chagneme', text: 'Услуги'},
        ]
      },
      {
        title: "о нас", 
        links: [
          {href: 'http://chagneme', text: 'О сервисе'},
          {href: 'http://chagneme', text: 'Наша команда'},
          {href: 'http://chagneme', text: 'Вакансии'},
          {href: 'http://chagneme', text: 'Инвесторы'},
        ]
      },
      {
        title: "Служба поддержки", 
        links: [
          {href: 'http://chagneme', text: 'Соглашения'},
          {href: 'http://chagneme', text: 'Сообщества'},
          {href: 'http://chagneme', text: 'Связь с нами'},
        ]
      }
    ],
    subscribe: {
      title: 'Подписка',
      text: 'Получайте специальные предложения и новости сервиса',
      field: {
        js: false, 
        dropdownId: false,
        label: false, 
        type: 'email', 
        placeholder: 'Email', 
        tabindex: 1,
        arrowSvg: {
          name: 'arrow-forward', 
          fill: "#BC9CFF",
          opacity: null,
        }
      }
    },
    copy:{
      text: 'Copyright © 2018 Toxin отель. Все права защищены.',
      icons:[
        {src: __webpack_require__(4271), alt: 'facebook'},
        {src: __webpack_require__(471), alt: 'instagramm'},
        {src: __webpack_require__(1783), alt: 'twiter'},
      ]
    }
  });
pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined,"starBorder" in locals_for_with?locals_for_with.starBorder:typeof starBorder!=="undefined"?starBorder:undefined,"type" in locals_for_with?locals_for_with.type:typeof type!=="undefined"?type:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ 2774:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/image33.6049808e1b474a4b891e.jpg";

/***/ }),

/***/ 750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/insert_emoticon.svg";

/***/ }),

/***/ 1682:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/location_city.svg";

/***/ }),

/***/ 1612:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/20.80eb28b9965de41394e0.jpg";

/***/ }),

/***/ 9608:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/23.20d24465cec3f1502a72.jpg";

/***/ }),

/***/ 876:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/29.1a13b5abc7628b9ec8d3.jpg";

/***/ }),

/***/ 7098:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/imageroom-image-888-2.80eb28b9965de41394e0.jpg";

/***/ }),

/***/ 8986:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/imageroom-image-888-3.1143ae1877e44c5cef64.jpg";

/***/ }),

/***/ 9349:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/imageroom-image-888-4.8b30b67e3ef165c1522b.jpg";

/***/ }),

/***/ 4820:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/imageroom-image-888.8737deaf915a1ca85444.jpg";

/***/ }),

/***/ 8870:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/favicon.70b06d41853be30e5782.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			834: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_5_docguides"] = self["webpackChunkwebpack_5_docguides"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [695,742], function() { return __webpack_require__(6677); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;