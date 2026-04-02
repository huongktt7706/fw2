import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Header from "./page/Header";
import StoryForm from "./page/lab4/storiesForm";
import CategoryForm from "./page/lab4/categoryForm";
import StoryList from "./page/lab5/list-story";
import EditStory from "./page/lab6/story-edit";
import Login from "./page/login";
import Register2 from "./page/register";

function App() {
  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <Routes>
          <Route path="/" element={<h1>Trang chủ</h1>} />
          <Route path="/stories" element={<StoryList />} />
          <Route path="/list" element={<StoryList />} />
          <Route path="/add" element={<StoryForm />} />
          <Route path="/edit/:id" element={<EditStory />} />
          <Route path="/category" element={<CategoryForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register2 />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;
