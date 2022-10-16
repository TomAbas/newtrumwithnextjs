import React, { useEffect, useRef, useState } from "react";
import arrowLeft from "../../../public/imgs/arrowLeft.svg";
import arrowRight from "../../../public/imgs/arrowRight.svg";
import plusicon from "../../../public/imgs/plusicon.svg";
import { useInView } from "framer-motion";
import Image from "next/future/image";
import styles from "../../../styles/ProjectPage04Styles.module.css";
import { urlNews } from "../../ApiUrl/Api";
import { urlNewsId } from "../../ApiUrl/Api";
import axios from "axios";
import Link from "next/link";
const ProjectPage04 = ({
  subTitle1,
  content1,

  img1,
  img2,
  img3,
  img4,
  img5,
  projectsidx,
}) => {
  const [subTitleAr1, setSubTitleAr1] = useState([]);
  const [imgArr, setImgArr] = useState([]);
  const [nextNews, setNextNews] = useState();
  const [currentIdxNews, setCurrentIdxNews] = useState();
  const arrWordRef = useRef();
  const isArrWordIn = useInView(arrWordRef);
  const getListNews = async () => {
    await axios.get(urlNews).then(({ data }) => {
      let a = data.filter((data) => {
        return data.deleted === "0";
      });
      // console.log(a);
      const findIdx = (e) => e.postId === projectsidx;
      // console.log(a.findIndex(findIdx));
      let currentIdxNews = a.findIndex(findIdx);
      if (currentIdxNews >= 0) {
        let converToNum = parseInt(currentIdxNews);
        let b;
        if (converToNum === a.length - 1) {
          b = a[0].postId;
        } else {
          b = a[converToNum + 1].postId;
        }
        setCurrentIdxNews(b);
      }
    });
  };
  const fetchNextNews = async () => {
    if (currentIdxNews) {
      // console.log("currentIdxNews", currentIdxNews);
      await axios.get(`${urlNewsId}/${currentIdxNews}`).then(({ data }) => {
        // console.log(data);
        setNextNews(data[0]);
      });
    }
  };
  const produceArray = () => {
    if (subTitle1) {
      let subTitleArr1 = subTitle1.split("");
      // console.log(subTitleArr1);
      setSubTitleAr1(subTitleArr1);
      // console.log(typeof img);
      let imgArr = [];

      imgArr.push(img1);
      imgArr.push(img2);
      imgArr.push(img3);
      imgArr.push(img4);
      imgArr.push(img5);
      setImgArr(imgArr);
    }
  };
  const createSlideItems = () => {
    let b = imgArr.map((img, idx) => {
      return (
        <div
          className={styles.slideItem}
          ref={refItem0}
          style={{ background: `url(${img}) no-repeat center center/cover` }}
        >
          <div className={styles.item}></div>
        </div>
      );
    });
    return b;
  };
  const animationWords = () => {
    let b = subTitleAr1.map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 0.5}s` };
      return (
        <h1
          key={idx}
          className={isArrWordIn ? "fadeInUp0 " : " "}
          style={delay}
        >
          {word}
        </h1>
      );
    });
    return b;
  };

  const [isDown, setIsDown] = useState(false);
  const [walk, setWalk] = useState(0);
  const [render, setRender] = useState(false);
  const sliderContainer = useRef();
  const slider = useRef();
  const startX = useRef(0);
  const check0 = useRef(0);
  const check1 = useRef(0);
  const refItem0 = useRef();
  const count = useRef(0);
  const x = useRef();
  const plusBoxRef = useRef();
  const arrowLeftBoxRef = useRef();
  const arrowRightBoxRef = useRef();
  const gridBoxRef = useRef();
  const activeRender = () => {
    setRender(!render);
  };
  const mouseDown = (e) => {
    setIsDown(true);
    sliderContainer.current.style.cursor = "grabbing";
    startX.current = slider.current.offsetLeft;
    check0.current = e.clientX;
    // console.log(slider.current.offsetLeft);
    // console.log(slider.current.children);
  };
  const mouseMove = (e) => {
    handleMouseEnterInside(e);

    if (!isDown) return;
    x.current = e.clientX;
    // console.log("startX "+startX.current);
    // console.log(x.current)
    const test = e.clientX - check0.current;
    // console.log(startX.current + test);
    slider.current.style.transition = "";
    setWalk(startX.current + test);
    slider.current.style.left = `${walk}px`;
    //check left or right negative => right to left

    check1.current = x.current - check0.current;
    // console.log(check1.current)
  };
  const mouseUp = () => {
    sliderContainer.current.style.cursor = "grab";
    setIsDown(false);
    //swift from right to left

    const widthOfItem = refItem0.current.offsetWidth;

    if (check1.current < -50) {
      count.current = count.current - 1;
    }
    if (check1.current > 50) {
      count.current = count.current + 1;
    }

    if (count.current === -slider.current.children.length) {
      count.current = -(slider.current.children.length - 1);
    }
    if (count.current === 1) {
      count.current = 0;
    }
    slider.current.style.left = `${count.current * (widthOfItem + 120)}px`;
    slider.current.style.transition = "all 0.5s ease-in-out";
    setWalk(count.current * (widthOfItem + 120));
  };
  const mouseLeave = () => {
    setIsDown(false);
  };

  const tounchStart = (e) => {
    setIsDown(true);
    sliderContainer.current.style.cursor = "grabbing";
    startX.current = slider.current.offsetLeft;
    check0.current = e.touches[0].clientX;
    // console.log(slider.current.offsetLeft);
  };

  const tounchMove = (e) => {
    if (!isDown) return;
    x.current = e.touches[0].clientX;
    // console.log("startX "+startX.current);
    // console.log(x.current)
    const test = e.touches[0].clientX - check0.current;
    console.log(startX.current + test);
    slider.current.style.transition = "";
    slider.current.style.left = `${startX.current + test}px`;

    //check left or right negative => right to left

    check1.current = x.current - check0.current;
    // console.log(check1.current)
  };

  const TouchEnd = () => {
    sliderContainer.current.style.cursor = "grab";
    setIsDown(false);
    //swift from right to left

    const widthOfItem = refItem0.current.offsetWidth;
    setWalk(count.current * (widthOfItem + 120));
    if (check1.current < -50) {
      count.current = count.current - 1;
    }
    if (check1.current > 50) {
      count.current = count.current + 1;
    }

    if (count.current === -slider.current.children.length) {
      count.current = -(slider.current.children.length - 1);
    }
    if (count.current === 1) {
      count.current = 0;
    }
    slider.current.style.left = `${count.current * (widthOfItem + 120)}px`;
    slider.current.style.transition = "all 0.5s ease-in-out";
  };
  // handle mouse in side element to display dif icon
  const handleMouseEnterInside = (e) => {
    e.stopPropagation();
    const widthOfItem = sliderContainer.current.offsetWidth;
    const heightOfItem = sliderContainer.current.offsetHeight;
    let offsetX = e.nativeEvent.offsetX;
    let offsetY = e.nativeEvent.offsetY;
    // console.log(offsetX);
    if (
      offsetX > 0 &&
      offsetY > 0 &&
      offsetX < widthOfItem &&
      offsetY < heightOfItem
    ) {
      if (document.body.clientWidth >= 950) {
        plusBoxRef.current.style.display = "inline-block";
        plusBoxRef.current.style.transform = `translate3d(${offsetX}px,${offsetY}px,0)`;
        arrowLeftBoxRef.current.style.display = "none";
        arrowRightBoxRef.current.style.display = "none";
      }
    }

    // if (offsetX < 10 || offsetX > widthOfItem - 10) {
    //   plusBoxRef.current.style.display = "none";
    // }
  };
  const handleMouseEnterOutside = (e) => {
    let offsetX = e.nativeEvent.offsetX;
    let offsetY = e.nativeEvent.offsetY;

    if (document.body.clientWidth >= 950) {
      if (offsetX - sliderContainer.current.offsetLeft < 0) {
        plusBoxRef.current.style.display = "none";
        arrowRightBoxRef.current.style.display = "none";
        arrowLeftBoxRef.current.style.display = "inline-block";
        arrowLeftBoxRef.current.style.left = `${offsetX - 70}px`;
        arrowLeftBoxRef.current.style.top = `${offsetY - 50}px`;
      }
      // console.log(offsetX);
      if (offsetX - sliderContainer.current.offsetLeft > 0) {
        plusBoxRef.current.style.display = "none";
        arrowLeftBoxRef.current.style.display = "none";
        arrowRightBoxRef.current.style.display = "inline-block";
        arrowRightBoxRef.current.style.left = `${offsetX}px`;
        arrowRightBoxRef.current.style.top = `${offsetY - 50}px`;
      }
    }

    if (offsetY > 450) {
      arrowRightBoxRef.current.style.display = "none";
      arrowLeftBoxRef.current.style.display = "none";
      plusBoxRef.current.style.display = "none";
    }
  };

  const ClickMoveSlide = (e) => {
    let offsetX = e.nativeEvent.offsetX;
    const widthOfItem = refItem0.current.offsetWidth;
    if (
      offsetX - sliderContainer.current.offsetLeft > 0 &&
      count.current > -slider.current.children.length
    ) {
      count.current = count.current - 1;
    }
    if (offsetX - sliderContainer.current.offsetLeft < 0 && count.current < 0) {
      count.current = count.current + 1;
    }

    if (count.current === -slider.current.children.length) {
      count.current = -(slider.current.children.length - 1);
    }
    if (count.current === 1) {
      count.current = 0;
    }
    setWalk(count.current * (widthOfItem + 120));
    slider.current.style.left = `${count.current * (widthOfItem + 120)}px`;
    slider.current.style.transition = "all 0.5s ease-in-out";
    adjustSlideItem();
  };

  const adjustSlideItem = () => {
    let a = slider.current.children;
    // console.log(a);
    for (let i = 0; i < a.length; i++) {
      // console.log("123")
      if (count.current === -i) {
        a[i].style.transform = "rotate(0deg) translateY(0%) scale(1)";
        // console.log("a ", a);
        if (i < a.length - 1) {
          // console.log("ett");
          a[i + 1].style.transform = "rotate(4deg) translateY(5%) scale(1)";
        }
        if (i > 0) {
          a[i - 1].style.transform = "rotate(-4deg) translateY(5%) scale(1)";
        }
      }
    }
  };
  const checkClientWidth = () => {
    // console.log(document.body.clientWidth);
    if (document.body.clientWidth < 950) {
      plusBoxRef.current.style.display = "none";
      arrowLeftBoxRef.current.style.display = "none";
      arrowRightBoxRef.current.style.display = "none";
    }
  };

  useEffect(() => {
    getListNews();
  }, []);
  useEffect(() => {
    fetchNextNews();
  }, [currentIdxNews]);
  useEffect(() => {
    produceArray();
  }, [subTitle1]);
  useEffect(() => {
    // console.log(count.current);
    // slider.current.style.left = `${count.current * (widthOfItem + 120)}px`;
    // slider.current.style.left = `${walk}px`;
    adjustSlideItem();
    activeRender();
    checkClientWidth();
  }, [walk, count]);
  return (
    <>
      {" "}
      <div className={styles.newsPage04Box}>
        <div className={styles.newsContentBox01}>
          <div className={styles.newsContentTextPage04}>
            <div className={styles.newsContentH1} ref={arrWordRef}>
              {animationWords()}
            </div>

            <div dangerouslySetInnerHTML={{ __html: content1 }} />
          </div>
        </div>
        <div className={styles.page02Container}>
          <div
            className={styles.gridPicBox}
            onMouseMove={handleMouseEnterOutside}
            ref={gridBoxRef}
            onClick={ClickMoveSlide}
          >
            <div className={styles.gridBox}>
              {/* <img src={gridpic} alt='grid-pic' className='grid-pic' /> */}
            </div>
            <div className={styles.arrowLeftBox}>
              <div
                className={`${styles.plusIcon} ${styles.arrow}`}
                ref={arrowLeftBoxRef}
              >
                <Image src={arrowLeft} alt='+' className={styles.arrowImg} />
              </div>
            </div>{" "}
            <div className={styles.arrowRightBox}>
              <div
                className={`${styles.plusIcon} ${styles.arrow}`}
                ref={arrowRightBoxRef}
              >
                <Image src={arrowRight} alt='+' className={styles.arrowImg} />
              </div>
            </div>
          </div>

          <div
            className={styles.page02Slider}
            ref={sliderContainer}
            onTouchEnd={TouchEnd}
            onTouchStart={tounchStart}
            onTouchMove={tounchMove}
            onMouseDown={mouseDown}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            onMouseUp={mouseUp}
          >
            <div className={styles.plusIconBox} ref={plusBoxRef}>
              <div className='plus-icon'>
                <Image src={plusicon} alt='+' className={styles.plusImg} />
              </div>
            </div>
            <div className={styles.sliderContainer}>
              <div className={styles.sliderItems} ref={slider}>
                {createSlideItems()}
              </div>
            </div>
            {/* <div className='slide-pagination'>
        <div className='current-pagination paginate'>
          {-count.current + 1}
        </div>
        <div className='total-pagination paginate'>
          {slider.current && slider.current.children.length}
        </div>
      </div> */}
          </div>
        </div>
        <div className={styles.newsNextNews}>
          <p>Next project</p>
          <div className={styles.nextNewsBackground}>
            <div className={styles.newsBackground}>
              {nextNews && (
                <Link href={`/projects/${nextNews.postId}`}>
                  <div className={styles.headlineNextNews}>
                    <h1>{nextNews.title}</h1>
                    <h1>{nextNews.title1}</h1>
                    <p>{nextNews.category}</p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage04;
