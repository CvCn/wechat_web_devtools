'use strict';var _exports;function init(){const a=require('../../../lib/react.js');require('../../../lib/react-dom.js');const b=require('./pickerRing'),c=require('../../../cssStr/cssStr.js'),d=a.createClass({displayName:'SelectorRing',getInitialState:function(){return{}},componentWillReceiveProps:function(e){e.show&&e.current!=this.props.current&&(this.current=e.current)},onPickerSelect:function(e){this.current=e},getValue:function(){return this.current||0},render:function(){return a.createElement('div',{className:'wx-picker-bd',style:this.props.show?{}:c.displayNone},a.createElement(b,{array:this.props.array,current:this.props.current,onPickerSelect:this.onPickerSelect}))}});_exports=d}init(),module.exports=_exports;