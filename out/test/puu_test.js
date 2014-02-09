(function() {
  'use strict';
  var component, component2, entity1, entity2, puu;

  puu = require('../lib/puu.js');

  component = null;

  component2 = null;

  entity1 = null;

  entity2 = null;

  describe('puu', function() {
    describe('require component and system', function() {
      return it('...', function() {
        component = puu.requireSystem('../test/test_system');
        return component2 = puu.requireSystem('../test/test2_system');
      });
    });
    describe('create entities', function() {
      it('create', function() {
        entity1 = puu.Entity();
        return entity2 = puu.Entity();
      });
      return it('add components', function() {
        entity1.add(new component({
          data: 5
        }));
        entity1.add(new component2({
          data: 10
        }));
        entity2.add(new component({
          data: 3
        }));
        return entity2.add(new component2({
          data: 6
        }));
      });
    });
    return describe('render puu', function() {
      it('init', function() {
        return puu.init_all();
      });
      return it('...', function() {
        return puu.render_all();
      });
    });
  });

}).call(this);
