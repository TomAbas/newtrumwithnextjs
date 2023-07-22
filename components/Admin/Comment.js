import React from 'react';
import styles from '../../styles/Admin.module.css';
//mui
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { useState } from 'react';
import AddIndustry from './AddIndustry';
import IndustryEditor from './IndustryEditor.js';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button } from '@mui/material';
import {
  getListRatingData,
  deleteRatingData,
} from '../../ApiUrl/rating/ratingApi';
import CommentEditor from './CommentEditor';
import AddComment from './AddComment';

const Comment = () => {
  const [arrComment, setArrComment] = useState([]);
  const [newsIdx, setNewsIdx] = useState();
  const [defaultValues, setDefaultValues] = useState();
  const [trigger, setTrigger] = useState(false);
  const [addNewComment, setAddNewComment] = useState(false);
  const [reDelete, setReDelete] = useState(true);

  const deleteComment = async (id) => {
    try {
      await deleteRatingData(id);
      setReDelete(!reDelete);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchListComment = async () => {
    setArrComment(
      await getListRatingData().then((data) => {
        console.log(data);
        return data;
      })
    );
  };
  const fetchCommentId = async (id) => {
    let commentEdit = arrComment.find((item) => item._id === id);
    let preLoadValue = {
      title: commentEdit.title,
      description: commentEdit.description,
      date: new Date(commentEdit.date),
    };
    setDefaultValues(preLoadValue);
    setTrigger(true);
  };

  useEffect(() => {
    fetchListComment();
  }, [reDelete, trigger]);

  const ListNews = ({ arrComment }) => {
    return (
      <List
        sx={{
          width: '350px',
          maxWidth: '1000px',
          border: '1px solid #ccc',
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 500,
          '& ul': { padding: 0 },
          padding: ' 10px 10px',
        }}
        subheader={<li />}
      >
        <li key={`section-${1}`}>
          <div>
            <div className={styles.btnGroup}>
              <Button
                sx={{ width: '  100%' }}
                onClick={() => {
                  setAddNewComment(true);
                }}
              >
                <PersonAddIcon />
              </Button>
            </div>
            <ul className={styles.ulList}>
              {arrComment?.map((item, idx) => (
                <div key={idx}>
                  <div className={styles.itemNews}>
                    <List>
                      <ListItem>
                        <ListItemButton
                          key={`item-${idx}`}
                          onClick={async () => {
                            await fetchCommentId(item._id);
                            setNewsIdx(item._id);
                            setAddNewComment(false);
                          }}
                        >
                          <ListItemText
                            primary={`${item.title}`}
                            sx={{ textAlign: 'center' }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                    <div className={styles.btnGroup}>
                      <div>
                        <IconButton
                          size='small'
                          sx={{ flex: '30%' }}
                          variant='contained'
                          // className={styles.btnEditNews}
                          onClick={() => {
                            deleteComment(item._id);
                          }}
                        >
                          <DeleteForeverIcon />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </li>
      </List>
    );
  };

  return (
    <>
      <div className={styles.landingpageformContainer}>
        <div className={styles.titleForm}>
          <h1>Rating</h1>
        </div>
        <div className={styles.newsEditorForm}>
          <ListNews className={styles.listNews} arrComment={arrComment} />
          <div className={styles.formCk}>
            {defaultValues && !addNewComment ? (
              <>
                <CommentEditor
                  newsIdx={newsIdx}
                  preLoadValue={defaultValues}
                  addNewComment={addNewComment}
                  setTrigger={setTrigger}
                  trigger={trigger}
                />
              </>
            ) : addNewComment ? (
              <>
                <AddComment setTrigger={setTrigger} trigger={trigger} />
              </>
            ) : (
              <>
                <div className={styles.waitingForm}>
                  choose Rating on left panel to edit
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
