puu = require '../lib/puu'
f = null

class TestComponent extends puu.Component
  name: "TestComponent"
TestComponent.render = (component)->
  f component.data.data

exports.component = TestComponent
exports.system = puu.System(TestComponent)
exports.system.init = (options)->
  f = console.log
