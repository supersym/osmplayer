(function(a,b){b=b||{};b.playLoader=b.playLoader||{};b.playLoader[a]=function(a,b){minplayer.playLoader.call(this,a,b)};b.playLoader[a].prototype=new minplayer.playLoader;b.playLoader[a].prototype.constructor=b.playLoader[a];b.playLoader[a].prototype.getDisplay=function(){this.options.build&&jQuery(".minplayer-"+a+"",this.context).prepend('      <div class="minplayer-'+a+'-loader-wrapper">        <div class="minplayer-'+a+'-big-play ui-state-default"><span></span></div>        <div class="minplayer-'+
a+'-loader">&nbsp;</div>        <div class="minplayer-'+a+'-preview ui-widget-content"></div>      </div>');return jQuery(".minplayer-"+a+" .minplayer-"+a+"-loader-wrapper",this.context)};b.playLoader[a].prototype.getElements=function(){var b=minplayer.playLoader.prototype.getElements.call(this);return jQuery.extend(b,{busy:jQuery(".minplayer-"+a+"-loader",this.display),bigPlay:jQuery(".minplayer-"+a+"-big-play",this.display),preview:jQuery(".minplayer-"+a+"-preview",this.display)})}})("default",
osmplayer);
(function(a,b){b=b||{};b.controller=b.controller||{};b.controller[a]=function(a,b){this.options=jQuery.extend({volumeVertical:!0},this.options);minplayer.controller.call(this,a,b)};b.controller[a].prototype=new minplayer.controller;b.controller[a].prototype.constructor=b.controller[a];b.controller[a].prototype.construct=function(){minplayer.controller.prototype.construct.call(this);!this.options.volumeVertical||this.options.controllerOnly?(this.display.addClass("minplayer-controls-volume-horizontal"),this.display.removeClass("minplayer-controls-volume-vertical"),
this.volumeBar.slider("option","orientation","horizontal")):(this.display.addClass("minplayer-controls-volume-vertical"),this.display.removeClass("minplayer-controls-volume-horizontal"));this.options.controllerOnly||this.get("player",function(a){this.get("media",function(b){b.hasController()?a.display.addClass("with-controller"):minplayer.showThenHide(this.display,5E3,function(b){a.display[b?"addClass":"removeClass"]("with-controller")})})})};b.controller[a].prototype.getDisplay=function(){this.options.build&&
jQuery(".minplayer-"+a,this.context).prepend('      <div class="minplayer-'+a+'-controls ui-widget-header">        <div class="minplayer-'+a+'-controls-left">          <a class="minplayer-'+a+"-play minplayer-"+a+'-button ui-state-default ui-corner-all" title="Play">            <span class="ui-icon ui-icon-play"></span>          </a>          <a class="minplayer-'+a+"-pause minplayer-"+a+'-button ui-state-default ui-corner-all" title="Pause">            <span class="ui-icon ui-icon-pause"></span>          </a>        </div>        <div class="minplayer-'+
a+'-controls-right">          <div class="minplayer-'+a+'-timer">00:00</div>          <div class="minplayer-'+a+'-fullscreen ui-widget-content">            <div class="minplayer-'+a+'-fullscreen-inner ui-state-default"></div>          </div>          <div class="minplayer-'+a+'-volume">            <div class="minplayer-'+a+'-volume-slider"></div>            <a class="minplayer-'+a+"-volume-mute minplayer-"+a+'-button ui-state-default ui-corner-all" title="Mute">              <span class="ui-icon ui-icon-volume-on"></span>            </a>            <a class="minplayer-'+
a+"-volume-unmute minplayer-"+a+'-button ui-state-default ui-corner-all" title="Unmute">              <span class="ui-icon ui-icon-volume-off"></span>            </a>          </div>        </div>        <div class="minplayer-'+a+'-controls-mid">          <div class="minplayer-'+a+'-seek">            <div class="minplayer-'+a+'-progress ui-state-default"></div>          </div>        </div>      </div>');this.context.addClass("with-controller");return jQuery(".minplayer-"+a+"-controls",this.context)};
b.controller[a].prototype.getElements=function(){var b=minplayer.controller.prototype.getElements.call(this),c=jQuery(".minplayer-"+a+"-timer",this.display);return jQuery.extend(b,{play:jQuery(".minplayer-"+a+"-play",this.display),pause:jQuery(".minplayer-"+a+"-pause",this.display),fullscreen:jQuery(".minplayer-"+a+"-fullscreen",this.display),seek:jQuery(".minplayer-"+a+"-seek",this.display),progress:jQuery(".minplayer-"+a+"-progress",this.display),volume:jQuery(".minplayer-"+a+"-volume-slider",this.display),
mute:jQuery(".minplayer-"+a+"-volume-mute",this.display),timer:c,duration:c})}})("default",osmplayer);
(function(a,b){b=b||{};b.playlist=b.playlist||{};b.playlist[a]=function(a,c){b.playlist.call(this,a,c)};b.playlist[a].prototype=new b.playlist;b.playlist[a].prototype.constructor=b.playlist[a];b.playlist[a].prototype.construct=function(){this.options=jQuery.extend({showPlaylist:!0},this.options);b.playlist.prototype.construct.call(this);minplayer.showThenHide(this.elements.hideShow);this.get("player",function(a){var b=this.options.vertical?"width":"height",e=this.options.vertical?"right":"bottom",
g=this.options.vertical?"marginRight":"marginBottom";this.hideShow=function(f,j){var h={},i={},k=this.display[b](),l=this.options.vertical?"e":"s",m=this.options.vertical?"w":"n";jQuery("span",this.elements.hideShow).removeClass(f?"ui-icon-triangle-1-"+m:"ui-icon-triangle-1-"+l).addClass(f?"ui-icon-triangle-1-"+l:"ui-icon-triangle-1-"+m);h[e]=f?k:0;a.elements.minplayer&&(j?a.elements.minplayer.animate(h,"fast"):a.elements.minplayer.css(h));i[g]=f?0:-k;j?this.display.animate(i,"fast",function(){a.resize()}):
this.display.css(i)};this.bind("playlistLoad",function(a){return function(b,c){1===c.nodes.length?a.hideShow(!1,!0):a.hideShow(!0,!0)}}(this));this.elements.hideShow&&this.elements.hideShow.bind("click",function(a){return function(b){b.preventDefault();b=jQuery("span",a.elements.hideShow).hasClass("ui-icon-triangle-1-"+(a.options.vertical?"w":"n"));a.hideShow(b,!0)}}(this));a.elements.minplayer&&(this.options.showPlaylist?this.options.vertical?a.elements.minplayer.css("right",this.display.width()+
"px"):a.elements.minplayer.css("bottom",this.display.height()+"px"):this.hideShow(!1))})};b.playlist[a].prototype.getDisplay=function(){this.options.build&&this.context.append('      <div class="osmplayer-'+a+'-playlist">        <div class="osmplayer-'+a+'-hide-show-playlist ui-state-default">          <span class="ui-icon"></span>        </div>        <div class="minplayer-'+a+'-loader-wrapper">          <div class="minplayer-'+a+'-loader"></div>        </div>        <div class="osmplayer-'+a+'-playlist-scroll ui-widget-content">          <div class="osmplayer-'+
a+'-playlist-list"></div>      </div>      </div>');return jQuery(".osmplayer-"+a+"-playlist",this.context)};b.playlist[a].prototype.getElements=function(){var d=b.playlist.prototype.getElements.call(this),c=this.options.vertical?"playlist-vertical":"playlist-horizontal",c=c+(this.options.playlistOnly?" playlist-only":""),e=this.options.showPlaylist,e=this.options.vertical?e?"e":"w":e?"s":"n",g=this.options.vertical?"ui-corner-left":"ui-corner-top";(this.options.disablePlaylist||!this.options.playlist)&&
this.display.remove();this.display.addClass(c);c=jQuery(".osmplayer-"+a+"-hide-show-playlist",this.display);c.addClass(g);this.options.playlistOnly&&(c.hide(),c=null);jQuery("span",c).addClass("ui-icon-triangle-1-"+e);return jQuery.extend(d,{playlist_busy:jQuery(".minplayer-"+a+"-loader-wrapper",this.display),list:jQuery(".osmplayer-"+a+"-playlist-list",this.display),scroll:jQuery(".osmplayer-"+a+"-playlist-scroll",this.display),hideShow:c})}})("default",osmplayer);
(function(a,b){b=b||{};b.teaser=b.teaser||{};b.teaser[a]=function(a,c){b.teaser.call(this,a,c)};b.teaser[a].prototype=new b.teaser;b.teaser[a].prototype.constructor=b.teaser[a];b.teaser[a].prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.display.bind("mouseenter",function(a){return function(){a.addClass("ui-state-hover")}}(this.elements.info)).bind("mouseleave",function(a){return function(){a.removeClass("ui-state-hover")}}(this.elements.info))};b.teaser[a].prototype.getDisplay=
function(){this.context.append('    <div class="osmplayer-'+a+'-teaser ui-widget-content">      <div class="osmplayer-'+a+'-teaser-image"></div>      <div class="osmplayer-'+a+'-teaser-info ui-state-default">        <div class="osmplayer-'+a+'-teaser-title">Sample Title</div>      </div>    </div>');var b=jQuery(".osmplayer-"+a+"-teaser",this.context);return b.eq(b.length-1)};b.teaser[a].prototype.select=function(a){a?this.elements.info.addClass("ui-state-active"):this.elements.info.removeClass("ui-state-active")};
b.teaser[a].prototype.getElements=function(){var d=b.teaser.prototype.getElements.call(this);return jQuery.extend(d,{info:jQuery(".osmplayer-"+a+"-teaser-info",this.display),title:jQuery(".osmplayer-"+a+"-teaser-title",this.display),image:jQuery(".osmplayer-"+a+"-teaser-image",this.display)})}})("default",osmplayer);
(function(a,b){b=b||{};b.pager=b.pager||{};b.pager[a]=function(a,c){b.pager.call(this,a,c)};b.pager[a].prototype=new b.pager;b.pager[a].prototype.constructor=b.pager[a];b.pager[a].prototype.getDisplay=function(){this.options.build&&this.context.append('      <div class="osmplayer-'+a+'-playlist-pager ui-widget-header">        <div class="osmplayer-'+a+'-playlist-pager-left">          <a href="#" class="osmplayer-'+a+"-playlist-pager-link osmplayer-"+a+"-playlist-pager-prevpage minplayer-"+a+'-button ui-state-default ui-corner-all">            <span class="ui-icon ui-icon-circle-triangle-w"></span>          </a>        </div>        <div class="osmplayer-'+
a+'-playlist-pager-right">          <a href="#" class="osmplayer-'+a+"-playlist-pager-link osmplayer-"+a+"-playlist-pager-nextpage minplayer-"+a+'-button ui-state-default ui-corner-all">            <span class="ui-icon ui-icon-circle-triangle-e"></span>          </a>        </div>      </div>');return jQuery(".osmplayer-"+a+"-playlist-pager",this.context)};b.pager[a].prototype.getElements=function(){var d=b.pager.prototype.getElements.call(this);return jQuery.extend(d,{prevPage:jQuery(".osmplayer-"+
a+"-playlist-pager-prevpage",this.display),nextPage:jQuery(".osmplayer-"+a+"-playlist-pager-nextpage",this.display)})}})("default",osmplayer);
(function(a,b){b=b||{};b[a]=function(a,c){this.options=jQuery.extend({controllerOnly:!1},this.options);b.call(this,a,c)};b[a].prototype=new b;b[a].prototype.constructor=b[a];b[a].prototype.construct=function(){b.prototype.construct.call(this);this.options.controllerOnly&&this.display.addClass("controller-only")};b[a].prototype.getDisplay=function(){0==this.context.children().length&&(this.context=this.context.attr({id:this.options.id+"-player","class":"minplayer-"+a+"-media"}).wrap(jQuery(document.createElement("div")).attr({"class":"minplayer-"+
a+"-display ui-widget-content"})).parent(".minplayer-"+a+"-display").wrap(jQuery(document.createElement("div")).attr({"class":"minplayer-"+a})).parent(".minplayer-"+a).prepend('        <div class="minplayer-'+a+'-logo"></div>        <div class="minplayer-'+a+'-error"></div>').wrap(jQuery(document.createElement("div")).attr({id:this.options.id,"class":"osmplayer-"+a+" player-ui"})).parent(".osmplayer-"+a),this.options.build=!0);return this.context};b[a].prototype.getElements=function(){var d=b.prototype.getElements.call(this);
this.display.width(this.options.width);this.display.height(this.options.height);var c=jQuery(".minplayer-"+a,this.display);this.options.playlistOnly&&(c.remove(),c=null);return jQuery.extend(d,{player:this.display,minplayer:c,display:jQuery(".minplayer-"+a+"-display",this.display),media:jQuery(".minplayer-"+a+"-media",this.display),error:jQuery(".minplayer-"+a+"-error",this.display),logo:jQuery(".minplayer-"+a+"-logo",this.display)})}})("default",osmplayer);
