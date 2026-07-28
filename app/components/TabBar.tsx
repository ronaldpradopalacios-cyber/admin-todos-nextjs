// https://tailwindcomponents.com/component/radio-buttons-1
"use client";
import { useState } from "react";

interface Props {
  // Add any props if needed
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  currentTab = 1,
  tabOptions = [1, 2, 3, 4],
}: Props) => {
  const classNameTab = `grid grid-cols-${tabOptions.length} w-full space-x-2 rounded-xl bg-gray-200 p-2`;

  const [selectedTab, setSelectedTab] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelectedTab(tab);
  };

  return (
    <div className={classNameTab}>
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input
            type="radio"
            id={tab.toString()}
            className="peer hidden"
            name="tab"
            checked={selectedTab === tab}
            onChange={() => onTabSelected(tab)}
          />
          <label
            onClick={() => onTabSelected(tab)}
            htmlFor={tab.toString()}
            className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
