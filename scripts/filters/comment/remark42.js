/* global hexo */

'use strict';

const path = require('path');

// Add comment
hexo.extend.filter.register('theme_inject', injects => {
  const config = hexo.theme.config.remark42;
  if (!config.enable) return;

  if (!config.host) {
    hexo.log.warn('remark42.host can\'t be null.');
    return;
  }

  injects.comment.raw('remark42', '<div class="comments" id="remark42"></div>', {}, { cache: true });

  injects.bodyEnd.file('remark42', path.join(hexo.theme_dir, 'layout/_third-party/comments/remark42.njk'));

});