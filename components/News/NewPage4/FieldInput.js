import { Divider, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import EastIcon from "@mui/icons-material/East";
import styles from "../../../styles/FieldInputNewPage4.module.css";
import { getAllPostNews } from "../../../ApiUrl/newsApi/newsApi";
import { useRouter } from "next/router";

const FieldInput = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const [dropdownItems, setDropdownItems] = useState([]);
    const router = useRouter();
    const InputRef = useRef(null);

    const handleInput = (e) => {
        if (InputRef.current) {
            clearTimeout(InputRef.current);
        }
        InputRef.current = setTimeout(async () => {
            const data = await getAllPostNews(e.target.value);
            console.log("🚀 ~ file: FieldInput.js:20 ~ data:", data)
            const datafilter = data.map((item) => item.title).filter((item) => item.includes(e.target.value));

            setDropdownItems(datafilter)
            if (datafilter.length > 0) {
                setDropdownVisible(true);
            }
            if (e.target.value === "" || datafilter.length === 0) {
                setDropdownVisible(false);
            }
        }, 100);
    };

    return (
        <div className={`${styles.FindGroup} ${dropdownVisible && styles.active}`}>

            <input
                onChange={(e) => {
                    handleInput(e);
                }}
                placeholder="Search"
            />
            <div className={styles.WrapIconRight}>
                <IconButton
                    className={styles.ArrowRight}
                    type="button"
                    sx={{ p: "10px", color: "#fff" }}
                    aria-label="search"
                    disableRipple
                >
                    <SearchIcon sx={{ color: "#fff" }} />
                </IconButton>
            </div>
            {dropdownVisible && (
                <div className={styles.dropDownList}>
                    {dropdownItems.map((item, index) => (
                        <div key={index} onClick={() => {
                            router.push(`/daily-news/${item}`)
                        }}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FieldInput;
