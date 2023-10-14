"use client";

import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Upload, message } from "antd";
import Uploader from "@/components/ui/Uploader";
import Image from "next/image";
import loginImg from "@/assets/login.png";
import { useRouter } from "next/navigation";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/utils/local.storeage";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  password: string;
  email: string;
};

const LoginPage = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();

  const onFinish = async (values: any) => {
    const response = await userLogin({ ...values }).unwrap()
    console.log(response,"login response");
    storeUserInfo({ accessToken: response?.accessToken });
    if (response?.accessToken) {
      message.success("Login SuccessFully")
    }

    try {
    } catch (error) {
      console.error("Error in onFinish:", error);
    }
  };

  return (
    <div className="lg:flex items-center justify-between bg-slate-300 p-2 ">
      <section className="lg:w-[45%]  ">
        <Image
          className="w-full h-screen  rounded-md"
          height={350}
          width={400}
          src={loginImg}
          alt="login"
        />
      </section>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        labelAlign="left"
        labelWrap={true}
        className="w-full lg:w-[55%] my-1 mx-auto h-screen   pl-5"
        //   style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <h2 className="text-[4rem] font-extrabold mb-3  fon-serif">Login </h2>

        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Email</span>}
          labelAlign="left"
          name="email"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          {/* <label  className="text-[1.2em] font-[400]">
            Email
          </label> */}
          <Input type="email" placeholder="example@gmail.com" />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Password</span>}
          name="password"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
