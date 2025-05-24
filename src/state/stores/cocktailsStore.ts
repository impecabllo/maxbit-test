import { CocktailCode } from "@state/types/app"
import { create } from "zustand"

export type CocktailItem = {
  idDrink: string
  strDrink: string
  strCategory: string
  strAlcoholic: string
  strGlass: string
}

type State = {
  cocktails: Record<CocktailCode, CocktailItem[]>
}

type Actions = {
  setCocktails: (newCocktails: Record<CocktailCode, CocktailItem[]>) => void
}

const initialState: State = {
  cocktails: {
    mojito: [],
    margarita: [],
    a1: [],
    kir: [],
  },
}

export const useCocktailsStore = create<State & Actions>(set => ({
  ...initialState,
  setCocktails: (newCocktails: Record<CocktailCode, CocktailItem[]>) => set(() => ({ cocktails: { ...newCocktails } })),
}))
