import React from "react";
import { BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";
import footerlogo from "../Image/logosqd.png";
import { MdMarkEmailRead } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <section>
        <div className="pass">
          <div className="container-kws-new p-t-7 p-b-7">
            <div className="row">
              <div className="col-log-6 col-md-6 col-sm-12 col-12">
                <div className="row">
                  
                  <div className="row m-l-1">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className=" l-h-2 f-s-1_2 f-w-500 c-w">
                        <p className="c-p tele">Buy SquidGME</p>
                        <p className="c-p tele">News</p>
                        {/* <p>Pedigree</p> */}
                      </div>
                      <div className="m-t-1 c-w">
                <span className="f-s-0_8">© 2023, Squid., All rights reserved.</span>
                </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="m-t-2 l-h-2 f-s-1_2 f-w-500 c-w">
                        <p>Nfts</p>
                        <p>SquidGME</p>
                        <p>Opensea</p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                {/* <div className="">
                  <img src={footerlogo} alt="" className="w-75"/>
                </div> */}
                <div className="footer__icons c-w">
                   <a href="https://t.me/SquidGMEnews" target="_blank"> <FaTelegramPlane className="c-w f-s-1_5 c-p tele"/></a>
                   <a href="https://twitter.com/SquidGMECoin" target="_blank"> <BsTwitter className="c-w f-s-1_5 c-p m-l-2 tele"/></a>
                  
                  
                  </div>
                  <div className="c-w t-a-r m-t-3">
                  Mail: <span className="c-p tele"><a href="mailto:contact@squidgme.com" target="_blank"> contact@squidgme.com <MdMarkEmailRead/></a></span>
                  </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
