'use client';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-sky-400/10 flex items-center justify-center">
              <img 
                src="/api/images/profile-icon.png" 
                alt="プロフィールアイコン" 
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLDivElement;
                  if (fallback) {
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="hidden w-8 h-8 rounded-full bg-sky-400/20 flex items-center justify-center">
                <span className="text-sky-400 text-sm">👤</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-light text-sky-400 mb-1"> なり / なぎなり </h1>
              <p className="text-xs text-gray-400 font-light">ゲーム・プログラム開発 | イラスト | 作曲</p>
            </div>
          </div>
          <nav className="flex space-x-8">
            <a href="/" className="text-gray-300 hover:text-sky-400 transition-colors text-sm font-light">Home</a>
            <a href="/calendar" className="text-gray-300 hover:text-sky-400 transition-colors text-sm font-light">Calendar</a>
            <a href="#about" className="text-gray-300 hover:text-sky-400 transition-colors text-sm font-light">About</a>
            <a href="#gallery" className="text-gray-300 hover:text-sky-400 transition-colors text-sm font-light">Works</a>
            <a href="#contact" className="text-gray-300 hover:text-sky-400 transition-colors text-sm font-light">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}