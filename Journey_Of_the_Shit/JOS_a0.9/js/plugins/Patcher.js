/*:
 * @target MV MZ
 */

self.Patcher = (() => {
  "use strict";

  const dev = false;
  const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);

  function patch(target, key, { prefix, postfix }) {
    const original = target[key];
    if (typeof original !== "function") {
      throw new TypeError(`Patch failed: ${String(key)} is missing`);
    }
    const own = hasOwn(target, key);
    const proto = own ? null : Object.getPrototypeOf(target);
    const patched = target[key] = function (...args) {
      const ctx = { args, result: undefined };
      if (prefix && prefix.call(this, ctx)) {
        return ctx.result;
      }
      ctx.result = (proto ? proto[key] : original).apply(this, args);
      if (postfix) {
        postfix.call(this, ctx);
      }
      return ctx.result;
    };
    if (own) {
      replaceGlobals:
      for (
        const path of [
          // Drill_MenuBackground
          ["_drill_MBa_terminate"],
          // Drill_SceneMain
          ["_drill_SMa_statusWindowRefresh"],
          // LiuYue_AutoSave
          ["Zzy", "ASF", "Scene_Menu_terminate"],
          // MOG_MenuParticles
          ["_alias_mog_mpart_scmb_terminate"],
        ]
      ) {
        const depth = path.length - 1;
        let obj = self;
        for (let i = 0; i < depth; i++) {
          obj = obj[path[i]];
          if (obj === null || typeof obj !== "object") {
            continue replaceGlobals;
          }
        }
        const name = path[depth];
        if (obj[name] === original) {
          console.debug(`Replacing global ${path.join(".")}`);
          obj[name] = patched;
        }
      }
      if (dev) {
        for (const key of Object.keys(self)) {
          if (key === "chrome") {
            continue;
          }
          const desc = Object.getOwnPropertyDescriptor(self, key);
          if (!hasOwn(desc, "value") || !desc.writable || desc.configurable) {
            continue;
          }
          const path = [key];
          const seen = new Set();
          (function walk(obj) {
            if (obj === original) {
              console.warn(
                `Found unpatched global ${path.join(".")}; stuff may break`,
              );
              return;
            }
            if (
              obj === null || typeof obj !== "object" ||
              ArrayBuffer.isView(obj) || seen.has(obj)
            ) {
              return;
            }
            seen.add(obj);
            for (const key of Object.keys(obj)) {
              const desc = Object.getOwnPropertyDescriptor(obj, key);
              if (!hasOwn(desc, "value") || !desc.writable) {
                continue;
              }
              path.push(key);
              walk(desc.value);
              path.pop();
            }
          })(desc.value);
        }
      }
    }
  }

  const foundClassCallbacks = new Map();

  function findClass(Base, derivedName, callback) {
    const original = Base.prototype.initialize;
    if (typeof original !== "function") {
      throw new TypeError("Patch failed: initialize is missing");
    }
    let callbacks = foundClassCallbacks.get(Base);
    if (callbacks === undefined) {
      foundClassCallbacks.set(Base, callbacks = new Map());
      Base.prototype.initialize = function () {
        // deno-lint-ignore no-this-alias
        for (let o = this; o !== Base.prototype; o = Object.getPrototypeOf(o)) {
          const Derived = o.constructor;
          const derivedName = Derived.name;
          const callback = callbacks.get(derivedName);
          if (callback) {
            callbacks.delete(derivedName);
            if (callbacks.size === 0) {
              foundClassCallbacks.delete(Base);
              Base.prototype.initialize = original;
            }
            callback(Derived);
          }
        }
        return original.apply(this, arguments);
      };
    }
    callbacks.set(derivedName, callback);
  }

  return { patch, findClass };
})();
