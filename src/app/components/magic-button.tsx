'use client';

import Button, { ButtonsProps } from '@/app/components/button';
import { useEffect, useState } from 'react';

export default function MagicButton(props: ButtonsProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Unexpected error');
    }
  }, [count]);

  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Magic button
    </Button>
  );
}
