import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/Home/HomePage"
import { UpdateListNamePage } from "../pages/UpdateListName.js/UpdateListNamePage"
import { CreateListPage } from "../pages/CreateList/CreateListPage"
import { ShopListPage } from "../pages/ShopList/ShopListPage"
import { PageNotFound } from "../pages/PageNotFound/PageNotFound"

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vytvoritseznam" element={<CreateListPage />} />
        <Route path="/upravitnazevseznamu/:id" element={<UpdateListNamePage />} />
        <Route path="/nakupniSeznam/:id" element={<ShopListPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}