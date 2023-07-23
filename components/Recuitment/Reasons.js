import React, { useState, useEffect } from "react";
import styles from "../../styles/RecuitmentStyles.module.css";
import { Chip, Avatar, Box } from "@mui/material";
import { text } from "@fortawesome/fontawesome-svg-core";
import { getListReasonData } from "../../ApiUrl/reason/reasonApi";

const styleAvatar = {
  width: "30px",
  height: "30px",
  marginLeft: "0",
  backgroundColor: "#fff",
  fontSize: '20px'
};

const styleChip = {
  color: "#fff",
  borderColor: "#fff",
  backgroundColor: "#3A3A3A",
  margin: "0 10px 10px 0",
  lineHeight: "1.1",

};

// const data = [
//   {
//     id: 1,
//     title: "Experienced and knowledgeable team of music industry professionals",
//   },
//   {
//     id: 2,
//     title: "Range of services to help artists succeed",
//   },
//   {
//     id: 3,
//     title: "Commitment to excellence",
//   },
//   {
//     id: 4,
//     title: "Proven track record of delivering exceptional results",
//   },
//   {
//     id: 5,
//     title: "Collaborative and transparent approach",
//   },
//   {
//     id: 6,
//     title:
//       "Passion for supporting emerging artists, promoting diversity and inclusion in the music industry",
//   },
//   {
//     id: 7,
//     title: "The wide spread networking of media, partnerships & connections",
//   },
// ];

const Reasons = () => {
  const [listReason, setListResons] = useState(null || [])
  useEffect(() => {
    getListReasonData().then((res) => {
      setListResons(res)
    })
  }, [])
  return (
    <div>
      <div className={styles.titleMd}>7 Reasons Why You Should Hire TRUM</div>
      <Box sx={{ pt: 2 }}>
        {listReason.map((item, index) => {
          return (
            <Chip
              key={item.id}
              avatar={<Avatar style={styleAvatar}>{index + 1}</Avatar>}
              label={item.title}
              sx={{
                ...styleChip,
                "& .MuiChip-label": {
                  display: "block",
                  whiteSpace: "normal",
                  fontWeight: "light",
                  fontSize: "8px",

                },
                "@media (min-width: 375px)": {
                  "& .MuiChip-label": {
                    fontSize: "10px",
                  },
                },
                "@media (min-width: 992px)": {
                  "& .MuiChip-label": {
                    fontSize: "13px",
                  },
                }
              }}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default Reasons;
