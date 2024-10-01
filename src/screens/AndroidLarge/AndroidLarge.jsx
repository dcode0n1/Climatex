import React from "react";
import { useWindowWidth } from "../../breakpoints";

export const AndroidLarge = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="w-full flex flex-row justify-center bg-white">
      <div
        className={`bg-white relative ${screenWidth < 1080 ? "w-[360px]" : screenWidth >= 1080 ? "w-[1080px]" : ""} ${screenWidth < 1080 ? "h-[1975px]" : screenWidth >= 1080 ? "h-[3593px]" : ""
          } ${screenWidth < 1080 ? "overflow-hidden" : ""}`}
      >
        {screenWidth < 1080 && (
          <div className="absolute w-[360px] h-[62px] top-0 left-0 bg-white">
            <img
              className="absolute w-[126px] h-8 top-3.5 left-3.5 object-cover"
              alt="Image"
              src="/img/image-1003.png"
            />
          </div>
        )}

        {screenWidth >= 1080 && (
          <div className="flex flex-col w-[1080px] h-[81px] items-start gap-2.5 px-[53px] py-3.5 absolute top-0 left-0 bg-white">
            <div className="w-[199px] h-[52px] bg-[url(/static/img/image-1000.png)] relative bg-cover bg-[50%_50%]" />
          </div>
        )}

        <div
          className={`absolute ${screenWidth < 1080 ? "w-[364px]" : screenWidth >= 1080 ? "w-[897px]" : ""} ${screenWidth < 1080 ? "left-0" : screenWidth >= 1080 ? "left-[114px]" : ""
            } ${screenWidth < 1080 ? "top-[1508px]" : screenWidth >= 1080 ? "top-[107px]" : ""} ${screenWidth < 1080 ? "h-[467px]" : screenWidth >= 1080 ? "h-[372px]" : ""
            }`}
        >
          {screenWidth < 1080 && (
            <img
              className="absolute w-[126px] h-8 top-[266px] left-[21px] object-cover"
              alt="Image"
              src="/img/image-1003.png"
            />
          )}

          {screenWidth >= 1080 && (
            <>
              <p className="absolute w-[518px] top-[215px] left-0 [font-family:'Jost',Helvetica] font-semibold text-[#2f2f2f] text-3xl tracking-[0] leading-[40.0px]">
                Early-stage deep tech fund accelerating technologies and businesses to combat climate change.
              </p>
              <button className="all-[unset] box-border inline-flex flex-col items-start gap-2.5 absolute top-[184px] left-0">
                <div className="relative w-[79px] h-8 mr-[-2.00px]">
                  <div className="absolute top-0 left-0 [font-family:'Jost',Helvetica] font-semibold text-[#828282] text-xl tracking-[0] leading-[32.0px] whitespace-nowrap">
                    We Are
                  </div>
                </div>
              </button>
            </>
          )}

          <img
            className={`absolute ${screenWidth < 1080 ? "w-[360px]" : screenWidth >= 1080 ? "w-[445px]" : ""} ${screenWidth < 1080 ? "left-0" : screenWidth >= 1080 ? "left-[452px]" : ""
              } ${screenWidth < 1080 ? "top-[219px]" : screenWidth >= 1080 ? "top-0" : ""} ${screenWidth < 1080 ? "h-[248px]" : screenWidth >= 1080 ? "h-[372px]" : ""
              }`}
            alt="Content"
            src={screenWidth < 1080 ? "/img/content.png" : screenWidth >= 1080 ? "/img/image-985.png" : undefined}
          />
          {screenWidth < 1080 && (
            <>
              <div className="absolute w-[364px] h-[222px] top-0 left-0">
                <div className="absolute w-[363px] h-[39px] top-0 left-0 [background:linear-gradient(180deg,rgb(255,255,255)_0%,rgb(245,246,249)_100%)]" />
                <img className="absolute w-[360px] h-[183px] top-[39px] left-0" alt="Image" src="/img/image-991.png" />
              </div>
              <div className="absolute top-[342px] left-[21px] [font-family:'Jost',Helvetica] font-semibold text-[#2f2f2f] text-sm text-center tracking-[0] leading-[18.6px] whitespace-nowrap">
                Contact Us
              </div>
              <p className="absolute top-[364px] left-[21px] [font-family:'Jost',Helvetica] font-normal text-[#2f2f2f] text-[10px] tracking-[0] leading-[11.5px]">
                <span className="font-bold">
                  Surojit Bose
                  <br />
                </span>
                <span className="[font-family:'Jost',Helvetica] font-normal text-[#2f2f2f] text-[10px] tracking-[0] leading-[11.5px]">
                  Partner &amp; Investment Manager
                  <br />
                  Surojit@
                </span>
                <span className="[font-family:'Jost',Helvetica] font-normal text-[#2f2f2f] text-[10px] tracking-[0] leading-[11.5px]">
                  climate9ers.com
                </span>
              </p>
            </>
          )}
        </div>
        {screenWidth >= 1080 && (
          <>
            <div className="flex flex-col w-[942px] h-[338px] items-center gap-2.5 absolute top-[610px] left-[69px]">
              <div className="w-[254px] h-[65.68px] bg-[url(/static/img/image-2-3.png)] relative bg-cover bg-[50%_50%]" />
              <div className="inline-flex flex-col items-center gap-[29px] relative flex-[0_0_auto]">
                <div className="flex flex-col w-[888px] items-center justify-center gap-3.5 relative flex-[0_0_auto]">
                  <p className="relative self-stretch h-[242px] mt-[-1.00px] [font-family:'Jost',Helvetica] font-medium text-[#969696] text-xl text-center tracking-[0] leading-[32.0px]">
                    Climate9ers is an early-stage deep tech fund dedicated to investing in ClimateTech and DeepTech
                    startups driving positive change for the planet.
                    <br />
                    As early backers of ventures like Metastable and Loopworm, we aim to support breakthrough
                    innovations that address global challenges.
                    <br />
                    Climate9ers is committed to building a sustainable and resilient future through impactful
                    entrepreneurship.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute w-[456px] h-[250px] top-[981px] left-[68px]">
              <div className="relative w-[452px] h-[250px] bg-white rounded-[10px] shadow-[0px_27px_57px_#a3a3a340]">
                <img className="absolute w-[52px] h-11 top-5 left-[26px]" alt="Icon" src="/img/icon-3.png" />
                <div className="absolute top-[78px] left-[27px] [font-family:'Jost',Helvetica] font-medium text-[#2f2f2f] text-[26px] tracking-[0] leading-[34.6px] whitespace-nowrap">
                  Registered
                </div>
                <p className="absolute w-[396px] top-[123px] left-7 [font-family:'Jost',Helvetica] font-normal text-[#969696] text-lg tracking-[0] leading-[28.8px]">
                  Category I AIF – Venture Capital Fund (Angel Fund)
                  <br />
                  SEBI Registration Number: IN/AIF1/22-23/1234
                  <br />
                  Name of Fund Manager: Climate9ers Partners LLP
                </p>
              </div>
            </div>
            <div className="absolute w-[456px] h-[250px] top-[981px] left-[560px]">
              <div className="relative w-[452px] h-[250px] bg-white rounded-[10px] shadow-[0px_27px_57px_#a3a3a340]">
                <img className="absolute w-[52px] h-11 top-5 left-[26px]" alt="Icon" src="/img/icon-3.png" />
                <div className="absolute top-[78px] left-[27px] [font-family:'Jost',Helvetica] font-medium text-[#2f2f2f] text-[26px] tracking-[0] leading-[34.6px] whitespace-nowrap">
                  Our Idea
                </div>
                <p className="absolute w-[396px] top-[127px] left-7 [font-family:'Open_Sans',Helvetica] font-normal text-[#969696] text-[17px] tracking-[0] leading-[27.2px]">
                  We invite you to make a lasting impact with us.
                  <br />
                  Together, we can drive innovation, combat climate change,
                  <br />
                  and leave a better world for future generations.
                </p>
              </div>
            </div>
            <div className="absolute w-[657px] h-[390px] top-[1356px] left-[355px]">
              <div className="absolute w-[657px] h-[362px] top-7 left-0">
                <img
                  className="absolute w-[369px] h-[362px] top-0 left-0"
                  alt="Climate technologies"
                  src="/img/climate-technologies-for-net-zero-1366549261-thumb-1536x1536-rem-1.png"
                />
                <div className="absolute top-[299px] left-[337px] [font-family:'Jost',Helvetica] font-medium text-[#000000] text-4xl tracking-[0] leading-[normal]">
                  Produce Sustainably
                </div>
                <img
                  className="absolute w-[108px] h-[71px] top-[229px] left-[443px]"
                  alt="Image"
                  src="/img/image-994.png"
                />
              </div>
              <div className="absolute w-[196px] h-[110px] top-0 left-[390px]">
                <div className="absolute top-[58px] left-0 [font-family:'Jost',Helvetica] font-medium text-[#000000] text-4xl tracking-[0] leading-[normal]">
                  Clean Water
                </div>
                <img
                  className="absolute w-[59px] h-[59px] top-0 left-[68px]"
                  alt="Iconoir clean water"
                  src="/img/iconoir-clean-water.svg"
                />
              </div>
            </div>
            <div className="absolute top-[1888px] left-[390px] [font-family:'Jost',Helvetica] font-medium text-[#000000] text-4xl tracking-[0] leading-[normal]">
              Recycle Everything
            </div>
            <img
              className="absolute w-[122px] h-[71px] top-[1816px] left-[478px]"
              alt="Image"
              src="/img/image-993.png"
            />
            <div className="absolute w-[147px] h-[122px] top-[1356px] left-[157px]">
              <div className="absolute top-[70px] left-0 [font-family:'Jost',Helvetica] font-medium text-[#000000] text-4xl tracking-[0] leading-[normal]">
                Emit Less
              </div>
              <img className="absolute w-[116px] h-[71px] top-0 left-[15px]" alt="Image" src="/img/image-992.png" />
            </div>
            <div className="absolute w-[210px] h-36 top-[1604px] left-[124px]">
              <div className="absolute top-[92px] left-0 [font-family:'Jost',Helvetica] font-medium text-[#000000] text-4xl tracking-[0] leading-[normal]">
                Absorb More
              </div>
              <img className="absolute w-[90px] h-[93px] top-0 left-[63px]" alt="Image" src="/img/image-995.png" />
            </div>
            <div className="absolute w-[966px] h-[601px] top-[2053px] left-[114px]">
              <img
                className="absolute w-[429px] h-[601px] top-0 left-[537px]"
                alt="Why choose us"
                src="/img/why-choose-us-1.png"
              />
              <p className="absolute w-[561px] top-16 left-0 [font-family:'Jost',Helvetica] font-semibold text-[#000000] text-[40px] tracking-[0] leading-[normal]">
                Tech Entrepreneurs holds the key to net zero
              </p>
              <p className="absolute w-[575px] top-[227px] left-0 [font-family:'Jost',Helvetica] font-normal text-[#4d4d4d] text-xl tracking-[0] leading-[32.0px]">
                Tech entrepreneurs play a pivotal role in driving innovation for a<br />
                Net Zero future by developing cutting-edge solutions to reduce carbon emissions.
                <br />
                Entrepreneurs with revolutionary ideas, when empowered with resources, mentorship, and networks,
                <br />
                can scale and accelerate technologies that stabilize the planet&#39;s ecology, making their
                <br />
                contributions essential for global decarbonization efforts.
              </p>
            </div>
            <div className="absolute w-[853px] h-[521px] top-[2701px] left-[114px]">
              <div className="relative h-[521px]">
                <div className="absolute w-[853px] h-[54px] top-0 left-0 [background:linear-gradient(180deg,rgb(255,255,255)_0%,rgb(247,249,251)_100%)]" />
                <img
                  className="absolute w-[853px] h-[471px] top-[50px] left-0"
                  alt="Image"
                  src="/img/image-991-1.png"
                />
              </div>
            </div>
            <div className="absolute w-[1080px] h-[324px] top-[3269px] left-0 bg-[url(/static/img/content-1.png)] bg-[100%_100%]">
              <div className="absolute top-[130px] left-[75px] [font-family:'Jost',Helvetica] font-semibold text-[#2f2f2f] text-[34px] text-center tracking-[0] leading-[39.1px] whitespace-nowrap">
                Contact Us
              </div>
              <p className="absolute top-[186px] left-[75px] [font-family:'Jost',Helvetica] font-normal text-[#2f2f2f] text-xl tracking-[0] leading-[23.0px]">
                <span className="font-bold">
                  Surojit Bose
                  <br />
                </span>
                <span className="[font-family:'Jost',Helvetica] font-normal text-[#2f2f2f] text-xl tracking-[0] leading-[23.0px]">
                  Partner &amp; Investment Manager
                  <br />
                  Surojit@
                </span>
                <span className="[font-family:'Jost',Helvetica] font-normal text-[#2f2f2f] text-xl tracking-[0] leading-[23.0px]">
                  climate9ers.com
                </span>
              </p>
              <img
                className="absolute w-[199px] h-[52px] top-[15px] left-[75px] object-cover"
                alt="Image"
                src="/img/image-1000.png"
              />
            </div>
          </>
        )}

        {screenWidth < 1080 && (
          <>
            <div className="absolute top-[106px] left-3.5 [font-family:'Jost',Helvetica] font-semibold text-[#828282] text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
              We Are
            </div>
            <p className="absolute w-[204px] top-[131px] left-3.5 [font-family:'Jost',Helvetica] font-semibold text-[#2f2f2f] text-xl tracking-[0] leading-[26.6px]">
              Early-stage deep tech fund accelerating technologies and businesses to combat climate change.
            </p>
            <img
              className="absolute w-[142px] h-[131px] top-[152px] left-[218px]"
              alt="Image"
              src="/img/image-1001.png"
            />
            <div className="inline-flex items-center gap-[21px] top-[352px] left-10 flex-col absolute">
              <div className="relative w-[119px] h-[30.77px] bg-[url(/static/img/image-2-1.png)] bg-cover bg-[50%_50%]" />
              <p className="relative w-[281px] h-[127px] [font-family:'Jost',Helvetica] font-medium text-[#969696] text-[10px] text-center tracking-[0] leading-[16.0px]">
                Climate9ers Is An Early-stage Deep Tech Fund Dedicated To Investing In Climatetech And Deeptech Startups
                Driving Positive Change For The Planet.
                <br />
                as Early Backers Of Ventures Like Metastable And Loopworm, We Aim To Support Breakthrough Innovations
                That Address Global Challenges.
                <br />
                climate9ers Is Committed To Building A Sustainable And Resilient Future Through Impactful
                Entrepreneurship.
              </p>
            </div>
            <div className="flex w-[157px] h-[209px] items-start gap-2.5 pl-[22px] pr-[50px] pt-[19px] pb-[43px] top-[583px] left-[18px] bg-white rounded-[10px] border border-solid border-transparent shadow-[0px_28px_57px_#bebebe40] [border-image:linear-gradient(to_bottom,rgb(234.81,234.81,234.81),rgb(255,255,255))_1] flex-col absolute">
              <img
                className="relative w-[35.5px] h-[30.5px] mt-[-1.50px] ml-[-1.50px]"
                alt="Icon"
                src="/img/icon-1.png"
              />
              <div className="relative w-fit [font-family:'Jost',Helvetica] font-medium text-[#2f2f2f] text-[15px] tracking-[0] leading-[20.0px] whitespace-nowrap">
                Registered
              </div>
              <p className="relative w-[116px] mb-[-17.00px] mr-[-31.00px] [font-family:'Jost',Helvetica] font-normal text-[#969696] text-[10px] tracking-[0] leading-[16.0px]">
                Category I Aif – Venture Capital Fund (Angel Fund)
                <br />
                sebi Registration Number: In/aif1/22-23/1234
                <br />
                name Of Fund Manager: Climate9ers Partners Llp
              </p>
            </div>
            <div className="flex w-[157px] h-[209px] items-start gap-2.5 pl-[22px] pr-[50px] pt-[19px] pb-[43px] top-[583px] left-[186px] bg-white rounded-[10px] border border-solid border-transparent shadow-[0px_28px_57px_#bebebe40] [border-image:linear-gradient(to_bottom,rgb(234.81,234.81,234.81),rgb(255,255,255))_1] flex-col absolute">
              <img
                className="relative w-[35.5px] h-[30.5px] mt-[-1.50px] ml-[-1.50px]"
                alt="Icon"
                src="/img/icon-1.png"
              />
              <div className="relative w-fit [font-family:'Jost',Helvetica] font-medium text-[#2f2f2f] text-[15px] tracking-[0] leading-[20.0px] whitespace-nowrap">
                Our Idea
              </div>
              <p className="relative w-[124px] mb-[-33.00px] mr-[-39.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#969696] text-[10px] tracking-[0] leading-[16.0px]">
                We Invite You To Make A Lasting Impact With Us.
                <br />
                together, We Can Drive Innovation, Combat Climate Change,
                <br />
                and Leave A Better World For Future Generations.
              </p>
            </div>
            <div className="absolute w-[310px] h-[185px] top-[841px] left-[25px]">
              <div className="absolute w-[271px] h-[185px] top-0 left-[39px]">
                <img
                  className="absolute w-[166px] h-[163px] top-[22px] left-[27px]"
                  alt="Climate technologies"
                  src="/img/climate-technologies-for-net-zero-1366549261-thumb-1536x1536-rem.png"
                />
                <div className="absolute w-[43px] h-9 top-0 left-0">
                  <div className="absolute top-[22px] left-0 [font-family:'Jost',Helvetica] font-medium text-[#000000] text-[10px] tracking-[0] leading-[normal]">
                    Emit Less
                  </div>
                  <img className="absolute w-9 h-[22px] top-0 left-0.5" alt="Image" src="/img/image-1001-1.png" />
                </div>
                <div className="absolute top-[157px] left-[182px] [font-family:'Jost',Helvetica] font-medium text-[#000000] text-[10px] tracking-[0] leading-[normal]">
                  Produce Sustainably
                </div>
                <img
                  className="absolute w-[34px] h-[22px] top-[136px] left-[209px]"
                  alt="Image"
                  src="/img/image-1002.png"
                />
              </div>
              <div className="absolute w-[61px] h-[42px] top-[130px] left-0">
                <div className="absolute top-7 left-0 [font-family:'Jost',Helvetica] font-medium text-[#000000] text-[10px] tracking-[0] leading-[normal]">
                  Absorb More
                </div>
                <img className="absolute w-[27px] h-7 top-0 left-4" alt="Image" src="/img/image-1004.png" />
              </div>
              <div className="absolute top-[35px] left-[239px] [font-family:'Jost',Helvetica] font-medium text-[#000000] text-[10px] tracking-[0] leading-[normal]">
                Clean Water
              </div>
              <img className="absolute w-[22px] h-6 top-2.5 left-[254px]" alt="Vector" src="/img/vector.svg" />
            </div>
            <div className="absolute w-[85px] h-[43px] top-[1047px] left-[133px]">
              <div className="absolute top-0 left-0 [font-family:'Jost',Helvetica] font-medium text-[#000000] text-[10px] tracking-[0] leading-[normal]">
                Recycle Everything
              </div>
              <img className="absolute w-[49px] h-[29px] top-3.5 left-[17px]" alt="Image" src="/img/image-1003-1.png" />
            </div>
            <div className="absolute w-[348px] h-[304px] top-[1119px] left-3">
              <p className="w-[221px] top-[21px] font-semibold text-[#000000] text-xl leading-[normal] absolute left-0 [font-family:'Jost',Helvetica] tracking-[0]">
                Tech Entrepreneurs holds the key to net zero
              </p>
              <p className="w-[202px] top-[117px] font-normal text-[#4d4d4d] text-[10px] leading-[16.0px] absolute left-0 [font-family:'Jost',Helvetica] tracking-[0]">
                Tech Entrepreneurs Play A Pivotal Role In Driving Innovation For A<br />
                net Zero Future By Developing Cutting-edge Solutions To Reduce Carbon Emissions.
                <br />
                entrepreneurs With Revolutionary Ideas, When Empowered With Resources, Mentorship, And Networks,
                <br />
                can Scale And Accelerate Technologies That Stabilize The Planet&#39;s Ecology, Making Their
                <br />
                contributions Essential For Global Decarbonization Efforts.
              </p>
              <img
                className="absolute w-[157px] h-[304px] top-0 left-[191px]"
                alt="Why choose us"
                src="/img/why-choose-us.png"
              />
            </div>
            <div className="absolute w-[101px] top-[1456px] left-[131px] [font-family:'Jost',Helvetica] font-semibold text-[#000000] text-xl tracking-[0] leading-[normal]">
              Focus Area
            </div>
          </>
        )}
      </div>
    </div>
  );
};
