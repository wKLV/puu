
/*

puu
https://github.com/wklv/puu

Copyright (c) 2014 KLV
Licensed under the MIT license.
 */

(function() {
  'use strict';
  var Component, Entity, System, entities, systems;

  System = function(component) {
    var that;
    return that = {
      component: component,
      render_all: function(components) {
        var comp, _i, _len;
        for (_i = 0, _len = components.length; _i < _len; _i++) {
          comp = components[_i];
          that.component.render(comp);
        }
      },
      render_component: function(component) {
        return that.component.render(component);
      }
    };
  };

  Component = (function() {
    function Component(data) {
      this.data = data;
    }

    return Component;

  })();

  Entity = (function() {
    function Entity() {
      this.components = {
        no_comp: false
      };
    }

    Entity.prototype.add = function(component) {
      if (component instanceof Component) {
        this.components[component.name] = component;
        return component.parent = this;
      } else {
        throw new Error("not a component");
      }
    };

    Entity.prototype.getComponent = function(component) {
      return this.components[component];
    };

    return Entity;

  })();

  systems = [];

  entities = [];

  exports.Component = Component;

  exports.System = System;

  exports.Entity = function() {
    var entity;
    entity = new Entity();
    entities.push(entity);
    return entity;
  };

  exports.render_all = function() {
    var components, sys, _i, _len;
    for (_i = 0, _len = systems.length; _i < _len; _i++) {
      sys = systems[_i];
      components = (function() {
        var ent, _j, _len1, _results;
        _results = [];
        for (_j = 0, _len1 = entities.length; _j < _len1; _j++) {
          ent = entities[_j];
          _results.push(ent.getComponent(sys.component.name));
        }
        return _results;
      })();
      sys.render_all(components);
    }
    return true;
  };

  exports.requireSystem = function(lib, init) {
    var sys;
    if (init == null) {
      init = false;
    }
    lib = require(lib);
    sys = lib.system;
    if (init) {
      sys.init();
    }
    systems.push(sys);
    return lib.component;
  };

  exports.init_all = function() {
    var sys, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = systems.length; _i < _len; _i++) {
      sys = systems[_i];
      _results.push(sys.init());
    }
    return _results;
  };

}).call(this);
