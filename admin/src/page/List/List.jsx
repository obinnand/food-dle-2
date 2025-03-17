import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const fatchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fatchList();
    if (response.data.success) {
      toast.success("Food have been Remove");
    } else {
      toast.error("Not Working");
    }
  };
  useEffect(() => {
    fatchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Foods list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>price</b>
          <b>Action</b>
        </div>
        {list.map((Item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + Item.image} alt="" />
              <p>{Item.name}</p>
              <p>{Item.category}</p>
              <p>${Item.price}</p>
              <p onClick={() => removeFood(Item._id)} className="cursor">
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
