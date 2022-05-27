const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

const attributes = [
  'data-dark-mode',
  'completed',
  'selected',
  'disappear',
  'open',
  'data-global-alert',
  'id'
];

const highlightJs = [
  'hljs',
  /^hljs-.*/
];

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ['./hugo_stats.json'],
      defaultExtractor: content => {
        const els = JSON.parse(content).htmlElements;
        return [
          ...(els.tags || []),
          ...(els.classes || []),
          ...(els.ids || []),
        ];
      },
      safelist: [
        ...attributes,
        ...highlightJs,
      ]
    }),
  ],
};
