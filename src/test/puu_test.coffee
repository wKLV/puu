'use strict'

puu = require '../lib/puu.js'
component = null
component2 = null
entity1 = null
entity2 = null

describe 'puu', ()->
  describe 'require component and system', ->
    it '...', ->
      component = puu.requireSystem '../test/test_system'
      component2 = puu.requireSystem '../test/test2_system'
  describe 'create entities', ->
    it 'create', ->
      entity1 = puu.Entity()
      entity2 = puu.Entity()
    it 'add components', ->
      entity1.add new component(data: 5)
      entity1.add new component2(data: 10)
      entity2.add new component(data: 3)
      entity2.add new component2(data: 6)
  describe 'render puu', ->
    it 'init', ->
      puu.init_all()
    it '...', ->
      puu.render_all()

