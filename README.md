# Nuxt Lucide Icons

[![npm version][ico-version]][link-version]
[![License][ico-license]](LICENSE.md)
[![Buy us a tree][ico-treeware]][link-treeware]
[![Code style][ico-github-actions-codestyle]][link-github-actions-codestyle]
[![Tests][ico-github-actions-tests]][link-github-actions-tests]
[![npm downloads][ico-downloads]][link-downloads]
[![Made by SWIS][ico-swis]][link-swis]
[![Nuxt][ico-nuxt]][link-nuxt]

This Nuxt module makes working with [Lucide](https://lucide.dev/) icons a breeze!

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 &nbsp;Online playground](https://stackblitz.com/github/swisnl/nuxt-lucide-icons?file=playground%2Fapp.vue)
- [📖 &nbsp;Documentation](https://lucide.dev/docs/lucide-vue-next)
- [🖌️ &nbsp;Available icons](https://lucide.dev/icons)

## Features

- 🚠 &nbsp;Auto imports Lucide icons
- 🎛️ &nbsp;Configurable name prefix
- 🌲 &nbsp;Supports tree-shaking

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add lucide-icons
```

That's it! You can now use [all Lucide icons](https://lucide.dev/icons) in your Nuxt app ✨
  
```vue
<template>
  <div>
    <h1>Nuxt Lucide Icons</h1>
    <LucideRocket />
    <LucideFolderGit2 color="red" />
    <LucideGithub :size="32" />
  </div>
</template>
```

**Note:** Make sure to disable your ad-blocker for local development. Some ad-blockers, such as uBlock Origin, block all subsequent requests when they detect the fingerprint icon. For more information, refer to the following [issue](https://github.com/swisnl/nuxt-lucide-icons/issues/3).

## Configuration

Don't like the default component name prefix? You can change it in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-lucide-icons'
  ],

  lucide: {
    namePrefix: 'Icon'
  }
})
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

<details>
  <summary>Local development</summary>

  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for details.

## Security

If you discover any security related issues, please email security@swis.nl instead of using the issue tracker.

## Credits

- [Jasper Zonneveld][link-author]
- [Anthony Schuijlenburg][link-contributor-anthony]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

This package is [Treeware](https://treeware.earth). If you use it in production, then we ask that you [**buy the world a tree**][link-treeware] to thank us for our work. By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.

## SWIS :heart: Open Source

[SWIS][link-swis] is a web agency from Leiden, the Netherlands. We love working with open source software.

[ico-version]: https://img.shields.io/npm/v/nuxt-lucide-icons/latest.svg?style=flat-square
[ico-license]: https://img.shields.io/npm/l/nuxt-lucide-icons.svg?style=flat-square
[ico-treeware]: https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen.svg?style=flat-square
[ico-github-actions-codestyle]: https://img.shields.io/github/actions/workflow/status/swisnl/nuxt-lucide-icons/codestyle.yaml?label=codestyle&branch=main&style=flat-square
[ico-github-actions-tests]: https://img.shields.io/github/actions/workflow/status/swisnl/nuxt-lucide-icons/tests.yaml?label=tests&branch=main&style=flat-square
[ico-downloads]: https://img.shields.io/npm/dm/nuxt-lucide-icons.svg?style=flat-square
[ico-swis]: https://img.shields.io/badge/%F0%9F%9A%80-made%20by%20SWIS-%230737A9.svg?style=flat-square
[ico-nuxt]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js&style=flat-square

[link-version]: https://npmjs.com/package/nuxt-lucide-icons
[link-github-actions-codestyle]: https://github.com/swisnl/nuxt-lucide-icons/actions/workflows/codestyle.yaml
[link-github-actions-tests]: https://github.com/swisnl/nuxt-lucide-icons/actions/workflows/tests.yaml
[link-downloads]: https://npmjs.com/package/nuxt-lucide-icons
[link-treeware]: https://plant.treeware.earth/swisnl/nuxt-lucide-icons
[link-author]: https://github.com/JaZo
[link-contributor-anthony]: https://github.com/AnthonySchuijlenburg
[link-contributors]: ../../contributors
[link-swis]: https://www.swis.nl
[link-nuxt]: https://nuxt.com
