var posts=["posts/1e36cdae905a.html","posts/08a1e1c0167f.html","posts/0331af577420.html","posts/1d57a7e730dc.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };