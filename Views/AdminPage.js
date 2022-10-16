import * as React from "react";
import { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import LandingPageForm from "../components/Admin/LandingPageForm";
// import NewsForm from "../components/Admin/NewsForm";
// import AddNews from "../components/Admin/AddNews";
// import { urlAbout } from "../ApiUrl/Api";
import LandingPageForm from "../components/Admin/LandingPageForm";
import NewsForm from "../components/Admin/NewsForm";
import AddNews from "../components/Admin/AddNews";
import Hiring from "../components/Admin/Hiring";
import { urlAbout, urlCompanyInfo } from "../ApiUrl/Api";
import axios from "axios";
import { useState } from "react";
import CompanyInfo from "../components/Admin/CompanyInfo";
// import logo from "../../imgs/logo.png";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          <Box>{children}</Box>
        </Box>
      )}
      {/* <div className='logo-img-edit'>
        <img src={logo} alt='' />
      </div> */}
    </div>
  );
}

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [defaultValues, setDefaultValues] = useState();
  const [defaultValuesCom, setDefaultValuesCom] = useState();
  const [isAddNews, setIsAddNews] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const fetchCompanyInfo = async () => {
    await axios
      .get(urlCompanyInfo)
      .then(({ data }) => {
        // console.log(data);
        let preLoadValueCom = {
          title1: data[0].address,
          title2: data[0].phoneNumber,
          title3: data[0].email,
          content1Line1: data[0].title,
          content1Line2: data[0].content,
          content1Line3: data[0].instagram,
          content1Line4: data[0].facebook,
          content1Line5: data[0].twitter,
          content1Line6: data[0].linkedin,
        };
        setDefaultValuesCom(preLoadValueCom);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchLandingPageData = async () => {
    await axios
      .get(urlAbout)
      .then(({ data }) => {
        // console.log(data);
        let preLoadValue = {
          title1: data[0].firstLine,
          title2: data[0].secondLine,
          title3: data[0].thirdLine,
          content1Line1: data[1].firstLine,
          content1Line2: data[1].secondLine,
          content1Line3: data[1].thirdLine,
          content1Line4: data[1].fourthLine,
          content1Line5: data[1].fifthLine,
          content1Line6: data[1].sixthLine,
          content2Line1: data[2].firstLine,
          content2Line2: data[2].secondLine,
          content2Line3: data[2].thirdLine,
          content2Line4: data[2].fourthLine,
          content2Line5: data[2].fifthLine,
          content3Line1: data[3].firstLine,
          content3Line2: data[3].secondLine,
          content3Line3: data[3].thirdLine,
          content3Line4: data[3].fourthLine,
          content3Line5: data[3].fifthLine,
          content3Line6: data[3].sixthLine,
          content3Line7: data[3].seventhLine,
          content3Line8: data[3].eighthLine,
          content3Line9: data[3].ninthLine,
          content3Line10: data[3].tenthLine,
          content4Line1: data[4].firstLine,
          content4Line2: data[4].secondLine,
          content4Line3: data[4].thirdLine,
          content4Line4: data[4].fourthLine,
          content4Line5: data[4].fifthLine,
          content5Line1: data[5].firstLine,
          content5Line2: data[5].secondLine,
          content5Line3: data[5].thirdLine,
        };
        // console.log(preLoadValue);
        setDefaultValues(preLoadValue);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchLandingPageData();
  }, []);

  return (
    <Box sx={{ width: "100%", background: "white" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Landing Page' onClick={() => {}} />
          <Tab
            label='Edit News'
            onClick={() => {
              setIsAddNews(false);
            }}
          />
          <Tab
            label='Create News'
            onClick={() => {
              setIsAddNews(true);
            }}
          />
          <Tab label='Hiring' onClick={() => {}} />
          <Tab
            label='Company Info'
            onClick={async () => {
              await fetchCompanyInfo();
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {defaultValues ? (
          <LandingPageForm preLoadValue={defaultValues} />
        ) : (
          <div>Loading...</div>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NewsForm isAddNews={isAddNews} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddNews isAddNews={isAddNews} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Hiring />
      </TabPanel>
      <TabPanel value={value} index={4}>
        {defaultValuesCom ? (
          <CompanyInfo defaultValuesCom={defaultValuesCom} />
        ) : (
          <div>Loading...</div>
        )}
      </TabPanel>
    </Box>
  );
}
