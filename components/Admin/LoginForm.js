// page login Admin
import React, { useState } from "react";
import { authLogin } from "../../ApiUrl/auth/authApi";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validations/schema.js";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await authLogin(data.username, data.password);
      if (res.status === 200) {
        setCookie("token", res.data.token);
        login(res.data.token);
        toast.success("Đăng nhập thành công");
        router.push("/admin");
      }
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    }
    setLoading(false);
  };

  // MuiMaterial Style
  return <> </>;
};

export default LoginForm;
