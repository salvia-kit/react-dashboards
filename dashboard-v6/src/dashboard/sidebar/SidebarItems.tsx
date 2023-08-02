import { Link, useLocation } from "react-router-dom";
import { data } from "./data";

const style = {
  inactive: "text-gray-400",
  active: "font-medium text-white",
  link: "flex items-center justify-start my-2 p-4 text-sm w-full hover:text-white",
};

export function SidebarItems() {
  const { pathname } = useLocation();
  return (
    <ul className="md:pl-6">
      {data.map((item) => (
        <li key={item.title}>
          <Link to={item.link}>
            <span
              className={`${style.link} 
               ${item.link === pathname ? style.active : style.inactive}`}
            >
              <span>{item.icon}</span>
              <span className="mx-4">{item.title}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
