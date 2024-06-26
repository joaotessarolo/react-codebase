"use client";
import { menuItems } from "@/constants/menu-items";

export default function SubMenu() {
  return (
    <>
      <div id="SubMenu" className="border-b">
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
          <ul
            id="TopMenuLeft"
            className="flex items-center text-[13px] text-[#333333] px-2 h-8"
          >
            {menuItems.map((item) => (
              <li key={item.id} className="px-3 hover:underline cursor-pointer">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
