const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

const safelist = [
  // DOM attributes
  'data-dark-mode',
  'completed',
  'selected',
  'disappear',
  'open',
  'announcement',
  'data-global-alert',
  'id',
  // Highlight JS
  'hljs',
  /^hljs-.*/,
  'btn-copy',
  // Search bar
  'suggestions',
  /suggestion__.*/,
  // Mermaid diagrams
  'language-mermaid',
  // Scroll-lock
  'sidebar-default',
  'sidebar-scroll',
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
      safelist,
    }),
  ],
};
