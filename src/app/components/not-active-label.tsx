import React from 'react';
import s from './not-active-label.module.css';

export interface NotActiveLabelProps {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: NotActiveLabelProps) {
  return <span className={s.label}>{children}</span>;
}
