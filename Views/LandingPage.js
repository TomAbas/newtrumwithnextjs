import React, { useState, useEffect } from "react";
import LandingPage0 from "../components/landingpage/LandingPage/LandingPage1/LandingPage";
import Page01 from "../components/landingpage/LandingPage/Page-01/Page01";
import Page02 from "../components/landingpage/LandingPage/Page-02/Page02";
import Page022 from "../components/landingpage/LandingPage/Page-02/Page022";
import Page03 from "../components/landingpage/LandingPage/Page-03/Page03";
import Page04 from "../components/landingpage/LandingPage/Page-04/Page04";

const LandingPage = ({ data }) => {
	const [landingPageData, setLandingPageData] = useState({});
	const [page1Data, setPage1Data] = useState({});
	const [page3Data, setPage3Data] = useState({});
	const [page4Data, setPage4Data] = useState({});
	const [page44Data, setPage44Data] = useState({});
	const [page444Data, setPage444Data] = useState({});

	const setData = () => {
		setLandingPageData(data[0]);
		setPage1Data(data[1]);
		setPage3Data(data[2]);
		setPage4Data(data[3]);
		setPage44Data(data[4]);
		setPage444Data(data[5]);
	};
	useEffect(() => {
		// setData();
	}, []);

	return (
		<>
			<LandingPage0 landingPageData={landingPageData} />
			<Page01 page1Data={page1Data} />
			{/* <Page02 /> */}
			<Page022 />
			<Page03 page3Data={page3Data} />
			<Page04 page4Data={page4Data} page44Data={page44Data} page444Data={page444Data} />
		</>
	);
};

export default LandingPage;
