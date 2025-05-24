import clsx from "clsx"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router"

import config from "@config/index"

import type { FC } from "react"

import style from "./style.module.scss"

type Params = {
  cocktailCode: string
}

export const Sidebar: FC = () => {
  const { cocktailCode } = useParams<Params>()

  return (
    <div className={style.sidebar}>
      {config.cocktailCodes.map(code => (
        <NavLink
          key={code}
          to={`/${code}`}
          className={clsx(style.linkItem, { [style.selected]: code === cocktailCode })}
        >
          {code}
        </NavLink>
      ))}
    </div>
  )
}
