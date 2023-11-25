import { useState } from "react";

export const MobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
    <button className={`nav__hamburger ${isMobileNavOpen ? 'nav__hamburger--open' : ''}`} onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div className={`nav__mobile ${isMobileNavOpen ? 'nav__mobile--open' : ''}`}>
      <p>Mobile Nav</p>
      </div>
    </>
  )
};