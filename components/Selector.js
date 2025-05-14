import React, { useEffect, useState } from "react";
import { Dropdown } from "@nextui-org/react";
import {
  COIN_1,
  COIN_2,
  COIN_3,
  COIN_4,
  COIN_5,
  COIN_6,
  COIN_7,
  COIN_8,
  DEFAULT_VALUE,
  ETH,
} from "../utils/saleToken";

const Selector = ({ defaultValue, ignoreValue, setToken, id }) => {
  // Updated colors to match Pokémon themes
  const tokenColors = {
    [ETH]: "#627EEA",            // Ethereum blue
    [COIN_1]: "#FFCB05",         // Pika USD - Pikachu yellow
    [COIN_2]: "#3E9709",         // Bulba Coin - Bulbasaur green
    [COIN_3]: "#FF8324",         // USD Chard - Charizard orange
    [COIN_4]: "#3B9BF1",         // squirtleETH - Squirtle blue
    [COIN_5]: "#B3A9A3",         // Pidgey Token - Pidgey brown/tan
    [COIN_6]: "#9262CC",         // MewtwoETH - Mewtwo purple
    [COIN_7]: "#7B62A3",         // Gengar INR - Gengar purple      
    [COIN_8]: "#BB7091",        // Eevee Token - Eevee brown/pink
    [DEFAULT_VALUE]: "#6c7284",  // Default gray
  };

  const menu = [
    { key: ETH, name: ETH },
    { key: COIN_1, name: COIN_1 },
    { key: COIN_2, name: COIN_2 },
    { key: COIN_3, name: COIN_3 },
    { key: COIN_4, name: COIN_4 },
    { key: COIN_5, name: COIN_5 },
    { key: COIN_6, name: COIN_6 },
    { key: COIN_7, name: COIN_7 },
    { key: COIN_8, name: COIN_8 },
  ];

  const [selectedItem, setSelectedItem] = useState();
  const [menuItems, setMenuItems] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Only run client-side
  useEffect(() => {
    setMounted(true);
    setSelectedItem(defaultValue);
    setMenuItems(getFilteredItems(ignoreValue));
  }, [defaultValue, ignoreValue]);

  function getFilteredItems(ignoreValue) {
    return menu.filter((item) => item["key"] !== ignoreValue);
  }

  // Render nothing on server
  if (!mounted) {
    return <div className="bg-gray-700 px-3 py-2 rounded-lg h-10"></div>;
  }

  const CustomButton = () => {
    return (
      <div className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 md:px-[7rem] px-[15rem] py-2 rounded-lg cursor-pointer transition-colors">
        <div 
          className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: tokenColors[selectedItem] || tokenColors[DEFAULT_VALUE] }}
        >
          <span className="text-xs text-white font-bold">
            {selectedItem ? selectedItem.charAt(0) : "?"}
          </span>
        </div>
        <span className="text-white font-medium">{selectedItem}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    );
  };

  const CustomMenuItem = ({ item }) => {
    return (
      <div className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-700 rounded-md cursor-pointer transition-colors">
        <div 
          className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: tokenColors[item.key] || tokenColors[DEFAULT_VALUE] }}
        >
          <span className="text-xs text-white font-bold">
            {item.key.charAt(0)}
          </span>
        </div>
        <span className="text-white">{item.name}</span>
      </div>
    );
  };

  return (
    <Dropdown>
      <Dropdown.Button
        css={{
          backgroundColor: "transparent",
          padding: 0,
          minWidth: "auto",
          height: "auto",
        }}
      >
        <CustomButton />
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Token Selection"
        css={{
          backgroundColor: "#1f2937",
          borderRadius: "12px",
          padding: "8px",
          width: "160px",
        }}
        items={menuItems}
        onAction={(key) => {
          setSelectedItem(key);
          setToken(key);
        }}
      >
        {(item) => (
          <Dropdown.Item
            aria-label={id}
            key={item.key}
            textValue={item.name}
            css={{
              padding: 0,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <CustomMenuItem item={item} />
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Selector;