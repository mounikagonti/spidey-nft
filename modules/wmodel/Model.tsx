import Image from "next/legacy/image";
import React, { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Model = ({ setOpenModel }: any) => {
  const [showMore, setShowMore] = useState(false);
  const smRef = useRef<any>();

  const walletArray = [
    {
      id: 1,
      link: "https://opensea.io/static/images/logos/metamask-fox.svg",
      walletName: "MetaMask",
      popularText: "Popular",
      active: true,
      isShowBtn: false,
    },
    {
      id: 2,
      link: "https://static.opensea.io/logos/walletlink-alternative.png",
      walletName: "Coinbase Wallet",
      isShowBtn: false,
      active: false,
    },
    {
      id: 3,
      link: "https://static.opensea.io/logos/walletconnect-alternative.png",
      walletName: "WalletConnect",
      isShowBtn: false,
      active: false,
    },
    {
      id: 4,
      link: "https://opensea.io/static/images/logos/phantom.svg",
      walletName: "Phantom",
      isShowBtn: true,
      btnText: "Solana",
      active: false,
    },
    {
      id: 5,
      link: "https://lh3.googleusercontent.com/uBaatYG20TOMFFUCTEgwtaI9Q6l_Nqr0qKUGQPJHjKnlLDqhwQaQbAvQku4nyH8TVxZKx96RsiFduLrcw2vqqjrr=s48",
      walletName: "BitKeep",
      isShowBtn: true,
      btnText: "BNB Chain",
      active: false,
    },
  ];
  const moreWalletsArray = [
    {
      id: 1,
      link: "https://lh3.googleusercontent.com/uSYrwIYFZ-7kwg0-P_0YKubeNhFUN_jGg9J8bPbCOYjwW94jbFCEMqHUaV35sn0bvqujkuy6M72gjIRD4NTCirsQpXc=s48",
      walletName: "Core",
      isShowBtn: true,
      btnText: "Avalanche",
    },
    {
      id: 2,
      link: "https://opensea.io/static/images/logos/glow.svg",
      walletName: "Glow",
      isShowBtn: true,
      btnText: "Solana",
    },
    {
      id: 3,
      link: "https://static.opensea.io/logos/fortmatic-alternative.png",
      walletName: "Formatic",
      isShowBtn: false,
    },
    {
      id: 4,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMctT__s6DKZuJj6wOeuOBVnzOQQBRHad2yUZuisWiQA&s",
      walletName: "Kaikas",
      isShowBtn: true,
      btnText: "Klaytn",
    },
    {
      id: 5,
      link: "https://static.opensea.io/logos/bitski-alternative.png",
      walletName: "Bitski",
      isShowBtn: false,
    },
    {
      id: 6,
      link: "https://play-lh.googleusercontent.com/waPoKLrd8VeNAmRt6Nv0k4Dph8NHkMjqnreU9UHBKwhLCs_02C7yq4P5k0ebd0G6qZw",
      walletName: "Solflare",
      isShowBtn: true,
      btnText: "Solana",
    },
    {
      id: 7,
      link: "https://opensea.io/static/images/logos/venly.svg",
      walletName: "Venly",
      isShowBtn: false,
    },
    {
      id: 8,
      link: "https://static.opensea.io/logos/dapper-icon.png",
      walletName: "Dapper",
      isShowBtn: false,
    },
    {
      id: 9,
      link: "https://static.opensea.io/logos/authereum-alternative.png",
      walletName: "Authereum",
      isShowBtn: false,
    },
    {
      id: 10,
      link: "https://static.opensea.io/logos/torus-alternative.png",
      walletName: "Torus",
      isShowBtn: false,
    },
    {
      id: 11,
      link: "https://static.opensea.io/logos/portis-alternative.svg",
      walletName: "Portis",
      isShowBtn: false,
    },
    {
      id: 12,
      link: "https://opensea.io/static/images/logos/opera-touch-alternative.svg",
      walletName: "OperaTouch",
      isShowBtn: false,
    },
    {
      id: 13,
      link: "https://static.opensea.io/logos/trust-alternative.png",
      walletName: "Trust",
      isShowBtn: false,
    },
  ];

  const handleOnClick = () => {
    setShowMore((prev: boolean) => !prev);
    smRef.current.style.overflowY = "scroll";

    if (showMore) {
      smRef.current.style.overflowY = "inherit";
    }
  };

  const handleOnCloseClick = () => {
    // smRef.current.style.display = "none";
    setOpenModel(false);
  };

  return (
    <div ref={smRef} className="model_wrapper">
      <div className="close_btn" onClick={handleOnCloseClick}>
        <AiOutlineClose />
      </div>
      <div className="wallet_model">
        <h1 className="heading_text">Connect your wallet</h1>
        <p className="small_text">
          If you don't have a wallet, you can select a provider and create one
          now.
        </p>
        <div className="wallet_container">
          {showMore ? (
            <div className="s_more_wallets">
              {walletArray.map((item) => (
                <div className="wallet_wrapper" key={item.id}>
                  <div className="wallet_left">
                    <div className="wallet_img">
                      <Image
                        src={item.link}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="wallet_name">{item.walletName}</div>
                  </div>
                  {item?.active && (
                    <div className="wallet_btn">
                      <button className="btn">{item?.popularText}</button>
                    </div>
                  )}
                  {item?.isShowBtn && (
                    <button className="second_btn">{item?.btnText}</button>
                  )}
                </div>
              ))}
              {moreWalletsArray.map((item) => (
                <div className="wallet_wrapper" key={item.id}>
                  <div className="wallet_left">
                    <div className="wallet_img">
                      <Image
                        src={item.link}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="wallet_name">{item.walletName}</div>
                  </div>

                  {item?.isShowBtn && (
                    <button className="second_btn">{item?.btnText}</button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <>
              {walletArray.map((item) => (
                <div className="wallet_wrapper" key={item.id}>
                  <div className="wallet_left">
                    <div className="wallet_img">
                      <Image
                        src={item.link}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="wallet_name">{item.walletName}</div>
                  </div>
                  {item?.active && (
                    <div className="wallet_btn">
                      <button className="btn">{item?.popularText}</button>
                    </div>
                  )}
                  {item?.isShowBtn && (
                    <button className="second_btn">{item?.btnText}</button>
                  )}
                </div>
              ))}
            </>
          )}

          <div className="s_more" onClick={handleOnClick}>
            {showMore ? "Show Less" : "Show More"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
