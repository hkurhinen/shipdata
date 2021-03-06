function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function renderShipApiDetailModal(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (apiurl, ship) {pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-xs-12\"\u003E\u003Ch4\u003EPerustiedot\u003C\u002Fh4\u003E\u003Cul\u003E\u003Cli\u003ENimi: " + (pug_escape(null == (pug_interp = ship.name) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003ERakennusnumero: " + (pug_escape(null == (pug_interp = ship.buildnumber) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003ERakennusvuosi: " + (pug_escape(null == (pug_interp = ship.buildyear) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli\u003ETyyppi: " + (pug_escape(null == (pug_interp = ship.type_translated) ? "" : pug_interp)) + " (" + (pug_escape(null == (pug_interp = ship.type) ? "" : pug_interp)) + ")\u003C\u002Fli\u003E\u003Cli\u003ETyypin lisätiedot: " + (pug_escape(null == (pug_interp = ship.type_info) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Ch4\u003ETarkemmat tiedot\u003C\u002Fh4\u003E\u003Cul\u003E";
// iterate ship.properties
;(function(){
  var $$obj = ship.properties;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var property = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = property.property) ? "" : pug_interp)) + ": " + (pug_escape(null == (pug_interp = property.value) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var property = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = property.property) ? "" : pug_interp)) + ": " + (pug_escape(null == (pug_interp = property.value) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
if (ship.attachments) {
pug_html = pug_html + "\u003Ch4\u003ELiitteet\u003C\u002Fh4\u003E\u003Cul\u003E";
// iterate ship.attachments
;(function(){
  var $$obj = ship.attachments;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var attachment = $$obj[pug_index1];
pug_html = pug_html + "\u003Cli\u003E\u003Ca" + (pug_attr("href", apiurl+'/attachments/'+attachment._id+'/data', true, false)+" target=\"blank\"") + "\u003E" + (pug_escape(null == (pug_interp = attachment.filename) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var attachment = $$obj[pug_index1];
pug_html = pug_html + "\u003Cli\u003E\u003Ca" + (pug_attr("href", apiurl+'/attachments/'+attachment._id+'/data', true, false)+" target=\"blank\"") + "\u003E" + (pug_escape(null == (pug_interp = attachment.filename) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"apiurl" in locals_for_with?locals_for_with.apiurl:typeof apiurl!=="undefined"?apiurl:undefined,"ship" in locals_for_with?locals_for_with.ship:typeof ship!=="undefined"?ship:undefined));;return pug_html;}function renderShipApiSearchControls(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-md-9\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-sm-12 search-input-container\"\u003E\u003Cdiv class=\"input-group\"\u003E\u003Cinput class=\"main-search-input form-control input-lg\" type=\"text\"\u002F\u003E\u003Cspan class=\"input-group-btn\"\u003E\u003Cbutton class=\"main-search-btn btn btn-primary btn-lg\"\u003EHae\u003C\u002Fbutton\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-md-12\"\u003E\u003Cdiv class=\"main-search-results\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"ship-api-load-container\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-md-3\"\u003E\u003Ch4\u003EAikaisemmat haut\u003C\u002Fh4\u003E\u003Cdiv class=\"ship-api-previous-searches\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;}function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function renderShipApiSearchresultRows(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (ships) {// iterate ships
;(function(){
  var $$obj = ships;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var ship = $$obj[pug_index0];
pug_html = pug_html + "\u003Ctr" + (" class=\"searchresult\""+pug_attr("data-ship-name", ship.name, true, false)+pug_attr("data-ship-id", ship._id, true, false)+pug_attr("data-ship-buildnumber", ship.buildnumber, true, false)) + "\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.buildnumber) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.type_translated) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.buildyear) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var ship = $$obj[pug_index0];
pug_html = pug_html + "\u003Ctr" + (" class=\"searchresult\""+pug_attr("data-ship-name", ship.name, true, false)+pug_attr("data-ship-id", ship._id, true, false)+pug_attr("data-ship-buildnumber", ship.buildnumber, true, false)) + "\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.buildnumber) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.type_translated) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.buildyear) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);
}.call(this,"ships" in locals_for_with?locals_for_with.ships:typeof ships!=="undefined"?ships:undefined));;return pug_html;}function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function renderShipApiSearchresults(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (ships) {pug_html = pug_html + "\u003Ctable class=\"table table-hover\"\u003E\u003Cthead\u003E\u003Ctr\u003E\u003Cth\u003ERakennusnumero\u003C\u002Fth\u003E\u003Cth\u003ENimi\u003C\u002Fth\u003E\u003Cth\u003ETyyppi\u003C\u002Fth\u003E\u003Cth\u003ERakennusvuosi\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody\u003E";
// iterate ships
;(function(){
  var $$obj = ships;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var ship = $$obj[pug_index0];
pug_html = pug_html + "\u003Ctr" + (" class=\"searchresult\""+pug_attr("data-ship-name", ship.name, true, false)+pug_attr("data-ship-id", ship._id, true, false)+pug_attr("data-ship-buildnumber", ship.buildnumber, true, false)) + "\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.buildnumber) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.type_translated) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.buildyear) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var ship = $$obj[pug_index0];
pug_html = pug_html + "\u003Ctr" + (" class=\"searchresult\""+pug_attr("data-ship-name", ship.name, true, false)+pug_attr("data-ship-id", ship._id, true, false)+pug_attr("data-ship-buildnumber", ship.buildnumber, true, false)) + "\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.buildnumber) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.type_translated) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ship.buildyear) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";}.call(this,"ships" in locals_for_with?locals_for_with.ships:typeof ships!=="undefined"?ships:undefined));;return pug_html;}