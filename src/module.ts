import { addComponent, createResolver, defineNuxtModule } from '@nuxt/kit';
import { join } from 'pathe';
import * as icons from 'lucide-vue-next';

export interface LucideModuleOptions {
  namePrefix: string;
}

export default defineNuxtModule<LucideModuleOptions>({
  meta: {
    name: 'lucide',
    configKey: 'lucide',
    compatibility: {
      nuxt: '^3.3.0',
    },
  },

  defaults: {
    namePrefix: 'Lucide',
  },

  async setup(options: LucideModuleOptions) {
    // Resolve path to lucide-vue-next.
    // The dependency is resolved relative to the location of this file, so that package managers like pnpm
    // without shamefully hoisting, or yarn with Plug'n'play enabled, also work.
    const { resolvePath } = createResolver(import.meta.url)
    const entrypoint = await resolvePath('lucide-vue-next') // node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js
    const root = join(entrypoint, '../../..') // node_modules/lucide-vue-next

    Object.keys(icons)
      .filter((icon) => icon !== 'default')
      .filter((icon) => !icon.startsWith('Lucide'))
      .filter((icon) => !icon.endsWith('Icon'))
      .forEach((icon) =>
        addComponent({
          name: options.namePrefix + icon,
          export: icon,
          filePath: root,
        })
      );
  },
});
