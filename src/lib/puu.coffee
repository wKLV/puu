###

puu
https://github.com/wklv/puu

Copyright (c) 2014 KLV "Cesar Navarro Estruch"
Licensed under the MIT license.

###

'use strict'

System = (component)->
  that =
    component: component
    render_all: (components) ->
      that.component.render comp for comp in components
      return
    render_component: (component)->
      that.component.render component

class Component
  constructor: (data)->
    @data = data

class Entity
  constructor: ->
    @components=
      no_comp: false
  add: (component) ->
    if component instanceof Component
      @components[component.name] = component
      component.parent = this
    else throw new Error "not a component"
  getComponent: (component) ->
    @components[component]
systems = []
entities = []

exports.Component = Component
exports.System = System
exports.Entity = ->
  entity = new Entity()
  entities.push entity
  entity
exports.render_all = ->
  for sys in systems
    components = (->ent.getComponent sys.component.name for ent in entities)()
    sys.render_all components
  true
exports.requireSystem = (lib, init = false)->
  lib = require lib
  sys = lib.system
  sys.init() if init
  systems.push sys
  lib.component
exports.init_all = ->
  sys.init() for sys in systems
