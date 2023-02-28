import React from "react";
import styles from "../../../../styles/Page04Styles.module.css";
import facePic from "../../../../public/imgs/facepic.png";
import wePic from "../../../../public/imgs/weare.png";
import ncc from "../../../../public/imgs/ncc.jpg";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/future/image";

const Page04 = ({ page4Data, page44Data, page444Data }) => {
  const [line01A, setLine01A] = useState();
  const [line02A, setLine02A] = useState();
  const [line03A, setLine03A] = useState();
  const [line04A, setLine04A] = useState();
  const [line05A, setLine05A] = useState();
  const [line06A, setLine06A] = useState();
  const [line07A, setLine07A] = useState();
  const [line08A, setLine08A] = useState();
  const [line09A, setLine09A] = useState();
  const [line10A, setLine10A] = useState();
  const [page04Img, setPage04Img] = useState();
  const [line01B, setLine01B] = useState([]);
  const [line02B, setLine02B] = useState();
  const [line03B, setLine03B] = useState();
  const [line04B, setLine04B] = useState();
  const [line05B, setLine05B] = useState();
  const [line01C, setLine01C] = useState([]);
  const [line02C, setLine02C] = useState();
  const [line03C, setLine03C] = useState();

  const contentBoxref = useRef();
  const inViewContentBoxref = useInView(contentBoxref);
  const h1Ref = useRef();
  const inViewH1ref = useInView(h1Ref);
  const h1Ref1 = useRef();
  const inViewH1ref1 = useInView(h1Ref1);
  const h1Ref2 = useRef();
  const inViewH1ref2 = useInView(h1Ref2);
  const produceArray = () => {
    if (page4Data) {
      let firstLine = JSON.stringify(page4Data.firstLine);
      let secondLine = JSON.stringify(page4Data.secondLine);
      let thirdLine = JSON.stringify(page4Data.thirdLine);
      let fourthLine = JSON.stringify(page4Data.fourthLine);
      let fifthLine = JSON.stringify(page4Data.fifthLine);
      let sixthLine = JSON.stringify(page4Data.sixthLine);
      let seventhLine = JSON.stringify(page4Data.seventhLine);
      let eighthLine = JSON.stringify(page4Data.eighthLine);
      let ninthLine = JSON.stringify(page4Data.ninthLine);
      let tenthLine = JSON.stringify(page4Data.tenthLine);
      // let firstLine = "International recognition";
      // let secondLine =
      //   "  Our projects have been featured at major events like the Venice Film Festival and SXSW, on streets and in museums around the world. You may even have experienced them at home.";
      // let thirdLine = JSON.stringify(page4Data.thirdLine);
      // let fourthLine = JSON.stringify(page4Data.fourthLine);
      // let fifthLine = JSON.stringify(page4Data.fifthLine);
      // let sixthLine = JSON.stringify(page4Data.sixthLine);
      // let seventhLine = JSON.stringify(page4Data.seventhLine);
      // let eighthLine = JSON.stringify(page4Data.eighthLine);
      // let ninthLine = JSON.stringify(page4Data.ninthLine);
      // let tenthLine = JSON.stringify(page4Data.tenthLine);
      if (firstLine) {
        let arrayWords = firstLine.replace(/"/g, "");
        setLine01A(arrayWords);
        let arrayWords1 = secondLine.replace(/"/g, "");
        setLine02A(arrayWords1);
        let arrayWords2 = thirdLine.replace(/"/g, "");
        setLine03A(arrayWords2);
        let arrayWords3 = fourthLine.replace(/"/g, "");
        setLine04A(arrayWords3);
        let arrayWords4 = fifthLine.replace(/"/g, "");
        setLine05A(arrayWords4);
        let arrayWords5 = sixthLine.replace(/"/g, "");
        setLine06A(arrayWords5);
        let arrayWords6 = seventhLine.replace(/"/g, "");
        setLine07A(arrayWords6);
        let arrayWords7 = eighthLine.replace(/"/g, "");
        setLine08A(arrayWords7);
        let arrayWords8 = ninthLine.replace(/"/g, "");
        setLine09A(arrayWords8);
        let arrayWords9 = tenthLine.replace(/"/g, "");
        setLine10A(arrayWords9);
        setPage04Img(page4Data.img);
      }
    }
    if (page44Data) {
      let firstLine = JSON.stringify(page44Data.firstLine);
      let secondLine = JSON.stringify(page44Data.secondLine);
      let thirdLine = JSON.stringify(page44Data.thirdLine);
      let fourthLine = JSON.stringify(page44Data.fourthLine);
      let fifthLine = JSON.stringify(page44Data.fifthLine);
      // let firstLine = "Who we are";
      // let secondLine =
      //   "Our TRUM Crew have a wealth of experience as well as budding youth that completes a knowledgeable and energetic team. With a host of awards among us, we’re always striving for the best and don’t settle for anything less.";

      if (firstLine) {
        let arrayWords = firstLine.replace(/"/g, "").split(" ");
        setLine01B(arrayWords);
        let arrayWords1 = secondLine.replace(/"/g, "");
        setLine02B(arrayWords1);
        let arrayWords2 = thirdLine.replace(/"/g, "");
        setLine03B(arrayWords2);
        let arrayWords3 = fourthLine.replace(/"/g, "");
        setLine04B(arrayWords3);
        let arrayWords4 = fifthLine.replace(/"/g, "");
        setLine05B(arrayWords4);
        console.log(arrayWords);
      }
    }
    if (page444Data) {
      let firstLine = JSON.stringify(page444Data.firstLine);
      let secondLine = JSON.stringify(page444Data.secondLine);
      let thirdLine = JSON.stringify(page444Data.thirdLine);
      // let firstLine = "Who we do it for";
      // let secondLine =
      //   "The experiences we imagine are made for everyone. Everyone. You. Your mom, your dad. Your brothers and sisters. Your friends and colleagues. Everyone with a bit of imagination, curiosity and the desire to open and explore new worlds.";

      if (firstLine) {
        let arrayWords = firstLine.replace(/"/g, "").split(" ");
        setLine01C(arrayWords);
        let arrayWords1 = secondLine.replace(/"/g, "");
        setLine02C(arrayWords1);
        let arrayWords2 = thirdLine.replace(/"/g, "");
        setLine03C(arrayWords2);
        console.log(arrayWords);
      }
    }
  };
  const animationWords = () => {
    let b = line01B.map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 0.5}s` };
      return (
        <h1
          key={idx}
          className={
            inViewH1ref1
              ? `${styles.fadeInUpS} ${styles.h1Word}`
              : styles.h1Word
          }
          style={delay}
        >
          {word}
        </h1>
      );
    });

    return b;
  };
  const animationWords1 = () => {
    let b = line01C.map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 0.5}s` };
      return (
        <h1
          key={idx}
          className={
            inViewH1ref2
              ? `${styles.fadeInUpS} ${styles.h1Word}`
              : styles.h1Word
          }
          // className={inViewH1ref2 ? "fadeInUpS h1-word" : " h1-word"}
          style={delay}
        >
          {word}
        </h1>
      );
    });
    return b;
  };
  useEffect(() => {
    produceArray();
  }, [page4Data]);
  return (
    <>
      <div className={styles.page04Container}>
        <div className={styles.page04Content0}>
          <div className={styles.page04ContentText}>
            <p>{line01A}</p>
            <div
              className={
                inViewContentBoxref
                  ? `${styles.contentTextBox} ${styles.scaleIn1}`
                  : styles.contentTextBox
              }
              ref={contentBoxref}
            >
              <h1>{line02A}</h1>
              <h1>{line03A}</h1>
              <h1>{line04A}</h1>
              <h1>{line05A}</h1>
              <h1>{line06A}</h1>
              <h1>{line07A}</h1>
              <h1>{line08A}</h1>
              <h1>{line09A}</h1>
              <h1> {line10A}</h1>
            </div>
          </div>
          <div className={styles.page04Img}>
            <div className={styles.imgBox}>
              <Image
                layout='responsive'
                width={1000}
                height={1000}
                // src={page04Img}
                src={facePic}
                alt='facee'
              />
            </div>
          </div>
        </div>
        <div className={styles.page04Content1}>
          <div className={styles.page04ContentText1}>
            <div className={styles.page04Img1}>
              <div className={styles.imgBox}>
                <Image
                  layout='responsive'
                  width={800}
                  height={800}
                  // src={page04Img}
                  src={wePic}
                  alt='weare'
                />
              </div>
            </div>
            <div className={styles.contentText1}>
              <div className={styles.h1EffectBox} ref={h1Ref1}>
                {animationWords()}
              </div>
              <div className={styles.textBox}>
                <p>{line02B}</p>
                <p>{line03B}</p>
                <p>{line04B}</p>
                <p>{line05B}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.page04Content2}>
          <div className={styles.page04ContentText2}>
            <div className={styles.contentText2}>
              <div className={styles.h1EffectBox1} ref={h1Ref2}>
                {animationWords1()}
              </div>

              <div className={styles.textBox1}>
                <p>{line02C}</p>
                <p>{line03C}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page04;
