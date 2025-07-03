'use client';

import CompanyForm from '@/app/components/company-form';
import Modal, { ModalProps } from '@/app/components/modal';

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}
