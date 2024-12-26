import { NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { hash } from 'bcrypt';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, gender, age, email, password } = body;

    // 필수 필드 검증
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: '필수 정보를 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 중복 확인
    const existingUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email)
    });

    if (existingUser) {
      return NextResponse.json(
        { error: '이미 존재하는 이메일입니다.' },
        { status: 400 }
      );
    }

    // 비밀번호 해시화
    const hashedPassword = await hash(password, 10);

    // 사용자 생성
    const newUser = await db.insert(users).values({
      name,
      gender,
      age: age ? parseInt(age) : null,
      email,
      password: hashedPassword
    }).returning();

    return NextResponse.json(
      { 
        success: true, 
        message: '회원가입이 완료되었습니다.',
        user: newUser[0] 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('회원가입 에러:', error);
    return NextResponse.json(
      { error: '회원가입 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
