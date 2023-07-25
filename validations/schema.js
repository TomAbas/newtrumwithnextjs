import * as yup from "yup";

const schemaLogin = yup.object().shape({
  username: yup.string().required("Tên đăng nhập không được để trống"),
  password: yup.string().required("Mật khẩu không được để trống"),
});

export { schemaLogin };
