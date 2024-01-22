import instance from ".";
// "." means from wherever it is in the api folder ergo neighbor
//
// functions named in camelCasing
//
const getAllPets = async () => {
  const res = await instance.get("pets");
  return res.data;
};
// function   getAllPets ()  {

//   return;
//   //   return all pets from petsData by importing data
// }
const getPetById = async (id) => {
  const res = await instance.get(`pets/${id}`);
  return res.data;
};
//   return pet; //pet with the same id

const addPet = async (name, type, adopted, image) => {
  const res = await instance.post("pets/", {
    name,
    type,
    adopted,
    image,
  });
  return res.data;
};
const updatePetById = async (id, name, type, adopted, image) => {
  const res = await instance.put(`pets/${id}`, {
    name: name,
    type: type,
    adopted: 1,
    image: image,
  });
  return res.data;
};
//updates the pet with the same id
const deletePetById = async (id) => {
  const res = await instance.delete(`pets/${id}`);
  return res.data;
};
//deletes the pet with the same id
export { addPet, deletePetById, getAllPets, getPetById, updatePetById };
