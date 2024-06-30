import { useState, useEffect } from 'react';
import { ref, set, push, onValue, update, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { database } from '../config/firebase';

const BlogDataComponent = ({ data, collectionName }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState(data[0]);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    const itemsRef = ref(database, collectionName);
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setItems(formattedData);
      }
    });
  }, [collectionName]);

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddSingleItem = () => {
    const itemsRef = ref(database, collectionName);
    const newItemRef = push(itemsRef);
    set(newItemRef, { ...newItem, id: uuidv4() });
    setNewItem(data[0]);
  };

  const handleAddCollection = () => {
    const itemsRef = ref(database, collectionName);
    data.forEach((item) => {
      const newItemRef = push(itemsRef);
      set(newItemRef, { ...item, id: uuidv4() });
    });
  };

  const handleEditItem = (item) => {
    setCurrentItem(item);
  };

  const handleUpdateItem = () => {
    const itemRef = ref(database, `${collectionName}/${currentItem.id}`);
    update(itemRef, currentItem);
    setCurrentItem(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleDeleteItem = () => {
    const itemRef = ref(database, `${collectionName}/${currentItem.id}`);
    remove(itemRef);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newItem.title || ''}
          onChange={handleNewItemChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newItem.description || ''}
          onChange={handleNewItemChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={newItem.date || ''}
          onChange={handleNewItemChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newItem.image || ''}
          onChange={handleNewItemChange}
        />
      </div>
      <button onClick={handleAddSingleItem}>Add Single Item Button</button>
      <button onClick={handleAddCollection}>Add Collection Button</button>
      {currentItem && (
        <div>
          <h2>Edit Item</h2>
          <input
            type="text"
            name="title"
            value={currentItem.title || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={currentItem.description || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="date"
            value={currentItem.date || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            value={currentItem.image || ''}
            onChange={handleChange}
          />
          <br />
          <button onClick={handleUpdateItem}>Update Item Button</button>
          <button onClick={handleDeleteItem}>Delete Item Button</button>
        </div>
      )}
      <div>
        <h2>All Items</h2>
        {items.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.date}</p>
            <img src={item.image} alt={item.title} width="100" />
            <button onClick={() => handleEditItem(item)}>Edit Button</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDataComponent;
