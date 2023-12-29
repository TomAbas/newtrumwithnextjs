import { Divider, IconButton, Input } from "@mui/material";
import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../../../styles/NewPage4.module.css";
import EastIcon from "@mui/icons-material/East";
import FieldInput from "./FieldInput";
import Image from "next/image";
import Link from "next/link";

import iconShareActive from "../../../public/imgs/iconShareActive.svg";

import iconShareUnActive from "../../../public/imgs/iconShareUnactive.svg";
import IconShareComponent from "./IconShareComponent";

const ListNews = [
  {
    id: 1,
    title: "NEWS TITLE",

    content:
      "The project features several innovative real-time approaches and technologies,including volumetric capture of actors, motion capture, as well as physics and                                fluids simulations.",
  },
  {
    id: 2,
    title: "NEWS TITLE",
    content:
      "The project features several innovative real-time approaches and technologies,including volumetric capture of actors, motion capture, as well as physics and                                fluids simulations.",
  },
  {
    id: 3,
    title: "NEWS TITLE",
    content:
      "The project features several innovative real-time approaches and technologies,including volumetric capture of actors, motion capture, as well as physics and                         fluids simulations.",
  },
  {
    id: 4,
    title: "NEWS TITLE",
    content:
      "The project features several innovative real-time approaches and technologies,including volumetric capture of actors, motion capture, as well as physics and                                fluids simulations.",
  },
];
const ListNews2 = [
  {
    id: 1,
    title: "NEWS TITLE",
    img: "https://picsum.photos/400/300",
    content:
      "The project features several innovative real-time approaches and technologies, including volumetric capture of actors, motion capture, as well as physics and fluids simulations.",
  },
  {
    id: 2,
    title: "NEWS TITLE",
    img: "https://picsum.photos/400/300",
    content:
      "The project features several innovative real-time approaches and technologies, including volumetric capture of actors, motion capture, as well as physics and fluids simulations.",
  },
  {
    id: 3,
    title: "NEWS TITLE",
    img: "https://picsum.photos/400/300",
    content:
      "The project features several innovative real-time approaches and technologies, including volumetric capture of actors, motion capture, as well as physics and fluids simulations.",
  },
  {
    id: 4,
    title: "NEWS TITLE",
    img: "https://picsum.photos/400/300",
    content:
      "The project features several innovative real-time approaches and technologies, including volumetric capture of actors, motion capture, as well as physics and fluids simulations.",
  },
];
const NewPage4 = ({ listNewsPublic, listNewsReaded }) => {
  return (
    <div className={styles.NewPage4Container}>
      <FieldInput />
      <div className={styles.WrapContent}>
        <div className={styles.ContentLeft}>
          <Link href="/daily-news">
            <div className={styles.HotNews}>
              <div
                className={styles.BackGroundNews}
                style={{
                  background: `url(${listNewsPublic?.[0]?.mainImage}) no-repeat center center/cover`,
                }}
              ></div>
              <div className={styles.WrapTextHotNewsDetail}>
                <p> {listNewsPublic?.[0]?.title}</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: listNewsPublic?.[0]?.description,
                  }}
                ></p>
              </div>
              <IconShareComponent />
            </div>
          </Link>
          <div className={styles.NormalNews}>
            {listNewsPublic.map((item) => {
              return (
                <Link href="/daily-news" key={item.id}>
                  <div key={item.id} className={styles.ItemNews}>
                    <div
                      className={styles.BackGroundItemNews}
                      style={{
                        background: `url(${item.mainImage}) no-repeat center center/cover`,
                      }}
                    ></div>
                    <div className={styles.TextItemNews}>
                      <p className={styles.TextItem1}> {item.title}</p>
                      <p
                        className={styles.TextItem2}
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      ></p>
                    </div>
                    <IconShareComponent />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.ContentRight}>
          <h1 style={{ marginBottom: "1rem" }}>MOST READ</h1>
          <div className={styles.WrapRightNews}>
            {listNewsReaded.map((item) => {
              return (
                <Link href="/news" key={item.id}>
                  <div key={item.id} className={styles.WrapContentRight}>
                    <div
                      className={styles.BackGroundItemRight}
                      style={{
                        background: `url(${item.mainImage}) no-repeat center center/cover`,
                      }}
                    ></div>
                    <div className={styles.TextItemRight}>
                      <p className={styles.TextItem1}> {item.title}</p>
                      <p
                        className={styles.TextItem2}
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    </div>
                    <IconShareComponent />
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
