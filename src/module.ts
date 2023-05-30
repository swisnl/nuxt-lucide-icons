import { defineNuxtModule, addComponent } from '@nuxt/kit';
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

  setup(options: LucideModuleOptions) {
    Object.keys(icons)
      .filter((icon) => icon !== 'default')
      .forEach((icon) =>
        addComponent({
          name: options.namePrefix + icon,
          export: icon,
          filePath: 'lucide-vue-next',
        })
      );
  },
});
