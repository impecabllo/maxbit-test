import { Navigate, Route, Routes } from "react-router-dom"

import { MainLayout } from "@layouts/MainLayout"
import { CocktailCode } from "@state/types/app"
import { CocktailPage } from "@pages/Cocktail"
import ErrorBoundary from "@components/ErrorBoundary"
import { COCKTAIL_ROUTE, HOMEPAGE_ROUTE } from "@routes/index"

import type { FC } from "react"

import "normalize.css"

const ErrorComponent = () => <div>Error occured</div>

export const App: FC = () => {
  return (
    <ErrorBoundary fallbackComponent={ErrorComponent}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path={HOMEPAGE_ROUTE} element={<Navigate to={`/${CocktailCode.Margarita}`} />} />
          <Route path={COCKTAIL_ROUTE} element={<CocktailPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}
