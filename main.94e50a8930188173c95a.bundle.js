webpackJsonp([2],{590:function(t,e){e.HmrState=function(){}},560:function(t,e,n){"use strict";var a=n(5),o=n(162);a.Observable.of=o.of},535:function(t,e,n){"use strict";var a=n(536);e.Navbar=a.Navbar},536:function(t,e,n){"use strict";var a=n(1),o=n(117),r=function(){function t(){}return t.prototype.ngOnInit=function(){},t=__decorate([a.Component({selector:"navbar",directives:o.ROUTER_DIRECTIVES.slice(),template:n(550)}),__metadata("design:paramtypes",[])],t)}();e.Navbar=r},550:function(t,e){t.exports='<nav class="navbar navbar-default navbar-fixed-top">\n  <div class="container">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">ManiaJS</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav">\n        <li class="active"><a [routerLink]="[\'home\']">Home <span class="sr-only">(current)</span></a></li>\n      </ul>\n      <ul class="nav navbar-nav navbar-right">\n        <li><a href="https://github.com/ManiaJS" target="_blank">GitHub</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n'},537:function(t,e,n){"use strict";var a=n(1),o=n(160),r=n(535),s=function(){function t(t){this.appState=t,this.angularclassLogo="assets/img/angularclass-avatar.png",this.name="Angular 2 Webpack Starter",this.url="https://twitter.com/AngularClass"}return t.prototype.ngOnInit=function(){console.log("Initial App State",this.appState.state)},t=__decorate([a.Component({selector:"app",encapsulation:a.ViewEncapsulation.None,directives:[r.Navbar],styles:[n(755)],template:n(551)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.AppState&&o.AppState)&&e||Object])],t);var e}();e.App=s},538:function(t,e,n){"use strict";var a=n(1),o=n(5);n(560);var r=function(){function t(){}return t.prototype.resolve=function(t,e){return o.Observable.of({res:"I am data"})},t=__decorate([a.Injectable(),__metadata("design:paramtypes",[])],t)}();e.DataResolver=r,e.APP_RESOLVER_PROVIDERS=[r]},374:function(t,e,n){"use strict";var a=n(540),o=n(546);e.routes=[{path:"",component:a.Home},{path:"home",component:a.Home},{path:"**",component:o.NoContent}],e.asyncRoutes={},e.prefetchRouteCallbacks=[]},160:function(t,e,n){"use strict";var a=n(1),o=n(590),r=function(){function t(){this._state={}}return Object.defineProperty(t.prototype,"state",{get:function(){return this._state=this._clone(this._state)},set:function(t){throw new Error("do not mutate the `.state` directly")},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var e=this.state;return e.hasOwnProperty(t)?e[t]:e},t.prototype.set=function(t,e){return this._state[t]=e},t.prototype._clone=function(t){return JSON.parse(JSON.stringify(t))},__decorate([o.HmrState(),__metadata("design:type",Object)],t.prototype,"_state",void 0),t=__decorate([a.Injectable(),__metadata("design:paramtypes",[])],t)}();e.AppState=r},755:function(t,e){t.exports="body{padding-top:35px}"},551:function(t,e){t.exports="<navbar></navbar>\n\n<router-outlet></router-outlet>\n"},539:function(t,e,n){"use strict";var a=n(1),o=n(160),r=n(541),s=n(543),i=function(){function t(t,e){this.appState=t,this.title=e,this.localState={value:""}}return t.prototype.ngOnInit=function(){console.log("hello `Home` component")},t.prototype.submitState=function(t){console.log("submitState",t),this.appState.set("value",t),this.localState.value=""},t=__decorate([a.Component({selector:"home",providers:[r.Title],directives:[s.XLarge],pipes:[],styles:[n(756)],template:n(552)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.AppState&&o.AppState)&&e||Object,"function"==typeof(i="undefined"!=typeof r.Title&&r.Title)&&i||Object])],t);var e,i}();e.Home=i},756:function(t,e){t.exports=""},552:function(t,e){t.exports='<div class="container">\n  <div class="page-header">\n    <h1>ManiaJS Home and documentation.</h1>\n    <p class="lead">Homepage and doc not yet done</p>\n  </div>\n\n  <a href="https://github.com/ManiaJS/" class="btn btn-success">Go to our Github</a>\n</div>\n'},540:function(t,e,n){"use strict";function a(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}a(n(539))},541:function(t,e,n){"use strict";function a(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}a(n(542))},542:function(t,e,n){"use strict";var a=n(1),o=n(234),r=function(){function t(t){this.http=t,this.value="Angular 2"}return t.prototype.getData=function(){return console.log("Title#getData(): Get Data"),{value:"AngularClass"}},t=__decorate([a.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Http&&o.Http)&&e||Object])],t);var e}();e.Title=r},543:function(t,e,n){"use strict";function a(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}a(n(544))},544:function(t,e,n){"use strict";var a=n(1),o=function(){function t(t,e){e.setElementStyle(t.nativeElement,"fontSize","x-large")}return t=__decorate([a.Directive({selector:"[x-large]"}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.ElementRef&&a.ElementRef)&&e||Object,"function"==typeof(n="undefined"!=typeof a.Renderer&&a.Renderer)&&n||Object])],t);var e,n}();e.XLarge=o},545:function(t,e,n){"use strict";function a(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}a(n(537)),a(n(160)),a(n(374));var o=n(160);e.APP_PROVIDERS=[o.AppState]},546:function(t,e,n){"use strict";function a(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}a(n(547))},547:function(t,e,n){"use strict";var a=n(1),o=function(){function t(){}return t=__decorate([a.Component({selector:"no-content",template:"\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "}),__metadata("design:paramtypes",[])],t)}();e.NoContent=o},0:function(t,e,n){"use strict";function a(t){return o.bootstrap(i.App,r.PLATFORM_PROVIDERS.concat(s.ENV_PROVIDERS,i.APP_PROVIDERS)).then(s.decorateComponentRef).catch(function(t){return console.error(t)})}var o=n(356),r=n(548),s=n(549),i=n(545);e.main=a;document.addEventListener("DOMContentLoaded",function(){return a()})},375:function(t,e,n){"use strict";var a=n(1),o=n(117),r=n(220);e.APPLICATION_DIRECTIVES=o.ROUTER_DIRECTIVES.concat(r.REACTIVE_FORM_DIRECTIVES),e.DIRECTIVES=[{provide:a.PLATFORM_DIRECTIVES,multi:!0,useValue:e.APPLICATION_DIRECTIVES}]},376:function(t,e,n){"use strict";var a=n(1);e.APPLICATION_PIPES=[],e.PIPES=[{provide:a.PLATFORM_PIPES,multi:!0,useValue:e.APPLICATION_PIPES}]},377:function(t,e,n){"use strict";var a=n(35),o=n(234),r=n(117),s=n(220),i=n(373),c=n(372),u=n(374),p=n(538);e.APPLICATION_PROVIDERS=[s.disableDeprecatedForms(),s.provideForms()].concat(p.APP_RESOLVER_PROVIDERS,[r.provideRouter(u.routes),i.provideWebpack(u.asyncRoutes),c.providePrefetchIdleCallbacks(u.prefetchRouteCallbacks)],o.HTTP_PROVIDERS,[{provide:a.LocationStrategy,useClass:a.HashLocationStrategy}]),e.PROVIDERS=e.APPLICATION_PROVIDERS.slice()},548:function(t,e,n){"use strict";function a(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}a(n(375)),a(n(376)),a(n(377));var o=n(375),r=n(376),s=n(377);e.PLATFORM_PROVIDERS=s.PROVIDERS.concat(o.DIRECTIVES,r.PIPES)},549:function(t,e,n){"use strict";var a=n(112),o=n(1),r=[],s=function(t){return t};a.disableDebugTools(),o.enableProdMode(),r=r.slice(),e.decorateComponentRef=s,e.ENV_PROVIDERS=r.slice()}});
//# sourceMappingURL=main.94e50a8930188173c95a.bundle.map