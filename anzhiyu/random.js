var posts=["2026/03/16/网页开发三件套-Html-CSS-Javascrit-Tailwind-基础语法速览/","2026/03/13/SEO基础入门教程/","2024/07/11/一口气彻底教会你剪映专业版/"];function toRandomPost(){
    pjax.loadUrl('/QingBlogs/'+posts[Math.floor(Math.random() * posts.length)]);
  };