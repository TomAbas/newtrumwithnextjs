export const handleChangeFile = (e, setImgSrc) => {
    let file = e.target.files[0];
    if (
        file.type === "image/jpg" ||
        file.type === "image/gif" ||
        file.type === "image/png" ||
        file.type === "image/jpeg"
    ) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            setImgSrc(e.target.result);
        };
    }
};