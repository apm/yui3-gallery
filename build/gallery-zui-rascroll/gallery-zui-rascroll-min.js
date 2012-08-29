YUI.add("gallery-zui-rascroll",function(c){var b=0,a=function(){a.superclass.constructor.apply(this,arguments);};a.NAME="pluginRAScroll";a.NS="zras";a.ATTRS={horizontal:{value:true,lazyAdd:false,validator:c.Lang.isBoolean,setter:function(d){this._hori=d;return d;}},cooperation:{value:false,lazyAdd:false,validator:c.Lang.isBoolean,setter:function(d){this._coop=d;return d;}}};c.namespace("zui").RAScroll=c.extend(a,c.Plugin.Base,{initializer:function(){this._host=this.get("host");this._node=this._host.get("boundingBox");this._start=false;this._onlyX=false;this._handles.push(new c.EventHandle([this._node.on("gesturemovestart",c.bind(this.handleGestureMoveStart,this)),this._node.on("gesturemove",c.bind(this.handleGestureMove,this)),this._host.get("contentBox").on("gesturemoveend",c.bind(this.handleGestureMoveEnd,this),{standAlone:true})]));this.syncScroll();},handleGestureMoveStart:function(d){b++;},handleGestureMove:function(d){if(this._start){return;}this._start=true;this._onlyX=Math.abs(this._host._startClientX-d.clientX)>Math.abs(this._host._startClientY-d.clientY);if(this._coop&&b<2){return;}if(this._hori?!this._onlyX:this._onlyX){this._host.set("disabled",true);}},handleGestureMoveEnd:function(d){this._start=false;b--;if(this._coop&&b===0){return;}if(this._hori?!this._onlyX:this._onlyX){this._host.set("disabled",false);}},syncScroll:function(){if(this._hori){this._node.set("offsetHeight",this._node.get("scrollHeight"));}else{this.syncWidth();}},syncWidth:function(){var f=this._host.get("contentBox"),d=this._node.get("scrollWidth"),e=this._node.get("offsetWidth");if(d>e){f.set("offsetWidth",f.get("offsetWidth")+e-d);}}});},"gallery-2012.08.22-20-00",{requires:["scrollview"],skinnable:false});