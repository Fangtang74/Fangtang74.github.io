var posts=["posts/1e36cdae905a.html","posts/0331af577420.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };