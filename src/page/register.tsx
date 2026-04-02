import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useAuthStore } from "./useAuthStore";
import { useNavigate } from "react-router-dom";

const Register2 = () => {
  const { setUser2 } = useAuthStore();

  const nav = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (values: any) => {
      return await axios.post("http://localhost:3000/register", values);
    },

    onSuccess: ({ data }) => {
      setUser2({
        user: data.user,
        token: data.accessToken,
      });

      message.success("Đăng ký thành công!");
      nav("/login");
    },

    onError: () => {
      message.error("Đăng ký thất bại, xin kiểm tra thông tin và thử lại.");
    },
  });

  const onFinish = (values: any) => {
    mutate(values);
  };

  return (
    <div>
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 400, margin: "50px auto" }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "vui long nhap username" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "vui long nhap email" },
            { type: "email", message: "email ko hop le" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "vui long nhap mat khau" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register2;
