/* global NexT, CONFIG */

var remark_config = {};

document.addEventListener('page:loaded', () => {
  if (!CONFIG.page.comments) return;

  remark_config.host = CONFIG.remark42.host
  remark_config.site_id = CONFIG.remark42.site_id
  remark_config.theme = CONFIG.remark42.theme
  remark_config.locale = CONFIG.remark42.locale ? CONFIG.remark42.locale : 'en'
  remark_config.no_footer = CONFIG.remark42.no_footer
  
  NexT.utils.loadComments('#remark42')
    .then(() => {
      !function (e, n) { for (var o = 0; o < e.length; o++) { var r = n.createElement("script"), c = ".js", d = n.head || n.body; "noModule" in r ? (r.type = "module", c = ".mjs") : r.async = !0, r.defer = !0, r.src = remark_config.host + "/web/" + e[o] + c, d.appendChild(r) } }(remark_config.components || ["embed"], document);
    })
    
});