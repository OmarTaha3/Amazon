import React from 'react'

const ScrollToTop = () => {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="w-full text-center text-sm py-4 bg-[#37475A] cursor-pointer hover:bg-[#485769] duration-100"
    >
      Scroll to Top
    </div>
  );
}

export default ScrollToTop
