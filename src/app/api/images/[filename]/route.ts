import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = params.filename;
    
    // セキュリティ: パストラバーサル攻撃を防ぐ
    if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      return NextResponse.json({ error: 'Invalid filename' }, { status: 400 });
    }

    // 許可された拡張子のチェック
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const ext = path.extname(filename).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      return NextResponse.json({ error: 'File type not allowed' }, { status: 400 });
    }

    // プライベート画像ディレクトリから画像を読み込み
    const imagePath = path.join(process.cwd(), 'private', 'images', filename);
    
    // ファイルの存在確認
    if (!fs.existsSync(imagePath)) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    // 画像データを読み込み
    const imageBuffer = fs.readFileSync(imagePath);
    
    // MIMEタイプを設定
    const mimeTypes: { [key: string]: string } = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp'
    };

    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // 画像を返す
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600', // 1時間キャッシュ
        'Content-Length': imageBuffer.length.toString(),
      },
    });

  } catch (error) {
    console.error('Error serving image:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}