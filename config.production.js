/*
|-------------------------------------------------------------------------------
| Production config           https://maizzle.com/docs/environments/#production
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

/** @type {import('@maizzle/framework').Config} */
export default {
  build: {
    output: {
      path: 'dist',
    },
  },
  css: {
    inline: true,
    purge: true,
    shorthand: true,
  },
  prettify: true,
}
