var posts=["2026/07/10/hello-world/","2026/07/10/模板-template/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };