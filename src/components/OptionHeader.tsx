import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  LegacyRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency, changeLanguage } from "../redux/globleSlice";
import useOnClickOutside from "../hooks/useOnClickOutSide";
type Props = {
  children: ReactNode;
  type: "language" | "currency";
  link: boolean;
};
const OptionHeader = ({ children, type, link }: Props) => {
  let data: string[] = [];
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  switch (type) {
    case "language":
      data = ["English", "Vietnamese"];
      break;
    case "currency":
      data = ["USD", "VND"];
      break;
    default:
      break;
  }
  const divRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(divRef, () => setIsOpen(false));
  return (
    <div ref={divRef} className="relative hover:text-color-secondary">
      <button
        className="flex items-center gap-2"
        onClick={() => {
          if (!link) {
            setIsOpen(true);
          } else {
            setIsOpen(!isOpen);
          }
        }}
      >
        <p>{value || children}</p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
      {link && isOpen && (
        <ul className="p-2 bg-color-white rounded-md absolute transitionY">
          {data.length > 0 &&
            data.map((item, index) => (
              <li
                className="text-color-black pl-1 pr-4 py-2 hover:bg-color-secondary rounded-lg hover:text-color-white cursor-pointer select-none"
                key={index}
                value={item}
                onClick={() => {
                  setIsOpen(false);
                  setValue(item);
                  type === "language"
                    ? dispatch(changeLanguage(item))
                    : dispatch(changeCurrency(item));
                }}
              >
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default OptionHeader;
