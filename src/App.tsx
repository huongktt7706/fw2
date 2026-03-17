import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Table } from "antd";
import StoryForm from "./page/lab4/storiesForm";
import CategoryForm from "./page/lab4/categoryForm";


function App() {
  
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/stories" className="hover:text-gray-200">
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
          <StoryForm/>
          <CategoryForm/>
        {/* <Table columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />
        <h1>Product</h1>
        <Table columns={productColumns} dataSource={productData} pagination={{ pageSize: 2 }} />
        <Table columns={userColumns} dataSource={userData} pagination={{ pageSize: 2 }} /> */}
      </div>

      <Toaster />
    </>
  );
}

export default App;
