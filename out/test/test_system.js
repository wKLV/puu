(function() {
  var TestComponent, f, puu,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  puu = require('../lib/puu');

  f = null;

  TestComponent = (function(_super) {
    __extends(TestComponent, _super);

    function TestComponent() {
      return TestComponent.__super__.constructor.apply(this, arguments);
    }

    TestComponent.prototype.name = "TestComponent";

    return TestComponent;

  })(puu.Component);

  TestComponent.render = function(component) {
    return f(component.data.data);
  };

  exports.component = TestComponent;

  exports.system = puu.System(TestComponent);

  exports.system.init = function(options) {
    return f = console.log;
  };

}).call(this);
