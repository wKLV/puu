# puu [![Build Status](https://secure.travis-ci.org/wklv/puu.png?branch=master)](http://travis-ci.org/wklv/puu)

System and component patterns on node

## Getting Started
Install the module with: `npm install puu`

```javascript
var puu = require('puu'); // load puu
//loads the system and the component and returns the component
var componentClass = puu.requireSystem("route_to_system");
// Create an entity and add a new component of the class
var entity1 = puu.Entity().addComponent(new componentClass({parameters:"data"}));
puu.init_all(); // Init all systems
puu.render_all(); // Render all components of all systems
```

Create a system and component like
```coffeescript
puu = require 'puu'

class MyComponentClass extends puu.Component
  name: "Unique name"
  #Something else you want to add
MyComponentClass.render = (component) ->
  data = component.data #data that describes the instance of the component
  clever_function component, system, other_parameter
exports.Component = MyComponentClass

system = puu.System MyComponentClass
system.init = (options)->
  # Init what it requires

exports.System = system
```


## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 KLV. Licensed under the MIT license.
