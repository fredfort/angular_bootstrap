angular.module('angular.bootstrap.htmlTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/images/svg_gen/preview.html',
    "<!doctype HTML>\n" +
    "<html>\n" +
    "\t<head>\n" +
    "\t\t<title>Icons Preview!</title>\n" +
    "\t\t<meta charset=\"utf-8\">\n" +
    "\t\t<style>\n" +
    "\t\t\tbody {\n" +
    "\t\t\t\tbackground-image: linear-gradient(#eee 25%, transparent 25%, transparent), linear-gradient(#eee 25%, transparent 25%, transparent), linear-gradient(transparent 75%, #eee 75%), linear-gradient(transparent 75%, #eee 75%);\n" +
    "\t\t\t\twidth: auto;\n" +
    "\t\t\t\tbackground-size: 10px 10px;\n" +
    "\t\t\t}\n" +
    "\t\t</style>\n" +
    "\t\t<script>\n" +
    "\t\t\t/*! grunt-grunticon Stylesheet Loader - v2.1.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */\n" +
    "\n" +
    "!function(){function e(e,n,t,o){\"use strict\";var a=window.document.createElement(\"link\"),i=n||window.document.getElementsByTagName(\"script\")[0],d=window.document.styleSheets;return a.rel=\"stylesheet\",a.href=e,a.media=\"only x\",o&&(a.onload=o),i.parentNode.insertBefore(a,i),a.onloadcssdefined=function(n){for(var t,o=0;o<d.length;o++)d[o].href&&d[o].href.indexOf(e)>-1&&(t=!0);t?n():setTimeout(function(){a.onloadcssdefined(n)})},a.onloadcssdefined(function(){a.media=t||\"all\"}),a}function n(e,n){e.onload=function(){e.onload=null,n&&n.call(e)},\"isApplicationInstalled\"in navigator&&\"onloadcssdefined\"in e&&e.onloadcssdefined(n)}!function(t){var o=function(a,i){\"use strict\";if(a&&3===a.length){var d=t.navigator,r=t.document,l=t.Image,s=!(!r.createElementNS||!r.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!r.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||t.opera&&-1===d.userAgent.indexOf(\"Chrome\")||-1!==d.userAgent.indexOf(\"Series40\")),c=new l;c.onerror=function(){o.method=\"png\",o.href=a[2],e(a[2])},c.onload=function(){var t=1===c.width&&1===c.height,d=a[t&&s?0:t?1:2];t&&s?o.method=\"svg\":t?o.method=\"datapng\":o.method=\"png\",o.href=d,n(e(d),i)},c.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\",r.documentElement.className+=\" grunticon\"}};o.loadCSS=e,o.onloadCSS=n,t.grunticon=o}(this)}();\n" +
    "\t\t\t\n" +
    "\t\t\tgrunticon([\"icons.data.svg.css\", \"icons.data.png.css\", \"icons.fallback.css\"], grunticon.svgLoadedCallback);\n" +
    "\t\t</script>\n" +
    "\t\t<noscript><link href=\"icons.fallback.css\" rel=\"stylesheet\"></noscript>\n" +
    "\t</head>\n" +
    "\t<body>\n" +
    "\n" +
    "\t\t<h1>CUSTOM PREVIEW - you can change this in the previewTemplate option</h1>\n" +
    "\t\t\t<pre><code>.svg-icon-happy:</code></pre><div class=\"svg-icon-happy\" style=\"width: 120px; height: 120px;\" ></div><hr/>\n" +
    "\n" +
    "\t\t<h2 id=\"embedded-svg-option\">Embedded SVG option</h2>\n" +
    "\t\t<p>(The <code>data-grunticon-embed</code> attribute tells grunticon to inject SVG inline):</p>\n" +
    "\n" +
    "\t\t<pre><code>icon-burger:</code></pre><div class=\"icon-burger\" data-grunticon-embed style=\"width: px; height: px;\" ></div><hr/>\n" +
    "\n" +
    "\t\t<style>\n" +
    "\t\t\t.icon-burger {\n" +
    "\t\t\t\twidth: 32px;\n" +
    "\t\t\t\theight: 30px;\n" +
    "\t\t\t\tdisplay: inline-block;\n" +
    "\t\t\t}\n" +
    "\t\t\t  .icon-burger.alt .cheese {\n" +
    "\t\t                fill: red;\n" +
    "\t\t            }\n" +
    "\t\t\t\t .icon-burger.alt .buns {\n" +
    "\t\t                fill: orange;\n" +
    "\t\t            }\n" +
    "\t\t\t\t  .icon-burger.alt .burger {\n" +
    "\t\t                fill: yellow;\n" +
    "\t\t            }\n" +
    "\t\t \t\t .icon-burger.alt .lettuce {\n" +
    "\t\t                fill: green;\n" +
    "\t\t            }\n" +
    "\n" +
    "\t\t</style>\n" +
    "\n" +
    "\t\t<pre><code>icon-burger (styled variation):</code></pre><div class=\"icon-burger alt\" data-grunticon-embed></div><hr/>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/index.html',
    "<!doctype html>\n" +
    "<html class=\"no-js\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Angular bootstrap</title>\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width\">\n" +
    "\n" +
    "    <!-- build:css({.tmp,app}) styles/main.css -->\n" +
    "    <link rel=\"stylesheet\" href=\"styles/main.css\">\n" +
    "    <!-- bower:css -->\n" +
    "    <link rel=\"stylesheet\" href=\"bower_components/angularjs-toaster/toaster.css\" />\n" +
    "    <!-- endbower -->\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    \n" +
    "\n" +
    "  </head>\n" +
    "  <body ng-app=\"angular.bootstrap\">\n" +
    "\n" +
    "    <!-- Content goes here -->\n" +
    "    <div ui-view></div>\n" +
    "\n" +
    "    <!--Toaster popup -->\n" +
    "    <toaster-container></toaster-container> \n" +
    "\n" +
    "    <!-- build:js1 scripts/vendor.js -->\n" +
    "\n" +
    "    <!-- bower:js -->\n" +
    "    <script src=\"bower_components/angular/angular.js\"></script>\n" +
    "    <script src=\"bower_components/angular-resource/angular-resource.js\"></script>\n" +
    "    <script src=\"bower_components/angular-ui-router/release/angular-ui-router.js\"></script>\n" +
    "    <script src=\"bower_components/angular-bootstrap/ui-bootstrap-tpls.js\"></script>\n" +
    "    <script src=\"bower_components/lodash/lodash.js\"></script>\n" +
    "    <script src=\"bower_components/angular-animate/angular-animate.js\"></script>\n" +
    "    <script src=\"bower_components/angularjs-toaster/toaster.js\"></script>\n" +
    "    <!-- endbower -->\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js({.tmp,app}) scripts/scripts.js -->\n" +
    "    <script src=\"images/svg_gen/grunticon.loader.js\"></script>\n" +
    "\n" +
    "    <script src=\"scripts/app.js\"></script>\n" +
    "    <script src=\"scripts/htmlTemplates.js\"></script>\n" +
    "\n" +
    "    <script src=\"scripts/controllers/MainCtrl.js\"></script>\n" +
    "    <script src=\"scripts/services/localJSCacheService.js\"></script>\n" +
    "    <script src=\"scripts/http/API.js\"></script>\n" +
    "    <script src=\"scripts/http/HttpInterceptor.js\"></script>\n" +
    "\n" +
    "    <script src=\"config/config.js\"></script>\n" +
    "\n" +
    "    <script src=\"modules/module1/scripts/module1.js\"></script>\n" +
    "    <script src=\"modules/module2/scripts/module2.js\"></script>\n" +
    "    <script src=\"modules/module3/scripts/module3.js\"></script>\n" +
    "\n" +
    "    <script src=\"modules/module1/scripts/controller/Module1MainCtrl.js\"></script>\n" +
    "    <script src=\"modules/module2/scripts/controller/Module2MainCtrl.js\"></script>\n" +
    "    <script src=\"modules/module3/scripts/controller/Module3MainCtrl.js\"></script>\n" +
    "\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "</body>\n" +
    "</html>"
  );


  $templateCache.put('app/modules/module1/views/main.html',
    "<div class=\"module1\">\n" +
    "\t<h1>Welcome to the module 1</h1>\n" +
    "\t<p><b>Status:</b></p>\n" +
    "\t<p ng-repeat=\"data in module1Data\">\n" +
    "\t\t<span>{{data.step}}: </span><label class=\"label label-success\">{{data.res}}</label>\n" +
    "\t</p>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/module2/views/main.html',
    "<div class=\"module2\">\n" +
    "\t<h1>Welcome to the module 2</h1>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/module3/views/main.html',
    "<div class=\"module3\">\n" +
    "\t<h1>Welcome to the module 3</h1>\n" +
    "</div>"
  );


  $templateCache.put('app/views/main.html',
    "<nav class=\"navbar navbar-default\">\n" +
    "  <div class=\"container-fluid\" ng-init=\"collapse=true\">\n" +
    "    <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle collapsed\" ng-click=\"collapse=!collapse\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"#/welcome\">Angular Bootsrap</a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "    <div class=\"collapse navbar-collapse\" collapse=\"collapse\">\n" +
    "      <ul class=\"nav navbar-nav\">\n" +
    "        <li><a class=\"module1Link\" ng-click=\"collapse=true\" ui-sref='main.module1'>Module 1</a></li>\n" +
    "        <li><a class=\"module2Link\" ng-click=\"collapse=true\" ui-sref='main.module2'>Module 2</a></li>\n" +
    "        <li><a class=\"module3Link\" ng-click=\"collapse=true\" ui-sref='main.module3'>Module 3 (error)</a></li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.navbar-collapse -->\n" +
    "  </div><!-- /.container-fluid --> \n" +
    "</nav>\n" +
    "\n" +
    "<div ui-view class=\"container\"></div>\n" +
    "\n" +
    "<footer>\n" +
    "  <div class=\"container text-center\">\n" +
    "    <p>FORT Frederic @2015</p>\n" +
    "  </div>\n" +
    "</footer>\n" +
    "\n"
  );


  $templateCache.put('app/views/welcome.html',
    "<div class=\"text-center\">\n" +
    "  <h1>Angular bootstrap</h1>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "\t  <div class=\"col-md-offset-3 col-md-6\">\n" +
    "\t  \t<div class=\"well\">\n" +
    "\t  \t\t<span class=\"environment\">{{data.environment}} environment</span>\n" +
    "\t  \t</div>\n" +
    "\t  \t<div class=\"panel panel-primary\">\n" +
    "\t  \t\t<div class=\"panel-heading\">\n" +
    "\t  \t\t\t<h2 class=\"panel-title\">Hello Angular World!</h2>\n" +
    "\t  \t\t</div>\n" +
    "\t  \t\t<div class=\"panel-body\">\n" +
    "\t  \t\t\t<div class=\"svg-icon-happy icon\"></div>\n" +
    "\t  \t\t\t<div class=\"alert alert-success\">Welcome to the angular world!</div>\n" +
    "\t  \t\t</div>\n" +
    "\t  \t</div>\n" +
    "\t  </div>\n" +
    "\t</div>\n" +
    "</div>"
  );

}]);
