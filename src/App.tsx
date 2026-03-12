import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Table } from "antd";

function App() {
  const columns = [
    { title: "ID", dataIndex: "key" },
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Major", dataIndex: "major" },
  ];

  const data = [
    { key: 1, name: "John", age: 25, major: "Dev" },
    { key: 2, name: "Anna", age: 30, major: "Dev" },
    { key: 3, name: "Anna", age: 30, major: "Dev" },
    { key: 4, name: "Anna", age: 30, major: "Dev" },
    { key: 5, name: "Anna", age: 30, major: "Dev" },

  ];
  const productColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
  ];
  const productData = [
    {
      key: 1,
      id: 1,
      name: "Laptop",
      price: 1200,
      category: "Electronics",
    },
    {
      key: 2,
      id: 2,
      name: "Phone",
      price: 800,
      category: "Electronics",
    },
    {
      key: 3,
      id: 3,
      name: "Shoes",
      price: "$100",
      category: "Fashion",
    },
    {
      key: 4,
      id: 4,
      name: "Watch",
      price: 200,
      category: "Accessories",
    },
    {
      key: 5,
      id: 5,
      name: "Backpack",
      price: 50,
      category: "Fashion",
    },
  ];
  const userColumns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status:string) => (
      <span className={status === "active" ? "text-green-500" : "text-red-500"}>
        {status}
      </span>
    ),
  },
  // {
  //   title: "Action",
  //   render: () => (
  //     <>
  //       <button className="bg-yellow-400 px-3 py-1 mr-2 rounded">
  //         Edit
  //       </button>
  //       <button className="bg-red-500 text-white px-3 py-1 rounded">
  //         Delete
  //       </button>
  //     </>
  //   ),
  // },
];
const userData = [
  {
    key: 1,
    id: 1,
    name: "h",
    email: "h@gmail.com",
    status: "active",
  },
  {
    key: 2,
    id: 2,
    name: "A",
    email: "a@gmail.com",
    status: "inactive",
  },
  {
    key: 3,
    id: 3,
    name: "D",
    email: "d@gmail.com",
    status: "active",
  },
];
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>

        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />
        <h1>Product</h1>
        <Table columns={productColumns} dataSource={productData} pagination={{ pageSize: 2 }} />
        <Table columns={userColumns} dataSource={userData} pagination={{ pageSize: 2 }} />
      </div>

      <Toaster />
    </>
  );
}

export default App;
