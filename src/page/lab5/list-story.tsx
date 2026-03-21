import { Table, Image, Spin, Button, Input } from "antd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StoryList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  const filteredData = (data || []).filter((item: any) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const columns = [
    { title: "ID", dataIndex: "id" },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => <Image src={url} width={60} />,
    },
    { title: "Tên truyện", dataIndex: "title" },
    { title: "Tác giả", dataIndex: "author" },
    { title: "Mô tả", dataIndex: "description" },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) =>
        date ? new Date(date).toLocaleDateString("vi-VN") : "",
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <>
          <Button
            type="primary"
            style={{ marginRight: 8 }}
            onClick={() => navigate(`/edit/${record.id}`)}
          >
            Sửa
          </Button>

          <Button
            danger
            loading={deleteMutation.isPending}
            onClick={() => handleDelete(record.id)}
          >
            Xóa
          </Button>
        </>
      ),
    },
  ];

  if (isLoading) return <Spin />;
  if (isError) return <p>Lỗi khi tải dữ liệu</p>;

  return (
    <div>
      <Input
        placeholder="Tìm tên truyện"
       
        onChange={(e) => setKeyword(e.target.value)}
      />

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"

      />
    </div>
  );
};

export default StoryList;