import * as React from "react"
import "./Instructions.css"

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p className="start">{props.start}</p>
      <p className="onlyCategory">{props.onlyCategory}</p>
      <p className="onlyRestaurant">{props.onlyRestaurant}</p>
      <p className="noSelectedItem">{props.noSelectedItem}</p>
      <p className="allSelected">{props.allSelected}</p>
    </aside>
  )
}

export default Instructions
