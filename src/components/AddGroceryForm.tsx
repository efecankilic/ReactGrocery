import { useState } from 'react';
type AddProps = {
  onAddGrocery: (name: string) => void;
};
const AddGroceryForm = ({ onAddGrocery }: AddProps) => {
  const [groceryName, setGroceryName] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroceryName(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddGrocery(groceryName);
    setGroceryName('');
  };
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add Grocery</legend>

        <input
          type='text'
          value={groceryName}
          onChange={handleChange}
          placeholder='Enter Grocery'
        />

        <input type='submit' value='Add Grocery' />
      </fieldset>
    </form>
  );
};

export default AddGroceryForm;
