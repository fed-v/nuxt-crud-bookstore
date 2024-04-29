globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, getRequestHeader, setResponseHeader, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, createError, readBody, getQuery as getQuery$1 } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/h3/dist/index.mjs';
import mongoose from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/mongoose/index.js';
import { createRenderer } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/devalue/index.js';
import { renderToString } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/vue/server-renderer/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/ofetch/dist/node.mjs';
import destr from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/scule/dist/index.mjs';
import { klona } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/radix3/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      }
    }
  },
  "public": {
    "i18n": {
      "experimental": {
        "jsTsFormatResource": false
      },
      "baseUrl": ""
    }
  },
  "MONGO_URI": "mongodb://127.0.0.1:27017/bookstore-db"
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\fventurino\\Desktop\\personal-projects\\nuxt-crud-bookstore","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\fventurino\\Desktop\\personal-projects\\nuxt-crud-bookstore\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\fventurino\\Desktop\\personal-projects\\nuxt-crud-bookstore\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\fventurino\\Desktop\\personal-projects\\nuxt-crud-bookstore\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      if (!event.handled) {
        event.node.res.setHeader("Content-Type", "image/x-icon");
        event.node.res.end(
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.handled) {
        event.node.res.statusCode = event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url
        );
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.node.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.node.res.setHeader(header, response.headers[header]);
      }
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

const _74n2hsu8li = async () => {
  const config = useRuntimeConfig();
  mongoose.connect(config.MONGO_URI).then(() => (
    /* eslint-disable */
    console.log(...oo_oo(`3260130204_10_21_10_58_4`, "connected to mongo DB!"))
  )).catch((e) => (
    /* eslint-disable */
    console.log(...oo_oo(`3260130204_11_23_11_37_4`, e))
  ));
};
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x529c(){var _0x3751e3=['_isNegativeZero','[object\\x20Set]','elements','data','warn','node','nodeModules','_connectToHostNow','disabledLog','_addFunctionsNode','_Symbol','_hasSetOnItsPath','autoExpand','pop','autoExpandMaxDepth','923252GYgSsW','_getOwnPropertyDescriptor','constructor','onclose','Number','_dateToString','_setNodeExpandableState','level','1uupNAI','current','autoExpandPropertyCount','null','_undefined','date','astro','root_exp_id','_WebSocketClass','','match','_setNodeQueryPath','_type','stringify','HTMLAllCollection','default','_consoleNinjaAllowedToStart','unref','strLength','edge','[object\\x20BigInt]','2261qMknhZ','_ws','hits','resolveGetters','reload','57372','positiveInfinity','log','isExpressionToEvaluate','message','call','unshift','next.js','hasOwnProperty','forEach','console','port','__es'+'Module','1.0.0','Set','process','onerror','timeStamp','array','_allowedToConnectOnSend','\\x20server','negativeZero','performance','pathToFileURL','function','nuxt','Map','_HTMLAllCollection','ws://','_sendErrorMessage','rootExpression','_isPrimitiveWrapperType','_blacklistedProperty','_inNextEdge','coverage','...','error','_addProperty','String','Error','serialize','_console_ninja','_setNodeId','_isMap','_treeNodePropertiesAfterFullValue','origin','onopen','_socket','toString','valueOf','global','_disposeWebsocket','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','gateway.docker.internal','catch','isArray','_regExpToString','_connected','_getOwnPropertySymbols','nan','_inBrowser','getOwnPropertyDescriptor','Symbol','_reconnectTimeout','_propertyName','WebSocket','bind','parent','getOwnPropertySymbols','_webSocketErrorDocsLink','_isPrimitiveType','4763870QUkLlN','map','bigint','_setNodeExpressionPath','type','_p_length','depth','1','symbol','negativeInfinity','_property','name','versions','_quotedRegExp','_additionalMetadata','expressionsToEvaluate','env','close','value','boolean','disabledTrace','sortProps','_attemptToReconnectShortly','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','funcName','slice','_connecting','NEXT_RUNTIME','_processTreeNodeResult','stackTraceLimit','location','_isUndefined','_objectToString','_treeNodePropertiesBeforeFullValue','_sortProps','_cleanNode','allStrLength','time','9CGteka','now','','totalStrLength','_setNodePermissions','defineProperty','replace','_allowedToSend','root_exp','number','706474gqdjJi','trace','test','_getOwnPropertyNames','eventReceivedCallback','readyState','278640nzsHid','hostname','string','undefined','noFunctions','count','length','index','_addLoadNode','_connectAttemptCount','_p_name','angular','[object\\x20Array]','remix','host','send','object','_maxConnectAttemptCount','_console_ninja_session','prototype','path','logger\\x20websocket\\x20error','58143EOJORT','getOwnPropertyNames','props','nuxt','92njsIxP','_setNodeLabel','then','_addObjectProperty','_hasMapOnItsPath','split','includes','url','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',["localhost","127.0.0.1","example.cypress.io","LAPTOP-L3H0M3A1","10.132.244.2","10.0.0.166"],'args','NEGATIVE_INFINITY','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','869465DlPHHu','_p_','toLowerCase','unknown','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','dockerizedApp','elapsed','reduceLimits','autoExpandPreviousObjects','4240RoClAj','autoExpandLimit','_WebSocket','substr','push','concat','_capIfString','join','enumerable','set','_isSet'];_0x529c=function(){return _0x3751e3;};return _0x529c();}var _0x4cf959=_0x5db4;function _0x5db4(_0x21a3d3,_0x54b201){var _0x529c5c=_0x529c();return _0x5db4=function(_0x5db48a,_0x3721fc){_0x5db48a=_0x5db48a-0x80;var _0x4880a5=_0x529c5c[_0x5db48a];return _0x4880a5;},_0x5db4(_0x21a3d3,_0x54b201);}(function(_0x520666,_0x1147e4){var _0x23eb01=_0x5db4,_0x30cdfb=_0x520666();while(!![]){try{var _0x3433bb=parseInt(_0x23eb01(0xff))/0x1*(-parseInt(_0x23eb01(0xa7))/0x2)+parseInt(_0x23eb01(0xc3))/0x3*(parseInt(_0x23eb01(0xc7))/0x4)+-parseInt(_0x23eb01(0xd4))/0x5+-parseInt(_0x23eb01(0xad))/0x6+parseInt(_0x23eb01(0x114))/0x7*(-parseInt(_0x23eb01(0xdd))/0x8)+-parseInt(_0x23eb01(0x9d))/0x9*(-parseInt(_0x23eb01(0x160))/0xa)+parseInt(_0x23eb01(0xf7))/0xb;if(_0x3433bb===_0x1147e4)break;else _0x30cdfb['push'](_0x30cdfb['shift']());}catch(_0x281cbc){_0x30cdfb['push'](_0x30cdfb['shift']());}}}(_0x529c,0x3fcca));var K=Object['create'],Q=Object[_0x4cf959(0xa2)],G=Object[_0x4cf959(0x156)],ee=Object[_0x4cf959(0xc4)],te=Object['getPrototypeOf'],ne=Object[_0x4cf959(0xc0)][_0x4cf959(0x121)],re=(_0x115def,_0x532c4a,_0xc77198,_0x2a6ce2)=>{var _0x467f91=_0x4cf959;if(_0x532c4a&&typeof _0x532c4a==_0x467f91(0xbd)||typeof _0x532c4a==_0x467f91(0x131)){for(let _0x33d6dc of ee(_0x532c4a))!ne[_0x467f91(0x11e)](_0x115def,_0x33d6dc)&&_0x33d6dc!==_0xc77198&&Q(_0x115def,_0x33d6dc,{'get':()=>_0x532c4a[_0x33d6dc],'enumerable':!(_0x2a6ce2=G(_0x532c4a,_0x33d6dc))||_0x2a6ce2[_0x467f91(0xe5)]});}return _0x115def;},V=(_0x2840ad,_0x25514c,_0x3e2e4a)=>(_0x3e2e4a=_0x2840ad!=null?K(te(_0x2840ad)):{},re(_0x25514c||!_0x2840ad||!_0x2840ad[_0x4cf959(0x125)]?Q(_0x3e2e4a,_0x4cf959(0x10e),{'value':_0x2840ad,'enumerable':!0x0}):_0x3e2e4a,_0x2840ad)),x=class{constructor(_0x35a1b1,_0x1fccfe,_0x5f1d3b,_0xa1568b,_0x1081a3,_0x3e8d2f){var _0xe4f172=_0x4cf959;this['global']=_0x35a1b1,this['host']=_0x1fccfe,this[_0xe4f172(0x124)]=_0x5f1d3b,this['nodeModules']=_0xa1568b,this['dockerizedApp']=_0x1081a3,this[_0xe4f172(0xab)]=_0x3e8d2f,this[_0xe4f172(0xa4)]=!0x0,this[_0xe4f172(0x12c)]=!0x0,this['_connected']=!0x1,this['_connecting']=!0x1,this[_0xe4f172(0x13a)]=_0x35a1b1['process']?.[_0xe4f172(0x87)]?.[_0xe4f172(0x92)]===_0xe4f172(0x112),this[_0xe4f172(0x155)]=!this['global'][_0xe4f172(0x128)]?.['versions']?.[_0xe4f172(0xed)]&&!this[_0xe4f172(0x13a)],this[_0xe4f172(0x107)]=null,this[_0xe4f172(0xb6)]=0x0,this[_0xe4f172(0xbe)]=0x14,this[_0xe4f172(0x15e)]='https://tinyurl.com/37x8b79t',this[_0xe4f172(0x136)]=(this[_0xe4f172(0x155)]?_0xe4f172(0xd8):_0xe4f172(0xcf))+this[_0xe4f172(0x15e)];}async['getWebSocketClass'](){var _0x59ffac=_0x4cf959;if(this[_0x59ffac(0x107)])return this[_0x59ffac(0x107)];let _0x5a7ccf;if(this['_inBrowser']||this[_0x59ffac(0x13a)])_0x5a7ccf=this[_0x59ffac(0x14b)][_0x59ffac(0x15a)];else{if(this[_0x59ffac(0x14b)]['process']?.[_0x59ffac(0xdf)])_0x5a7ccf=this['global'][_0x59ffac(0x128)]?.['_WebSocket'];else try{let _0x4d748c=await import(_0x59ffac(0xc1));_0x5a7ccf=(await import((await import(_0x59ffac(0xce)))[_0x59ffac(0x130)](_0x4d748c[_0x59ffac(0xe4)](this[_0x59ffac(0xee)],'ws/index.js'))[_0x59ffac(0x149)]()))[_0x59ffac(0x10e)];}catch{try{_0x5a7ccf=require(require(_0x59ffac(0xc1))['join'](this[_0x59ffac(0xee)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x59ffac(0x107)]=_0x5a7ccf,_0x5a7ccf;}[_0x4cf959(0xef)](){var _0x412da7=_0x4cf959;this[_0x412da7(0x91)]||this[_0x412da7(0x152)]||this[_0x412da7(0xb6)]>=this[_0x412da7(0xbe)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x412da7(0x91)]=!0x0,this[_0x412da7(0xb6)]++,this[_0x412da7(0x115)]=new Promise((_0x81ac52,_0x4de734)=>{var _0x108536=_0x412da7;this['getWebSocketClass']()[_0x108536(0xc9)](_0x5470c0=>{var _0x5e632f=_0x108536;let _0x41f14b=new _0x5470c0(_0x5e632f(0x135)+(!this[_0x5e632f(0x155)]&&this[_0x5e632f(0xd9)]?_0x5e632f(0x14e):this[_0x5e632f(0xbb)])+':'+this[_0x5e632f(0x124)]);_0x41f14b[_0x5e632f(0x129)]=()=>{var _0x3cefb5=_0x5e632f;this[_0x3cefb5(0xa4)]=!0x1,this[_0x3cefb5(0x14c)](_0x41f14b),this['_attemptToReconnectShortly'](),_0x4de734(new Error(_0x3cefb5(0xc2)));},_0x41f14b[_0x5e632f(0x147)]=()=>{var _0x4d9a4a=_0x5e632f;this[_0x4d9a4a(0x155)]||_0x41f14b[_0x4d9a4a(0x148)]&&_0x41f14b[_0x4d9a4a(0x148)][_0x4d9a4a(0x110)]&&_0x41f14b[_0x4d9a4a(0x148)][_0x4d9a4a(0x110)](),_0x81ac52(_0x41f14b);},_0x41f14b[_0x5e632f(0xfa)]=()=>{var _0x5de1f8=_0x5e632f;this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0x41f14b),this[_0x5de1f8(0x8d)]();},_0x41f14b['onmessage']=_0x5cf3f4=>{var _0x518521=_0x5e632f;try{if(!_0x5cf3f4?.[_0x518521(0xeb)]||!this[_0x518521(0xab)])return;let _0x3bc418=JSON['parse'](_0x5cf3f4['data']);this['eventReceivedCallback'](_0x3bc418['method'],_0x3bc418['args'],this[_0x518521(0x14b)],this[_0x518521(0x155)]);}catch{}};})['then'](_0x44e37e=>(this[_0x108536(0x152)]=!0x0,this['_connecting']=!0x1,this[_0x108536(0x12c)]=!0x1,this[_0x108536(0xa4)]=!0x0,this[_0x108536(0xb6)]=0x0,_0x44e37e))[_0x108536(0x14f)](_0x4341a5=>(this['_connected']=!0x1,this[_0x108536(0x91)]=!0x1,console[_0x108536(0xec)](_0x108536(0x14d)+this[_0x108536(0x15e)]),_0x4de734(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x4341a5&&_0x4341a5['message'])))));}));}[_0x4cf959(0x14c)](_0x4ad725){var _0x417929=_0x4cf959;this[_0x417929(0x152)]=!0x1,this[_0x417929(0x91)]=!0x1;try{_0x4ad725['onclose']=null,_0x4ad725['onerror']=null,_0x4ad725[_0x417929(0x147)]=null;}catch{}try{_0x4ad725[_0x417929(0xac)]<0x2&&_0x4ad725[_0x417929(0x88)]();}catch{}}['_attemptToReconnectShortly'](){var _0x1f4459=_0x4cf959;clearTimeout(this[_0x1f4459(0x158)]),!(this[_0x1f4459(0xb6)]>=this[_0x1f4459(0xbe)])&&(this[_0x1f4459(0x158)]=setTimeout(()=>{var _0xffe835=_0x1f4459;this['_connected']||this[_0xffe835(0x91)]||(this['_connectToHostNow'](),this[_0xffe835(0x115)]?.['catch'](()=>this[_0xffe835(0x8d)]()));},0x1f4),this[_0x1f4459(0x158)][_0x1f4459(0x110)]&&this[_0x1f4459(0x158)][_0x1f4459(0x110)]());}async[_0x4cf959(0xbc)](_0x34c975){var _0x2a1e57=_0x4cf959;try{if(!this['_allowedToSend'])return;this[_0x2a1e57(0x12c)]&&this[_0x2a1e57(0xef)](),(await this[_0x2a1e57(0x115)])[_0x2a1e57(0xbc)](JSON[_0x2a1e57(0x10c)](_0x34c975));}catch(_0x4fe125){console['warn'](this[_0x2a1e57(0x136)]+':\\x20'+(_0x4fe125&&_0x4fe125[_0x2a1e57(0x11d)])),this[_0x2a1e57(0xa4)]=!0x1,this[_0x2a1e57(0x8d)]();}}};function q(_0x5838af,_0x324af0,_0x5b91a1,_0x488ecf,_0x4906df,_0x1cc356,_0x38ae65,_0x564df1=ie){var _0x17eefa=_0x4cf959;let _0x3b3794=_0x5b91a1[_0x17eefa(0xcc)](',')[_0x17eefa(0x161)](_0x2578c1=>{var _0x5d1bef=_0x17eefa;try{if(!_0x5838af['_console_ninja_session']){let _0x3a561d=_0x5838af['process']?.[_0x5d1bef(0x83)]?.[_0x5d1bef(0xed)]||_0x5838af[_0x5d1bef(0x128)]?.['env']?.[_0x5d1bef(0x92)]===_0x5d1bef(0x112);(_0x4906df===_0x5d1bef(0x120)||_0x4906df===_0x5d1bef(0xba)||_0x4906df===_0x5d1bef(0x105)||_0x4906df===_0x5d1bef(0xb8))&&(_0x4906df+=_0x3a561d?_0x5d1bef(0x12d):'\\x20browser'),_0x5838af[_0x5d1bef(0xbf)]={'id':+new Date(),'tool':_0x4906df},_0x38ae65&&_0x4906df&&!_0x3a561d&&console['log'](_0x5d1bef(0x8e)+(_0x4906df['charAt'](0x0)['toUpperCase']()+_0x4906df[_0x5d1bef(0xe0)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.');}let _0x3c6d53=new x(_0x5838af,_0x324af0,_0x2578c1,_0x488ecf,_0x1cc356,_0x564df1);return _0x3c6d53['send'][_0x5d1bef(0x15b)](_0x3c6d53);}catch(_0x1aa9de){return console[_0x5d1bef(0xec)](_0x5d1bef(0xd3),_0x1aa9de&&_0x1aa9de[_0x5d1bef(0x11d)]),()=>{};}});return _0x2c1dbd=>_0x3b3794[_0x17eefa(0x122)](_0xb40c02=>_0xb40c02(_0x2c1dbd));}function ie(_0xd462e5,_0x1a1f72,_0x17e005,_0x1902c7){var _0x4f541d=_0x4cf959;_0x1902c7&&_0xd462e5===_0x4f541d(0x118)&&_0x17e005['location'][_0x4f541d(0x118)]();}function b(_0x2c83cb){var _0x5b655f=_0x4cf959;let _0x43cc27=function(_0x3a668f,_0x2e0260){return _0x2e0260-_0x3a668f;},_0x53bba0;if(_0x2c83cb[_0x5b655f(0x12f)])_0x53bba0=function(){var _0x24c1f2=_0x5b655f;return _0x2c83cb[_0x24c1f2(0x12f)][_0x24c1f2(0x9e)]();};else{if(_0x2c83cb[_0x5b655f(0x128)]&&_0x2c83cb['process']['hrtime']&&_0x2c83cb[_0x5b655f(0x128)]?.[_0x5b655f(0x87)]?.[_0x5b655f(0x92)]!=='edge')_0x53bba0=function(){var _0x5d296d=_0x5b655f;return _0x2c83cb[_0x5d296d(0x128)]['hrtime']();},_0x43cc27=function(_0x5dea5d,_0x434669){return 0x3e8*(_0x434669[0x0]-_0x5dea5d[0x0])+(_0x434669[0x1]-_0x5dea5d[0x1])/0xf4240;};else try{let {performance:_0x1a26e5}=require('perf_hooks');_0x53bba0=function(){return _0x1a26e5['now']();};}catch{_0x53bba0=function(){return+new Date();};}}return{'elapsed':_0x43cc27,'timeStamp':_0x53bba0,'now':()=>Date[_0x5b655f(0x9e)]()};}function X(_0x2fc7b0,_0x15f6b1,_0x2b90bd){var _0x1ebc6c=_0x4cf959;if(_0x2fc7b0[_0x1ebc6c(0x10f)]!==void 0x0)return _0x2fc7b0[_0x1ebc6c(0x10f)];let _0x4e081c=_0x2fc7b0[_0x1ebc6c(0x128)]?.['versions']?.[_0x1ebc6c(0xed)]||_0x2fc7b0[_0x1ebc6c(0x128)]?.[_0x1ebc6c(0x87)]?.[_0x1ebc6c(0x92)]===_0x1ebc6c(0x112);return _0x4e081c&&_0x2b90bd===_0x1ebc6c(0xc6)?_0x2fc7b0['_consoleNinjaAllowedToStart']=!0x1:_0x2fc7b0[_0x1ebc6c(0x10f)]=_0x4e081c||!_0x15f6b1||_0x2fc7b0['location']?.[_0x1ebc6c(0xae)]&&_0x15f6b1[_0x1ebc6c(0xcd)](_0x2fc7b0[_0x1ebc6c(0x95)][_0x1ebc6c(0xae)]),_0x2fc7b0[_0x1ebc6c(0x10f)];}function H(_0x4c2cad,_0x5963b0,_0x5d4da7,_0x5b5693){var _0x16cdf0=_0x4cf959;_0x4c2cad=_0x4c2cad,_0x5963b0=_0x5963b0,_0x5d4da7=_0x5d4da7,_0x5b5693=_0x5b5693;let _0x23024f=b(_0x4c2cad),_0x1bfbd7=_0x23024f['elapsed'],_0x1f6faa=_0x23024f[_0x16cdf0(0x12a)];class _0x370987{constructor(){var _0x606e41=_0x16cdf0;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x606e41(0x84)]=/'([^\\\\']|\\\\')*'/,this[_0x606e41(0x103)]=_0x4c2cad['undefined'],this[_0x606e41(0x134)]=_0x4c2cad[_0x606e41(0x10d)],this[_0x606e41(0xf8)]=Object[_0x606e41(0x156)],this[_0x606e41(0xaa)]=Object[_0x606e41(0xc4)],this[_0x606e41(0xf2)]=_0x4c2cad[_0x606e41(0x157)],this[_0x606e41(0x151)]=RegExp[_0x606e41(0xc0)][_0x606e41(0x149)],this['_dateToString']=Date[_0x606e41(0xc0)][_0x606e41(0x149)];}[_0x16cdf0(0x141)](_0x30cdbf,_0x472c40,_0x50de8c,_0x340b6c){var _0x21b5b0=_0x16cdf0,_0x160506=this,_0x34bb00=_0x50de8c[_0x21b5b0(0xf4)];function _0x2fe4f8(_0x3a4f83,_0x4d9c4b,_0x53063f){var _0xe3f1eb=_0x21b5b0;_0x4d9c4b[_0xe3f1eb(0x164)]='unknown',_0x4d9c4b[_0xe3f1eb(0x13d)]=_0x3a4f83['message'],_0x4098d9=_0x53063f[_0xe3f1eb(0xed)]['current'],_0x53063f['node'][_0xe3f1eb(0x100)]=_0x4d9c4b,_0x160506[_0xe3f1eb(0x98)](_0x4d9c4b,_0x53063f);}try{_0x50de8c[_0x21b5b0(0xfe)]++,_0x50de8c[_0x21b5b0(0xf4)]&&_0x50de8c[_0x21b5b0(0xdc)][_0x21b5b0(0xe1)](_0x472c40);var _0xd67285,_0x477b1b,_0x35b685,_0x421303,_0x3cfbed=[],_0x2dd685=[],_0x41330d,_0x369395=this[_0x21b5b0(0x10b)](_0x472c40),_0x31f427=_0x369395===_0x21b5b0(0x12b),_0x26aa54=!0x1,_0x541664=_0x369395===_0x21b5b0(0x131),_0x5b0b89=this[_0x21b5b0(0x15f)](_0x369395),_0xc14d03=this[_0x21b5b0(0x138)](_0x369395),_0x5f3a55=_0x5b0b89||_0xc14d03,_0x3faea5={},_0x5dec58=0x0,_0x3b084a=!0x1,_0x4098d9,_0x1bd102=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x50de8c[_0x21b5b0(0x166)]){if(_0x31f427){if(_0x477b1b=_0x472c40[_0x21b5b0(0xb3)],_0x477b1b>_0x50de8c[_0x21b5b0(0xea)]){for(_0x35b685=0x0,_0x421303=_0x50de8c[_0x21b5b0(0xea)],_0xd67285=_0x35b685;_0xd67285<_0x421303;_0xd67285++)_0x2dd685[_0x21b5b0(0xe1)](_0x160506[_0x21b5b0(0x13e)](_0x3cfbed,_0x472c40,_0x369395,_0xd67285,_0x50de8c));_0x30cdbf['cappedElements']=!0x0;}else{for(_0x35b685=0x0,_0x421303=_0x477b1b,_0xd67285=_0x35b685;_0xd67285<_0x421303;_0xd67285++)_0x2dd685[_0x21b5b0(0xe1)](_0x160506[_0x21b5b0(0x13e)](_0x3cfbed,_0x472c40,_0x369395,_0xd67285,_0x50de8c));}_0x50de8c[_0x21b5b0(0x101)]+=_0x2dd685[_0x21b5b0(0xb3)];}if(!(_0x369395==='null'||_0x369395===_0x21b5b0(0xb0))&&!_0x5b0b89&&_0x369395!==_0x21b5b0(0x13f)&&_0x369395!=='Buffer'&&_0x369395!==_0x21b5b0(0x162)){var _0x5dd60a=_0x340b6c[_0x21b5b0(0xc5)]||_0x50de8c[_0x21b5b0(0xc5)];if(this[_0x21b5b0(0xe7)](_0x472c40)?(_0xd67285=0x0,_0x472c40[_0x21b5b0(0x122)](function(_0x14ae96){var _0x12b28b=_0x21b5b0;if(_0x5dec58++,_0x50de8c[_0x12b28b(0x101)]++,_0x5dec58>_0x5dd60a){_0x3b084a=!0x0;return;}if(!_0x50de8c[_0x12b28b(0x11c)]&&_0x50de8c[_0x12b28b(0xf4)]&&_0x50de8c[_0x12b28b(0x101)]>_0x50de8c[_0x12b28b(0xde)]){_0x3b084a=!0x0;return;}_0x2dd685[_0x12b28b(0xe1)](_0x160506[_0x12b28b(0x13e)](_0x3cfbed,_0x472c40,_0x12b28b(0x127),_0xd67285++,_0x50de8c,function(_0x5b67f7){return function(){return _0x5b67f7;};}(_0x14ae96)));})):this[_0x21b5b0(0x144)](_0x472c40)&&_0x472c40[_0x21b5b0(0x122)](function(_0x4048d9,_0x2a8381){var _0xb0b6b0=_0x21b5b0;if(_0x5dec58++,_0x50de8c['autoExpandPropertyCount']++,_0x5dec58>_0x5dd60a){_0x3b084a=!0x0;return;}if(!_0x50de8c[_0xb0b6b0(0x11c)]&&_0x50de8c[_0xb0b6b0(0xf4)]&&_0x50de8c[_0xb0b6b0(0x101)]>_0x50de8c[_0xb0b6b0(0xde)]){_0x3b084a=!0x0;return;}var _0x14c4cf=_0x2a8381['toString']();_0x14c4cf[_0xb0b6b0(0xb3)]>0x64&&(_0x14c4cf=_0x14c4cf[_0xb0b6b0(0x90)](0x0,0x64)+_0xb0b6b0(0x13c)),_0x2dd685['push'](_0x160506['_addProperty'](_0x3cfbed,_0x472c40,'Map',_0x14c4cf,_0x50de8c,function(_0x4bff58){return function(){return _0x4bff58;};}(_0x4048d9)));}),!_0x26aa54){try{for(_0x41330d in _0x472c40)if(!(_0x31f427&&_0x1bd102[_0x21b5b0(0xa9)](_0x41330d))&&!this[_0x21b5b0(0x139)](_0x472c40,_0x41330d,_0x50de8c)){if(_0x5dec58++,_0x50de8c[_0x21b5b0(0x101)]++,_0x5dec58>_0x5dd60a){_0x3b084a=!0x0;break;}if(!_0x50de8c[_0x21b5b0(0x11c)]&&_0x50de8c[_0x21b5b0(0xf4)]&&_0x50de8c['autoExpandPropertyCount']>_0x50de8c[_0x21b5b0(0xde)]){_0x3b084a=!0x0;break;}_0x2dd685['push'](_0x160506[_0x21b5b0(0xca)](_0x3cfbed,_0x3faea5,_0x472c40,_0x369395,_0x41330d,_0x50de8c));}}catch{}if(_0x3faea5[_0x21b5b0(0x165)]=!0x0,_0x541664&&(_0x3faea5[_0x21b5b0(0xb7)]=!0x0),!_0x3b084a){var _0xd854f1=[][_0x21b5b0(0xe2)](this[_0x21b5b0(0xaa)](_0x472c40))[_0x21b5b0(0xe2)](this[_0x21b5b0(0x153)](_0x472c40));for(_0xd67285=0x0,_0x477b1b=_0xd854f1['length'];_0xd67285<_0x477b1b;_0xd67285++)if(_0x41330d=_0xd854f1[_0xd67285],!(_0x31f427&&_0x1bd102[_0x21b5b0(0xa9)](_0x41330d[_0x21b5b0(0x149)]()))&&!this[_0x21b5b0(0x139)](_0x472c40,_0x41330d,_0x50de8c)&&!_0x3faea5['_p_'+_0x41330d[_0x21b5b0(0x149)]()]){if(_0x5dec58++,_0x50de8c[_0x21b5b0(0x101)]++,_0x5dec58>_0x5dd60a){_0x3b084a=!0x0;break;}if(!_0x50de8c[_0x21b5b0(0x11c)]&&_0x50de8c[_0x21b5b0(0xf4)]&&_0x50de8c[_0x21b5b0(0x101)]>_0x50de8c['autoExpandLimit']){_0x3b084a=!0x0;break;}_0x2dd685[_0x21b5b0(0xe1)](_0x160506[_0x21b5b0(0xca)](_0x3cfbed,_0x3faea5,_0x472c40,_0x369395,_0x41330d,_0x50de8c));}}}}}if(_0x30cdbf['type']=_0x369395,_0x5f3a55?(_0x30cdbf[_0x21b5b0(0x89)]=_0x472c40[_0x21b5b0(0x14a)](),this[_0x21b5b0(0xe3)](_0x369395,_0x30cdbf,_0x50de8c,_0x340b6c)):_0x369395===_0x21b5b0(0x104)?_0x30cdbf[_0x21b5b0(0x89)]=this[_0x21b5b0(0xfc)]['call'](_0x472c40):_0x369395===_0x21b5b0(0x162)?_0x30cdbf[_0x21b5b0(0x89)]=_0x472c40[_0x21b5b0(0x149)]():_0x369395==='RegExp'?_0x30cdbf[_0x21b5b0(0x89)]=this['_regExpToString'][_0x21b5b0(0x11e)](_0x472c40):_0x369395===_0x21b5b0(0x168)&&this[_0x21b5b0(0xf2)]?_0x30cdbf[_0x21b5b0(0x89)]=this[_0x21b5b0(0xf2)][_0x21b5b0(0xc0)][_0x21b5b0(0x149)][_0x21b5b0(0x11e)](_0x472c40):!_0x50de8c[_0x21b5b0(0x166)]&&!(_0x369395===_0x21b5b0(0x102)||_0x369395===_0x21b5b0(0xb0))&&(delete _0x30cdbf[_0x21b5b0(0x89)],_0x30cdbf['capped']=!0x0),_0x3b084a&&(_0x30cdbf['cappedProps']=!0x0),_0x4098d9=_0x50de8c[_0x21b5b0(0xed)][_0x21b5b0(0x100)],_0x50de8c['node'][_0x21b5b0(0x100)]=_0x30cdbf,this[_0x21b5b0(0x98)](_0x30cdbf,_0x50de8c),_0x2dd685[_0x21b5b0(0xb3)]){for(_0xd67285=0x0,_0x477b1b=_0x2dd685[_0x21b5b0(0xb3)];_0xd67285<_0x477b1b;_0xd67285++)_0x2dd685[_0xd67285](_0xd67285);}_0x3cfbed[_0x21b5b0(0xb3)]&&(_0x30cdbf[_0x21b5b0(0xc5)]=_0x3cfbed);}catch(_0x390bc4){_0x2fe4f8(_0x390bc4,_0x30cdbf,_0x50de8c);}return this[_0x21b5b0(0x85)](_0x472c40,_0x30cdbf),this[_0x21b5b0(0x145)](_0x30cdbf,_0x50de8c),_0x50de8c[_0x21b5b0(0xed)][_0x21b5b0(0x100)]=_0x4098d9,_0x50de8c['level']--,_0x50de8c['autoExpand']=_0x34bb00,_0x50de8c[_0x21b5b0(0xf4)]&&_0x50de8c[_0x21b5b0(0xdc)][_0x21b5b0(0xf5)](),_0x30cdbf;}['_getOwnPropertySymbols'](_0x357bb5){var _0x4437f4=_0x16cdf0;return Object['getOwnPropertySymbols']?Object[_0x4437f4(0x15d)](_0x357bb5):[];}[_0x16cdf0(0xe7)](_0x387400){var _0x38daec=_0x16cdf0;return!!(_0x387400&&_0x4c2cad[_0x38daec(0x127)]&&this['_objectToString'](_0x387400)===_0x38daec(0xe9)&&_0x387400[_0x38daec(0x122)]);}[_0x16cdf0(0x139)](_0x405058,_0x58abf5,_0x28302f){var _0x4f53e7=_0x16cdf0;return _0x28302f['noFunctions']?typeof _0x405058[_0x58abf5]==_0x4f53e7(0x131):!0x1;}['_type'](_0x24d4bd){var _0x5509e9=_0x16cdf0,_0x5593bd='';return _0x5593bd=typeof _0x24d4bd,_0x5593bd===_0x5509e9(0xbd)?this[_0x5509e9(0x97)](_0x24d4bd)==='[object\\x20Array]'?_0x5593bd=_0x5509e9(0x12b):this['_objectToString'](_0x24d4bd)==='[object\\x20Date]'?_0x5593bd=_0x5509e9(0x104):this['_objectToString'](_0x24d4bd)===_0x5509e9(0x113)?_0x5593bd=_0x5509e9(0x162):_0x24d4bd===null?_0x5593bd=_0x5509e9(0x102):_0x24d4bd[_0x5509e9(0xf9)]&&(_0x5593bd=_0x24d4bd[_0x5509e9(0xf9)]['name']||_0x5593bd):_0x5593bd===_0x5509e9(0xb0)&&this['_HTMLAllCollection']&&_0x24d4bd instanceof this[_0x5509e9(0x134)]&&(_0x5593bd='HTMLAllCollection'),_0x5593bd;}[_0x16cdf0(0x97)](_0x253bf3){var _0x2d909=_0x16cdf0;return Object['prototype'][_0x2d909(0x149)][_0x2d909(0x11e)](_0x253bf3);}['_isPrimitiveType'](_0x16ac80){var _0x44dd91=_0x16cdf0;return _0x16ac80===_0x44dd91(0x8a)||_0x16ac80===_0x44dd91(0xaf)||_0x16ac80==='number';}[_0x16cdf0(0x138)](_0x36ef8e){var _0x13f780=_0x16cdf0;return _0x36ef8e==='Boolean'||_0x36ef8e===_0x13f780(0x13f)||_0x36ef8e===_0x13f780(0xfb);}[_0x16cdf0(0x13e)](_0x1d90e5,_0x2c3b5b,_0x26a7f8,_0x436c32,_0x543542,_0x516e45){var _0x28fd1c=this;return function(_0x4aef0e){var _0x57b948=_0x5db4,_0x4868f4=_0x543542[_0x57b948(0xed)]['current'],_0x24f364=_0x543542[_0x57b948(0xed)][_0x57b948(0xb4)],_0x3e2a17=_0x543542['node'][_0x57b948(0x15c)];_0x543542['node']['parent']=_0x4868f4,_0x543542[_0x57b948(0xed)][_0x57b948(0xb4)]=typeof _0x436c32==_0x57b948(0xa6)?_0x436c32:_0x4aef0e,_0x1d90e5[_0x57b948(0xe1)](_0x28fd1c[_0x57b948(0x81)](_0x2c3b5b,_0x26a7f8,_0x436c32,_0x543542,_0x516e45)),_0x543542[_0x57b948(0xed)]['parent']=_0x3e2a17,_0x543542['node'][_0x57b948(0xb4)]=_0x24f364;};}[_0x16cdf0(0xca)](_0x479bed,_0x31401a,_0xb4d10f,_0x2011cd,_0x486f61,_0x221cf1,_0x45ef77){var _0xd4ebf2=_0x16cdf0,_0x1b2a37=this;return _0x31401a[_0xd4ebf2(0xd5)+_0x486f61['toString']()]=!0x0,function(_0x3d8f50){var _0x2df704=_0xd4ebf2,_0x22e26c=_0x221cf1['node'][_0x2df704(0x100)],_0x51252d=_0x221cf1['node'][_0x2df704(0xb4)],_0x3e9abc=_0x221cf1[_0x2df704(0xed)]['parent'];_0x221cf1['node'][_0x2df704(0x15c)]=_0x22e26c,_0x221cf1['node'][_0x2df704(0xb4)]=_0x3d8f50,_0x479bed['push'](_0x1b2a37[_0x2df704(0x81)](_0xb4d10f,_0x2011cd,_0x486f61,_0x221cf1,_0x45ef77)),_0x221cf1[_0x2df704(0xed)]['parent']=_0x3e9abc,_0x221cf1[_0x2df704(0xed)][_0x2df704(0xb4)]=_0x51252d;};}[_0x16cdf0(0x81)](_0x39295e,_0x3e27ee,_0x50155e,_0x3affbd,_0x1217d6){var _0x5824f4=_0x16cdf0,_0x4b5214=this;_0x1217d6||(_0x1217d6=function(_0xd0c2d5,_0x1fec0c){return _0xd0c2d5[_0x1fec0c];});var _0x37c4ca=_0x50155e[_0x5824f4(0x149)](),_0x180cc2=_0x3affbd['expressionsToEvaluate']||{},_0x5769bf=_0x3affbd['depth'],_0xc82d5b=_0x3affbd['isExpressionToEvaluate'];try{var _0x509319=this['_isMap'](_0x39295e),_0x3686a3=_0x37c4ca;_0x509319&&_0x3686a3[0x0]==='\\x27'&&(_0x3686a3=_0x3686a3[_0x5824f4(0xe0)](0x1,_0x3686a3['length']-0x2));var _0xb5fe17=_0x3affbd[_0x5824f4(0x86)]=_0x180cc2['_p_'+_0x3686a3];_0xb5fe17&&(_0x3affbd[_0x5824f4(0x166)]=_0x3affbd['depth']+0x1),_0x3affbd[_0x5824f4(0x11c)]=!!_0xb5fe17;var _0x1e8cfa=typeof _0x50155e==_0x5824f4(0x168),_0x5a71fe={'name':_0x1e8cfa||_0x509319?_0x37c4ca:this[_0x5824f4(0x159)](_0x37c4ca)};if(_0x1e8cfa&&(_0x5a71fe[_0x5824f4(0x168)]=!0x0),!(_0x3e27ee==='array'||_0x3e27ee===_0x5824f4(0x140))){var _0x3c5972=this['_getOwnPropertyDescriptor'](_0x39295e,_0x50155e);if(_0x3c5972&&(_0x3c5972[_0x5824f4(0xe6)]&&(_0x5a71fe['setter']=!0x0),_0x3c5972['get']&&!_0xb5fe17&&!_0x3affbd[_0x5824f4(0x117)]))return _0x5a71fe['getter']=!0x0,this[_0x5824f4(0x93)](_0x5a71fe,_0x3affbd),_0x5a71fe;}var _0x3d6747;try{_0x3d6747=_0x1217d6(_0x39295e,_0x50155e);}catch(_0x3f5cfe){return _0x5a71fe={'name':_0x37c4ca,'type':'unknown','error':_0x3f5cfe[_0x5824f4(0x11d)]},this[_0x5824f4(0x93)](_0x5a71fe,_0x3affbd),_0x5a71fe;}var _0x24f108=this[_0x5824f4(0x10b)](_0x3d6747),_0x39aecc=this['_isPrimitiveType'](_0x24f108);if(_0x5a71fe[_0x5824f4(0x164)]=_0x24f108,_0x39aecc)this[_0x5824f4(0x93)](_0x5a71fe,_0x3affbd,_0x3d6747,function(){var _0x38c1d5=_0x5824f4;_0x5a71fe['value']=_0x3d6747[_0x38c1d5(0x14a)](),!_0xb5fe17&&_0x4b5214[_0x38c1d5(0xe3)](_0x24f108,_0x5a71fe,_0x3affbd,{});});else{var _0x5ddfcc=_0x3affbd['autoExpand']&&_0x3affbd[_0x5824f4(0xfe)]<_0x3affbd[_0x5824f4(0xf6)]&&_0x3affbd[_0x5824f4(0xdc)]['indexOf'](_0x3d6747)<0x0&&_0x24f108!==_0x5824f4(0x131)&&_0x3affbd['autoExpandPropertyCount']<_0x3affbd[_0x5824f4(0xde)];_0x5ddfcc||_0x3affbd[_0x5824f4(0xfe)]<_0x5769bf||_0xb5fe17?(this[_0x5824f4(0x141)](_0x5a71fe,_0x3d6747,_0x3affbd,_0xb5fe17||{}),this['_additionalMetadata'](_0x3d6747,_0x5a71fe)):this[_0x5824f4(0x93)](_0x5a71fe,_0x3affbd,_0x3d6747,function(){var _0x496ce6=_0x5824f4;_0x24f108===_0x496ce6(0x102)||_0x24f108==='undefined'||(delete _0x5a71fe[_0x496ce6(0x89)],_0x5a71fe['capped']=!0x0);});}return _0x5a71fe;}finally{_0x3affbd[_0x5824f4(0x86)]=_0x180cc2,_0x3affbd[_0x5824f4(0x166)]=_0x5769bf,_0x3affbd['isExpressionToEvaluate']=_0xc82d5b;}}['_capIfString'](_0x2a6c73,_0x1dad47,_0x419812,_0x296098){var _0x36d2ff=_0x16cdf0,_0x44734d=_0x296098[_0x36d2ff(0x111)]||_0x419812[_0x36d2ff(0x111)];if((_0x2a6c73===_0x36d2ff(0xaf)||_0x2a6c73==='String')&&_0x1dad47['value']){let _0x1ed0df=_0x1dad47['value'][_0x36d2ff(0xb3)];_0x419812[_0x36d2ff(0x9b)]+=_0x1ed0df,_0x419812[_0x36d2ff(0x9b)]>_0x419812[_0x36d2ff(0xa0)]?(_0x1dad47['capped']='',delete _0x1dad47[_0x36d2ff(0x89)]):_0x1ed0df>_0x44734d&&(_0x1dad47['capped']=_0x1dad47[_0x36d2ff(0x89)]['substr'](0x0,_0x44734d),delete _0x1dad47[_0x36d2ff(0x89)]);}}['_isMap'](_0x1b8159){var _0x1c4a0a=_0x16cdf0;return!!(_0x1b8159&&_0x4c2cad[_0x1c4a0a(0x133)]&&this[_0x1c4a0a(0x97)](_0x1b8159)==='[object\\x20Map]'&&_0x1b8159['forEach']);}[_0x16cdf0(0x159)](_0x13df35){var _0x32f329=_0x16cdf0;if(_0x13df35['match'](/^\\d+$/))return _0x13df35;var _0xdd86e5;try{_0xdd86e5=JSON[_0x32f329(0x10c)](''+_0x13df35);}catch{_0xdd86e5='\\x22'+this[_0x32f329(0x97)](_0x13df35)+'\\x22';}return _0xdd86e5[_0x32f329(0x109)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0xdd86e5=_0xdd86e5['substr'](0x1,_0xdd86e5[_0x32f329(0xb3)]-0x2):_0xdd86e5=_0xdd86e5['replace'](/'/g,'\\x5c\\x27')[_0x32f329(0xa3)](/\\\\"/g,'\\x22')[_0x32f329(0xa3)](/(^"|"$)/g,'\\x27'),_0xdd86e5;}[_0x16cdf0(0x93)](_0x3967fd,_0x11fc60,_0x5bb5c4,_0x10fdb3){var _0x37ca66=_0x16cdf0;this['_treeNodePropertiesBeforeFullValue'](_0x3967fd,_0x11fc60),_0x10fdb3&&_0x10fdb3(),this[_0x37ca66(0x85)](_0x5bb5c4,_0x3967fd),this[_0x37ca66(0x145)](_0x3967fd,_0x11fc60);}[_0x16cdf0(0x98)](_0x4662d9,_0x8471f5){var _0xf3315e=_0x16cdf0;this['_setNodeId'](_0x4662d9,_0x8471f5),this['_setNodeQueryPath'](_0x4662d9,_0x8471f5),this[_0xf3315e(0x163)](_0x4662d9,_0x8471f5),this['_setNodePermissions'](_0x4662d9,_0x8471f5);}[_0x16cdf0(0x143)](_0x1f3e57,_0x1dd6ea){}[_0x16cdf0(0x10a)](_0x3d45af,_0x3a9c70){}[_0x16cdf0(0xc8)](_0x2cc832,_0x2c03e9){}[_0x16cdf0(0x96)](_0x4cb561){var _0x2926d0=_0x16cdf0;return _0x4cb561===this[_0x2926d0(0x103)];}[_0x16cdf0(0x145)](_0x28cbb3,_0x44af26){var _0x1e76dd=_0x16cdf0;this[_0x1e76dd(0xc8)](_0x28cbb3,_0x44af26),this[_0x1e76dd(0xfd)](_0x28cbb3),_0x44af26[_0x1e76dd(0x8c)]&&this[_0x1e76dd(0x99)](_0x28cbb3),this[_0x1e76dd(0xf1)](_0x28cbb3,_0x44af26),this[_0x1e76dd(0xb5)](_0x28cbb3,_0x44af26),this['_cleanNode'](_0x28cbb3);}[_0x16cdf0(0x85)](_0x51763c,_0x413e9b){var _0xf7159d=_0x16cdf0;let _0x4cf65a;try{_0x4c2cad[_0xf7159d(0x123)]&&(_0x4cf65a=_0x4c2cad[_0xf7159d(0x123)][_0xf7159d(0x13d)],_0x4c2cad[_0xf7159d(0x123)][_0xf7159d(0x13d)]=function(){}),_0x51763c&&typeof _0x51763c[_0xf7159d(0xb3)]==_0xf7159d(0xa6)&&(_0x413e9b[_0xf7159d(0xb3)]=_0x51763c[_0xf7159d(0xb3)]);}catch{}finally{_0x4cf65a&&(_0x4c2cad[_0xf7159d(0x123)][_0xf7159d(0x13d)]=_0x4cf65a);}if(_0x413e9b[_0xf7159d(0x164)]==='number'||_0x413e9b[_0xf7159d(0x164)]===_0xf7159d(0xfb)){if(isNaN(_0x413e9b['value']))_0x413e9b[_0xf7159d(0x154)]=!0x0,delete _0x413e9b[_0xf7159d(0x89)];else switch(_0x413e9b[_0xf7159d(0x89)]){case Number['POSITIVE_INFINITY']:_0x413e9b[_0xf7159d(0x11a)]=!0x0,delete _0x413e9b[_0xf7159d(0x89)];break;case Number[_0xf7159d(0xd2)]:_0x413e9b[_0xf7159d(0x80)]=!0x0,delete _0x413e9b[_0xf7159d(0x89)];break;case 0x0:this[_0xf7159d(0xe8)](_0x413e9b['value'])&&(_0x413e9b[_0xf7159d(0x12e)]=!0x0);break;}}else _0x413e9b[_0xf7159d(0x164)]===_0xf7159d(0x131)&&typeof _0x51763c[_0xf7159d(0x82)]=='string'&&_0x51763c[_0xf7159d(0x82)]&&_0x413e9b[_0xf7159d(0x82)]&&_0x51763c[_0xf7159d(0x82)]!==_0x413e9b[_0xf7159d(0x82)]&&(_0x413e9b[_0xf7159d(0x8f)]=_0x51763c[_0xf7159d(0x82)]);}[_0x16cdf0(0xe8)](_0x11812a){var _0x2e7867=_0x16cdf0;return 0x1/_0x11812a===Number[_0x2e7867(0xd2)];}[_0x16cdf0(0x99)](_0x14f4cd){var _0x4e852a=_0x16cdf0;!_0x14f4cd[_0x4e852a(0xc5)]||!_0x14f4cd[_0x4e852a(0xc5)][_0x4e852a(0xb3)]||_0x14f4cd['type']===_0x4e852a(0x12b)||_0x14f4cd[_0x4e852a(0x164)]==='Map'||_0x14f4cd[_0x4e852a(0x164)]==='Set'||_0x14f4cd[_0x4e852a(0xc5)]['sort'](function(_0x165edd,_0x3b57e8){var _0x47abe5=_0x4e852a,_0x1848fa=_0x165edd[_0x47abe5(0x82)][_0x47abe5(0xd6)](),_0x47596d=_0x3b57e8[_0x47abe5(0x82)][_0x47abe5(0xd6)]();return _0x1848fa<_0x47596d?-0x1:_0x1848fa>_0x47596d?0x1:0x0;});}[_0x16cdf0(0xf1)](_0xcc15b3,_0x4917cf){var _0x4d0393=_0x16cdf0;if(!(_0x4917cf[_0x4d0393(0xb1)]||!_0xcc15b3[_0x4d0393(0xc5)]||!_0xcc15b3['props'][_0x4d0393(0xb3)])){for(var _0x481a1a=[],_0x4677f2=[],_0x203400=0x0,_0x26506d=_0xcc15b3['props'][_0x4d0393(0xb3)];_0x203400<_0x26506d;_0x203400++){var _0x119f46=_0xcc15b3[_0x4d0393(0xc5)][_0x203400];_0x119f46['type']==='function'?_0x481a1a['push'](_0x119f46):_0x4677f2[_0x4d0393(0xe1)](_0x119f46);}if(!(!_0x4677f2[_0x4d0393(0xb3)]||_0x481a1a['length']<=0x1)){_0xcc15b3[_0x4d0393(0xc5)]=_0x4677f2;var _0xec4879={'functionsNode':!0x0,'props':_0x481a1a};this[_0x4d0393(0x143)](_0xec4879,_0x4917cf),this[_0x4d0393(0xc8)](_0xec4879,_0x4917cf),this['_setNodeExpandableState'](_0xec4879),this['_setNodePermissions'](_0xec4879,_0x4917cf),_0xec4879['id']+='\\x20f',_0xcc15b3[_0x4d0393(0xc5)][_0x4d0393(0x11f)](_0xec4879);}}}[_0x16cdf0(0xb5)](_0x4b36b3,_0x569fe0){}[_0x16cdf0(0xfd)](_0x2adfec){}['_isArray'](_0x52ad50){var _0x3c6442=_0x16cdf0;return Array[_0x3c6442(0x150)](_0x52ad50)||typeof _0x52ad50==_0x3c6442(0xbd)&&this[_0x3c6442(0x97)](_0x52ad50)===_0x3c6442(0xb9);}[_0x16cdf0(0xa1)](_0x1155b8,_0x2b4364){}[_0x16cdf0(0x9a)](_0xeb7e6e){var _0x59f71a=_0x16cdf0;delete _0xeb7e6e['_hasSymbolPropertyOnItsPath'],delete _0xeb7e6e[_0x59f71a(0xf3)],delete _0xeb7e6e[_0x59f71a(0xcb)];}[_0x16cdf0(0x163)](_0x1455cb,_0x334b0a){}}let _0x4f52bd=new _0x370987(),_0x3f91d0={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x36df60={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4aedb0(_0x37d7d5,_0x54e157,_0x1c4223,_0x2655ec,_0x54bd48,_0x162f9f){var _0x5b69c5=_0x16cdf0;let _0x188e6d,_0x51eeec;try{_0x51eeec=_0x1f6faa(),_0x188e6d=_0x5d4da7[_0x54e157],!_0x188e6d||_0x51eeec-_0x188e6d['ts']>0x1f4&&_0x188e6d[_0x5b69c5(0xb2)]&&_0x188e6d['time']/_0x188e6d['count']<0x64?(_0x5d4da7[_0x54e157]=_0x188e6d={'count':0x0,'time':0x0,'ts':_0x51eeec},_0x5d4da7['hits']={}):_0x51eeec-_0x5d4da7[_0x5b69c5(0x116)]['ts']>0x32&&_0x5d4da7['hits'][_0x5b69c5(0xb2)]&&_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0x9c)]/_0x5d4da7['hits'][_0x5b69c5(0xb2)]<0x64&&(_0x5d4da7[_0x5b69c5(0x116)]={});let _0x5f4817=[],_0xf473ff=_0x188e6d['reduceLimits']||_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0xdb)]?_0x36df60:_0x3f91d0,_0x6f17a1=_0x15e0ac=>{var _0x25c439=_0x5b69c5;let _0x5c7829={};return _0x5c7829[_0x25c439(0xc5)]=_0x15e0ac[_0x25c439(0xc5)],_0x5c7829['elements']=_0x15e0ac[_0x25c439(0xea)],_0x5c7829[_0x25c439(0x111)]=_0x15e0ac[_0x25c439(0x111)],_0x5c7829[_0x25c439(0xa0)]=_0x15e0ac[_0x25c439(0xa0)],_0x5c7829[_0x25c439(0xde)]=_0x15e0ac[_0x25c439(0xde)],_0x5c7829[_0x25c439(0xf6)]=_0x15e0ac[_0x25c439(0xf6)],_0x5c7829['sortProps']=!0x1,_0x5c7829['noFunctions']=!_0x5963b0,_0x5c7829[_0x25c439(0x166)]=0x1,_0x5c7829[_0x25c439(0xfe)]=0x0,_0x5c7829['expId']=_0x25c439(0x106),_0x5c7829[_0x25c439(0x137)]=_0x25c439(0xa5),_0x5c7829[_0x25c439(0xf4)]=!0x0,_0x5c7829[_0x25c439(0xdc)]=[],_0x5c7829['autoExpandPropertyCount']=0x0,_0x5c7829[_0x25c439(0x117)]=!0x0,_0x5c7829[_0x25c439(0x9b)]=0x0,_0x5c7829[_0x25c439(0xed)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5c7829;};for(var _0x4f90fe=0x0;_0x4f90fe<_0x54bd48[_0x5b69c5(0xb3)];_0x4f90fe++)_0x5f4817['push'](_0x4f52bd[_0x5b69c5(0x141)]({'timeNode':_0x37d7d5===_0x5b69c5(0x9c)||void 0x0},_0x54bd48[_0x4f90fe],_0x6f17a1(_0xf473ff),{}));if(_0x37d7d5===_0x5b69c5(0xa8)){let _0x30a923=Error[_0x5b69c5(0x94)];try{Error['stackTraceLimit']=0x1/0x0,_0x5f4817['push'](_0x4f52bd[_0x5b69c5(0x141)]({'stackNode':!0x0},new Error()['stack'],_0x6f17a1(_0xf473ff),{'strLength':0x1/0x0}));}finally{Error[_0x5b69c5(0x94)]=_0x30a923;}}return{'method':'log','version':_0x5b5693,'args':[{'ts':_0x1c4223,'session':_0x2655ec,'args':_0x5f4817,'id':_0x54e157,'context':_0x162f9f}]};}catch(_0x1bdd63){return{'method':'log','version':_0x5b5693,'args':[{'ts':_0x1c4223,'session':_0x2655ec,'args':[{'type':_0x5b69c5(0xd7),'error':_0x1bdd63&&_0x1bdd63[_0x5b69c5(0x11d)]}],'id':_0x54e157,'context':_0x162f9f}]};}finally{try{if(_0x188e6d&&_0x51eeec){let _0x51ee57=_0x1f6faa();_0x188e6d[_0x5b69c5(0xb2)]++,_0x188e6d[_0x5b69c5(0x9c)]+=_0x1bfbd7(_0x51eeec,_0x51ee57),_0x188e6d['ts']=_0x51ee57,_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0xb2)]++,_0x5d4da7[_0x5b69c5(0x116)]['time']+=_0x1bfbd7(_0x51eeec,_0x51ee57),_0x5d4da7[_0x5b69c5(0x116)]['ts']=_0x51ee57,(_0x188e6d['count']>0x32||_0x188e6d[_0x5b69c5(0x9c)]>0x64)&&(_0x188e6d['reduceLimits']=!0x0),(_0x5d4da7['hits']['count']>0x3e8||_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0x9c)]>0x12c)&&(_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0xdb)]=!0x0);}}catch{}}}return _0x4aedb0;}((_0x1d9eba,_0x521910,_0x223aaa,_0x3bf0ff,_0x3cc83b,_0x2f3155,_0x1463a6,_0x2aea0a,_0x54a6ce,_0x49b65f,_0x40da01)=>{var _0xa04a9a=_0x4cf959;if(_0x1d9eba['_console_ninja'])return _0x1d9eba[_0xa04a9a(0x142)];if(!X(_0x1d9eba,_0x2aea0a,_0x3cc83b))return _0x1d9eba[_0xa04a9a(0x142)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1d9eba[_0xa04a9a(0x142)];let _0x1b23c6=b(_0x1d9eba),_0xb54c43=_0x1b23c6[_0xa04a9a(0xda)],_0x3f01c5=_0x1b23c6[_0xa04a9a(0x12a)],_0x56e6b4=_0x1b23c6['now'],_0x1e69f1={'hits':{},'ts':{}},_0x223dbc=H(_0x1d9eba,_0x54a6ce,_0x1e69f1,_0x2f3155),_0x412381=_0x1ebed2=>{_0x1e69f1['ts'][_0x1ebed2]=_0x3f01c5();},_0x380ae0=(_0x119a26,_0x197109)=>{var _0x9a103d=_0xa04a9a;let _0x5d241b=_0x1e69f1['ts'][_0x197109];if(delete _0x1e69f1['ts'][_0x197109],_0x5d241b){let _0x42b588=_0xb54c43(_0x5d241b,_0x3f01c5());_0x28daf5(_0x223dbc(_0x9a103d(0x9c),_0x119a26,_0x56e6b4(),_0xde33ce,[_0x42b588],_0x197109));}},_0x5b86b0=_0x5ae609=>(_0x3cc83b===_0xa04a9a(0x120)&&_0x1d9eba['origin']&&_0x5ae609?.[_0xa04a9a(0xd1)]?.['length']&&(_0x5ae609[_0xa04a9a(0xd1)][0x0][_0xa04a9a(0x146)]=_0x1d9eba[_0xa04a9a(0x146)]),_0x5ae609);_0x1d9eba[_0xa04a9a(0x142)]={'consoleLog':(_0x1dd224,_0x41bb64)=>{var _0x1b658e=_0xa04a9a;_0x1d9eba[_0x1b658e(0x123)][_0x1b658e(0x11b)][_0x1b658e(0x82)]!==_0x1b658e(0xf0)&&_0x28daf5(_0x223dbc(_0x1b658e(0x11b),_0x1dd224,_0x56e6b4(),_0xde33ce,_0x41bb64));},'consoleTrace':(_0x24b5b2,_0x2b0971)=>{var _0x466ecb=_0xa04a9a;_0x1d9eba[_0x466ecb(0x123)]['log'][_0x466ecb(0x82)]!==_0x466ecb(0x8b)&&_0x28daf5(_0x5b86b0(_0x223dbc(_0x466ecb(0xa8),_0x24b5b2,_0x56e6b4(),_0xde33ce,_0x2b0971)));},'consoleTime':_0xfe749d=>{_0x412381(_0xfe749d);},'consoleTimeEnd':(_0x38c0d7,_0x492226)=>{_0x380ae0(_0x492226,_0x38c0d7);},'autoLog':(_0x2ec834,_0x2fa439)=>{var _0x2b5911=_0xa04a9a;_0x28daf5(_0x223dbc(_0x2b5911(0x11b),_0x2fa439,_0x56e6b4(),_0xde33ce,[_0x2ec834]));},'autoLogMany':(_0x1cf692,_0x1cb859)=>{var _0x5b991d=_0xa04a9a;_0x28daf5(_0x223dbc(_0x5b991d(0x11b),_0x1cf692,_0x56e6b4(),_0xde33ce,_0x1cb859));},'autoTrace':(_0x1a9094,_0x25e15d)=>{_0x28daf5(_0x5b86b0(_0x223dbc('trace',_0x25e15d,_0x56e6b4(),_0xde33ce,[_0x1a9094])));},'autoTraceMany':(_0x3023ec,_0x484ad6)=>{var _0x29bbf5=_0xa04a9a;_0x28daf5(_0x5b86b0(_0x223dbc(_0x29bbf5(0xa8),_0x3023ec,_0x56e6b4(),_0xde33ce,_0x484ad6)));},'autoTime':(_0x5d79f4,_0x309af2,_0x227224)=>{_0x412381(_0x227224);},'autoTimeEnd':(_0x3746ec,_0x311773,_0x595131)=>{_0x380ae0(_0x311773,_0x595131);},'coverage':_0x133216=>{var _0x328563=_0xa04a9a;_0x28daf5({'method':_0x328563(0x13b),'version':_0x2f3155,'args':[{'id':_0x133216}]});}};let _0x28daf5=q(_0x1d9eba,_0x521910,_0x223aaa,_0x3bf0ff,_0x3cc83b,_0x49b65f,_0x40da01),_0xde33ce=_0x1d9eba[_0xa04a9a(0xbf)];return _0x1d9eba[_0xa04a9a(0x142)];})(globalThis,'127.0.0.1',_0x4cf959(0x119),"c:\\\\Users\\\\fventurino\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.314\\\\node_modules",_0x4cf959(0x132),_0x4cf959(0x126),'1714354568106',_0x4cf959(0xd0),_0x4cf959(0x108),_0x4cf959(0x9f),_0x4cf959(0x167));`);
  } catch (e) {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {
  }
  return v;
}

const script = "\"use strict\";(()=>{const a=window,e=document.documentElement,c=window.localStorage,d=[\"dark\",\"light\"],n=c&&c.getItem&&c.getItem(\"nuxt-color-mode\")||\"system\";let l=n===\"system\"?f():n;const i=e.getAttribute(\"data-color-mode-forced\");i&&(l=i),r(l),a[\"__NUXT_COLOR_MODE__\"]={preference:n,value:l,getColorScheme:f,addColorScheme:r,removeColorScheme:u};function r(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.add(t):e.className+=\" \"+t,s&&e.setAttribute(\"data-\"+s,o)}function u(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(t,\"g\"),\"\"),s&&e.removeAttribute(\"data-\"+s)}function m(o){return a.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function f(){if(a.matchMedia&&m(\"\").media!==\"not all\"){for(const o of d)if(m(\":\"+o).matches)return o}return\"light\"}})();\n";

const _MwNMGqVghh = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _74n2hsu8li,
_MwNMGqVghh
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection]", err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro] [uncaughtException]", err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const _lazy_BPDzfv = () => Promise.resolve().then(function () { return _id__delete$3; });
const _lazy_x9pzLV = () => Promise.resolve().then(function () { return _id__put$3; });
const _lazy_L8k8QB = () => Promise.resolve().then(function () { return create_post$3; });
const _lazy_BKAskr = () => Promise.resolve().then(function () { return index$3; });
const _lazy_uAwMOr = () => Promise.resolve().then(function () { return _id__delete$1; });
const _lazy_4PgeuJ = () => Promise.resolve().then(function () { return _id__put$1; });
const _lazy_9yyTwB = () => Promise.resolve().then(function () { return create_post$1; });
const _lazy_ucbaOA = () => Promise.resolve().then(function () { return index$1; });
const _lazy_QVGO19 = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/authors/:id', handler: _lazy_BPDzfv, lazy: true, middleware: false, method: "delete" },
  { route: '/api/authors/:id', handler: _lazy_x9pzLV, lazy: true, middleware: false, method: "put" },
  { route: '/api/authors/create', handler: _lazy_L8k8QB, lazy: true, middleware: false, method: "post" },
  { route: '/api/authors', handler: _lazy_BKAskr, lazy: true, middleware: false, method: undefined },
  { route: '/api/books/:id', handler: _lazy_uAwMOr, lazy: true, middleware: false, method: "delete" },
  { route: '/api/books/:id', handler: _lazy_4PgeuJ, lazy: true, middleware: false, method: "put" },
  { route: '/api/books/create', handler: _lazy_9yyTwB, lazy: true, middleware: false, method: "post" },
  { route: '/api/books', handler: _lazy_ucbaOA, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_QVGO19, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_QVGO19, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html data-critters-container><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}h1,p,pre{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0 / var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme: dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}}@media (min-width: 640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
      __proto__: null,
      template: template$1
});

const schema$1 = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);
const AuthorModel = mongoose.model("Author", schema$1);

const _id__delete$2 = defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    await AuthorModel.findByIdAndDelete(id);
    return { messate: "Author removed" };
  } catch (e) {
    throw createError({
      message: e.message
    });
  }
});

const _id__delete$3 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _id__delete$2
});

const _id__put$2 = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = event.context.params.id;
  try {
    await AuthorModel.findByIdAndUpdate(id, body);
    return { messate: "Author updated" };
  } catch (e) {
    throw createError({
      message: e.message
    });
  }
});

const _id__put$3 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _id__put$2
});

const create_post$2 = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    await AuthorModel.create(body);
    return { messate: "Author created" };
  } catch (e) {
    throw createError({
      message: e.message
    });
  }
});

const create_post$3 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: create_post$2
});

const index$2 = defineEventHandler(async (event) => {
  return await AuthorModel.find();
});

const index$3 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: index$2
});

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      requied: true
    },
    published: {
      type: Date,
      required: true
    },
    isbn: String,
    authors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
      }
    ],
    pageCount: Number
  },
  { timestamps: true }
);
const BookModel = mongoose.model("Book", schema);

const _id__delete = defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    await BookModel.findByIdAndDelete(id);
    return { messate: "Book removed" };
  } catch (e) {
    throw createError({
      message: e.message
    });
  }
});

const _id__delete$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _id__delete
});

const _id__put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = event.context.params.id;
  try {
    await BookModel.findByIdAndUpdate(id, body);
    return { messate: "Book updated" };
  } catch (e) {
    throw createError({
      message: e.message
    });
  }
});

const _id__put$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _id__put
});

const create_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    await BookModel.create(body);
    return { messate: "Book created" };
  } catch (e) {
    throw createError({
      message: e.message
    });
  }
});

const create_post$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: create_post
});

const index = defineEventHandler(async (event) => {
  return await BookModel.find().populate("authors");
});

const index$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: index
});

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getServerEntry = () => import('file://C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}">${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {}
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !islandContext;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false || (false),
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = Boolean(islandContext) ? await renderInlineStyles(ssrContext.modules ?? ssrContext._registeredComponents ?? []) : "";
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null ,
      NO_SCRIPTS ? null : _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [_rendered.html],
    bodyAppend: normalizeChunks([
      NO_SCRIPTS ? void 0 : renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) ,
      routeOptions.experimentalNoScripts ? void 0 : _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts
    ])
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(`<style>${style}</style>`);
      }
    }
  }
  return Array.from(inlinedStyles).join("");
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const attrs = [
    'type="application/json"',
    `id="${opts.id}"`,
    `data-ssr="${!(opts.ssrContext.noSSR)}"`,
    opts.src ? `data-src="${opts.src}"` : ""
  ].filter(Boolean);
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  return `<script ${attrs.join(" ")}>${contents}<\/script><script>window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}<\/script>`;
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: renderer
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _virtual__headStatic
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: styles
});

const template = "<svg class=\"nuxt-spa-loading\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 37 25\" fill=\"none\" width=\"80\"><path d=\"M24.236 22.006h10.742L25.563 5.822l-8.979 14.31a4 4 0 0 1-3.388 1.874H2.978l11.631-20 5.897 10.567\"/></svg><style>.nuxt-spa-loading {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .nuxt-spa-loading>path {\n    fill: none;\n    stroke: #00DC82;\n    stroke-width: 4px;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    /* Stroke-dasharray property */\n    stroke-dasharray: 128;\n    stroke-dashoffset: 128;\n    animation: nuxt-spa-loading-move 3s linear infinite;\n  }\n\n  @keyframes nuxt-spa-loading-move {\n    100% {\n      stroke-dashoffset: -128;\n    }\n  }</style>";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
      __proto__: null,
      template: template
});
//# sourceMappingURL=index.mjs.map
