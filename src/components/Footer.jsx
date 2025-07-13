

const Footer = () => {
  return (
    <div>
      <div className="bg-blue-700 py-6 mt-20 ">
        <footer className="text-center text-white text-sm md:text-base font-normal max-w-screen-xl mx-auto mb-4">
          &copy; {new Date().getFullYear()} Mas Ahmad Zaidi Wardana. All rights reserved.
        </footer>

        {/* Social icons center */}
        <div className="flex justify-center gap-6">
          <a href="https://github.com/Maszaidana12" aria-label="GitHub">
            <i className="ri-github-fill ri-2x text-white hover:text-gray-300 transition" />
          </a>
          <a href="https://www.instagram.com/maszaidana" aria-label="Instagram">
            <i className="ri-instagram-fill ri-2x text-white hover:text-gray-300 transition" />
          </a>
          <a href="https://www.linkedin.com/in/mas-ahmad-zaidi-wardana-955a6a2a7/" aria-label="LinkedIn">
            <i className="ri-linkedin-fill ri-2x text-white hover:text-gray-300 transition" />
          </a>
          <a href="http://bit.ly/40MppCs" aria-label="WhatsApp">
            <i className="ri-whatsapp-fill ri-2x text-white hover:text-gray-300 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer
