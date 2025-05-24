import { LazyLoadImage } from "react-lazy-load-image-component"

import type { FC } from "react"
import type { CocktailItem } from "@state/stores/cocktailsStore"

import style from "./style.module.scss"

type Props = {
  item: CocktailItem
}

export const Item: FC<Props> = ({ item }) => {
  return (
    <div className={style.content}>
      <div className={style.info}>
        <h3>{item.strDrink}</h3>

        <div>
          <p>{item.strCategory}</p>
          <p>{item.strAlcoholic}</p>
          <p>{item.strGlass}</p>
        </div>

        <div>
          <h4>Instructions:</h4>
          <p>{item.strInstructions}</p>
        </div>

        <div>
          <h4>List of ingredients:</h4>

          <div className={style.ingredients}>
            <div>{item.strMeasures.length ? item.strMeasures.map(el => <div key={el}>{el}</div>) : null}</div>

            <div>{item.strIngredients.length ? item.strIngredients.map(el => <div key={el}>{el}</div>) : null}</div>
          </div>
        </div>
      </div>

      <div className={style.image}>
        <LazyLoadImage
          alt={item.strDrink}
          height={200}
          src={item.strDrinkThumb} // use normal <img> attributes as props
          width={200}
        />
      </div>
    </div>
  )
}
