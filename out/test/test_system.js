(function() {
  var TestComponent, puu,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  puu = require('../lib/puu');

  TestComponent = (function(_super) {
    __extends(TestComponent, _super);

    function TestComponent() {
      return TestComponent.__super__.constructor.apply(this, arguments);
    }

    TestComponent.prototype.name = "TestComponent";

    return TestComponent;

  })(puu.Component);

  TestComponent.render = function(component) {
    return console.log(component.data.data);
  };

  exports.component = TestComponent;

  exports.system = puu.System(TestComponent);

}).call(this);
