import React from "react";
import Image from "next/legacy/image";

const ECollections = () => {
  const nftArray = [
    {
      id: 1,
      imageOne:
        "https://i.seadn.io/gcs/files/528e387540600a78c5fff3bbd1be67d0.gif?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/9fe73ad5325042174b81c22908b03caa.png?auto=format&w=256",
      nftName: "Dori Samurai",
    },
    {
      id: 2,
      imageOne:
        "https://i.seadn.io/gcs/files/47fd89fb8ec028bcccd88f46b599b8d8.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/d7936464d55988206c1b16c6929856f6.jpg?auto=format&w=256",
      nftName: "Valhalla",
    },
    {
      id: 3,
      imageOne:
        "https://i.seadn.io/gcs/files/254b4aa32ac0d30f2f8e70ebc85dd1f6.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/3130af99dac1d715ac3f50921eee6d1c.png?auto=format&w=256",
      nftName: "FAEBL",
    },
    {
      id: 4,
      imageOne:
        "https://i.seadn.io/gcs/files/9b903ff2cf855f504a2258bce80593a1.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/9b903ff2cf855f504a2258bce80593a1.png?auto=format&w=256",
      nftName: "Cyber Samurai",
    },
    {
      id: 5,
      imageOne:
        "https://i.seadn.io/gcs/files/2d5ac659018b2db23503042e777f077f.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/2430c36e1446d458fd383bf655643b2e.png?auto=format&w=256",
      nftName: "CW Females",
    },
    {
      id: 6,
      imageOne:
        "https://i.seadn.io/gcs/files/6cc3f144cf4e109ac033d556ba67d39e.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/6cc3f144cf4e109ac033d556ba67d39e.png?auto=format&w=256",
      nftName: "Expressionism",
    },
    {
      id: 7,
      imageOne:
        "https://i.seadn.io/gcs/files/abefcd355a077ddf581f09f9ba5ffe5d.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/c13e631369c0554c2615039eb01e9d92.png?auto=format&w=256",
      nftName: "Mutant y00ts",
    },
    {
      id: 8,
      imageOne:
        "https://i.seadn.io/gcs/files/93fbc8c057b3ada3881445550f4f4ad5.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/41430968e84727ec2cbc2e41325f314e.png?auto=format&w=256",
      nftName: "Dreamy Official",
    },
    {
      id: 9,
      imageOne:
        "https://i.seadn.io/gcs/files/a7792df87f0330dab17029fbd5413bc8.jpg?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/16f7653ba47e058d39b38bc2c9429d16.jpg?auto=format&w=256",
      nftName: "Yummi Gummi",
    },
    {
      id: 10,
      imageOne:
        "https://i.seadn.io/gcs/files/4c493e0d14a207fc602a624bd9725ada.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gae/6PO1y0ImccJNhUuirylYVpLEzyaEMmfI1ch_sGU_LvgFv_CkUKCzfqnuU5D2PARLLaq2UR8L4zfkCEOHjpjzVcox64FifvYITJtH9Q?auto=format&w=256",
      nftName: "Abstraqueens",
    },
    {
      id: 11,
      imageOne:
        "https://i.seadn.io/gcs/files/7eaa5582a3dfde99b560580fa9dc3abc.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/7eaa5582a3dfde99b560580fa9dc3abc.png?auto=format&w=256",
      nftName: "Hallucination",
    },
    {
      id: 12,
      imageOne:
        "https://i.seadn.io/gcs/files/5303d8f6c96f7e91e39f4d6f927998d1.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/b400429938e2ecf04054ff165534f000.png?auto=format&w=256",
      nftName: "The Samurai",
    },
    {
      id: 13,
      imageOne:
        "https://i.seadn.io/gcs/files/e0dc68580426e68b79292c34e748be45.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/c45b686c30cdb6bfc28126a73eb2f869.png?auto=format&w=256",
      nftName: "Dori Zombies",
    },
    {
      id: 14,
      imageOne:
        "https://i.seadn.io/gcs/files/06c8baa88f7cef25805e7564b1381510.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/dc6055507713a12334f1297c962ba74f.png?auto=format&w=256",
      nftName: "PFP by anon",
    },
    {
      id: 15,
      imageOne:
        "https://i.seadn.io/gcs/files/40c4cf798d30161df7a673b818bfb83f.png?auto=format&w=3840",
      imageTwo:
        "https://i.seadn.io/gcs/files/601bc9bcacccb4bfc3e35f8b829d5f22.gif?auto=format&w=256",
      nftName: "Bruh Pills",
    },
  ];
  return (
    <div className="collections_wrapper">
      <h1 className="collection_text">Explore collections</h1>
      <div className="array_wrapper">
        {nftArray.map((item: any) => (
          <div className="nft_wrapper" key={item?.id}>
            <div className="nft_top">
              <div className="nftImg">
                <Image
                  src={item?.imageOne}
                  layout="fill"
                  objectFit="cover"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div className="nft_bottom">
              <div className="nft_left">
                <div className="nftImgTow">
                  <Image
                    src={item?.imageTwo}
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="nft_right">{item?.nftName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ECollections;
