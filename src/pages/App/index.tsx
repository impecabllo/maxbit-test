import { Navigate, Route, Routes } from "react-router-dom"

import { MainLayout } from "@layouts/MainLayout"
import { CocktailCode } from "@state/types/app"
import { CocktailPage } from "@pages/Cocktail"

import type { FC } from "react"

import "normalize.css"

export const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Navigate to={`/${CocktailCode.Margarita}`} />} />
          <Route path="/:cocktailCode" element={<CocktailPage />} />
        </Route>
      </Routes>
    </div>
  )
}
