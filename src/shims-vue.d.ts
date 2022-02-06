/* eslint-disable */
// .vue ファイルがなにかを確認する
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
