import React from "react";
import styles from "../../../styles/NewPage4.module.css";
import FieldInput from "./FieldInput";
import Link from "next/link";
import IconShareComponent from "./IconShareComponent";

const NewPage4 = ({ listNewsPublic, listNewsReaded }) => {
  const leftNews = listNewsPublic?.slice(1);
  return (
    <div className={styles.NewPage4Container}>
      <FieldInput />
      <div className={styles.WrapContent}>
        <div className={styles.ContentLeft}>
          <Link href={`/dailynews/${listNewsPublic?.[0]?.title}`}>
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
            {leftNews.map((item) => {
              return (
                <Link href={`/dailynews/${item?.title}`} key={item.id}>
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
                <Link href={`/dailynews/${item?.title}`} key={item.id}>
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
