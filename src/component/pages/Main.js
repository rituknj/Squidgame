import { Grid } from "@mui/material";
import React from "react";
import mainimage from "../Image/header_pic.png";
import logoicon from "../Image/header_logo.svg";
import { BsPlayCircleFill } from "react-icons/bs";
import pinksale from "../Image/pinksalelogo.png";
import deximg from "../Image/dexviewlogo.png";
import mintimg from "../Image/nft_mint.png";
import dosacrat from "../Image/dosacract_mint_logo.png";
import passimg from "../Image/bomb_apply.png";
import sliderimg from "../Image/carousel.f356061b.png";
import dosabombimg from "../Image/dosa_bomb.png";


export default function Main() {
  return (
    <>
      <div className="container-kws p-t-6_5">
        <Grid container>
          <Grid item sm={12} xs={12} md={12} lg={6} xl={6}>
            <div className="main-img p-t-7">
              <img src={mainimage} alt="" />
            </div>
          </Grid>
          <Grid item sm={12} xs={12} md={12} lg={6} xl={6}>
            <div className="sec-col ">
              <div>
                <img src={logoicon} alt="" />
              </div>
              <div>
                <h1 className="f-s-2 c-b f-w-900 m-t-1_5 m-b-1_5 ">
                  YOUR FAVORITE COIN'S <br /> FAVORITE COIN
                </h1>
              </div>
              <p className="f-s-1_5 c-b f-w-500 l-h-24">
                Dosa is a Web3 protocol that enables holders of the $Dosa token,
                to vote for how the Dosa treasury wallet is spent, in a function
                known as the “Dosa Bomb”.
              </p>
              <div className="row p-t-2">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <button className="button-pri">PEDIGREE</button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <button className="button-pri">DOSA BOMB</button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <BsPlayCircleFill className="f-s-3 " />
                  <button className="bu-sec">PLAY VIDEO</button>
                </div>
                <div className="row m-t-1">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <button className="button-pri">BUY DOSA</button>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <button className="button-pri">NEWS</button>
                  </div>
                </div>
              </div>
              <div className="row m-t-1">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  {/* <button className="button-pri-no">PinkSale</button> */}
                  <img src={pinksale} alt="" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  {/* <button className="button-pri-no">DEXView</button> */}
                  <img src={deximg} alt="" />
                </div>
              </div>
              <div className="f-s-1_3 c-b  f-w-600 m-t-1_5">
                CA:0xbC93891CF9aBC3F8124B2eCE3727E208C4236C58
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <section className="mint">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="m-t-5_5">
              <img src={mintimg} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="mint-box">
              <div className="mint-box__price">
                <div className="mint-box__content-title">
                  <p>PRICE PER DOSACRAT</p>
                  <h4>- BNB</h4>
                </div>
                <div className="mint-box__child">
                  <p>TOTAL</p>
                  <h4>- BNB</h4>
                </div>
              </div>
              <div className="mint-box__title">
                MINT YOUR
                <img src={dosacrat} alt="" className="mint-box__title-img" />
              </div>
              <div className="mint-box__amount">
                <span className="mint-box__amount-sp">-</span>
                <div className="mint-box__amount-input">1</div>
                <span className="mint-box__amount-sp">+</span>
              </div>
              <div className="mint-box__price-bottom">
                <p className="mint-box__price-tit">TOTAL MINTED - </p>
                <button className="mint-box__bu-mint">MINT</button>
                <p className="mint-box__bo-para">FREEBIES 0</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pass">
        {/* <div className="pass__pass-page">
        <div className="pass__pass-container">
          <div className="pass__pass-info">
            <h1>
              <span>BECOME A</span>
              <br />
              <span>DOSA BOMB</span>
              <br />
              <span>CONTENDER</span>
            </h1>
            <p>
              Does your project deserve attention?
              <br />
              Does your project want a big buy pumped into the chart?
              <br />
              Is your community strong enough to fight for it?
              <br />
              <br />
              Well here's your chance, apply to be a contender in the Dosa Bomb
              today!
            </p>
            <div>
              <button className="apply-button">APPLY NOW</button>
            </div>
          </div>
          <div className="pass__pass-img">
            <img src={passimg} alt=""/>
          </div>
          </div>
        </div> */}
        <div className="container-kws-new">
          <div className="row p-t-9 p-b-7">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="pass__pass-info">
                <h1 className="f-s-3">
                  <span className="pass__tit-1">BECOME A</span>
                  <br />
                  <span className="f-w-900">DOSA BOMB</span>
                  <br />
                  <span>CONTENDER</span>
                </h1>
                <p className="pass__para-pass f-s-1 f-w-500">
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
                <div>
                  <button className="apply-button m-t-2">APPLY NOW</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="pass__pass-img">
                <img src={passimg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="carasoul"></div>
      </section>
      <section className="pass">
        <div className="container-kws-new p-t-9 p-b-7">
          <h1 className="f-s-3">
            WHAT IS <span className="f-w-900 ">DOSA </span>
          </h1>
          <p className="f-s-1 f-w-500 pass__para-pass">
            Dosa, a Korean Mastiff breed, is dignified, easy going, good
            natured, intelligent and loyal. The gentle giant enjoys being with
            others. It tends to ‘lean’ on its favorite people, like a huge
            lapdog.
          </p>
          <br />
          <p className="f-s-1 f-w-500 pass__para-pass">
            We chose the Dosa dog as our protocol’s mascot because of these
            characteristics. They represent the core values of the project,
            collaboration and support. We say that Dosa “democratizes green
            candles” because it enables communities of other projects to get
            attention and transaction volume on the projects they feel most
            passionate about.
          </p>
        </div>
      </section>
      <section className="p-t-9 p-b-7">
        <div className="container-kws-new">
          <h1 className="f-s-3">
            DOSA <span className="f-w-900">BOMB </span>
          </h1>
          <h3 className="f-w-700 f-co fo-na">DEMOCRATIZING GREEN CANDLES</h3>
          <p className="f-s-1 f-w-500 pass__para-pass">
            The Dosa Bomb is a DeFi wallet-integrated tool that entitles Dosa
            Fuses to vote on where the Dosa Bomb Wallet is spent.
          </p>
          <br />
          <p className="f-s-1 f-w-500 pass__para-pass">
            The Bomb Wallet gradually builds for a preset number of days from a
            tax on transaction volume as the $Dosa token is traded. Each Dosa
            Bomb has 4 Contender projects that are vying to receive the Dosa
            Bomb buy.
          </p>
          <div className="row p-t-4">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="p-t-4">
                <h3 className="f-w-700 f-co fo-na">HOW IT WORKS</h3>
                <p className="f-s-1 f-w-500 pass__para-pass">
                  Whichever Contender has the most votes when the Bomb Round
                  closes will receive the full amount of the bomb, in the form
                  of BNB swapped for their token.
                </p>
                <br />
                <p className="f-s-1 f-w-500 pass__para-pass">
                  This buy is then claimable by the Dosa Chiefs at the time of
                  the buy.
                </p>
                <br />
                <p className="f-s-1 f-w-500 pass__para-pass">
                  “Dosa Chiefs” are the top 100 wallets that hold the most $Dosa
                  at the time of the Dosa Bomb’s completion. Each Dosa Chief is
                  entitled to an equal share of the Bomb’s buy.
                </p>
                <div className="d-f j-c-s-b m-t-2">
                  <button className="button-pri">JOIN DOSA BOMB</button>

                  <button className="bu-sec-2">
                    {" "}
                    <BsPlayCircleFill className="f-s-3 m-r-1" />
                    PLAY VIDEO
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div>
                <img src={dosabombimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-t-9">
        <div className="pass p-t-9">
          <div className="container-kws-new">
            <h1 className="f-s-3 t-a-c">
              DOSA <span className="f-w-900 ">TOKENOMICS</span>
            </h1>
            <h5 className="t-a-c m-t-2 p-b-3">
              <span className="f-w-900">TOTAL SUPPLY </span> 1,000,000,000 $DOSA
            </h5>
            {/* <div className=" text-wrap-box">
              <div className="text-wrap-box__percentage">
                <h2 className="text-wrap-box__per">4%</h2>
                <p className="text-wrap-box__con">MAINTENANCE AND MARKETING</p>
              </div>
              <div className="text-wrap-box__percentage">
                <h2 className="text-wrap-box__per">6%</h2>
                <p className="text-wrap-box__con">MAINTENANCE AND MARKETING</p>
              </div>
            </div> */}
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="f-r">
            <h2 className="text-wrap-box__per ">4%</h2>
                <p className="text-wrap-box__con">MAINTENANCE AND MARKETING</p></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div>
            <h2 className="text-wrap-box__per">3%</h2>
                <p className="text-wrap-box__con">DOSA BOMB</p></div>
            </div>

            </div>
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bsc-calcu m-t-5">
              <div className="bsc-calcu__buttons-container">
              <div className="bsc-calcu__active">

              </div>

              </div>

              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">

</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
