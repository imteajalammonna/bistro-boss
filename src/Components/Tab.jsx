import { useState } from 'react';

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="w-full">
      <div className="flex border-gray-200 justify-center my-10">
        {tabs.map(tab => (
          <button
          key={tab.id}
          className={`${
            activeTab === tab.id ? ' border-b-4 text-[#FACC15] border-yellow-400' : 'text-gray-200'
          }  text-gray-800 font-semibold py-2 px-4 hover:text-yellow-400 transition-all`}
          onClick={() => handleClick(tab.id)}
        >
          {tab.title}
        </button>
        ))}
      </div>
      <div className="mt-4">{tabs.find(tab => tab.id === activeTab).content}</div>
    </div>
  );
};

export default Tab;
