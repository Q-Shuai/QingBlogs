var posts=["2024/07/11/一口气彻底教会你剪映专业版/","2026/07/17/建站人员必修课：HTML-CSS-JS-Tailwind学习笔记（LiveCanvas-实战篇）/","2026/03/16/网页开发三件套-Html-CSS-Javascrit-Tailwind-基础语法速览/","2026/03/13/SEO基础入门教程/"];function toRandomPost(){
    pjax.loadUrl('/QingBlogs/'+posts[Math.floor(Math.random() * posts.length)]);
  };