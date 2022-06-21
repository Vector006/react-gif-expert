import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        //categories.push('Valorant');
        setCategories([newCategory, ...categories,]);
        // setCategories(cat => [...cat, 'Valorant']); 
    }

  return (
      <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories= {setCategories}
            onNewCategory = {(value) => onAddCategory(value)}
        />

        {/* Listado de Gif */}
      
        {categories.map((category) => (
                <GifGrid 
                    key={category}
                    category={category}
                />
            ))
        }
    

        {/* Gif Item */}
      </>
  )
}
