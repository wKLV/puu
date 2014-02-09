puu = require '../lib/puu'

class TestComponent extends puu.Component
  name: "TestComponent"
TestComponent.render = (component)->
  console.log component.data.data

exports.component = TestComponent
exports.system = puu.System(TestComponent)
