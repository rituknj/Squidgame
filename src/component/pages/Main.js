import { Grid } from "@mui/material";
import React, { useState } from "react";
import mainimage from "../Image/OnlyMascot.png";
import logoicon from "../Image/bg-remove-loge-side.png";
import { BsPlayCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import pinksale from "../Image/pinksalelogo.png";
import deximg from "../Image/dex.png";
import mintimg from "../Image/nft_mint.png";
import dosacrat from "../Image/dosacract_mint_logo.png";
import passimg from "../Image/NoBG.png";
import sliderimg from "../Image/carousel.f356061b.png";
import dosabombimg from "../Image/Logo(2).png";
import nftcollectionimg from "../Image/bg-remove-loge-side.png";
import nftbackimg from "../Image/nft_groupage.png";
import dosanftimg from "../Image/why_nfts.png";
import chainlogo from "../Image/chainlink_logo.png";
import chainlogo2 from "../Image/chainlink_image.png";
import playimg from "../Image/icon_play.png";
import pinksalelogo from "../Image/pinkswap.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import video1 from "../Video/squidgamevideo.mp4";
import pinksalepartners from "../Image/pinksalepartner.png";
import dexviewpartners from "../Image/dexviewpartner.png";
import cntokens from "../Image/cntoken.png";
import muunshots from "../Image/muunshots.webp";
import coinsniper from "../Image/coinsniper.png";
import coinhunt from "../Image/coinhunt.png";
import Roadmap from "./Roadmap";

export default function Main() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);
  return (
    <>
      <div className="container-kws p-t-6_5">
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
                <img src={logoicon} alt="" className="max-w-100" />
              </div>
              <div>
                <h1 className="f-s-2 c-b f-w-900 m-t-1_5 m-b-1_5 mobile-h1">
                  YOUR FAVORITE COIN'S <br /> FAVORITE COIN
                </h1>
              </div>
              <p className="f-s-1_5 c-b f-w-500 l-h-24 mobile-pa">
                Dosa is a Web3 protocol that enables holders of the $Dosa token,
                to vote for how the Dosa treasury wallet is spent, in a function
                known as the “Dosa Bomb”.
              </p>

              <div className="row p-t-4 p-b-2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <button onClick={handleShow} className="bu-sec ">
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
                    <button href="/" className="button-sec">
                      {" "}
                      <img src={pinksalelogo} alt="" className="w-20" />
                      <span className="f-s-1_2 f-w-600 m-l-0_5 c-b">
                        PINK SALE
                      </span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="pinksalebu">
                    <button href="/" className="button-sec">
                      {" "}
                      <img src={deximg} alt="" className="w-20" />
                      <span className="f-s-1_2 f-w-600 m-l-0_5 c-b">
                        DexView
                      </span>
                    </button>
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
              <div className="f-s-1_3 c-b  f-w-600 m-t-1_5">
                CA:0xbC93891CF9aBC3F8124B2eCE3727E208C4236C58
              </div>
            </div>
          </Grid>
          <Grid item sm={12} xs={12} md={12} lg={6} xl={6}>
            <div className="main-img p-t-7 t-a-c">
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
                <img src={logoicon} alt="" className="m-t-5" />
              </div>
              <div>
                <h1 className="f-s-2 c-b f-w-900 m-t-3 m-b-1_5 ">
                  YOUR FAVORITE COIN'S <br /> FAVORITE COIN
                </h1>
              </div>
              <p className="f-s-1_5 c-b f-w-500 l-h-24">
                Dosa is a Web3 protocol that enables holders of the $Dosa token,
                to vote for how the Dosa treasury wallet is spent, in a function
                known as the “Dosa Bomb”.
              </p>
              <div className="p-t-2">
                {/* <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <button className="button-pri">PEDIGREE</button>
                </div> */}
                {/* <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <button className="button-pri">DOSA BOMB</button>
                </div> */}
                <button onClick={handleShow} className="bu-sec ">
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
                  <a href="/" className="button-sec">
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
                  <a href="/" className="button-sec">
                    {" "}
                    <img src={deximg} alt="" className="w-20" />
                    <span className="f-s-1_2 f-w-600 m-l-0_5 c-b">DexView</span>
                  </a>
                </div>
              </div>
              <div className="f-s-1_3 c-b  f-w-600 m-t-1_5">
                CA:0xbC93891CF9aBC3F8124B2eCE3727E208C4236C58
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* <section className="mint m-t-7">

</section>  */}

      <section className="pass-bo">
        <div className="container-kws-new">
          <div className="row p-t-9 p-b-7">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="pass__pass-info m-t-6">
                <h1 className="f-s-3 c-b">
                  <span className="pass__tit-1 c-b">BECOME A</span>
                  <br />
                  <span className="f-w-900 c-b">SquidGME</span>
                  <br />
                  <span className="c-b">CONTENDER</span>
                </h1>
                <p className="pass__para-pass f-s-1 f-w-500 c-b">
                  Does your project deserve attention?
                  <br />
                  Does your project want a big buy pumped into the chart?
                  <br />
                  Is your community strong enough to fight for it?
                  <br />
                  <br />
                  Well here's your chance, apply to be a contender in the Dosa
                  Bomb today!
                </p>
                {/* <div>
                  <button className="button-pri m-t-2">APPLY NOW</button>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="pass__pass-img">
                <img src={passimg} alt="" className="max-w-100" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="carasoul"></div> */}
      </section>
      <section className="mint m-t-7"></section>

      <section className="pass-bo">
        <div className="container-kws-new p-t-9 p-b-7">
          <h1 className="f-s-3 c-b">
            WHAT IS <span className="f-w-900 ">SquidGME </span>
          </h1>
          <p className="f-s-1 f-w-500 pass__para-pass c-b">
            SquidGME $GME is a Decentralized Web3 Artificial Intelligence
            Project creating open-access to AI voice modules using speech
            synthesis artificial intelligence and deep learning. $GME has a
            mission to spread AI voice Technology by offering simple and
            unlimited usage to the public! The SquidGME AI Voice Bot will also
            be used to harness viral organic growth to our project whilst the
            $GME Coin will yield massive reflection dividends that are
            automatically distributed to holders!
          </p>
          <br />
          <p className="f-s-1 f-w-500 pass__para-pass c-b">
            SquidGME is fully decentralized with a renounced contract while also
            being audited by a well-trusted web3 security firm. SquidGME is a
            hyped alpha project supported by prominent crypto Influencers and a
            successful developer that owns a social media marketing firm with
            high experience and connections in the crypto industry. Our plan is
            to gain traction from the power of the community, influencer-team,
            and the AI utilities while also harnessing the exterior hype that is
            trending within the crypto industry to make SquidGME the next
            blue-chip cryptocurrency!
          </p>
        </div>
      </section>
      <section className="p-t-9 p-b-7">
        <div className="container-kws-new">
          <h1 className="f-s-3 c-b">
            Squid<span className="f-w-900">GME</span>
          </h1>
          <h3 className="f-w-700 f-co fo-na c-b">
            DEMOCRATIZING GREEN CANDLES
          </h3>
          <p className="f-s-1 f-w-500 pass__para-pass c-b">
            The SquidGME is a DeFi wallet-integrated tool that entitles Dosa
            Fuses to vote on where the SquidGME Wallet is spent.
          </p>
          <br />
          <p className="f-s-1 f-w-500 pass__para-pass c-b">
            The GME Wallet gradually builds for a preset number of days from a
            tax on transaction volume as the $Dosa token is traded. Each
            SquidGME has 4 Contender projects that are vying to receive the
            SquidGME buy.
          </p>
          <div className="row p-t-4">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div>
                <img src={dosabombimg} alt="" className="max-w-75" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="p-t-4">
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
                  at the time of the Dosa GME’s completion. Each Squid Chief is
                  entitled to an equal share of the GME’s buy.
                </p>
                <div className="d-f j-c-s-b m-t-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-t-9">
        <div className="container-kws-new ">
          <img src={nftcollectionimg} alt="" className="max-w-100" />
          <div className="section-nft ">
            <h4 className="section-nft__head-2 f-w-500 c-b">
              10.000 NFT COLLECTION TO DOMINATE THE SquidGME
            </h4>
            <p className="f-w-500 c-b">
              Dosacrats are the Dosa Protocol’s NFT line. Each Dosacrat is
              unique art, generated randomly by computer, in profile picture
              style, in the form of a Mastiff character.
            </p>
            <br />
            <p className="f-w-500 c-b">
              Become a member of the “Dosacratic Parliament” to gain influence
              over the Dosa Bomb. While being a Fuse entitles a holder to their
              vote, Dosacrats boost the number of votes a Fuse gets. Welcome to
              the Dosacracy.
            </p>
          </div>
        </div>
        <div className="">
          {/* <img src={nftbackimg} alt="" className="w-100" /> */}
        </div>
      </section>
      <section>
        <div className="pass-bo p-t-7 p-b-7">
          <div className="container-kws-new">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="">
                  <h1 className="f-s-3 c-b">
                    WHY <span className="f-w-900">Squid NFT</span>
                  </h1>
                  <div>
                    <p className="f-s-1 f-w-500 c-b">
                      Each Dosacrat NFT grants the Fuse to one extra vote in the
                      ongoing Dosa Bomb.
                    </p>
                    <br />
                    <p className="f-s-1 f-w-500 c-b">
                      The more Dosacrats you hold, the more votes you get!
                    </p>
                    <br />
                    <p className="f-s-1 f-w-500 c-b">
                      For example, if a wallet holds 100,000 $Dosa tokens, and 3
                      Dosacrat NFTs, that holder is entitled to 4 votes in the
                      Dosa Bomb. If a wallet holds 400,000 $Dosa tokens, and 1
                      Dosacrat NFT, that holder is entitled to 2 votes in the
                      Dosa Bomb.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <img src={dosanftimg} alt="" className="max-w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-t-7">
        <div className="container-kws-new">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="">
                <div>
                  <h1 className="chainlink__head c-b ">
                    <span className="m-r-0_5">
                      <img src={chainlogo} alt="" className="max-w-100" />
                    </span>
                    CHAINLINK
                  </h1>
                  <h1 className="f-w-900 f-s-3 c-b">INTEGRATION</h1>
                </div>
                <div className="m-t-1_5">
                  <p className="f-s-1 f-w-500 c-b">
                    For each Squid NFT minting request, Chainlink VRF generates
                    one or more random values and cryptographic proof of how
                    those values were determined.
                  </p>
                  <br />
                  <p className="f-s-1 f-w-500 c-b">
                    The proof is published and verified on-chain before any
                    consuming applications can use it.
                  </p>
                  <br />
                  <p className="f-s-1 f-w-500 c-b">
                    This process ensures that results cannot be tampered with or
                    manipulated by any single entity including oracle operators,
                    miners, users, scripts or smart contract developers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div>
                <img src={chainlogo2} alt="" className="max-w-100" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="carasoul "></div> */}
      </section>
      <section>
        <div className="pass-bo p-t-7 p-b-7">
          <div className="container-kws-new ">
            <h1 className="c-b">SquidGME TEAM</h1>
            <p className="m-b-2 f-w-500 c-b">
              The “Dosa Team” are anonymous and pseudonymous developers and
              computer programmers. The Dosa Protocol is decentralized, and
              bigger than any particular individual or team.
            </p>
            <p className="m-b-2 f-w-500 c-b">
              The only function of the $Dosa token, or Dosa NFTs, is to enable
              holders to vote in the Dosa Bomb. Holding $Dosa should not be
              considered an investment. No statements made in this document, nor
              any Dosa communication channels, nor by any Dosa “community
              members” or holders, should be considered financial advice. $Dosa
              holders should not expect any “return on investment,” nor that the
              “Dosa team” will work to provide value to their holdings.
            </p>
            <p className="f-w-500 c-b">
              A crypto project being listed as a “Contender” in the Dosa Bomb
              should not be considered financial advice. Dosa has no
              decision-making capacity or authority in any of the “Contenders”
              in the Dosa Bomb. Dosa does not vet the Contenders’ teams,
              contracts, missions, or communities. The winner of the Dosa Bomb
              is chosen solely by which Contender receives the most votes, and
              it is not to be taken as an indication that the winner is a “good
              investment.”
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className=" p-t-7 p-b-7 pass">
          <div className="container-kws-new">
            <h1 className="c-w">Partners</h1>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div>
                  <img src={pinksalepartners} alt="" className="w-50" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div>
                  <img src={dexviewpartners} alt="" className="w-50 m-t-2_5" />
                </div>
              </div>
            </div>
          </div>
          <div className="container-kws-new m-t-3">
            <h1 className="c-w">Listings</h1>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="listing-box">
                  <img src={cntokens} alt="" className="w-100" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="listing-box">
                  <img src={muunshots} alt="" className="w-100" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="listing-box">
                  <img src={coinsniper} alt="" className="w-100" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <div className="listing-box">
                  <img src={coinhunt} alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Roadmap/>
      </section>
    </>
  );
}
