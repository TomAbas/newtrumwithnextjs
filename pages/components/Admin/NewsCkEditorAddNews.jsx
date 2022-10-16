import React from "react";
// import Editor from "ckeditor5-custom-build/build/ckeditor";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import { Button } from "@mui/material";
import { urlNews } from "../../ApiUrl/Api";

import { useEffect, useRef } from "react";
import { useState } from "react";
import styles from "../../../styles/Admin.module.css";

const NewsCkEditorAddNews = ({
  submitNewNewsCKEditor,
  setNewNewsContent1,
  setNewNewsContent2,
  didNotSubmitHeadForm2,
}) => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
//   console.log(didNotSubmitHeadForm2);  
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
            submitNewNewsCKEditor(e);
          }}
          className={styles.formNewsSubmit}
        >
          <div className={styles.content3Edit}>
            <div className={styles.bannerBanner}>ADD CONTENT 1</div>
            <h3>Content 1 - Text : </h3>

            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                {
                  editorLoaded && (
                    <CKEditor
                      className={styles.ckEditor}
                      editor={ClassicEditor}
                      data='<p>Hello from CKEditor 5!</p>'
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();

                        setNewNewsContent1(data);

                        console.log({ event, editor, data });
                      }}
                    />
                  )
                  // : (
                  //   <div>Editor loading</div>
                  // )
                }
              </div>
            </div>
          </div>
          <div className={styles.content4Edit}>
            <div className={styles.bannerBanner}> ADD CONTENT 2</div>
            <h3>Content 2 - Text : </h3>

            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                {
                  editorLoaded && (
                    <CKEditor
                      className={styles.ckEditor}
                      editor={ClassicEditor}
                      data='<p>Hello from CKEditor 5!</p>'
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();

                        setNewNewsContent2(data);

                        console.log({ event, editor, data });
                      }}
                    />
                  )
                  //  : (
                  //   <div>Editor loading</div>
                  // )
                }
              </div>
            </div>
          </div>
          {/* <button className={styles.btnSubmit} type='submit'>
            submit
          </button> */}
          <Button
            variant='outlined'
            type='submit'
            disabled={didNotSubmitHeadForm2}
          >
            submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default NewsCkEditorAddNews;
