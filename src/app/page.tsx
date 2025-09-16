'use client';

import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900">
      <Header />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/api/images/hero-illustration.png" 
            alt="背景イラスト" 
            className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLDivElement;
              if (fallback) {
                fallback.style.display = 'block';
              }
            }}
          />
          <div className="hidden absolute inset-0 bg-gradient-to-br from-sky-400/5 via-purple-400/3 to-pink-400/5"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 via-gray-800/70 to-slate-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light text-gray-100 leading-tight">
                創作の
                <span className="block text-sky-400 drop-shadow-lg">世界へようこそ</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                ゲーム開発、イラスト、音楽制作を通じて<br />
                新しい体験と感動をお届けします
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-3 px-6 py-3 bg-sky-400/10 backdrop-blur-md rounded-full border border-sky-400/30 shadow-lg">
                <span className="text-sky-400 text-xl">🎮</span>
                <span className="text-base text-sky-400 font-medium">Unity</span>
              </div>
              <div className="flex items-center space-x-3 px-6 py-3 bg-purple-400/10 backdrop-blur-md rounded-full border border-purple-400/30 shadow-lg">
                <span className="text-purple-400 text-xl">🎵</span>
                <span className="text-base text-purple-400 font-medium">VOCALOID</span>
              </div>
              <div className="flex items-center space-x-3 px-6 py-3 bg-pink-400/10 backdrop-blur-md rounded-full border border-pink-400/30 shadow-lg">
                <span className="text-pink-400 text-xl">🎨</span>
                <span className="text-base text-pink-400 font-medium">Digital Art</span>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6 pt-8">
              <a href="#about" className="px-8 py-4 bg-sky-400/20 hover:bg-sky-400/30 text-sky-400 rounded-xl transition-all duration-300 backdrop-blur-md border border-sky-400/30 shadow-lg hover:shadow-xl hover:scale-105">
                作品を見る
              </a>
              <a href="/calendar" className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-sky-400 rounded-xl transition-all duration-300 backdrop-blur-md border border-gray-600/30 shadow-lg hover:shadow-xl hover:scale-105">
                カレンダー
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-400/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-sky-400/20 animate-float">
          <span className="text-4xl">✨</span>
        </div>
        
        <div className="absolute top-1/4 -left-16 w-24 h-24 bg-purple-400/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-400/20 animate-float-delay">
          <span className="text-3xl">💫</span>
        </div>
        
        <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-pink-400/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-pink-400/20 animate-float-slow">
          <span className="text-2xl">🌟</span>
        </div>
        
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-400/20 animate-float">
          <span className="text-xl">⭐</span>
        </div>
        
        <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-green-400/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400/20 animate-float-delay">
          <span className="text-lg">💎</span>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="w-8 h-8 border border-sky-400/50 rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-400/10 transition-colors">
            ↓
          </a>
        </div>
      </section>

      <div className="container mx-auto px-4 pt-16 pb-16">
        <section id="about" className="mb-24">
          <div className="border-l-4 border-sky-400 pl-8 mb-8">
            <h2 className="text-xl font-light text-gray-100 mb-12">About</h2>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="group">
                <div className="w-12 h-12 bg-sky-400/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-400/20 transition-colors">
                  <span className="text-sky-400 text-xl">💻</span>
                </div>
                <h3 className="text-base font-medium text-gray-200 mb-3">ゲーム・プログラム開発</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  TypeScript、Python、React、Next.jsを使ったWebアプリケーション開発とUnityを使ったゲーム開発をしています。
                </p>
              </div>
              <div className="group">
                <div className="w-12 h-12 bg-sky-400/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-400/20 transition-colors">
                  <span className="text-sky-400 text-xl">🎨</span>
                </div>
                <h3 className="text-base font-medium text-gray-200 mb-3">イラスト</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  アマチュアレベルですが、pixivで作品を公開しています。デジタルアートが特に好きです。
                </p>
              </div>
              <div className="group">
                <div className="w-12 h-12 bg-sky-400/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-400/20 transition-colors">
                  <span className="text-sky-400 text-xl">🎵</span>
                </div>
                <h3 className="text-base font-medium text-gray-200 mb-3">作曲</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  初音ミクを使った楽曲制作をしています。VOCALOIDを使ったオリジナル楽曲の作成が趣味です。
                </p>
              </div>
            </div>
          </div>
        </section>


        <section id="gallery" className="mb-24">
          <div className="border-l-4 border-sky-400 pl-8 mb-8">
            <h2 className="text-xl font-light text-gray-100">Works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href="https://www.nicovideo.jp/user/141097430"
              className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-sky-400/30 transition-all duration-300 block cursor-pointer hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="h-56 bg-gray-700/50 flex items-center justify-center">
                <img 
                  src="/api/images/music-thumbnail.png" 
                  alt="音楽作品のサムネイル" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLDivElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-full h-full bg-gray-700 flex-col items-center justify-center">
                  <span className="text-4xl mb-2">🎵</span>
                  <span className="text-gray-500 text-sm">画像を追加してください</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-medium text-gray-200 mb-2 group-hover:text-sky-400 transition-colors">音楽作品</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">VOCALOIDを使ったオリジナル楽曲</p>
                <div className="inline-flex items-center text-sky-400 group-hover:text-sky-300 transition-colors text-sm group-hover:translate-x-1 duration-300">
                  View →
                </div>
              </div>
            </a>

            <a 
              href="https://unityroom.com/users/pujc306k1yshb94d5nzr"
              className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-sky-400/30 transition-all duration-300 block cursor-pointer hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="h-56 bg-gray-700/50 flex items-center justify-center">
                <img 
                  src="/api/images/game-thumbnail.png" 
                  alt="ゲーム作品のサムネイル" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLDivElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-full h-full bg-gray-700 flex-col items-center justify-center">
                  <span className="text-4xl mb-2">🎮</span>
                  <span className="text-gray-500 text-sm">画像を追加してください</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-medium text-gray-200 mb-2 group-hover:text-sky-400 transition-colors">ゲーム作品</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">Unityで制作した2Dアクションゲーム</p>
                <div className="inline-flex items-center text-sky-400 group-hover:text-sky-300 transition-colors text-sm group-hover:translate-x-1 duration-300">
                  View →
                </div>
              </div>
            </a>

            <a 
              href="https://www.pixiv.net/dashboard/works"
              className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-sky-400/30 transition-all duration-300 block cursor-pointer hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="h-56 bg-gray-700/50 flex items-center justify-center">
                <img 
                  src="/api/images/art-thumbnail.png" 
                  alt="イラスト作品のサムネイル" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLDivElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-full h-full bg-gray-700 flex-col items-center justify-center">
                  <span className="text-4xl mb-2">🎨</span>
                  <span className="text-gray-500 text-sm">画像を追加してください</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-medium text-gray-200 mb-2 group-hover:text-sky-400 transition-colors">イラスト作品</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">デジタルアートとオリジナルキャラクター</p>
                <div className="inline-flex items-center text-sky-400 group-hover:text-sky-300 transition-colors text-sm group-hover:translate-x-1 duration-300">
                  View →
                </div>
              </div>
            </a>
          </div>
        </section>


        <section id="contact" className="mb-16">
          <div className="border-l-4 border-sky-400 pl-8 mb-8">
            <h2 className="text-xl font-light text-gray-100">Contact</h2>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50 text-center">
            <p className="text-gray-400 mb-12 text-sm leading-relaxed max-w-md mx-auto">
              作品やスキルに関する質問、情報交換などがありましたらお気軽にどうぞ。<br />
              （ご依頼は現在受け付けておりません）
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-gray-400 text-sm">Email</span>
                <a href="mailto:your.email@example.com" className="text-sky-400 hover:text-sky-300 transition-colors text-sm">your.email@example.com</a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-gray-400 text-sm">Twitter</span>
                <a href="https://twitter.com/yourusername" className="text-sky-400 hover:text-sky-300 transition-colors text-sm">@yourusername</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
