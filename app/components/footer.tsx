import { SiFacebook, SiGithub } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-muted md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/babakamyljanovssw"
          >
            <SiGithub size={16} />
            <span className="ml-2">github</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/babanazarkamyljanov"
          >
            <Linkedin size={16} />
            <span className="ml-2">linkedin</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61554392187621"
          >
            <SiFacebook size={16} />
            <span className="ml-2">facebook</span>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-muted">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
