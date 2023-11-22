import { useState } from 'react';
import { useEffect } from 'react';
import { useCollection } from './firebase/firestore';

export const Crud = () => {
  const [user, setUser] = useState({ name: '' });
  const { add, getAll, isPending, results, update, remove } = useCollection("users");

  const getAllDocs = async () => {
    await getAll([]);
  }

  const save = async () => {
    await add( user );
    await getAllDocs();
  }

  const handleSetUser = (event) => {
    setUser({ name: event.target.value });
  }

  const updateDoc = async (id, updatedUser) => {
    await update(id, updatedUser);
    await getAllDocs(); 
  }
  
  const deleteDoc = async (id) => {
    await remove(id);
    await getAllDocs(); 
  }
  

  useEffect(() => {
    getAllDocs();
  }, [])

  return (
    <>
      <input type="text" onChange={handleSetUser} value={user.name} />
      <button type="button" onClick={save}>Guardar</button>
      { isPending ? <span> Saving... </span> : '' }
      <ul>
        { results.map(item => {
          return <li key={item.id}>{ JSON.stringify(item) }</li>
        })}
      </ul>
      <ul>
  {results.map(item => (
    <li key={item.id}>
      {JSON.stringify(item)}
      <button onClick={() => updateDoc(item.id, { ...item, name: 'Nuevo Nombre' })}>Actualizar</button>
      <button onClick={() => deleteDoc(item.id)}>Eliminar</button>
    </li>
  ))}
</ul>

    </>
  )
}
