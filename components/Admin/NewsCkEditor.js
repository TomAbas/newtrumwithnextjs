import React from "react";
// import Editor from "ckeditor5-custom-build/build/ckeditor";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import { Button } from "@mui/material";

import { useEffect, useRef } from "react";
import { useState } from "react";

import styles from "../../styles/Admin.module.css";
const NewsCkEditor = ({
  currentContent1,
  currentContent2,
  setNewContent1,
  setNewContent2,
  submitNewsCKEditor,
  // isAddNews,
  // submitNewNewsCKEditor,
  // setNewNewsContent1,
  // setNewNewsContent2,
  didNotSubmitHeadForm,
}) => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  console.log(didNotSubmitHeadForm);
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);
  return (
    <>
      {" "}
      <div className={`${styles.landingpageform} ${styles.formNews}`}>
        <form
          onSubmit={(e) => {
            submitNewsCKEditor(e);
          }}
          className={styles.formNewsSubmit}
        >
          <div className={styles.content3Edit}>
            <div className={styles.bannerBanner}>EDIT CONTENT 1</div>
            <h3>Content 1 - Text : </h3>
            <div className={styles.currentContent}>
              {currentContent1 && (
                <div dangerouslySetInnerHTML={{ __html: currentContent1 }} />
              )}
            </div>
            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                {editorLoaded ? (
                  <CKEditor
                    className={styles.ckEditor}
                    editor={ClassicEditor}
                    data=""
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setNewContent1(data);
                      console.log({ event, editor, data });
                    }}
                  />
                ) : (
                  <div>Editor loading</div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.content4Edit}>
            <div className={styles.bannerBanner}> EDIT CONTENT 2</div>
            <h3>Content 2 - Text : </h3>
            <div className={styles.currentContent}>
              {currentContent2 && (
                <div dangerouslySetInnerHTML={{ __html: currentContent2 }} />
              )}
            </div>
            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                {editorLoaded ? (
                  <CKEditor
                    className={styles.ckEditor}
                    editor={ClassicEditor}
                    data=""
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setNewContent2(data);
                      console.log({ event, editor, data });
                    }}
                  />
                ) : (
                  <div>Editor loading</div>
                )}
                {/* <CKEditor
                  className={styles.ckEditor}
                  editor={Editor}
                  data=''
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    //   console.log("Editor is ready to use!", editor);
                    // setValue(editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    isAddNews ? setNewNewsContent2(data) : setNewContent2(data);
                    //   console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    //   console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    //   console.log("Focus.", editor);
                  }}
                /> */}
              </div>
            </div>
          </div>
          {/* <button className={styles.btnSubmit} type='submit'>
            submit
          </button> */}
          <Button
            variant="outlined"
            type="submit"
            disabled={didNotSubmitHeadForm}
          >
            submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default NewsCkEditor;
