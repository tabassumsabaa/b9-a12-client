import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 mt-20">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Adress</a>
                   
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com/tabassumsabaa" target="_blank" className="text-3xl">
                           <FaGithub></FaGithub>
                        </a>
                        <a href="https://www.linkedin.com/in/sabiha-tabassum-saba-b0a89620b" target="_blank" className="text-3xl">
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a href="https://www.facebook.com/sabiha.tabassum.792?mibextid=ZbWKwL" target="_blank" className="text-3xl">
                           <FaFacebookF></FaFacebookF>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ABC Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;