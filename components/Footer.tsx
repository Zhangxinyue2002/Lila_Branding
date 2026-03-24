import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-mooon-dark text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-bold text-2xl mb-4 text-mooon-primary">Mooon</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Creating human-like AI companionship through robotics. Mooon empowers people to reconnect with themselves, each other, and the world.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-6 text-mooon-secondary">Product</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/brand" className="text-gray-300 hover:text-mooon-primary transition-colors">
                About Lila
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-mooon-primary transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-mooon-primary transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-mooon-primary transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-6 text-mooon-secondary">Company</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-mooon-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/vision" className="text-gray-300 hover:text-mooon-primary transition-colors">
                Our Vision
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-mooon-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-mooon-primary transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold mb-6 text-mooon-secondary">Connect</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mooon-primary transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mooon-primary transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mooon-primary transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-mooon-primary transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-mooon-tertiary/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>&copy; 2024 Mooon. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-mooon-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-mooon-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-mooon-primary transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
