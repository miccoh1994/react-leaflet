(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{150:function(n,e,t){"use strict";var r={};t.r(r),t.d(r,"useAttribution",(function(){return c})),t.d(r,"updateCircle",(function(){return i})),t.d(r,"createContainerComponent",(function(){return b})),t.d(r,"createDivOverlayComponent",(function(){return v})),t.d(r,"createLeafComponent",(function(){return m})),t.d(r,"CONTEXT_VERSION",(function(){return s})),t.d(r,"LeafletContext",(function(){return f})),t.d(r,"LeafletProvider",(function(){return d})),t.d(r,"useLeafletContext",(function(){return p})),t.d(r,"createControlHook",(function(){return O})),t.d(r,"createDivOverlayHook",(function(){return C})),t.d(r,"addClassName",(function(){return w})),t.d(r,"removeClassName",(function(){return E})),t.d(r,"updateClassName",(function(){return x})),t.d(r,"createElementHook",(function(){return L})),t.d(r,"useEventHandlers",(function(){return y})),t.d(r,"createControlComponent",(function(){return I})),t.d(r,"createLayerComponent",(function(){return M})),t.d(r,"createOverlayComponent",(function(){return S})),t.d(r,"createPathComponent",(function(){return z})),t.d(r,"createTileLayerComponent",(function(){return T})),t.d(r,"updateGridLayer",(function(){return H})),t.d(r,"createLayerHook",(function(){return R})),t.d(r,"useLayerLifecycle",(function(){return P})),t.d(r,"updateMediaOverlay",(function(){return _})),t.d(r,"withPane",(function(){return j})),t.d(r,"createPathHook",(function(){return N})),t.d(r,"usePathOptions",(function(){return k}));var o={};t.r(o),t.d(o,"useMap",(function(){return G})),t.d(o,"useMapEvent",(function(){return A})),t.d(o,"useMapEvents",(function(){return B})),t.d(o,"AttributionControl",(function(){return V})),t.d(o,"Circle",(function(){return D})),t.d(o,"CircleMarker",(function(){return J})),t.d(o,"FeatureGroup",(function(){return U})),t.d(o,"GeoJSON",(function(){return W})),t.d(o,"ImageOverlay",(function(){return F})),t.d(o,"LayerGroup",(function(){return q})),t.d(o,"LayersControl",(function(){return X})),t.d(o,"MapConsumer",(function(){return $})),t.d(o,"MapContainer",(function(){return K})),t.d(o,"Marker",(function(){return Q})),t.d(o,"Pane",(function(){return on})),t.d(o,"Polygon",(function(){return un})),t.d(o,"Polyline",(function(){return an})),t.d(o,"Popup",(function(){return cn})),t.d(o,"Rectangle",(function(){return ln})),t.d(o,"ScaleControl",(function(){return sn})),t.d(o,"SVGOverlay",(function(){return pn})),t.d(o,"TileLayer",(function(){return bn})),t.d(o,"Tooltip",(function(){return vn})),t.d(o,"VideoOverlay",(function(){return mn})),t.d(o,"WMSTileLayer",(function(){return On})),t.d(o,"ZoomControl",(function(){return yn}));var u=t(0),a=t.n(u);function c(n,e){var t=Object(u.useRef)(e);Object(u.useEffect)((function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e}),[n,e])}function i(n,e,t){e.center!==t.center&&n.setLatLng(e.center),null!=e.radius&&e.radius!==t.radius&&n.setRadius(e.radius)}var l=t(20),s=1,f=Object(u.createContext)(null),d=f.Provider;function p(){var n=Object(u.useContext)(f);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}function b(n){function e(e,t){var r=n(e).current,o=r.instance,c=r.context;return Object(u.useImperativeHandle)(t,(function(){return o})),null==e.children?null:a.a.createElement(d,{value:c},e.children)}return Object(u.forwardRef)(e)}function v(n){function e(e,t){var r=Object(u.useState)(!1),o=r[0],a=r[1],c=n(e,a).current.instance;Object(u.useImperativeHandle)(t,(function(){return c})),Object(u.useEffect)((function(){o&&c.update()}),[c,o,e.children]);var i=c._contentNode;return i?Object(l.createPortal)(e.children,i):null}return Object(u.forwardRef)(e)}function m(n){function e(e,t){var r=n(e).current.instance;return Object(u.useImperativeHandle)(t,(function(){return r})),null}return Object(u.forwardRef)(e)}function O(n){return function(e){var t=p(),r=n(e,t),o=r.current.instance,a=Object(u.useRef)(e.position),c=e.position;return Object(u.useEffect)((function(){return o.addTo(t.map),function(){o.remove()}}),[t.map,o]),Object(u.useEffect)((function(){null!=c&&c!==a.current&&(o.setPosition(c),a.current=c)}),[o,c]),r}}function y(n,e){var t=Object(u.useRef)();Object(u.useEffect)((function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}}),[n,e])}function j(n,e){var t,r=null!=(t=n.pane)?t:e.pane;return r?Object.assign({},n,{pane:r}):n}function C(n,e){return function(t,r){var o=p(),u=n(j(t,o),o);return c(o.map,t.attribution),y(u.current,t.eventHandlers),e(u.current,o,t,r),u}}var h=t(97);function g(n){return n.split(" ").filter(Boolean)}function w(n,e){g(e).forEach((function(e){h.DomUtil.addClass(n,e)}))}function E(n,e){g(e).forEach((function(e){h.DomUtil.removeClass(n,e)}))}function x(n,e,t){null!=n&&t!==e&&(null!=e&&e.length>0&&E(n,e),null!=t&&t.length>0&&w(n,t))}function L(n,e){return null==e?function(e,t){return Object(u.useRef)(n(e,t))}:function(t,r){var o=Object(u.useRef)(n(t,r)),a=Object(u.useRef)(t),c=o.current.instance;return Object(u.useEffect)((function(){a.current!==t&&(e(c,t,a.current),a.current=t)}),[c,t,r]),o}}function P(n,e){Object(u.useEffect)((function(){var t,r=null!=(t=e.layerContainer)?t:e.map;return r.addLayer(n.instance),function(){r.removeLayer(n.instance)}}),[e,n])}function R(n){return function(e){var t=p(),r=n(j(e,t),t);return c(t.map,e.attribution),y(r.current,e.eventHandlers),P(r.current,t),r}}function k(n,e){var t=Object(u.useRef)();Object(u.useEffect)((function(){if(e.pathOptions!==t.current){var r,o=null!=(r=e.pathOptions)?r:{};n.instance.setStyle(o),t.current=o}}),[n,e])}function N(n){return function(e){var t=p(),r=n(e,t);return y(r.current,e.eventHandlers),P(r.current,t),k(r.current,e),r}}function I(n){return m(O(L((function(e,t){return{instance:n(e),context:t}}))))}function M(n,e){return b(R(L(n,e)))}function S(n,e){return v(C(L(n),e))}function z(n,e){return b(N(L(n,e)))}function T(n,e){return m(R(L(n,e)))}function H(n,e,t){var r=e.opacity,o=e.zIndex;null!=r&&r!==t.opacity&&n.setOpacity(r),null!=o&&o!==t.zIndex&&n.setZIndex(o)}function _(n,e,t){e.bounds instanceof h.LatLngBounds&&e.bounds!==t.bounds&&n.setBounds(e.bounds),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=e.zIndex&&e.zIndex!==t.zIndex&&n.setZIndex(e.zIndex)}function G(){return p().map}function A(n,e){var t=G();return Object(u.useEffect)((function(){return t.on(n,e),function(){t.off(n,e)}}),[t,n,e]),t}function B(n){var e=G();return Object(u.useEffect)((function(){return e.on(n),function(){e.off(n)}}),[e,n]),e}var V=I((function(n){return new h.Control.Attribution(n)})),Z=t(6),D=z((function(n,e){var t=n.center,r=(n.children,Object(Z.a)(n,["center","children"])),o=new h.Circle(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),i),J=z((function(n,e){var t=n.center,r=(n.children,Object(Z.a)(n,["center","children"])),o=new h.CircleMarker(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),i),U=z((function(n,e){n.children;var t=Object(Z.a)(n,["children"]),r=new h.FeatureGroup([],t);return{instance:r,context:Object.assign({},e,{layerContainer:r,overlayContainer:r})}})),W=z((function(n,e){var t=n.data,r=Object(Z.a)(n,["data"]),o=new h.GeoJSON(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}})),F=M((function(n,e){var t=n.bounds,r=n.url,o=Object(Z.a)(n,["bounds","url"]),u=new h.ImageOverlay(r,t,o);return{instance:u,context:Object.assign({},e,{overlayContainer:u})}}),(function(n,e,t){_(n,e,t),e.url!==t.url&&n.setUrl(e.url)})),q=M((function(n,e){n.children;var t=Object(Z.a)(n,["children"]),r=new h.LayerGroup([],t);return{instance:r,context:Object.assign({},e,{layerContainer:r})}})),X=b(O(L((function(n,e){n.children;var t=Object(Z.a)(n,["children"]),r=new h.Control.Layers(void 0,void 0,t);return{instance:r,context:Object.assign({},e,{layersControl:r})}}),(function(n,e,t){e.collapsed!==t.collapsed&&(!0===e.collapsed?n.collapse():n.expand())}))));function Y(n){return function(e){var t=p(),r=Object(u.useRef)(e),o=Object(u.useState)(null),c=o[0],i=o[1],l=t.layersControl,s=t.map,f=Object(u.useCallback)((function(e){null!=l&&(r.current.checked&&s.addLayer(e),n(l,e,r.current.name),i(e))}),[l,s]),b=Object(u.useCallback)((function(n){null==l||l.removeLayer(n),i(null)}),[l]),v=Object(u.useMemo)((function(){return Object.assign({},t,{layerContainer:{addLayer:f,removeLayer:b}})}),[t,f,b]);return Object(u.useEffect)((function(){null!==c&&r.current!==e&&(!0!==e.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=e.checked&&!1!==e.checked||s.removeLayer(c):s.addLayer(c),r.current=e)})),e.children?a.a.createElement(d,{value:v},e.children):null}}function $(n){return(0,n.children)(G())}function K(n){var e=n.children,t=n.className,r=n.id,o=n.placeholder,c=n.style,i=n.whenCreated,l=Object(Z.a)(n,["children","className","id","placeholder","style","whenCreated"]),f=Object(u.useRef)(null),p=function(n,e){var t=Object(u.useState)(null),r=t[0],o=t[1];return Object(u.useEffect)((function(){if(null!==n.current&&null===r){var t=new h.Map(n.current,e);null!=e.center&&null!=e.zoom?t.setView(e.center,e.zoom):null!=e.bounds&&t.fitBounds(e.bounds,e.boundsOptions),null!=e.whenReady&&t.whenReady(e.whenReady),o(t)}}),[n,r,e]),r}(f,l),b=Object(u.useRef)(!1);Object(u.useEffect)((function(){null!=p&&!1===b.current&&null!=i&&(b.current=!0,i(p))}),[p,i]);var v=Object(u.useMemo)((function(){return p?{__version:s,map:p}:null}),[p]),m=v?a.a.createElement(d,{value:v},e):null!=o?o:null;return a.a.createElement("div",{ref:f,className:t,id:r,style:c},m)}X.BaseLayer=Y((function(n,e,t){n.addBaseLayer(e,t)})),X.Overlay=Y((function(n,e,t){n.addOverlay(e,t)}));var Q=M((function(n,e){var t=n.position,r=Object(Z.a)(n,["position"]),o=new h.Marker(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),(function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())})),nn=t(153),en=["mapPane","markerPane","overlayPane","popupPane","shadowPane","tilePane","tooltipPane"],tn={position:"absolute",top:0,right:0,bottom:0,left:0};function rn(n,e){n[e];return Object(Z.a)(n,[e].map(nn.a))}function on(n){var e=p(),t=Object(u.useRef)(null),r=Object(u.useRef)(n);function o(e){null!=n.className&&w(e,n.className),null!=n.style&&Object.keys(n.style).forEach((function(t){e.style[t]=n.style[t]}))}function c(){var r=n.name;if(-1!==en.indexOf(r))throw new Error("You must use a unique name for a pane that is not a default Leaflet pane: "+r);if(null!=e.map.getPane(r))throw new Error("A pane with this name already exists: "+r);var u=e.pane?e.map.getPane(e.pane):void 0;t.current=e.map.createPane(r,u),o(t.current)}function i(n){var t=e.map.getPane(n);null==t||null==t.remove||t.remove(),null!=e.map._panes&&(e.map._panes=rn(e.map._panes,n),e.map._paneRenderers=rn(e.map._paneRenderers,n))}Object(u.useEffect)((function(){return null===t.current?c():n!==r.current&&(n.name===r.current.name?(r.current.className&&n.className!==r.current.className&&E(t.current,r.current.className),o(t.current)):(i(r.current.name),c())),function(){i(n.name)}}));var l=Object(u.useMemo)((function(){return Object.assign({},e,{pane:n.name})}),[e,n.name]);return n.children?a.a.createElement(d,{value:l},a.a.createElement("div",{style:tn},n.children)):null}var un=z((function(n,e){var t=n.positions,r=Object(Z.a)(n,["positions"]),o=new h.Polygon(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),(function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)})),an=z((function(n,e){var t=n.positions,r=Object(Z.a)(n,["positions"]),o=new h.Polyline(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),(function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)})),cn=S((function(n,e){return{instance:new h.Popup(n,e.overlayContainer),context:e}}),(function(n,e,t,r){var o=t.onClose,a=t.onOpen,c=t.position;Object(u.useEffect)((function(){var t=n.instance;function u(n){n.popup===t&&(t.update(),r(!0),null==a||a())}function i(n){n.popup===t&&(r(!1),null==o||o())}return e.map.on({popupopen:u,popupclose:i}),null==e.overlayContainer?(null!=c&&t.setLatLng(c),t.openOn(e.map)):e.overlayContainer.bindPopup(t),function(){e.map.off({popupopen:u,popupclose:i}),null==e.overlayContainer?e.map.removeLayer(t):e.overlayContainer.unbindPopup()}}),[n,e,r,o,a,c])})),ln=z((function(n,e){var t=n.bounds,r=Object(Z.a)(n,["bounds"]),o=new h.Rectangle(t,r);return{instance:o,context:Object.assign({},e,{overlayContainer:o})}}),(function(n,e,t){e.bounds!==t.bounds&&n.setBounds(e.bounds)})),sn=I((function(n){return new h.Control.Scale(n)})),fn=R(L((function(n,e){var t=n.attributes,r=n.bounds,o=Object(Z.a)(n,["attributes","bounds"]),u=document.createElementNS("http://www.w3.org/2000/svg","svg");return u.setAttribute("xmlns","http://www.w3.org/2000/svg"),null!=t&&Object.keys(t).forEach((function(n){u.setAttribute(n,t[n])})),{instance:new h.SVGOverlay(u,r,o),container:u,context:e}}),_));function dn(n,e){var t=n.children,r=Object(Z.a)(n,["children"]),o=fn(r).current,a=o.instance,c=o.container;return Object(u.useImperativeHandle)(e,(function(){return a})),null==c||null==t?null:Object(l.createPortal)(t,c)}var pn=Object(u.forwardRef)(dn),bn=T((function(n,e){var t=n.url,r=Object(Z.a)(n,["url"]);return{instance:new h.TileLayer(t,j(r,e)),context:e}}),H),vn=S((function(n,e){return{instance:new h.Tooltip(n,e.overlayContainer),context:e}}),(function(n,e,t,r){var o=t.onClose,a=t.onOpen;Object(u.useEffect)((function(){var t=e.overlayContainer;if(null!=t){var u=n.instance,c=function(n){n.tooltip===u&&(u.update(),r(!0),null==a||a())},i=function(n){n.tooltip===u&&(r(!1),null==o||o())};return t.on({tooltipopen:c,tooltipclose:i}),t.bindTooltip(u),function(){t.off({tooltipopen:c,tooltipclose:i}),t.unbindTooltip()}}}),[n,e,r,o,a])})),mn=M((function(n,e){var t,r=n.bounds,o=n.url,u=Object(Z.a)(n,["bounds","url"]),a=new h.VideoOverlay(o,r,u);!0===u.play&&(null==(t=a.getElement())||t.play());return{instance:a,context:Object.assign({},e,{overlayContainer:a})}}),(function(n,e,t){_(n,e,t),"string"==typeof e.url&&e.url!==t.url&&n.setUrl(e.url);var r=n.getElement();null!=r&&(!0!==e.play||t.play?e.play||!0!==t.play||r.pause():r.play())})),On=T((function(n,e){var t=n.params,r=void 0===t?{}:t,o=n.url,u=Object(Z.a)(n,["params","url"]);return{instance:new h.TileLayer.WMS(o,Object.assign({},r,j(u,e))),context:e}}),(function(n,e,t){H(n,e,t),null!=e.params&&e.params!==t.params&&n.setParams(e.params)})),yn=I((function(n){return new h.Control.Zoom(n)}));const jn={L:h,React:a.a,...r,...a.a,...o};e.a=jn},85:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return m}));var r=t(127),o=t.n(r),u=t(0),a=t.n(u),c=t(101),i=t(103),l=t(99),s=t(111),f=t(151),d=t(106),p=t(86),b=t.n(p);function v({text:n}){const{isDarkTheme:e}=Object(s.a)(),t=e?"logo-title-alt":"logo-title";return a.a.createElement("h1",{className:"hero__title"},a.a.createElement("img",{src:Object(i.a)(`img/${t}.svg`),alt:n,width:"480"}))}function m(){const{siteConfig:n={}}=Object(l.a)();return a.a.createElement(d.a,{title:n.title,description:"React components for Leaflet maps"},a.a.createElement("header",{className:o()("hero",b.a.heroBanner)},a.a.createElement("div",{className:"container"},a.a.createElement(v,{text:n.title}),a.a.createElement("p",{className:"hero__subtitle"},n.tagline),a.a.createElement("div",{className:b.a.buttons},a.a.createElement(c.a,{className:o()("button button--outline button--primary button--lg",b.a.getStarted),to:Object(i.a)("docs/start-introduction")},"Get Started")))),a.a.createElement("main",null,a.a.createElement(f.a,{live:!0,noInline:!0,className:"tsx"},'const position = [51.505, -0.09]\n        \nrender(\n  <MapContainer center={position} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <Marker position={position}>\n      <Popup>\n        A pretty CSS3 popup. <br /> Easily customizable.\n      </Popup>\n    </Marker>\n  </MapContainer>\n)')))}}}]);