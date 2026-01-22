import React from 'react';

const Nav = ({ itemsList, ...props }) => {
  return (
    <>
      {itemsList && (
        <ul {...props} className="flex items-center justify-center gap-8">
          {itemsList.map((item) => (
            <li>
              <a href={`${item.href}`} className="hover:text-gray-300">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Nav;
