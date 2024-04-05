import { ListItem } from "./ListItem"

export const ListOverview = ({ items, fetchItems }) => {
  return (
    <section className="my-10 ">
      <h1 className="text-3xl mb-10 text-center text-green-900 font-semibold underline underline-offset-8">Přehled nákupních seznamů</h1>
      <div className="flex flex-col items-center gap-6 mx-10">
        {items.map(item => <ListItem key={item.name} name={item.name} id={item.id} fetchItems={fetchItems} />)}
      </div>
    </section>
  )
}