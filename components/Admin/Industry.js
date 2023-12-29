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
import {
  deleteRecuiterData,
  getRecuiterData,
} from '../../ApiUrl/recuiter/recuiter';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button } from '@mui/material';
import {
  deleteIndustryData,
  getListIndustryData,
} from '../../ApiUrl/industry/industryApi';
import Loading from '../Loading/Loading.js';

const Industry = () => {
  const [arrIndustry, setIndustry] = useState([]);
  const [newsIdx, setNewsIdx] = useState();
  const [defaultValues, setDefaultValues] = useState();
  const [trigger, setTrigger] = useState(false);
  const [addNewIndustry, setAddNewIndustry] = useState(false);
  const [newsHeadContent, setNewsHeadContent] = useState();
  const [reDelete, setReDelete] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const deleteIndusty = async (id) => {
    setIsLoading(true);
    try {
      await deleteIndustryData(id);
      setReDelete(!reDelete);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const fetchListIndustry = async () => {
    setIsLoading(true);

    setIndustry(
      await getListIndustryData().then((data) => {
        console.log(data);
        return data;
      })
    );
    setIsLoading(false);
  };
  const fetchIndustryId = async (id) => {
    setIsLoading(true);

    let industryEdit = arrIndustry.find((item) => item._id === id);
    let preLoadValue = {
      title: industryEdit.title,
      description: industryEdit.description,
      date: new Date(industryEdit.date),
    };
    setDefaultValues(preLoadValue);
    setTrigger(true);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchListIndustry();
  }, [reDelete, trigger]);

  const ListNews = ({ arrIndustry }) => {
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
                  setAddNewIndustry(true);
                }}
              >
                <PersonAddIcon />
              </Button>
            </div>
            <ul className={styles.ulList}>
              {arrIndustry?.map((item, idx) => (
                <div key={idx}>
                  <div className={styles.itemNews}>
                    <List>
                      <ListItem>
                        <ListItemButton
                          key={`item-${idx}`}
                          onClick={async () => {
                            await fetchIndustryId(item._id);
                            setNewsIdx(item._id);
                            setAddNewIndustry(false);
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
                            deleteIndusty(item._id);
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
          <h1>Industry Recognition</h1>
        </div>
        <div className={styles.newsEditorForm}>
          <ListNews className={styles.listNews} arrIndustry={arrIndustry} />
          <div className={styles.formCk}>
            {defaultValues && !addNewIndustry ? (
              <>
                <IndustryEditor
                  newsIdx={newsIdx}
                  preLoadValue={defaultValues}
                  setNewsHeadContent={setNewsHeadContent}
                  addNewIndustry={addNewIndustry}
                  setTrigger={setTrigger}
                  trigger={trigger}
                />
              </>
            ) : addNewIndustry ? (
              <>
                <AddIndustry setTrigger={setTrigger} trigger={trigger} />
              </>
            ) : (
              <>
                <div className={styles.waitingForm}>
                  choose industry recognition on left panel to edit
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

export default Industry;
