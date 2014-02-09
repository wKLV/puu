puu = require '../lib/puu'
f = null

class Test2Component extends puu.Component
  name: "Test2Component"
Test2Component.render = (component)->
  f component.data.data + "B"

exports.component = Test2Component
exports.system = puu.System(Test2Component)
exports.system.init = (options)->
  f = console.log
