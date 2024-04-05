import React, { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { ListOverview } from './components/ListOverview'

export const HomePage = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch('http://localhost:8000/shoppinglists');
    const data = await response.json();
    setItems(data);
  }

  useEffect(() => {
    fetchItems();
  }, [])

  return (
    <div>
      <Hero items={items} />
      <ListOverview items={items} fetchItems={fetchItems} />
    </div>
  )
}
