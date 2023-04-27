import { Grid } from "@mui/material";
import React, { useState } from "react";
import mainimage from "../Image/OnlyMascot.png";
import logoicon from "../Image/bg-remove-loge-side.png";
import { BsPlayCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import deximg from "../Image/dex.png";

import dosabombimg from "../Image/Logo(2).png";
import nftcollectionimg from "../Image/bg-remove-loge-side.png";

import pinksalelogo from "../Image/pinkswap.png";

import Modal from "react-bootstrap/Modal";
import video1 from "../Video/squidgamevideo.mp4";
import pinksalepartners from "../Image/pink-bg.png";
import dexviewpartners from "../Image/dexviewnew-bg.png";
import cntokens from "../Image/cntoken.png";
import muunshots from "../Image/muunshots.webp";
import coinsniper from "../Image/coinsniper.png";
import coinhunt from "../Image/coinhunt.png";
import Roadmap from "./Roadmap";
import { AiOutlineAim } from "react-icons/ai";
import squidwhatimg from "../Image/SQUIDGME (2).jpg";

export default function Main() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);
  return (
    <>
      <div className="container-kws p-t-2">
        <Grid container>
          <Grid
            item
            sm={12}
            xs={12}
            md={12}
            lg={6}
            xl={6}
            className="m-q-a-d-n_1200 t-a-c"
          >
            <div className="sec-col">
              <div>
                <img src={logoicon} alt="" className="max-w-100 " />
              </div>
              <div>
                <h1 className="f-s-2 c-b f-w-900 m-t-1_5 m-b-1_5 mobile-h1">
                  YOUR FAVORITE COIN'S <br /> FAVORITE COIN
                </h1>
              </div>
              <p className="f-s-1_5 c-b f-w-500 l-h-24 mobile-pa">
                SquidGME $GME is a Decentralized Web3 Artificial Intelligence
                Project creating open-access to AI voice modules using speech
                synthesis artificial intelligence and deep learning.
              </p>

              <div className="row p-t-4 p-b-2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <button onClick={handleShow} className="light">
                    <BsPlayCircleFill className="f-s-3 m-r-0_5" />
                    PLAY VIDEO
                  </button>

                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header>
                      <RxCross2 className="f-s-2 c-p" onClick={handleClose} />
                      {/* <Modal.Title>Modal heading</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                      <iframe width="100%" height="315" src={video1}></iframe>
                    </Modal.Body>
                  </Modal>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="pinksalebu">
                    <a
                      href="https://www.pinksale.finance/?chain=BSC"
                      target="_blank"
                      className="button-sec"
                    >
                      {" "}
                      <img src={pinksalelogo} alt="" className="w-20" />
                      <span className="f-s-1_2 f-w-600 m-l-0_5 c-b">
                        PINK SALE
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="pinksalebu">
                    <a
                      href="https://www.dexview.com/"
                      target="_blank"
                      className="button-sec"
                    >
                      {" "}
                      <img src={deximg} alt="" className="w-20" />
                      <span className="f-s-1_2 f-w-600 m-l-0_5 c-b">
                        DexView
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="row m-t-1">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <a href="/" className="button-sec">
                    {" "}
                    <img src={pinksalelogo} alt="" className="w-20" />
                    <span className="f-s-1_2 f-w-600 m-l-0_5 c-b">
                      PINK SALE
                    </span>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <a href="/" className="button-sec">
                    {" "}
                    <img src={deximg} alt="" className="w-20" />
                    <span className="f-s-1_2 f-w-600 m-l-0_5 c-b">DexView</span>
                  </a>
                </div>
              </div> */}
              {/* <p className="f-s-1_3 c-b  f-w-600 m-t-1_5">
                CA:0xbC93891CF9aBC3F8124B2eCE3727E208C4236C58
              </p> */}
            </div>
          </Grid>
          <Grid item sm={12} xs={12} md={12} lg={6} xl={6}>
            <div className="main-img  t-a-c">
              <img src={mainimage} alt="" className="max-w-50" />
            </div>
          </Grid>
          <Grid
            item
            sm={12}
            xs={12}
            md={12}
            lg={6}
            xl={6}
            className="m-q-b-d-n_1200"
          >
            <div className="sec-col">
              <div>
                <img src={logoicon} alt="" className="m-t-5 " />
              </div>
              <div>
                <h1 className="f-s-2 c-b f-w-900 m-t-3 m-b-1_5 ">
                  YOUR FAVORITE COIN'S <br /> FAVORITE COIN
                </h1>
              </div>
              <p className="f-s-1_5 c-b f-w-500 l-h-24">
                SquidGME $GME is a Decentralized Web3 Artificial Intelligence
                Project creating open-access to AI voice modules using speech
                synthesis artificial intelligence and deep learning.
              </p>
              <div className="p-t-2">
                {/* <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <button className="button-pri">PEDIGREE</button>
                </div> */}
                {/* <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <button className="button-pri">DOSA BOMB</button>
                </div> */}
                <button onClick={handleShow} className="light play-bu ">
                  <BsPlayCircleFill className="f-s-3 m-r-0_5" />
                  PLAY VIDEO
                </button>

                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header>
                    <RxCross2 className="f-s-2 c-p" onClick={handleClose} />
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                  </Modal.Header>
                  <Modal.Body>
                    <iframe width="100%" height="315" src={video1}></iframe>
                  </Modal.Body>
                </Modal>
                {/* <div className="row m-t-1">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <button className="button-pri">BUY DOSA</button>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <button className="button-pri">NEWS</button>
                  </div>
                </div> */}
              </div>
              <div className="row m-t-1">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  {/* <button className="button-pri-no">PinkSale</button> */}
                  {/* <img src={pinksale} alt="" /> */}
                  <a
                    href="https://www.pinksale.finance/?chain=BSC"
                    target="_blank"
                    className="button-sec"
                  >
                    {" "}
                    <img src={pinksalelogo} alt="" className="w-20" />
                    <span className="f-s-1_2 f-w-600 m-l-0_5 c-b">
                      PINK SALE
                    </span>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  {/* <button className="button-pri-no">DEXView</button> */}
                  {/* <img src={deximg} alt="" /> */}
                  <a
                    href="https://www.dexview.com/"
                    target="_blank"
                    className="button-sec"
                  >
                    {" "}
                    <img src={deximg} alt="" className="w-20" />
                    <span className="f-s-1_2 f-w-600 m-l-0_5 c-b">DexView</span>
                  </a>
                </div>
              </div>
              {/* <div className="f-s-1_3 c-b  f-w-600 m-t-1_5">
                CA:0xbC93891CF9aBC3F8124B2eCE3727E208C4236C58
              </div> */}
            </div>
          </Grid>
        </Grid>
      </div>

      <section className="mint m-t-7"></section>

      <section className="pass-bo" id="aboutsquid">
        <div className="container-kws-new p-t-9">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div>
                <h1 className="f-s-3 c-b">
                  WHAT IS <span className="f-w-900 ">SquidGME </span>
                </h1>
                <p className="f-s-1 f-w-500 pass__para-pass c-b">
                  SquidGME $GME is a Decentralized Web3 Artificial Intelligence
                  Project creating open-access to AI voice modules using speech
                  synthesis artificial intelligence and deep learning. $GME has
                  a mission to spread AI voice Technology by offering simple and
                  unlimited usage to the public! The SquidGME AI Voice Bot will
                  also be used to harness viral organic growth to our project
                  whilst the $GME Coin will yield massive reflection dividends
                  that are automatically distributed to holders!
                </p>
                <br />
                <p className="f-s-1 f-w-500 pass__para-pass c-b">
                  SquidGME is fully decentralized with a renounced contract
                  while also being audited by a well-trusted web3 security firm.
                  SquidGME is a hyped alpha project supported by prominent
                  crypto Influencers and a successful developer that owns a
                  social media marketing firm with high experience and
                  connections in the crypto industry. Our plan is to gain
                  traction from the power of the community, influencer-team, and
                  the AI utilities while also harnessing the exterior hype that
                  is trending within the crypto industry to make SquidGME the
                  next blue-chip cryptocurrency!
                </p>
              </div>
              <div>
                <h1 className="f-s-3 c-b m-t-2">
                  Squid<span className="f-w-900">GME</span>
                </h1>
                <div className="m-t-2 f-s-1_5 f-w-600 c-b contract-audit">
                  Contract Audit + Renounced Ownership + Pinksale Antibot:
                </div>
                <div className="m-t-1 f-w-600 c-b">
                  <p className="c-b">
                    <AiOutlineAim className="m-r-0_5 f-s-1_3 c-b " />
                    Contract Audited by Cyberscope
                  </p>
                  <p className="c-b">
                    <AiOutlineAim className="m-r-0_5 f-s-1_3 c-b" />
                    Antibot: Extensive launch protection-protocols by Pinksale
                    Antibot.
                  </p>
                  <p className="c-b">
                    <AiOutlineAim className="m-r-0_5 f-s-1_3 c-b" />
                    Renounced Contract: Token Contract to be Renounced on
                    Launch, officially setting the token and its’ functions
                    unchangeable. (LBank, Bitmart, Mexc, Gate io, CEX Addresses
                    Whitelisted before Renounce)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="p-t-4 m-l-2 composition">
                <img
                  src={squidwhatimg}
                  alt=""
                  className="max-w-100 b-r-10 b-r-10 composition__photo composition-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-t-7 ">
        <div className="container-kws-new">
          <div className="t-a-c m-b-2">
            <img src={nftcollectionimg} alt="" className="max-w-75" />
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="squidgme-img p-t-4 ">
                <img src={dosabombimg} alt="" className="max-w-75 b-r-10 composition__photo composition-img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="p-t-1">
                <h3 className="f-w-700 f-co fo-na c-b">HOW IT WORKS</h3>
                <p className="f-s-1 f-w-500 pass__para-pass c-b">
                  Whichever Contender has the most votes when the GME Round
                  closes will receive the full amount of the bomb, in the form
                  of BNB swapped for their token.
                </p>
                <br />
                <p className="f-s-1 f-w-500 pass__para-pass c-b">
                  This buy is then claimable by the Squid Chiefs at the time of
                  the buy.
                </p>
                <br />
                <p className="f-s-1 f-w-500 pass__para-pass c-b">
                  “Squid Chiefs” are the top 100 wallets that hold the most $GME
                  at the time of the Squid GME’s completion. Each Squid Chief is
                  entitled to an equal share of the GME’s buy.
                </p>
                <br />
                <p className="f-s-1 f-w-500 pass__para-pass c-b">
                  Join our Telegram to use our Ai Voice Bot and to check the
                  current available characters on our list. Our Bot has an
                  easy-access interface that offers unlimited free usage!
                </p>
                <div className="section-nft ">
                  <h4 className="section-nft__head-2 f-w-900 c-b ">Utility</h4>
                  <p className="f-w-500 c-b">
                    <AiOutlineAim className="m-r-0_5 f-s-1_3 " /> SquidGME AI
                    Voice Bot: Simple and unlimited usage to the public with the
                    ability to generate organic viral marketing with its’ fun
                    use-case technology that’ll be shared/spread around
                    groups/communities. (With Upcoming Future Developments like
                    Customized Self Voice-Synthesizing which will cost $GME
                    Coins)
                  </p>
                  <br />
                  <p className="f-w-500 c-b">
                    <AiOutlineAim className="m-r-0_5 f-s-1_3 " /> Holder
                    Dividends: For every transaction, 4% of the Tokens are
                    automatically distributed to the holders. Using a weighted
                    system, the more tokens you hold, the more you get which
                    also compounds the longer you hold!
                  </p>
                </div>
                <div className="d-f j-c-s-b m-t-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-t-7" id="utility">
        <div className="container-kws-new "></div>
        <div className="">
          {/* <img src={nftbackimg} alt="" className="w-100" /> */}
        </div>
      </section>

      <section id="tokenomics">
        <div className="pass-bo p-t-4 p-b-4">
          <div className="container-kws-new ">
            <h1 className="c-b t-a-c m-b-2">
              Squid<span className="f-w-900">GME</span> Tokenomics
            </h1>
            <p className="m-b-2 f-w-500 c-b f-s-1_2 t-a-c">
              Low supply with only 100,000 tokens to ever be created and over
              50% initially burned. Mathematically calculated initial liquidity
              pool to diluted market cap ratio for breeze and solid movement. No
              unnecessary dilution with no staking, no team/marketing tokens,
              and no private sale.
            </p>
            <div className="row">
              <div>
                <h2 className="t-a-c c-b">
                  TOTAL SUPPLY <span className="f-w-400">100,000 </span>$GME{" "}
                  <span className="f-w-400">Tokens</span>
                </h2>
              </div>
            </div>
            <div className="row m-t-2">
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="  t-a-c b-r-10 pa-2 b-r-c m-b-1">
                  <h4 className="t-a-c  c-b">Token Allocation</h4>
                  <p className="f-w-500 c-b">Burned: 50.075% (50,075)</p>
                  <p className="f-w-500 c-b">Presale: 31.05% (31,050)</p>
                  <p className="f-w-500 c-b">Liquidity: 17.875% (17,875)</p>
                  <p className="f-w-500 c-b">
                    Promotional Airdrops: 1% (1,000)
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="  t-a-c b-r-10 pa-2 b-r-c m-b-1">
                  <h4 className="t-a-c  c-b">Air Drop</h4>
                  <p className="f-w-500 c-b">1000 $GME Tokens Total</p>
                  <p className="f-w-500 c-b">
                    5 Tokens Per Airdrop/Person = Estimated $10+ Value on Launch
                  </p>
                  <p className="f-w-500 c-b">200 Airdrops Total</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="  t-a-c b-r-10 pa-2 b-r-c min-h-12_5 m-b-1">
                  <h4 className="t-a-c  c-b">7/7 Transaction Tax</h4>
                  <p className="f-w-500 c-b">4% Holder Reflection Dividends</p>
                  <p className="f-w-500 c-b">
                    3% Marketing/Development/CEX Listings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="partners">
        <div className=" p-t-5 p-b-4 pass">
        <div className="container-kws-new">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
 <div className="container-kws-new">
            <h1 className="c-w">Partners</h1>
            <div className="row">
              <div >
                <div className="pinksale">
                  <img src={pinksalepartners} alt="" className="w-90" />
                </div>
              </div>
              <div >
                <div >
                  <img src={dexviewpartners} alt="" className="w-75 " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <h1 className="c-w listing">Listings</h1>
            <div className="row m-t-2">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="">
                  <img src={cntokens} alt="" className="w-75" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="">
                  <img src={muunshots} alt="" className="w-75" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="m-t-2">
                  <img src={coinsniper} alt="" className="w-75" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="m-t-2">
                  <img src={coinhunt} alt="" className="w-75" />
                </div>
              </div>
            </div>
        </div>

        </div>
        </div>
         
          <div className="container-kws-new m-t-3">
            
          </div>
        </div>
      </section>
      <section>
        <Roadmap />
      </section>
    </>
  );
}
