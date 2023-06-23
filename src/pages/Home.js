import React, { useEffect, useState } from "react";
import UserCard from "../component/UserCard/UserCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
  });
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users?page=2");
      const data = await res.json();
      setUserData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <div className="py-5 mx-auto flex justify-center">
          <form className="flex justify-center space-x-4">
            <div className="flex w-[350px] border border-[#464660] rounded-lg overflow-hidden items-center pl-2">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              <input
                type="text"
                className="p-3 w-full outline-none border-none text-gray-500"
                placeholder="Search..."
                value={formValue.name}
                onChange={handlerChange}
                name="name"
                autoComplete="off"
              />
            </div>

            <button className="bg-blue-500 text-white p-2 px-5 rounded-lg hover:bg-blue-600">
              Search
            </button>
          </form>
        </div>
        <div className="mx-10 ">
          <div className="grid grid-cols-9 gap-2">
            {userData
              ?.filter((item) =>
                formValue.name === "" || formValue.name === null
                  ? item
                  : item.first_name
                      .toLowerCase()
                      .includes(formValue.name.toLowerCase())
              )
              ?.map((user, index) => (
                <UserCard key={index} user={user} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
