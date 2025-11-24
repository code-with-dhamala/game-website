import { Gamepad2, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-black bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-6 h-6 text-yellow-400" />
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                SolomonCasino
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your ultimate destination for premium gaming experiences. Play, win, and enjoy the thrill.
            </p>
          </div>


          <div>
            <h4 className="text-yellow-400 font-normal text-sm md:text-base mb-4">Payment Methods</h4>
            <p className="text-slate-400 text-sm mb-4">We Accept</p>
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">$</span>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">₿</span>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">Ξ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 SolomonCasino. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Mail, href: '#' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50"
              >
                <social.icon className="w-5 h-5 text-slate-400 hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-xs">
            Please play responsibly. Gambling can be addictive. 18+ only.
          </p>
        </div>
      </div>
    </footer>
  );
}
