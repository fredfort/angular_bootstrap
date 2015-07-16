angular.module('angular.bootstrap.htmlTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

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
    "    <!-- endbuild -->\n" +
    "    \n" +
    "    <!-- bower:css -->\n" +
    "    <!-- endbower -->\n" +
    "\n" +
    "  </head>\n" +
    "  <body ng-app=\"angular.bootstrap\">\n" +
    "\n" +
    "    <!-- Content goes here -->\n" +
    "    <div ui-view></div>\n" +
    " \n" +
    "\n" +
    "    <!-- build:js(.) scripts/vendor.js -->\n" +
    "\n" +
    "    <!-- bower:js -->\n" +
    "    <script src=\"bower_components/angular/angular.js\"></script>\n" +
    "    <script src=\"bower_components/angular-resource/angular-resource.js\"></script>\n" +
    "    <script src=\"bower_components/angular-ui-router/release/angular-ui-router.js\"></script>\n" +
    "    <script src=\"bower_components/angular-bootstrap/ui-bootstrap-tpls.js\"></script>\n" +
    "    <script src=\"bower_components/lodash/lodash.js\"></script>\n" +
    "    <script src=\"bower_components/angular-animate/angular-animate.js\"></script>\n" +
    "    <!-- endbower -->\n" +
    "\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js({.tmp,app}) scripts/scripts.js -->\n" +
    "\n" +
    "    <script src=\"scripts/app.js\"></script>\n" +
    "    <script src=\"scripts/htmlTemplates.js\"></script>\n" +
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
    "        <li><a ui-sref='main.module1'>Module 1</a></li>\n" +
    "        <li><a ui-sref='main.module2'>Module 2</a></li>\n" +
    "        <li><a ui-sref='main.module3'>Module 3</a></li>\n" +
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
    "\t  \t\t<span>{{data.environment}} environment</span>\n" +
    "\t  \t</div>\n" +
    "\t  \t<div class=\"panel panel-primary\">\n" +
    "\t  \t\t<div class=\"panel-heading\">\n" +
    "\t  \t\t\t<h2 class=\"panel-title\">Hello Angular World!</h2>\n" +
    "\t  \t\t</div>\n" +
    "\t  \t\t<div class=\"panel-body\">\n" +
    "\t  \t\t\t<div class=\"alert alert-success\">Welcome to the angular world!</div>\n" +
    "\t  \t\t</div>\n" +
    "\t  \t</div>\n" +
    "\t  </div>\n" +
    "\t</div>\n" +
    "</div>"
  );

}]);
