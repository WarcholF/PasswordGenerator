import Form from "../components/Form";

const MainContent = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <Form />
    </div>
  );
};

export default function App() {
  return <MainContent />;
}
