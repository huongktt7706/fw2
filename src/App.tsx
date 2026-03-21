import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Table } from "antd";
import StoryForm from "./page/lab4/storiesForm";
import CategoryForm from "./page/lab4/categoryForm";
import StoryList from "./page/lab5/list-story"
import EditStory from "./page/lab6/story-edit"
import {Routes, Route } from "react-router-dom";

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
           <Routes>
          {/* Trang chủ */}
          <Route path="/" element={<h1>Trang chủ</h1>} />

          {/* Danh sách */}
          <Route path="/stories" element={<StoryList />} />

          {/* Thêm mới */}
          <Route path="/add" element={<StoryForm />} />

          {/* Edit */}
          <Route path="/edit/:id" element={<EditStory />} />

          {/* Category */}
          <Route path="/category" element={<CategoryForm />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;
