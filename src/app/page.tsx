export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-cyan-400">あなたの名前</span> のクリエイティブワールド
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            プログラマー | ゲームクリエイター | イラストレーター | 作曲家
          </p>
          <p className="text-base text-gray-400 mb-8">
            コードとゲームと絵と音楽で表現するマルチクリエイター
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#gallery"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              作品を見る
            </a>
            <a
              href="#contact"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              連絡先
            </a>
          </div>
        </header>

        <section id="about" className="mb-16">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">プロフィール</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">プログラミング</h3>
                <p className="text-gray-300 text-sm">
                  TypeScript、Python、React、Next.jsを使ったWebアプリケーション開発が得意です。
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎮</div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">ゲーム制作</h3>
                <p className="text-gray-300 text-sm">
                  Unityを使ったゲーム開発をしています。unityroomで作品を公開中です。
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">イラスト</h3>
                <p className="text-gray-300 text-sm">
                  アマチュアレベルですが、pixivで作品を公開しています。デジタルアートが特に好きです。
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎵</div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">作曲</h3>
                <p className="text-gray-300 text-sm">
                  初音ミクを使った楽曲制作をしています。VOCALOIDを使ったオリジナル楽曲の作成が趣味です。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">スキル・使用技術</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">💻</span>
                プログラミング
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {['TypeScript', 'Python', 'React', 'Next.js', 'JavaScript', 'Node.js'].map((skill) => (
                  <div key={skill} className="bg-gray-700 p-2 rounded text-center">
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎮</span>
                ゲーム制作
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {['Unity', 'C#', 'Unity 2D', 'Unity 3D', 'Blender', 'Aseprite'].map((skill) => (
                  <div key={skill} className="bg-gray-700 p-2 rounded text-center">
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                イラスト・デザイン
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {['Photoshop', 'Illustrator', 'Clip Studio', 'Procreate', 'Figma', 'GIMP'].map((skill) => (
                  <div key={skill} className="bg-gray-700 p-2 rounded text-center">
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎵</span>
                音楽制作
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {['初音ミク', 'VOCALOID', 'Cubase', 'FL Studio', 'Audacity', 'MuseScore'].map((skill) => (
                  <div key={skill} className="bg-gray-700 p-2 rounded text-center">
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">作品ギャラリー</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'ポートフォリオサイト', 
                category: 'プログラミング', 
                description: 'Next.js + TypeScriptで構築したレスポンシブなポートフォリオサイト。Tailwind CSSでスタイリング。',
                icon: '💻',
                tech: 'Next.js, TypeScript'
              },
              { 
                title: 'ToDo管理アプリ', 
                category: 'プログラミング', 
                description: 'React + Pythonで作成したタスク管理アプリ。ユーザー認証とリアルタイム更新機能付き。',
                icon: '💻',
                tech: 'React, Python'
              },
              { 
                title: '2Dアクションゲーム', 
                category: 'ゲーム', 
                description: 'Unityで作成した2Dアクションゲーム。unityroomで公開中。シンプルな操作で楽しめるゲームです。',
                icon: '🎮',
                tech: 'Unity, C#'
              },
              { 
                title: 'パズルゲーム', 
                category: 'ゲーム', 
                description: 'シンプルなパズルゲーム。ゲームジャムで作成した作品で、シンプルなルールで遊べます。',
                icon: '🎮',
                tech: 'Unity, C#'
              },
              { 
                title: 'オリジナルキャラクター', 
                category: 'イラスト', 
                description: 'pixivで公開中のオリジナルキャラクターイラスト。デジタルアートで描いた趣味作品です。',
                icon: '🎨',
                tech: 'Clip Studio'
              },
              { 
                title: 'ミク楽曲「夜空の向こう」', 
                category: '作曲', 
                description: '初音ミクを使用したオリジナル楽曲。ポップスとエレクトロニカを融合させた楽曲です。',
                icon: '🎵',
                tech: 'VOCALOID, Cubase'
              },
              { 
                title: 'instrumental「静寂」', 
                category: '作曲', 
                description: 'アンビエント系のインストゥルメンタル楽曲。作業用BGMとしても人気です。',
                icon: '🎵',
                tech: 'FL Studio'
              },
              { 
                title: 'UI/UXデザイン', 
                category: 'イラスト', 
                description: 'モバイルアプリのUI設計とアイコンデザイン。使いやすさを重視したデザインです。',
                icon: '🎨',
                tech: 'Figma, Illustrator'
              }
            ].map((work, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
                <div className="bg-gray-700 h-48 rounded-lg mb-4 flex flex-col items-center justify-center">
                  <span className="text-4xl mb-2">{work.icon}</span>
                  <span className="text-gray-400 text-sm">{work.tech}</span>
                </div>
                <div className="mb-2">
                  <span className={`inline-block text-xs px-2 py-1 rounded-full ${
                    work.category === 'プログラミング' ? 'bg-blue-900 text-blue-300' :
                    work.category === 'ゲーム' ? 'bg-green-900 text-green-300' :
                    work.category === 'イラスト' ? 'bg-pink-900 text-pink-300' :
                    'bg-purple-900 text-purple-300'
                  }`}>
                    {work.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{work.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {work.description}
                </p>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    詳細を見る
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section id="contact" className="text-center">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">連絡先</h2>
            <p className="text-gray-300 mb-8">
              作品やスキルに関する質問、情報交換などがありましたらお気軽にどうぞ。<br />
              （ご依頼は現在受け付けておりません）
            </p>
            
            
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:your.email@example.com"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                メール
              </a>
              <a
                href="https://twitter.com/yourusername"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg transition-colors"
              >
                Twitter
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-4">作品を見る</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/yourusername"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://unityroom.com/users/yourusername"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  unityroom
                </a>
                <a
                  href="https://www.pixiv.net/users/youruserid"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  pixiv
                </a>
                <a
                  href="https://www.youtube.com/channel/yourchannel"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="https://soundcloud.com/yourusername"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  SoundCloud
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
