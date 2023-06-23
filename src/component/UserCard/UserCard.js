import React from "react";

const UserCard = ({ user }) => {
  return (
    <>
      <div className="w-[350px] col-span-3 m-2">
        <div className="p-5 border border-black rounded-3xl relative">
          <div className="w-full h-[200px]">
            <img
              src={user?.avatar}
              alt="user-img"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div
            className="absolute bg-black w-8 h-8 -top-2 -right-2 rounded-full 
          text-white flex items-center justify-center"
          >
            {user?.id}
          </div>
        </div>
        <h2 className="text-center">{user?.first_name}</h2>
      </div>
    </>
  );
};

export default UserCard;
