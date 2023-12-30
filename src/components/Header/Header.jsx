import React from "react";

const Header = () => {
  return (
    <div className="ms-20 me-20">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="m-5 btn btn-ghost text-xl"><img className="h-10" src="/src/assets/images/book.png" alt="" />Knowledge Cafe</a>
        </div>
        <div className="flex-none">

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="/src/assets/images/profile.png"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
