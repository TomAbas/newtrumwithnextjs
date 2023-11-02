import { Divider, IconButton, Input } from "@mui/material";
import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../../../styles/NewPage4.module.css";
import EastIcon from "@mui/icons-material/East";
import FieldInput from "./FieldInput";
import Image from "next/image";
import Link from "next/link";

const ListNews = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit ",

    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut dicta magni laborum sint autem rerum repellat mollitia omnis adipisci delectus assumenda nulla necessitatibus, modi, id quas provident ea tempora?",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut dicta magni laborum sint autem rerum repellat mollitia omnis adipisci delectus assumenda nulla necessitatibus, modi, id quas provident ea tempora?",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut dicta magni laborum sint autem rerum repellat mollitia omnis adipisci delectus assumenda nulla necessitatibus, modi, id quas provident ea tempora?",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut dicta magni laborum sint autem rerum repellat mollitia omnis adipisci delectus assumenda nulla necessitatibus, modi, id quas provident ea tempora?",
  },
];
const ListNews2 = [
  {
    id: 1,
    title: "Lorem ipsum  ",
    img: "https://picsum.photos/200/300",
    content: "Lorem ipsum . Recusandae quaerat quisquam blanditiis.",
  },
  {
    id: 2,
    title: "Lorem ipsum  ",
    img: "https://picsum.photos/200/300",
    content: "Lorem ipsum . Recusandae quaerat quisquam blanditiis.",
  },
  {
    id: 3,
    title: "Lorem ipsum  ",
    img: "https://picsum.photos/200/300",
    content: "Lorem ipsum . Recusandae quaerat quisquam blanditiis.",
  },
  {
    id: 4,
    title: "Lorem ipsum  ",
    img: "https://picsum.photos/200/300",
    content: "Lorem ipsum . Recusandae quaerat quisquam blanditiis.",
  },
];
const NewPage4 = () => {
  return (
    <div className={styles.NewPage4Container}>
      <FieldInput />
      <div className={styles.WrapContent}>
        <div className={styles.ContentLeft}>
          <Link href="/news">
            <div className={styles.HotNews}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
          </Link>
          <div className={styles.NormalNews}>
            {ListNews.map((item) => {
              return (
                <Link href="/news" key={item.id}>
                  <div key={item.id} className={styles.ItemNews}>
                    {item.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.ContentRight}>
          <h1 style={{ marginBottom: "1rem" }}>MOST READ</h1>
          <div className={styles.WrapRightNews}>
            {ListNews2.map((item) => {
              return (
                <Link href="/news" key={item.id}>
                  <div key={item.id} className={styles.WrapContentRight}>
                    <Image src={item.img} alt="" width={200} height={120} />
                    <div className={styles.title}>{item.title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage4;
