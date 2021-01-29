'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  props: ["darkMode", "menuTitle"],
  data: function data() {
    return {
      isOpen: false,
      isDarkMode: false
    };
  },
  methods: {
    openClose: function openClose() {
      var _this = this;

      var closeListerner = function closeListerner(e) {
        // Check if user clicks outside of the menu
        // true — close the menu and remove EventListener
        if (_this.catchOutsideClick(e, _this.$refs.menu)) window.removeEventListener('click', closeListerner), _this.isOpen = false;
      }; // Add event listener to watch clicks outside the menu


      window.addEventListener('click', closeListerner); // Close if open and vice versa

      this.isOpen = !this.isOpen;
    },
    catchOutsideClick: function catchOutsideClick(event, dropdown) {
      // When user clicks menu — do nothing
      if (dropdown == event.target) return false; // When user clicks outside of the menu — close the menu

      if (this.isOpen && dropdown != event.target) return true;
    }
  },
  watch: {
    darkMode: function darkMode(val) {
      // Force dark mode
      if (!val) this.isDarkMode = false; // Force dark mode

      if (val == 'force') this.isDarkMode = true; // Switch dark / light mode automatically according to what user prefer

      if (val == 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) this.isDarkMode = true;
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "dropDownMenuWrapper",
    class: {
      'dropDownMenuWrapper--dark': _vm.isDarkMode,
      'dropDownMenuWrapper--noTitle': !_vm.menuTitle
    }
  }, [_vm._ssrNode("<button" + _vm._ssrClass("dropDownMenuButton", {
    'dropDownMenuButton--dark': _vm.isDarkMode
  }) + " data-v-73207d26>" + _vm._ssrEscape("\n    " + _vm._s(_vm.menuTitle) + "\n  ") + "</button> <div" + _vm._ssrClass("iconWrapper", {
    'iconWrapper--noTitle': !_vm.menuTitle
  }) + " data-v-73207d26><div" + _vm._ssrClass("bar1", {
    'bar1--open': _vm.isOpen,
    'bar1--dark': _vm.isDarkMode
  }) + " data-v-73207d26></div> <div" + _vm._ssrClass("bar2", {
    'bar2--open': _vm.isOpen,
    'bar2--dark': _vm.isDarkMode
  }) + " data-v-73207d26></div> <div" + _vm._ssrClass("bar3", {
    'bar3--open': _vm.isOpen,
    'bar3--dark': _vm.isDarkMode
  }) + " data-v-73207d26></div></div> "), _vm.isOpen ? _vm._ssrNode("<section" + _vm._ssrClass("dropdownMenu", {
    'dropdownMenu--dark': _vm.isDarkMode
  }) + " data-v-73207d26>", "</section>", [_vm._ssrNode("<div" + _vm._ssrClass("menuArrow", {
    'menuArrow--dark': _vm.isDarkMode
  }) + " data-v-73207d26></div> "), _vm._t("default")], 2) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-73207d26_0", {
    source: ".dropDownMenuWrapper[data-v-73207d26]{position:relative;width:500px;height:80px;border-radius:8px;background:#fff;border:1px solid #eee;box-shadow:10px 10px 0 0 rgba(0,0,0,.03);-webkit-tap-highlight-color:transparent}.dropDownMenuWrapper *[data-v-73207d26]{box-sizing:border-box;text-align:left}.dropDownMenuWrapper .dropDownMenuButton[data-v-73207d26]{border:none;font-size:inherit;background:0 0;outline:0;border-radius:4px;position:absolute;top:0;left:0;display:flex;align-items:center;padding:0 70px 0 20px;margin:0;line-height:1;width:100%;height:100%;z-index:2;cursor:pointer}.dropDownMenuWrapper .dropDownMenuButton--dark[data-v-73207d26]{color:#eee}.dropDownMenuWrapper .iconWrapper[data-v-73207d26]{width:25px;height:25px;position:absolute;right:30px;top:50%;transform:translate(0,-50%);z-index:1}.dropDownMenuWrapper .iconWrapper .bar1[data-v-73207d26]{width:100%;max-width:28px;height:3px;background:#00f;position:absolute;top:50%;left:50%;border-radius:9999px;transform:translate(-50%,calc(-50% - 8px));transition:all .2s ease}.dropDownMenuWrapper .iconWrapper .bar1--dark[data-v-73207d26]{background:#eee}.dropDownMenuWrapper .iconWrapper .bar1--open[data-v-73207d26]{transform:translate(-50%,-50%) rotate(45deg);margin-top:0;background:red}.dropDownMenuWrapper .iconWrapper .bar2[data-v-73207d26]{width:100%;max-width:28px;height:3px;background:#00f;position:absolute;top:50%;left:50%;border-radius:9999px;opacity:1;transform:translate(-50%,-50%);transition:all .2s ease}.dropDownMenuWrapper .iconWrapper .bar2--dark[data-v-73207d26]{background:#eee}.dropDownMenuWrapper .iconWrapper .bar2--open[data-v-73207d26]{opacity:0}.dropDownMenuWrapper .iconWrapper .bar3[data-v-73207d26]{width:100%;max-width:28px;height:3px;background:#00f;position:absolute;top:50%;left:50%;border-radius:9999px;transform:translate(-50%,calc(-50% + 8px));transition:all .2s ease}.dropDownMenuWrapper .iconWrapper .bar3--dark[data-v-73207d26]{background:#eee}.dropDownMenuWrapper .iconWrapper .bar3--open[data-v-73207d26]{top:50%;transform:translate(-50%,-50%) rotate(-45deg);background:red}.dropDownMenuWrapper .iconWrapper--noTitle[data-v-73207d26]{left:0;top:0;bottom:0;right:0;width:auto;height:auto;transform:none}.dropDownMenuWrapper .dropdownMenu[data-v-73207d26]{position:absolute;top:100%;width:100%;min-width:300px;min-height:10px;border-radius:8px;border:1px solid #eee;box-shadow:10px 10px 0 0 rgba(0,0,0,.03);background:#fff;padding:10px 30px;animation:menu-data-v-73207d26 .3s ease forwards}.dropDownMenuWrapper .dropdownMenu .menuArrow[data-v-73207d26]{width:20px;height:20px;position:absolute;top:-10px;left:20px;border-left:1px solid #eee;border-top:1px solid #eee;background:#fff;transform:rotate(45deg);border-radius:4px 0 0 0}.dropDownMenuWrapper .dropdownMenu .menuArrow--dark[data-v-73207d26]{background:#333;border:none}.dropDownMenuWrapper .dropdownMenu .option[data-v-73207d26]{width:100%;border-bottom:1px solid #eee;padding:20px 0;cursor:pointer;position:relative;z-index:2}.dropDownMenuWrapper .dropdownMenu .option[data-v-73207d26]:last-child{border-bottom:0}.dropDownMenuWrapper .dropdownMenu .option *[data-v-73207d26]{color:inherit;text-decoration:none;background:0 0;border:0;padding:0;outline:0;cursor:pointer}.dropDownMenuWrapper .dropdownMenu .desc[data-v-73207d26]{opacity:.5;display:block;width:100%;font-size:14px;margin:3px 0 0 0;cursor:default}.dropDownMenuWrapper .dropdownMenu--dark[data-v-73207d26]{background:#333;border:none}.dropDownMenuWrapper .dropdownMenu--dark .option[data-v-73207d26]{border-bottom:1px solid #888}.dropDownMenuWrapper .dropdownMenu--dark *[data-v-73207d26]{color:#eee}@keyframes menu-data-v-73207d26{from{transform:translate3d(0,30px,0)}to{transform:translate3d(0,20px,0)}}.dropDownMenuWrapper--noTitle[data-v-73207d26]{padding:0;width:60px;height:60px}.dropDownMenuWrapper--dark[data-v-73207d26]{background:#333;border:none}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-73207d26";
/* module identifier */

var __vue_module_identifier__ = "data-v-73207d26";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component

var install = function installVueDropdownMenu(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueDropdownMenu', __vue_component__);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=__vue_component__;