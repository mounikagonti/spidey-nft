import React, { useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Explore from "../explore/Explore";

const Header = () => {
  const menuRef = useRef<any>();
  const openRef = useRef<any>();
  const closeRef = useRef<any>();
  const exploreRef = useRef<any>();

  console.log();

  const handleOnMenuClick = () => {
    menuRef.current.classList.toggle("navBar");
    openRef.current.style.display = "none";
    closeRef.current.style.display = "block";
  };

  const handleOnCloseClick = () => {
    menuRef.current.classList.toggle("navBar");
    closeRef.current.style.display = "none";
    exploreRef.current.style.display = "none";
    openRef.current.style.display = "block";
  };

  const handleOnMouseOver = () => {
    exploreRef.current.classList.add("discover");
    exploreRef.current.style.display = "block";
  };
  const handleOnMouseLeave = () => {
    exploreRef.current.classList.remove("discover");
    exploreRef.current.style.display = "none";
  };
  const handleOnExploreMouseOver = (event: any) => {
    console.log("explore", exploreRef.current.contains(event.target));
    if (exploreRef.current && exploreRef.current.contains(event.target)) {
      exploreRef.current.classList.remove("discover");
    }
  };

  return (
    <div className="header_wrapper">
      <Link href="/" className="header_left">
        NFT <span>Bazar</span>
      </Link>
      <div className="header_middle" ref={menuRef}>
        <div
          className="text"
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnExploreMouseOver}
        >
          Discover
        </div>
        <div className="text">Hotest Bids</div>
        <div className="text">Artists</div>
        <div className="text">Community</div>
      </div>
      <div
        ref={exploreRef}
        className="discover_wrapper"
        onMouseLeave={handleOnMouseLeave}
        // onMouseOut={handleOnExploreMouseOver}
      >
        <Explore />
      </div>
      <div className="header_right">
        <Link className="login" href="/login">
          Login
        </Link>
        <Link href="/login" className="sign_up">
          Sign up
        </Link>
      </div>
      <div ref={openRef} className="menu" onClick={handleOnMenuClick}>
        <BiMenu />
      </div>
      <div ref={closeRef} className="close" onClick={handleOnCloseClick}>
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default Header;
