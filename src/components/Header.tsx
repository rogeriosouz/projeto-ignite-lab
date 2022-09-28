import { List, X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { SideBar } from './Sidebar';

export function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveMenu(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 z-10 w-full py-5 flex items-center lg:justify-center justify-between lg:px-0 px-6 bg-gray-700 border-b border-gray-600">
        <Logo />
        <div className="items-center lg:hidden flex gap-2">
          <p className="font-normal text-[14px]"> Aulas</p>
          {activeMenu ? (
            <X
              onClick={() => setActiveMenu((v) => !v)}
              size={40}
              weight="thin"
              color="#81D8F7"
            />
          ) : (
            <List
              onClick={() => setActiveMenu((v) => !v)}
              size={40}
              weight="thin"
              color="#81D8F7"
            />
          )}
        </div>
      </header>
      {activeMenu && <SideBar isActiveMobile={activeMenu} />}
    </>
  );
}
