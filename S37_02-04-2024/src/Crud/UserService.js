import axios from "axios";

export const getUsers = async (setUsers) => {
  try {
    var res = await axios.get("http://localhost:5000/results");
    console.log(res.data);
    setUsers(res.data);
  } catch (error) {
    alert("Something went wrong while accessing user data");
    console.log(error);
  }
};

export const deleteUser = async (id, setUsers) => {
  try {
    var res = await axios.delete(`http://localhost:5000/results/${id}`);
    getUsers(setUsers);
  } catch (error) {
    alert("Something went wrong while removing the user data");
    console.log(error);
  }
};

export const updateUser = async (data, setUsers) => {
  try {
    var res = await axios.put(`http://localhost:5000/results/${data.id}`, data);
    getUsers(setUsers);
  } catch (error) {
    alert("Something went wrong while updating the user data");
    console.log(error);
  }
};
