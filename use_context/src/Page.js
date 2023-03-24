import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

/** props */
const Page = ({ isDark, setIsDark }) => {
  return (
    <div className="page">
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

/** useContext */
// const Page = () => {
//   return (
//     <div className="page">
//       <Header />
//       <Content />
//       <Footer />
//     </div>
//   );
// };

export default Page;
