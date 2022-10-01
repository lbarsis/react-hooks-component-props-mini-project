import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {

  // function TimeToRead() {
  //   if (minutes < 30) {
  //     const coffee = []
  //     const numOfCoffee = Math.ceil(minutes / 5)

  //     for (let i = 0; i < numOfCoffee; i++) {
  //       coffee.push('☕️')
  //     }

  //     return <small> * {minutes} minutes to read {coffee.join('')}</small>
  //   } else  if (minutes >= 30){
  //     const bento = []
  //     const numOfBento = Math.ceil(minutes / 10)

  //     for (let i = 0; i < numOfBento; i++) {
  //       bento.push('🍱')
  //     }
  //     return <small> * {minutes} minutes to read {bento.join('')}</small>
  //   }
  // }

  return(
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {/* <TimeToRead /> */}
      <p>{preview}</p>
    </article>
  )
}

export default Article