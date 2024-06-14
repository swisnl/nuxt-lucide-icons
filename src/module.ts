import { addComponent, createResolver, defineNuxtModule } from '@nuxt/kit';
import { join } from 'pathe';
import { kebabCase } from 'scule';
import * as icons from 'lucide-vue-next';

export interface LucideModuleOptions {
  namePrefix: string;
}

export default defineNuxtModule<LucideModuleOptions>({
  meta: {
    name: 'lucide',
    configKey: 'lucide',
    compatibility: {
      nuxt: '>=3.3.0',
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

    // Some icons are registered multiple times, but with different casing (e.g. ArrowDownAz/ArrowDownAZ
    // and Axis3d/Axis3D) so we increase priority to avoid a warning from Nuxt.
    const priorities = new Map<string, number>()

    Object.keys(icons)
      .filter((icon) => icon !== 'default')
      .filter((icon) => !icon.startsWith('Lucide'))
      .filter((icon) => !icon.endsWith('Icon'))
      .forEach((icon) => {
        const key = kebabCase(icon)
        const priority = (priorities.get(key) ?? -1) + 1;
        addComponent({
          name: options.namePrefix + icon,
          export: icon,
          filePath: root,
          priority: priority,
        })
        priorities.set(key, priority)
      });
  },
});
