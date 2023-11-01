import { Divider, IconButton, Input } from '@mui/material'
import React, { useRef } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../../styles/NewPage4.module.css';
import EastIcon from '@mui/icons-material/East';
import FieldInput from './FieldInput';
import Image from 'next/image';

const ListNews = [
  {
    id: 1,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut dicta magni laborum sint autem rerum repellat mollitia omnis adipisci delectus assumenda nulla necessitatibus, modi, id quas provident ea tempora?'
  },
  {
    id: 2,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut dicta magni laborum sint autem rerum repellat mollitia omnis adipisci delectus assumenda nulla necessitatibus, modi, id quas provident ea tempora?'
  },
  {
    id: 3,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut dicta magni laborum sint autem rerum repellat mollitia omnis adipisci delectus assumenda nulla necessitatibus, modi, id quas provident ea tempora?'
  },
  {
    id: 4,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut dicta magni laborum sint autem rerum repellat mollitia omnis adipisci delectus assumenda nulla necessitatibus, modi, id quas provident ea tempora?'
  },
]
const ListNews2 = [
  {
    id: 1,
    img: "https://picsum.photos/200/300",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat quisquam blanditiis."
  }, {
    id: 2,
    img: "https://picsum.photos/200/300",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat quisquam blanditiis."
  }, {
    id: 3,
    img: "https://picsum.photos/200/300",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat quisquam blanditiis."
  }, {
    id: 4,
    img: "https://picsum.photos/200/300",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat quisquam blanditiis."
  }
]
const NewPage4 = () => {

  return (
    <div className={styles.NewPage4Container}>
      <FieldInput />
      <div className={styles.WrapContent}>
        <div className={styles.ContentLeft}>
          <div className={styles.HotNews}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat impedit id consequuntur. Rerum ab neque velit, quam porro asperiores praesentium incidunt aut enim quasi voluptatem eius tempore. Tempore tempora ad deserunt hic doloremque modi temporibus, dignissimos corporis ea harum consectetur assumenda neque eligendi consequuntur voluptate quaerat ipsum corrupti, minus quidem debitis provident? Dignissimos, perferendis debitis deleniti ipsum laboriosam pariatur. Alias nisi, ut obcaecati, velit assumenda eum mollitia exercitationem similique quam quo explicabo eligendi, veniam debitis animi nemo distinctio tenetur officia.
          </div>
          <div className={styles.NormalNews}>
            {
              ListNews.map((item) => {
                return <div key={item.id} className={styles.ItemNews}>{item.content}</div>
              })
            }
          </div>
        </div>
        <div className={styles.ContentRight}>
          <h1 style={{ marginBottom: '1rem' }}>MOST READ</h1>
          <div className={styles.WrapRightNews}>
            {
              ListNews2.map((item) => {
                return <div key={item.id} className={styles.WrapContentRight}>
                  <Image
                    src={item.img}
                    alt=""
                    width={200}
                    height={120}
                  />
                  <div>
                    {item.content}
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPage4