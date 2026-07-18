var posts=["2026/03/13/SEO基础入门教程/","2026/05/18/Globax-AI-—-外贸-AI-工具站-项目详解/","2026/03/17/建站人员必修课：HTML-CSS-JS-Tailwind学习笔记（LiveCanvas-实战篇）/","2024/07/11/一口气彻底教会你剪映专业版/","2026/03/16/网页开发三件套-Html-CSS-Javascrit-Tailwind-基础语法速览/"];function toRandomPost(){
    pjax.loadUrl('/QingBlogs/'+posts[Math.floor(Math.random() * posts.length)]);
  };