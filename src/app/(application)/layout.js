import FooterComp from "@/components/layout/footer/footerComp";
import Navbar from "@/components/layout/navbar/Navbar";

function ApplicationLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <FooterComp />
    </>
  );
}

export default ApplicationLayout;
