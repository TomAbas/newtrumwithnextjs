import React, { useEffect } from 'react'
import InputField from '../Form/InputField'
import styles from "../../styles/Login.module.css"
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginAdmin } from '../../ApiUrl/login/loginApi';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();

    const schema = yup.object().shape({
        username: yup
            .string()
            .required('Please enter username')
            .typeError('Please enter username'),
        password: yup
            .string()
            .required('Please enter password')
            .typeError('Please enter password'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    async function handleOnSubmit(data) {
        try {
            const res = await loginAdmin(data)
            reset({ username: '', password: '' })
            localStorage.setItem('Authorization', res)
            console.log("🚀 ~ file: Login.js:35 ~ res:", res)
            router.push('/admin/landingpage');

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(errors)
    }, [errors])

    return (
        <div className={styles.WrapLogin}>
            <div className={styles.WrapLogin__form}>
                {/* <form onSubmit={handleSubmit(handleOnSubmit)}> */}
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <div className={styles.Input}>
                        <InputField register={{ ...register('username') }} label='Tài khoản' />
                        {errors && errors.username && <div className={styles.error}>{errors.username.message}</div>}
                    </div>
                    <div className={styles.Input}>
                        <InputField type='password' register={{ ...register('password') }} label='Mật khẩu' />
                        {errors && errors.password && <div className={styles.error}>{errors.password.message}</div>}
                    </div>
                    <div className={styles.BtnSubmit}>
                        <button type='submit'>Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login