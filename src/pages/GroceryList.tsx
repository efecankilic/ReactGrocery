import { useState, useContext } from 'react';
import LanguageContext, {
  LanguageContextType,
  Language,
} from '../context/LanguageContext';
import { v4 } from 'uuid';

import Header from '../components/Header';
import Grocery from '../components/Grocery';
import AddGroceryForm from '../components/AddGroceryForm';
import Search from '../components/Search';

type GroceryListProps = {
  name: string;
  quantity: number;
  id: number;
}[];
const GroceryList = () => {
  const { setLanguage } = useContext(LanguageContext) as LanguageContextType;
  const [search, setSearch] = useState('');
  const [grocery, setGrocery] = useState<GroceryListProps>([
    {
      name: 'Apple',
      quantity: 3,
      id: 1,
    },
    {
      name: 'Oranges',
      quantity: 2,
      id: 2,
    },
    {
      name: 'Cucumber',
      quantity: 4,
      id: 3,
    },
    {
      name: 'Potatos',
      quantity: 4,
      id: 4,
    },
  ]);

  const handleAddGrocery = (name: string) => {
    setGrocery((prev) => [...prev, { name: name, quantity: 1, id: v4() }]);
  };

  const handleDelete = (id: number) => {
    setGrocery((prev) => prev.filter((g) => g.id !== id));
  };

  const handleQuantityChange = (id: number, data: number) => {
    setGrocery((prev) =>
      prev.map((g) =>
        g.id === id
          ? {
              ...g,
              quantity:
                data > 0
                  ? g.quantity + data
                  : g.quantity > 0
                  ? g.quantity + data
                  : 0,
            }
          : g
      )
    );
  };

  const filterGrocery = (name: string) => {
    if (name) {
      setSearch(name);
    } else {
      setSearch('');
    }
  };
  return (
    <div>
      <AddGroceryForm onAddGrocery={handleAddGrocery} />
      <div>
        <button onClick={() => setLanguage(Language.English)}>English</button>
        <button onClick={() => setLanguage(Language.French)}>French</button>
      </div>
      <Header title='Grocery List new' totalItems={grocery.length} />
      <Search onFilter={filterGrocery} />
      {/* <Grocery name='apple' quantity={2} />
      <Grocery name='orange' quantity={4} />
      <Grocery name='cucumber' quantity={3} /> */}
      {grocery
        .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
        .map((g) => (
          <Grocery
            name={g.name}
            quantity={g.quantity}
            onDelete={handleDelete}
            onQuantityChange={handleQuantityChange}
            id={g.id}
            key={g.id.toString()}
          />
        ))}
    </div>
  );
};

export default GroceryList;
