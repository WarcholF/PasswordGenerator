import Footer from "../components/Footer";
import Form from "../components/Form";
import Heading from "../components/Heading";

const MainContent = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-300">
      <Heading />
      <Form />
      <Footer />
    </div>
  );
};

export default function App() {
  return <MainContent />;
}
