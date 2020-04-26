(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de2f2"],{8521:function(t,e){
/**
 * [chartjs-plugin-labels]{@link https://github.com/emn178/chartjs-plugin-labels}
 *
 * @version 1.1.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2017-2018
 * @license MIT
 */
(function(){"use strict";if("undefined"!==typeof Chart){"function"!=typeof Object.assign&&(Object.assign=function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(null!=n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])}return o});var t={};["pie","doughnut","polarArea","bar"].forEach((function(e){t[e]=!0})),e.prototype.setup=function(t,e){this.chart=t,this.ctx=t.ctx,this.args={},this.barTotal={};var o=t.config.options;this.options=Object.assign({position:"default",precision:0,fontSize:o.defaultFontSize,fontColor:o.defaultFontColor,fontStyle:o.defaultFontStyle,fontFamily:o.defaultFontFamily,shadowOffsetX:3,shadowOffsetY:3,shadowColor:"rgba(0,0,0,0.3)",shadowBlur:6,images:[],outsidePadding:2,textMargin:2,overlap:!0},e),"bar"===t.config.type&&(this.options.position="default",this.options.arc=!1,this.options.overlap=!0)},e.prototype.render=function(){this.labelBounds=[],this.chart.data.datasets.forEach(this.renderToDataset)},e.prototype.renderToDataset=function(t,e){this.totalPercentage=0,this.total=null;var o=this.args[e];o.meta.data.forEach(function(e,i){this.renderToElement(t,o,e,i)}.bind(this))},e.prototype.renderToElement=function(t,e,o,i){if(this.shouldRenderToElement(e.meta,o)){this.percentage=null;var n=this.getLabel(t,o,i);if(n){var r=this.ctx;r.save(),r.font=Chart.helpers.fontString(this.options.fontSize,this.options.fontStyle,this.options.fontFamily);var a=this.getRenderInfo(o,n);this.drawable(o,n,a)?(r.beginPath(),r.fillStyle=this.getFontColor(t,o,i),this.renderLabel(n,a),r.restore()):r.restore()}}},e.prototype.renderLabel=function(t,e){return this.options.arc?this.renderArcLabel(t,e):this.renderBaseLabel(t,e)},e.prototype.renderBaseLabel=function(t,e){var o=this.ctx;if("object"===typeof t)o.drawImage(t,e.x-t.width/2,e.y-t.height/2,t.width,t.height);else{o.save(),o.textBaseline="top",o.textAlign="center",this.options.textShadow&&(o.shadowOffsetX=this.options.shadowOffsetX,o.shadowOffsetY=this.options.shadowOffsetY,o.shadowColor=this.options.shadowColor,o.shadowBlur=this.options.shadowBlur);for(var i=t.split("\n"),n=0;n<i.length;n++){var r=e.y-this.options.fontSize/2*i.length+this.options.fontSize*n;o.fillText(i[n],e.x,r)}o.restore()}},e.prototype.renderArcLabel=function(t,e){var o=this.ctx,i=e.radius,n=e.view;if(o.save(),o.translate(n.x,n.y),"string"===typeof t){o.rotate(e.startAngle),o.textBaseline="middle",o.textAlign="left";var r=t.split("\n"),a=0,s=[],h=0;"border"===this.options.position&&(h=(r.length-1)*this.options.fontSize/2);for(var l=0;l<r.length;++l){var f=o.measureText(r[l]);f.width>a&&(a=f.width),s.push(f.width)}for(l=0;l<r.length;++l){var p=r[l],d=(r.length-1-l)*-this.options.fontSize+h;o.save();var c=(a-s[l])/2;o.rotate(c/i);for(var g=0;g<p.length;g++){var u=p.charAt(g);f=o.measureText(u),o.save(),o.translate(0,-1*i),o.fillText(u,0,d),o.restore(),o.rotate(f.width/i)}o.restore()}}else o.rotate((n.startAngle+Math.PI/2+e.endAngle)/2),o.translate(0,-1*i),this.renderLabel(t,{x:0,y:0});o.restore()},e.prototype.shouldRenderToElement=function(t,e){return!t.hidden&&!e.hidden&&(this.options.showZero||"polarArea"===this.chart.config.type?0!==e._view.outerRadius:0!==e._view.circumference)},e.prototype.getLabel=function(t,e,o){var i;if("function"===typeof this.options.render)i=this.options.render({label:this.chart.config.data.labels[o],value:t.data[o],percentage:this.getPercentage(t,e,o),dataset:t,index:o});else switch(this.options.render){case"value":i=t.data[o];break;case"label":i=this.chart.config.data.labels[o];break;case"image":i=this.options.images[o]?this.loadImage(this.options.images[o]):"";break;case"percentage":default:i=this.getPercentage(t,e,o)+"%";break}return"object"===typeof i?i=this.loadImage(i):null!==i&&void 0!==i&&(i=i.toString()),i},e.prototype.getFontColor=function(t,e,o){var i=this.options.fontColor;return"function"===typeof i?i=i({label:this.chart.config.data.labels[o],value:t.data[o],percentage:this.getPercentage(t,e,o),backgroundColor:t.backgroundColor[o],dataset:t,index:o}):"string"!==typeof i&&(i=i[o]||this.chart.config.options.defaultFontColor),i},e.prototype.getPercentage=function(t,e,o){if(null!==this.percentage)return this.percentage;var i;if("polarArea"===this.chart.config.type){if(null===this.total){this.total=0;for(var n=0;n<t.data.length;++n)this.total+=t.data[n]}i=t.data[o]/this.total*100}else if("bar"===this.chart.config.type){if(void 0===this.barTotal[o]){this.barTotal[o]=0;for(n=0;n<this.chart.data.datasets.length;++n)this.barTotal[o]+=this.chart.data.datasets[n].data[o]}i=t.data[o]/this.barTotal[o]*100}else i=e._view.circumference/this.chart.config.options.circumference*100;return i=parseFloat(i.toFixed(this.options.precision)),this.options.showActualPercentages||("bar"===this.chart.config.type&&(this.totalPercentage=this.barTotalPercentage[o]||0),this.totalPercentage+=i,this.totalPercentage>100&&(i-=this.totalPercentage-100,i=parseFloat(i.toFixed(this.options.precision))),"bar"===this.chart.config.type&&(this.barTotalPercentage[o]=this.totalPercentage)),this.percentage=i,i},e.prototype.getRenderInfo=function(t,e){return"bar"===this.chart.config.type?this.getBarRenderInfo(t,e):this.options.arc?this.getArcRenderInfo(t,e):this.getBaseRenderInfo(t,e)},e.prototype.getBaseRenderInfo=function(t,e){if("outside"===this.options.position||"border"===this.options.position){var o,i,n=t._view,r=n.startAngle+(n.endAngle-n.startAngle)/2,a=n.outerRadius/2;if("border"===this.options.position?i=(n.outerRadius-a)/2+a:"outside"===this.options.position&&(i=n.outerRadius-a+a+this.options.textMargin),o={x:n.x+Math.cos(r)*i,y:n.y+Math.sin(r)*i},"outside"===this.options.position){var s=this.options.textMargin+this.measureLabel(e).width/2;o.x+=o.x<n.x?-s:s}return o}return t.tooltipPosition()},e.prototype.getArcRenderInfo=function(t,e){var o,i=t._view;o="outside"===this.options.position?i.outerRadius+this.options.fontSize+this.options.textMargin:"border"===this.options.position?(i.outerRadius/2+i.outerRadius)/2:(i.innerRadius+i.outerRadius)/2;var n=i.startAngle,r=i.endAngle,a=r-n;n+=Math.PI/2,r+=Math.PI/2;var s=this.measureLabel(e);return n+=(r-(s.width/o+n))/2,{radius:o,startAngle:n,endAngle:r,totalAngle:a,view:i}},e.prototype.getBarRenderInfo=function(t,e){var o=t.tooltipPosition();return o.y-=this.measureLabel(e).height/2+this.options.textMargin,o},e.prototype.drawable=function(t,e,o){if(this.options.overlap)return!0;if(this.options.arc)return o.endAngle-o.startAngle<=o.totalAngle;var i=this.measureLabel(e),n=o.x-i.width/2,r=o.x+i.width/2,a=o.y-i.height/2,s=o.y+i.height/2;return"outside"===this.options.renderInfo?this.outsideInRange(n,r,a,s):t.inRange(n,a)&&t.inRange(n,s)&&t.inRange(r,a)&&t.inRange(r,s)},e.prototype.outsideInRange=function(t,e,o,i){for(var n=this.labelBounds,r=0;r<n.length;++r){for(var a=n[r],s=[[t,o],[t,i],[e,o],[e,i]],h=0;h<s.length;++h){var l=s[h][0],f=s[h][1];if(l>=a.left&&l<=a.right&&f>=a.top&&f<=a.bottom)return!1}s=[[a.left,a.top],[a.left,a.bottom],[a.right,a.top],[a.right,a.bottom]];for(h=0;h<s.length;++h){l=s[h][0],f=s[h][1];if(l>=t&&l<=e&&f>=o&&f<=i)return!1}}return n.push({left:t,right:e,top:o,bottom:i}),!0},e.prototype.measureLabel=function(t){if("object"===typeof t)return{width:t.width,height:t.height};for(var e=0,o=t.split("\n"),i=0;i<o.length;++i){var n=this.ctx.measureText(o[i]);n.width>e&&(e=n.width)}return{width:e,height:this.options.fontSize*o.length}},e.prototype.loadImage=function(t){var e=new Image;return e.src=t.src,e.width=t.width,e.height=t.height,e},Chart.plugins.register({id:"labels",beforeDatasetsUpdate:function(o,i){if(t[o.config.type]){Array.isArray(i)||(i=[i]);var n=i.length;o._labels&&n===o._labels.length||(o._labels=i.map((function(){return new e})));for(var r=!1,a=0,s=0;s<n;++s){var h=o._labels[s];if(h.setup(o,i[s]),"outside"===h.options.position){r=!0;var l=1.5*h.options.fontSize+h.options.outsidePadding;l>a&&(a=l)}}r&&(o.chartArea.top+=a,o.chartArea.bottom-=a)}},afterDatasetUpdate:function(e,o,i){t[e.config.type]&&e._labels.forEach((function(t){t.args[o.index]=o}))},beforeDraw:function(e){t[e.config.type]&&e._labels.forEach((function(t){t.barTotalPercentage={}}))},afterDatasetsDraw:function(e){t[e.config.type]&&e._labels.forEach((function(t){t.render()}))}})}else console.error("Can not find Chart object.");function e(){this.renderToDataset=this.renderToDataset.bind(this)}})()}}]);
//# sourceMappingURL=chunk-2d0de2f2.c711b620.js.map