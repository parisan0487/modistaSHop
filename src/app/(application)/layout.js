import FooterComp from "@/components/layout/shared/footer/footerComp";
import Navbar from "@/components/layout/shared/navbar/Navbar";

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
