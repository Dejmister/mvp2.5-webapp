import Image from "next/image";

import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'system-ui', textAlign: 'center', marginTop: '10rem' }}>
      <h1>Welcome to MindFuel.Media</h1>
      <p>Your journey starts here.</p>
      <Link href="/login" style={{ fontSize: '1.2rem', color: 'blue', textDecoration: 'underline' }}>
        Go to Login
      </Link>
    </div>
  );
}
