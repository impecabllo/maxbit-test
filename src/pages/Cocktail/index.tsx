import { useParams } from "react-router"

import { CocktailCode } from "@state/types/app"
import { CocktailItem, useCocktailsStore } from "@state/stores/cocktailsStore"
import { NotFound } from "@pages/NotFound"
import config from "@config/index"

import { useEffect, type FC } from "react"

type Params = {
  cocktailCode: string
}

export const CocktailPage: FC = () => {
  const { cocktailCode } = useParams<Params>()

  const cocktails = useCocktailsStore(state => state.cocktails)
  const setCocktails = useCocktailsStore(state => state.setCocktails)

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

          setCocktails({
            ...cocktails,
            [cocktailCode]: [...drinks],
          })
        } catch (err) {
          throw err
        }
      }

      fetchCocktails()
    }
  }, [cocktailCode])

  if (cocktailCode && !Object.values(CocktailCode).includes(cocktailCode as CocktailCode)) {
    return <NotFound />
  }

  return (
    <div>
      <div>Cocktail: {cocktailCode}</div>
    </div>
  )
}
