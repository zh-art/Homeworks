import { useEffect } from 'react'
import { useUploadHook } from './hooks/useUploadHook';
import firebase from './firebase';

export const Upload = () => {
  const {
    files,
    percent,
    handleChange,
    handleUpload,
    handleGetAll
  } = useUploadHook();

  useEffect(() => {
    handleGetAll();
  }, [])

  const deleteImage = async (imageName) => {
    const imageRef = firebase.storage().ref('images').child(imageName);
  
    try {
      await imageRef.delete();
      console.log('Imagen eliminada correctamente');
      handleGetAll();
    } catch (error) {
      console.error('Hubo un error al eliminar la imagen: ', error);
    }
  };
  

  return (
    <div>
      <input type="file" onChange={handleChange} accept="image/*" />
      <button onClick={handleUpload}>Upload to Firebase</button>
      <p>{percent} % done</p>
  
      {
        files.map((item, key) => (
          <div key={key}>
            <img width="100px" src={item.url} alt="Uploaded File" />
            <button onClick={() => deleteImage(item.name)}>Eliminar</button>
          </div>
        ))
      }
    </div>
  );  
}
