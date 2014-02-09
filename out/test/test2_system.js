(function() {
  var Test2Component, puu,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  puu = require('../lib/puu');

  Test2Component = (function(_super) {
    __extends(Test2Component, _super);

    function Test2Component() {
      return Test2Component.__super__.constructor.apply(this, arguments);
    }

    Test2Component.prototype.name = "Test2Component";

    return Test2Component;

  })(puu.Component);

  Test2Component.render = function(component) {
    return console.log(component.data.data + "B");
  };

  exports.component = Test2Component;

  exports.system = puu.System(Test2Component);

}).call(this);
