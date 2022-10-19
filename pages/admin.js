import React, { useEffect, useRef, useState } from "react";
import BasicTabs from "../Views/AdminPage";
// const admin = () => {
// const editorRef = useRef();
// const [editorLoaded, setEditorLoaded] = useState(false);
// const { CKEditor, ClassicEditor } = editorRef.current || {};
// useEffect(() => {
//   editorRef.current = {
//     CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
//     ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
//   };
//   setEditorLoaded(true);
// }, []);
// return (
//   <>
//     {/* <div suppressHydrationWarning={true}>
//       <BasicTabs />c
//     </div> */}
//     {/* <div>
//       <BasicTabs />
//     </div> */}
//     {editorLoaded ? (
//       <CKEditor
//         editor={ClassicEditor}
//         data='<p>Hello from CKEditor 5!</p>'
//         onReady={(editor) => {
//           // You can store the "editor" and use when it is needed.
//           console.log("Editor is ready to use!", editor);
//         }}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           console.log({ event, editor, data });
//         }}
//       />
//     ) : (
//       <div>Editor loading</div>
//     )}
//   </>
// );
// };

// import React from 'react'

export default function admin() {
 
  return (
    <>
    

      <div>
        <BasicTabs />
      </div>
     
    </>
  );
}

// export default admin;
