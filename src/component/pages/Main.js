import { Grid } from "@mui/material";
import React from "react";
import mainimage from "../Image/header_pic.png";
import logoicon from "../Image/header_logo.svg";
import { BsPlayCircleFill } from "react-icons/bs";
import pinksale from "../Image/pinksalelogo.png";
import deximg from "../Image/dexviewlogo.png";
import mintimg from "../Image/nft_mint.png";

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
              <div className="f-s-1_3 c-b  f-w-600 m-t-1_5">CA:0xbC93891CF9aBC3F8124B2eCE3727E208C4236C58</div>
            </div>
          </Grid>
        </Grid>
      </div>
      <section className="mint">
        <div className="">
          <div className="">
            <div>
              <img src={mintimg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
