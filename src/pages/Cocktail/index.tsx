import { useParams } from "react-router"

import { CocktailCode } from "@state/types/app"
import { CocktailItem, useCocktailsStore } from "@state/stores/cocktailsStore"
import { NotFound } from "@pages/NotFound"
import config from "@config/index"

import { Item } from "./Item"

import { useEffect, useState, type FC } from "react"

import style from "./style.module.scss"

type Params = {
  cocktailCode: string
}

const getFormattedElement = (el: CocktailItem): CocktailItem => {
  const newEl = { ...el }

  for (let key in el) {
    if (key.includes("strIngredient") && !!newEl[key] && newEl.hasOwnProperty("strIngredients")) {
      newEl.strIngredients = [...newEl.strIngredients, newEl[key]]
    } else if (key.includes("strIngredient") && !!newEl[key] && !newEl.hasOwnProperty("strIngredients")) {
      newEl.strIngredients = [newEl[key]]
    }

    if (key.includes("strMeasure") && !!newEl[key] && newEl.hasOwnProperty("strMeasures")) {
      newEl.strMeasures = [...newEl.strMeasures, newEl[key]]
    } else if (key.includes("strMeasure") && !!newEl[key] && !newEl.hasOwnProperty("strMeasures")) {
      newEl.strMeasures = [newEl[key]]
    }
  }

  return newEl
}

export const CocktailPage: FC = () => {
  const { cocktailCode } = useParams<Params>()

  const cocktails = useCocktailsStore(state => state.cocktails)
  const setCocktails = useCocktailsStore(state => state.setCocktails)

  const [items, setItems] = useState<CocktailItem[]>([])

  useEffect(() => {
    if (cocktailCode && Object.values(CocktailCode).includes(cocktailCode as CocktailCode)) {
      if (cocktails && cocktails.hasOwnProperty(cocktailCode) && cocktails[cocktailCode]?.length) {
        return
      }

      const fetchCocktails = async () => {
        try {
          const response = await fetch(`${config.apiPaths.cocktails}?s=${cocktailCode}`)
          const jsonResponse = await response.json()
          const drinks: CocktailItem[] = jsonResponse.drinks
          const formattedDrinks = drinks.map(el => getFormattedElement(el))

          setCocktails({
            ...cocktails,
            [cocktailCode]: [...formattedDrinks],
          })
        } catch (err) {
          throw err
        }
      }

      fetchCocktails()
    }
  }, [cocktailCode])

  useEffect(() => {
    if (cocktails && cocktailCode && cocktails[cocktailCode].length) {
      setItems(cocktails[cocktailCode])
    }
  }, [cocktails, cocktailCode])

  if (cocktailCode && !Object.values(CocktailCode).includes(cocktailCode as CocktailCode)) {
    return <NotFound />
  }

  return (
    <div className={style.wrapper}>
      {items.length > 0 ? items.map(item => <Item item={item} key={item.idDrink} />) : <div>No data</div>}
    </div>
  )
}
