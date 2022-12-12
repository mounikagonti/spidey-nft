import React from "react";
import Image from "next/legacy/image";

const Explore = () => {
  const exploreArray = [
    {
      id: 1,
      icon: "https://opensea.io/static/images/icons/allnfts-light.svg",
      text: "ALL NFTs",
    },
    {
      id: 2,
      icon: "https://opensea.io/static/images/icons/art-light.svg",
      text: "Art",
    },
    {
      id: 3,
      icon: "https://opensea.io/static/images/icons/collectibles-light.svg",
      text: "Collectibles",
    },
    {
      id: 4,
      icon: "https://opensea.io/static/images/icons/domain-names-light.svg",
      text: "Domain Names",
    },
    {
      id: 5,
      icon: "https://opensea.io/static/images/icons/music-light.svg",
      text: "Music",
    },
    {
      id: 6,
      icon: "https://opensea.io/static/images/icons/photography-category-light.svg",
      text: "Photography",
    },
    {
      id: 7,
      icon: "https://opensea.io/static/images/icons/sports-light.svg",
      text: "Sports",
    },
    {
      id: 8,
      icon: "https://opensea.io/static/images/icons/trading-cards-light.svg",
      text: "Trading Cards",
    },
    {
      id: 9,
      icon: "https://opensea.io/static/images/icons/utility-light.svg",
      text: "Utility",
    },
    {
      id: 10,
      icon: "https://opensea.io/static/images/icons/virtual-worlds-light.svg",
      text: "Virtual Worlds",
    },
  ];

  return (
    <>
      {exploreArray.map((item) => (
        <div className="explore_wrapper" key={item.id}>
          <div className="img">
            <Image src={item.icon} layout="fill" objectFit="cover" />
          </div>
          <div className="title">{item.text}</div>
        </div>
      ))}
    </>
  );
};

export default Explore;
