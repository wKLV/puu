puu = require '../lib/puu'

class Test2Component extends puu.Component
  name: "Test2Component"
Test2Component.render = (component)->
  console.log component.data.data + "B"

exports.component = Test2Component
exports.system = puu.System(Test2Component)
