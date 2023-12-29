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
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button } from '@mui/material';

import ReasonEditor from './ReasonEditor';
import AddReason from './AddReason';
import { deleteReasonData, getListReasonData } from '../../ApiUrl/reason/reasonApi';
import Loading from '../Loading/Loading';

const Reason = () => {
  const [arrReason, setArrReason] = useState([]);
  const [newsIdx, setNewsIdx] = useState();
  const [defaultValues, setDefaultValues] = useState();
  const [trigger, setTrigger] = useState(false);
  const [addNewComment, setAddNewComment] = useState(false);
  const [reDelete, setReDelete] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const deleteReason = async (id) => {
    try {
      await deleteReasonData(id);
      setReDelete(!reDelete);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchListReason = async () => {
    setIsLoading(true);
    setArrReason(
      await getListReasonData().then((data) => {
        console.log(data);
        return data;
      })
    );
    setIsLoading(false);
  };
  const fetchReasonId = async (id) => {
    let reasontEdit = arrReason.find((item) => item._id === id);
    let preLoadValue = {
      title: reasontEdit.title,
      description: reasontEdit.description,
      date: new Date(reasontEdit.date),
    };
    setDefaultValues(preLoadValue);
    setTrigger(true);
  };

  useEffect(() => {
    fetchListReason();
  }, [reDelete, trigger]);

  const ListNews = ({ arrReason }) => {
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
              {arrReason?.map((item, idx) => (
                <div key={idx}>
                  <div className={styles.itemNews}>
                    <List>
                      <ListItem>
                        <ListItemButton
                          key={`item-${idx}`}
                          onClick={async () => {
                            await fetchReasonId(item._id);
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
                            deleteReason(item._id);
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
          <h1>Reason</h1>
        </div>
        <div className={styles.newsEditorForm}>
          <ListNews className={styles.listNews} arrReason={arrReason} />
          <div className={styles.formCk}>
            {defaultValues && !addNewComment ? (
              <>
                <ReasonEditor
                  newsIdx={newsIdx}
                  preLoadValue={defaultValues}
                  addNewComment={addNewComment}
                  setTrigger={setTrigger}
                  trigger={trigger}
                />
              </>
            ) : addNewComment ? (
              <>
                <AddReason setTrigger={setTrigger} trigger={trigger} />
              </>
            ) : (
              <>
                <div className={styles.waitingForm}>
                  choose Reason on left panel to edit
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {
        isLoading && <Loading />
      }
    </>
  );
};

export default Reason;
