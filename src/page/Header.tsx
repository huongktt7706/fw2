import { Link } from "react-router-dom";
import { useAuthStore } from "./useAuthStore";

const Header = () => {
  const { user } = useAuthStore();
  const name = user?.username;

  const themeColor = "light";
  const toggleTheme = () => {};

  return (
    <div style={{ background: `${themeColor === "light" ? "gray" : "white"}` }}>
      <nav className="bg-blue-600 text-white shadow">
        <div
          style={{ color: `${themeColor === "light" ? "black" : "white"}` }}
          className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between"
        >
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="hover:text-gray-200">
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
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>
      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <div className="d-flex">
          <p className="text-4xl">xin chao {name}</p>
          <img src={user?.avata} alt="" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        <button onClick={toggleTheme}>toggle</button>
        {/* <Button type="primary">Click me</Button>
        <Button type="default">Click me</Button>
        <Button type="dashed">Click me</Button>
        <Button type="link">Click me</Button>
        <Button type="text">Click me</Button>
        <Layout style={{ marginTop: 30 }}>
          <Header style={{ color: "white" }}>Header</Header>
          <Content style={{ padding: 20 }}>Content</Content>
          <Footer style={{ color: "white", background: "blue" }}>Footer</Footer>
        </Layout>

        <Form onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Nhập name" }]}
          >
            <Input placeholder="username" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary">
              Login
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Modal
          open={open}
          onCancel={() => setOpen(false)}
          onOk={() => setOpen(false)}
        >
          Nội dung modal
        </Modal> */}
      </div>
    </div>
  );
};

export default Header;
