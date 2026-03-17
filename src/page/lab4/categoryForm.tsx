import { Form, Input, Button,Checkbox } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const CategoryForm = () => {
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post("http://localhost:3000/categories",data);

      return res.data;
    },

    onSuccess: () => {
      toast.success("Thêm thành công");
    },

    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });

  const onFinish = (values: any) => {
    console.log("ok:", values);
    mutation.mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
      <Form.Item
        label="Tên"
        name="title"
        rules={[{ required: true, message: "Nhập" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Mô tả" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item name="active" valuePropName="checked">
        <Checkbox>Hoạt động</Checkbox>
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={mutation.isPending}>
        Thêm danh muc
      </Button>
    </Form>
  );
};

export default CategoryForm;