import * as React from "react";
import { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LandingPageForm from "../components/Admin/LandingPageForm";
import NewsForm from "../components/Admin/NewsForm";
import AddNews from "../components/Admin/AddNews";
import { urlAbout } from "../../../../react-project/trumwebversion1/src/Api/Api";
import axios from "axios";
import { useState } from "react";
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
  const [isAddNews, setIsAddNews] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <Tab label='Item One' onClick={() => {}} />
          <Tab
            label='Item Two'
            onClick={() => {
              setIsAddNews(false);
            }}
          />
          <Tab
            label='Item Three'
            onClick={() => {
              setIsAddNews(true);
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
        <NewsForm isAddNews={isAddNews}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddNews isAddNews={isAddNews} />
      </TabPanel>
    </Box>
  );
}
