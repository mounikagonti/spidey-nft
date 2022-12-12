import Image from "next/legacy/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { RiVipDiamondFill } from "react-icons/ri";
import Model from "../wmodel/Model";

const Banner = () => {
  const [openModel, setOpenModel] = useState<any>(false);
  console.log("openModel", openModel);
  const modelRef = useRef<any>();
  const handleOnCreateClick = () => {
    setOpenModel(true);
  };
  return (
    <div className="banner_wrapper">
      <div className="banner_left">
        <div className="bold_text">
          Discover, Collect, & Sell Awesome <span>NFTs</span>
        </div>
        <div className="normal_text">
          World's fast growing NFTs bazar based in India, Kolkata.
        </div>
        <div className="btn_wrapper">
          <Link href="/collections" className="explore btn">
            Explore
          </Link>
          <div className="create btn" onClick={handleOnCreateClick}>
            Create
          </div>
          {openModel ? (
            <div ref={modelRef} className="model_container">
              <Model setOpenModel={setOpenModel} />
            </div>
          ) : null}
        </div>
        <div className="header_left_bottom_wrapper">
          <div className="collection_wrapper">
            <div className="number">10k+</div>
            <div className="small_text">Collectibles</div>
          </div>
          <div className="collection_wrapper">
            <div className="number">8.2k+</div>
            <div className="small_text">Auctions</div>
          </div>
          <div className="collection_wrapper">
            <div className="number">32k+</div>
            <div className="small_text">Artists</div>
          </div>
        </div>
        <div className="bannerBottom_wrapper">
          <div className="icon">
            <BsStars />
          </div>
          <div className="bannerBottomText">Explore Awesome NFTs</div>
        </div>
      </div>
      <div className="banner_right">
        <div className="banner_right_top">
          {/* <div className="placed_bid_wrapper"> */}
          <div className="img One">
            <Image
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="img Two">
            <Image
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="img Three">
            <Image
              src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=600"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="bid_text">50+ placed bids</div>
          {/* </div> */}
        </div>
        <div className="unicorn_wrapper">
          <div className="unicorn">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4Yhxb7V2uTr-ERkx7PRHipjSQ_9xOIctRY5lSmop2tS7ZdSrW4uuSzmzlD69Qlpuhz0&usqp=CAU"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className="banner_right_bottom">
          <div className="spidey_text">Spidey Gem</div>
          <div className="currentBid_wrapper">
            <div className="bidLeft">
              <div className="smallText">Current Bid</div>
              <div className="ethereum">
                <div className="eth">
                  <FaEthereum />
                </div>
                <div className="num">2.9</div>
              </div>
            </div>
            <div className="bidRight">
              <div className="diamond">
                <div className="diam">
                  <RiVipDiamondFill />
                </div>
                <div className="item">Rare item</div>
              </div>
              <div className="rate">
                $13,129.23 <span>USD</span>
              </div>
            </div>
          </div>
          <div className="btn">Place a bid</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
