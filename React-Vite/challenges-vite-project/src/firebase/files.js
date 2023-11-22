import { storage } from "./config";
import { ref, uploadBytesResumable, listAll } from "firebase/storage";

export const upload = (file) => {
  if (!file) {
    alert("Please choose a file first!");
  }

  const storageRef = ref(storage, `/files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return uploadTask;
}

export const getAll = async () => {
  const listRef = ref(storage, '/files/');
  return listAll(listRef);
}
