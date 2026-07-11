var posts=["2026/07/10/hello-world/","2024/07/11/一口气彻底教会你剪映专业版/","2026/07/10/模板-template/"];function toRandomPost(){
    pjax.loadUrl('/QingBlogs/'+posts[Math.floor(Math.random() * posts.length)]);
  };