import React from 'react';
import s from './active-label.module.css';

export interface ActiveLabelProps {
  children: React.ReactNode;
}

export default function ActiveLabel({ children }: ActiveLabelProps) {
  return <span className={s.label}>{children}</span>;
}
