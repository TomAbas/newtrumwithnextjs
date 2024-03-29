import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import arrowLeft from "../../../../public/imgs/arrowLeft.svg";
import arrowRight from "../../../../public/imgs/arrowRight.svg";
import plusicon from "../../../../public/imgs/plusicon.svg";
import styles from "../../../../styles/Page022Styles.module.css";
import gridpic from "../../../../public/imgs/grid.svg";
import { urlNews } from "../../../../ApiUrl/Api";
import { useInView } from "framer-motion";
import Image from "next/future/image";
import axios from "axios";
//img


const Page022 = () => {
	const router = useRouter();
	const [isDown, setIsDown] = useState(false);
	const [walk, setWalk] = useState(0);
	const [render, setRender] = useState(false);
	const [arrayListJob, setArrayListJob] = useState([]);
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
	const itemWordRef = useRef();
	const itemWordRef1 = useRef();
	const itemWordRef2 = useRef();
	const inViewGridPicref = useInView(gridBoxRef);
	const activeRender = () => {
		setRender(!render);
	};
	const fetchListJob = async () => {
		await axios.get(urlNews).then(({ data }) => {
			let a = data.filter((data) => {
				return data.deleted === "0";
			});
			setArrayListJob(a);
		});
	};

	const arrJob = [
		{
			banner: 'https://media.istockphoto.com/id/1143284629/vi/anh/nh%C3%ACn-t%E1%BB%AB-tr%C3%AAn-cao-c%E1%BB%A7a-%C4%91%C6%B0%E1%BB%9Dng-ch%C3%A2n-tr%E1%BB%9Di-th%C3%A0nh-ph%E1%BB%91-h%E1%BB%93-ch%C3%AD-minh-l%C3%BAc-ho%C3%A0ng-h%C3%B4n.jpg?s=1024x1024&w=is&k=20&c=Mvb4LvQX187IXnw75wi6yRwNNfAiBkEgPerKvSaqjhM=',
			title: "123",
			title1: "1234",
		},
		{
			banner: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/240587432_1046868426130963_404272612920016365_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=19026a&_nc_ohc=0KIQ6PG_TrQAX8jxjKN&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfD63weY7wK9qIFc-PunWDSMB2W7Jn_sQAzYDGFV7AqvNg&oe=63F1C54E",
			title: "123",
			title1: "1234",
		},
		{
			banner: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/239985418_1033344517483354_3481064083892942244_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=19026a&_nc_ohc=16fJyMNiCdUAX-J7yjF&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfALsD2wSg24fabXsWHXLjA9u4KAN09hlHABnG96wr5Prw&oe=63F2C02F",
			title: "123",
			title1: "1234",
		},
		{
            banner: 'https://media.istockphoto.com/id/1143284629/vi/anh/nh%C3%ACn-t%E1%BB%AB-tr%C3%AAn-cao-c%E1%BB%A7a-%C4%91%C6%B0%E1%BB%9Dng-ch%C3%A2n-tr%E1%BB%9Di-th%C3%A0nh-ph%E1%BB%91-h%E1%BB%93-ch%C3%AD-minh-l%C3%BAc-ho%C3%A0ng-h%C3%B4n.jpg?s=1024x1024&w=is&k=20&c=Mvb4LvQX187IXnw75wi6yRwNNfAiBkEgPerKvSaqjhM=',
			title: "123",
			title1: "1234",
		},
	];
	const createSlideItems = () => {
		let b = arrJob.map((job, idx) => {
			return (
				// <Link href={`/projects/${job.postId}`}>
				<div
					key={idx}
					className={`${styles.slideItem} item`}
					ref={refItem0}
					style={{
						background: `url(${job.banner}) no-repeat center center/cover`,
					}}
					onDoubleClick={() => router.push(`/projects/${job.postId}`)}
				>
					<div className={styles.item}>
						<h1>{job.title}</h1>
					</div>
					{job.title1 && (
						<div className={styles.item}>
							<h1>{job.title1}</h1>
						</div>
					)}
				</div>
				// </Link>
			);
		});
		return b;
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
		// x.current = e.clientX;
		// const test = e.clientX - check0.current;
		// slider.current.style.transition = "";
		// setWalk(startX.current + test);
		// slider.current.style.left = `${walk}px`;
		// //check left or right negative => right to left
		// check1.current = x.current - check0.current;
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
		// setIsDown(true);
		// sliderContainer.current.style.cursor = "grabbing";
		// startX.current = slider.current.offsetLeft;
		// check0.current = e.touches[0].clientX;
		// console.log(slider.current.offsetLeft);
	};

	const tounchMove = (e) => {
		if (!isDown) return;
		x.current = e.touches[0].clientX;
		// console.log("startX "+startX.current);
		// console.log(x.current)
		const test = e.touches[0].clientX - check0.current;
		// console.log(startX.current + test);
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
		setWalk(count.current * (widthOfItem + 120));
	};
	// handle mouse in side element to display dif icon
	const handleMouseEnterInside = (e) => {
		e.stopPropagation();
		const widthOfItem = sliderContainer.current.offsetWidth;
		const heightOfItem = sliderContainer.current.offsetHeight;
		let offsetX = e.nativeEvent.offsetX;
		let offsetY = e.nativeEvent.offsetY;
		// console.log(offsetY);
		if (offsetX > 0 && offsetY > 0 && offsetX < widthOfItem && offsetY < heightOfItem) {
			if (document.body.clientWidth >= 950) {
				plusBoxRef.current.style.display = "inline-block";
				plusBoxRef.current.style.transform = `translate3d(${offsetX}px,${offsetY}px,0)`;
				arrowLeftBoxRef.current.style.display = "none";
				arrowRightBoxRef.current.style.display = "none";
			}
		}
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

			if (offsetX - sliderContainer.current.offsetLeft > 0) {
				plusBoxRef.current.style.display = "none";
				arrowLeftBoxRef.current.style.display = "none";
				arrowRightBoxRef.current.style.display = "inline-block";
				arrowRightBoxRef.current.style.left = `${offsetX}px`;
				arrowRightBoxRef.current.style.top = `${offsetY - 50}px`;
				// itemWordRef.current.style.transform = "scale(1)";
				// itemWordRef1.current.style.transform = "scale(1)";
				// itemWordRef2.current.style.transform = "scale(1)";
			}
		}

		if (offsetY > 550) {
			arrowRightBoxRef.current.style.display = "none";
			arrowLeftBoxRef.current.style.display = "none";
			plusBoxRef.current.style.display = "none";
		}
	};

	const ClickMoveSlide = (e) => {
		// let a = slider.current.children;
		// let offsetX = e.nativeEvent.offsetX;
		// const widthOfItem = refItem0.current.offsetWidth;
		// if (offsetX - sliderContainer.current.offsetLeft > 0 && count.current > -a.length) {
		// 	count.current = count.current - 1;
		// }
		// if (offsetX - sliderContainer.current.offsetLeft < 0 && count.current < 0) {
		// 	count.current = count.current + 1;
		// }

		// if (count.current === -slider.current.children.length) {
		// 	count.current = -(slider.current.children.length - 1);
		// }
		// if (count.current === 1) {
		// 	count.current = 0;
		// }
		// setWalk(count.current * (widthOfItem + 120));
		// slider.current.style.left = `${count.current * (widthOfItem + 120)}px`;
		// slider.current.style.transition = "all 0.5s ease-in-out";

		// adjustSlideItem();
		let lists = document.querySelectorAll(".item");
		document.getElementById("slide").prepend(lists[lists.length - 1]);
	};

	//   const adjustSlideItem = () => {
	//     let a = slider.current.children;
	//     console.log(count.current);
	//     for (let i = 0; i < a.length; i++) {
	//       if (count.current === -i) {
	//         a[i].style.transform = "rotate(0deg) translateY(0%) scale(1)";
	//         // console.log("i ", i);
	//         if (i < a.length - 1) {
	//           // console.log("ett");
	//           a[i + 1].style.transform = "rotate(4deg) translateY(5%) scale(1)";
	//         }
	//         if (i > 0) {
	//           a[i - 1].style.transform = "rotate(-4deg) translateY(5%) scale(1)";
	//         }
	//       }
	//     }
	//   };
	const checkClientWidth = () => {
		// console.log(document.body.clientWidth);
		if (document.body.clientWidth < 950) {
			plusBoxRef.current.style.display = "none";
			arrowLeftBoxRef.current.style.display = "none";
			arrowRightBoxRef.current.style.display = "none";
		}
	};
	useEffect(() => {
		fetchListJob();
	}, []);
	useEffect(() => {
		// adjustSlideItem();
		activeRender();
		checkClientWidth();
	}, [walk, count]);

	return (
		<>
			<div className={styles.page02Container}>
				<div className={styles.gridPicBox} onMouseMove={handleMouseEnterOutside} ref={gridBoxRef} >
					<div className={inViewGridPicref ? `${styles.gridBox} ${styles.gridShow}` : styles.gridBox}>
						<Image src={gridpic} alt="grid-pic" className={styles.gridPic} />
					</div>
					<div className={styles.arrowLeftBox}>
						<div className={styles.arrow} ref={arrowLeftBoxRef}>
							<Image src={arrowLeft} alt="+" className={styles.arrowImg} />
						</div>
					</div>{" "}
					<div onClick={() => ClickMoveSlide()} className={styles.arrowRightBox}>
						<div className={styles.arrow} ref={arrowRightBoxRef}>
							<Image src={arrowRight} alt="+" className={styles.arrowImg} />
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
						<div>
							<Image src={plusicon} alt="+" className={styles.plusImg} />
						</div>
					</div>
					<div className={styles.sliderContainer}>
						<div className={styles.sliderItems} id="slide" ref={slider}>
							{createSlideItems()}
						</div>
					</div>
					<div className={styles.slidePagination}>
						<div className={styles.paginate}>{-count.current + 1}</div>
						<div className={styles.paginate}>{slider.current && slider.current.children.length}</div>
					</div>


				</div>
			</div>
		</>
	);
};

export default Page022;
