import React, { useState, useEffect } from "react";
import styles from "../../styles/RecuitmentStyles.module.css";
import { Chip, Avatar, Box } from "@mui/material";
import { text } from "@fortawesome/fontawesome-svg-core";

const styleAvatar = {
  width: "30px",
  height: "30px",
  marginLeft: "0",
  backgroundColor: "#fff",
};

const styleChip = {
  color: "#fff",
  borderColor: "#fff",
  backgroundColor: "#3A3A3A",
  margin: "0 10px 10px 0",
  lineHeight: "1.1",
};

const data = [
  {
    id: 1,
    title: "Experienced and knowledgeable team of music industry professionals",
  },
  {
    id: 2,
    title: "Range of services to help artists succeed",
  },
  {
    id: 3,
    title: "Commitment to excellence",
  },
  {
    id: 4,
    title: "Proven track record of delivering exceptional results",
  },
  {
    id: 5,
    title: "Collaborative and transparent approach",
  },
  {
    id: 6,
    title:
      "Passion for supporting emerging artists, promoting diversity and inclusion in the music industry",
  },
  {
    id: 7,
    title: "The wide spread networking of media, partnerships & connections",
  },
];

const Reasons = () => {
  return (
    <div>
      <div className={styles.titleMd}>7 Reasons Why You Should Hire TRUM</div>
      <Box sx={{ pt: 2 }}>
        {data.map((item) => {
          return (
            <Chip
              key={item.id}
              avatar={<Avatar style={styleAvatar}>{item.id}</Avatar>}
              label={item.title}
              sx={{
                ...styleChip,
                "& .MuiChip-label": {
                  display: "block",
                  whiteSpace: "normal",
                  fontWeight: "light",
                },
              }}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default Reasons;
