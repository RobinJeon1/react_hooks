import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

// const Page = ({ isDark, setIsDark }) => {
//   return (
//     <div className="page">
//       <Header isDark={isDark} />
//       <Content isDark={isDark} />
//       <Footer isDark={isDark} setIsDark={setIsDark} />
//     </div>
//   );
// };

const Page = () => {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
