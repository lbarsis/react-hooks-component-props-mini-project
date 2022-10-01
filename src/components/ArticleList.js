import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
  const postEls = posts.map(post => {
    return <article key={post.id}>
      <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    </article>
  })

  return (
    <main>
      {postEls}
    </main>
  )
}

export default ArticleList