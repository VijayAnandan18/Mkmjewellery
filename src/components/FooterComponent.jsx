// Footer.jsx file
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
  
  // Define the footer component
  const FooterComponent = () => {
    return (
      <Footer container>
        <div className="footer-container w-full">
          <div className="footer-grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <FooterBrand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
                className="footer-logo"
              />
            </div>
            <div className="footer-link-section grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="About" className="footer-title" />
                <FooterLinkGroup col className="footer-link-group">
                  <FooterLink href="#">Flowbite</FooterLink>
                  <FooterLink href="#">Tailwind CSS</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Follow Us" className="footer-title" />
                <FooterLinkGroup col className="footer-link-group">
                  <FooterLink href="#">Github</FooterLink>
                  <FooterLink href="#">Discord</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" className="footer-title" />
                <FooterLinkGroup col className="footer-link-group">
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider className="footer-divider" />
          <div className="footer-bottom sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Flowbite™" year={2022} className="footer-copyright" />
            <div className="footer-social-icons mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} className="footer-social-icon" />
              <FooterIcon href="#" icon={BsInstagram} className="footer-social-icon" />
              <FooterIcon href="#" icon={BsTwitter} className="footer-social-icon" />
              <FooterIcon href="#" icon={BsGithub} className="footer-social-icon" />
              <FooterIcon href="#" icon={BsDribbble} className="footer-social-icon" />
            </div>
          </div>
        </div>
      </Footer>
    );
  };
  
  // Export the FooterComponent correctly
  export default FooterComponent;
  