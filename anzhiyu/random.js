var posts=["posts/80fc9384f990.html","posts/6226571ae252.html","posts/1e36cdae905a.html","posts/1d57a7e730dc.html","posts/0331af577420.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };