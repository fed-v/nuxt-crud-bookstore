import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/fventurino/Desktop/personal-projects/nuxt-crud-bookstore/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}