import { Form, Input, Button,Select } from "antd";
import { useMutation,useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const StoryForm = () => {
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post("http://localhost:3000/stories",data);
      console.log(res)

      return res.data;
    },

    onSuccess: () => {
      toast.success("Thêm truyện thành công");
    },

    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });

  const onFinish = (values: any) => {
    console.log("DATA GỬI:", values);
    mutation.mutate(values);
  };
  const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/categories");
            return res.data;
        },
    });

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
      <Form.Item
        label="Tên truyện"
        name="title"
        rules={[{ required: true, message: "Nhập tên truyện" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Tác giả" name="author">
        <Input />
      </Form.Item>

      <Form.Item label="Image URL" name="image">
        <Input />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item
                label="Danh mục"
                name="categoryId"
                rules={[{ required: true, message: "Chọn danh mục" }]}
            >
                <Select placeholder="Chọn danh mục">
                    {categories.map((cat: any) => (
                        <Select.Option key={cat.id} value={cat.id}>
                            {cat.title}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>

      <Button type="primary" htmlType="submit" loading={mutation.isPending}>
        Thêm truyện
      </Button>
    </Form>
  );
};

export default StoryForm;