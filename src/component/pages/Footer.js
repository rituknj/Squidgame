import React from "react";
import { BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";
import footerlogo from "../Image/logosqd.png";

export default function Footer() {
  return (
    <>
      <section>
        <div className="pass">
          <div className="container-kws-new p-t-7 p-b-7">
            <div className="row">
              <div className="col-log-4 col-md-4 col-sm-12 col-12">
                <div className="row">
                  <div className="footer__icons c-w">
                    <FaTelegramPlane className="c-w"/>
                    <BsTwitter className="c-w"/>
                    <BsYoutube className="c-w"/>
                    {/* <BsGithub />
                    <SiGitbook />
                    <FaTiktok /> */}
                  </div>
                  <div className="row m-l-1">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="m-t-2 l-h-2 f-s-1_2 f-w-500 c-w">
                        <p>Buy SquidGME</p>
                        <p>News</p>
                        <p>Pedigree</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="m-t-2 l-h-2 f-s-1_2 f-w-500 c-w">
                        <p>Nfts</p>
                        <p>SquidGME</p>
                        <p>Opensea</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-log-4 col-md-4 col-sm-12 col-12"></div>
              <div className="col-log-4 col-md-4 col-sm-12 col-12">
                <div className="">
                  <img src={footerlogo} alt="" />
                </div>
                <div className="m-t-1 m-b-4 c-w">
                <span>© 2023, Squid., All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
