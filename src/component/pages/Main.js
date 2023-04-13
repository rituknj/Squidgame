import { Grid } from "@mui/material";
import React from "react";
import mainimage from "../Image/header_pic.png";
import logoicon from "../Image/header_logo.svg";
import { BsPlayCircleFill } from "react-icons/bs";
import pinksale from "../Image/pinksalelogo.png";
import deximg from "../Image/dexviewlogo.png";
import mintimg from "../Image/nft_mint.png";
import dosacrat from "../Image/dosacract_mint_logo.png";
import passimg from "../Image/bomb_apply.png"

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
            <div>
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
        <div className="pass__pass-page">
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
        </div>
      </section>
    </>
  );
}
