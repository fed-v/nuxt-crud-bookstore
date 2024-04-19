export const localeCodes = ["en-US","fr-FR"]

export const localeMessages = {
  "en-US": [{ key: "../locales/en-US.json", load: () => import("../locales/en-US.json" /* webpackChunkName: "lang_locales_locales_en_US_json" */) }],
  "fr-FR": [{ key: "../locales/fr-FR.json", load: () => import("../locales/fr-FR.json" /* webpackChunkName: "lang_locales_locales_fr_FR_json" */) }],
}

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  nuxtI18nOptions.experimental = Object({"jsTsFormatResource":false})
  nuxtI18nOptions.bundle = Object({"compositionOnly":true})
  nuxtI18nOptions.compilation = Object({"jit":true,"strictMessage":true,"escapeHtml":false})
 const vueI18nConfigLoader = async (loader) => {
            const config = await loader().then(r => r.default || r)
            return typeof config === 'object'
              ? config
              : typeof config === 'function'
                ? await config()
                : {}
          }
  nuxtI18nOptions.vueI18n = Object({})
  nuxtI18nOptions.vueI18n.messages ??= {}
  nuxtI18nOptions.locales = [Object({"code":"en-US","iso":"en-US","name":"English(US)","files":["locales/en-US.json"],"hashes":["409e1b6f"],"types":["static"]}),Object({"code":"fr-FR","iso":"efr-FR","name":"French(FR)","files":["locales/fr-FR.json"],"hashes":["626748ae"],"types":["static"]})]
  nuxtI18nOptions.defaultLocale = "en-US"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "prefix_except_default"
  nuxtI18nOptions.lazy = true
  nuxtI18nOptions.langDir = "locales"
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.types = "composition"
  nuxtI18nOptions.debug = false
  nuxtI18nOptions.parallelPlugin = false
  nuxtI18nOptions.i18nModules = []
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({experimental: Object({"jsTsFormatResource":false}),bundle: Object({"compositionOnly":true}),compilation: Object({"jit":true,"strictMessage":true,"escapeHtml":false}),vueI18n: "",locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,types: "composition",debug: false,parallelPlugin: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"en-US","iso":"en-US","name":"English(US)","files":["locales/en-US.json"],"hashes":["409e1b6f"],"types":["static"]}),Object({"code":"fr-FR","iso":"efr-FR","name":"French(FR)","files":["locales/fr-FR.json"],"hashes":["626748ae"],"types":["static"]})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const isSSG = false
export const parallelPlugin = false
