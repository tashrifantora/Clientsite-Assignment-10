import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-sky-900  text-white mt-14">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav >
                    <header className="footer-title">Our Social Links</header>
                    <div className="flex gap-6">
                        <a className="link link-hover"><AiFillFacebook className="text-4xl"></AiFillFacebook></a>
                        <a className="link link-hover"><AiFillInstagram className="text-4xl"></AiFillInstagram></a>
                        <a className="link link-hover"><AiFillTwitterSquare className="text-4xl"></AiFillTwitterSquare></a>
                    </div>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;