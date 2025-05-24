import { Outlet } from "react-router-dom"

import { Sidebar } from "./Sidebar"

import type { FC } from "react"

import style from "./style.module.scss"

export const MainLayout: FC = () => {
  return (
    <div>
      <Sidebar />
      <div className={style.wrapper}>
        <div className={style.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
