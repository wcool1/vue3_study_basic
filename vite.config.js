import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//自动导入插件：自动导入API函数、hooks以及组件名
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers' // 修改导入名称
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      //导入ep组件
      resolvers: [ElementPlusResolver()],
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/core',
        'pinia',
      ],
      dts: 'types/auto-imports.d.ts',
      dirs: ['src/stores', 'src/composables', 'src/hooks', 'src/views','src/components' ]//扫描需要自动导入函数的路径
    }),
    Components({
      //导入ep组件
      resolvers: [
        ElementPlusResolver(),
        VueUseComponentsResolver()//自动导入的组件名默认名就是文件名（首字母大写）；有个问题需要注意：项目中所有的文件一定不要起相同的名字；否则你导入的可能不是你想要的哪个组件了；举例view/A和view/B下如果有文件c.vue并且在另一文件中导入该组件，那么你在使用的时候就不知道是A/还是B/了
      ],
// 添加需要自动导入组件的目录，根据你的项目结构，哪些路径用到了vue文件就写上(不用细化到其下面的子文件，下面是一般配置），比如你在src创建一个feartures用来存放vue组件，那么src/feartures也要添加上去
      dts: 'types/components.d.ts',
      dirs: ['src/components', 'src/view',], // 去配置后，插件会自动扫描这些目录下的所有 .vue 文件并注册为全局组件。

    }),
    
  ],
})