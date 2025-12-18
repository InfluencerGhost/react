import React from 'react';

export default function List({ items = [], category = "Category" }) {
  const itemList = [...items];

  itemList.sort((a, b) => {
    a.name.localeCompare(b.name);
  });

  const listItems = itemList.map((fruit) => {
    return (
      <>
        <li key={fruit.id}>
          {fruit.name}:&nbsp; <b>{fruit.calories}</b>
        </li>
      </>
    );
  });

  return (
    <>
      <h3 className="list-category">{props.category}</h3>
      <ol className="list-items">{listItems} </ol>
    </>
  );    

}

List.defaultProps = {
    items: [],  
    category: "Category",
  };
  
