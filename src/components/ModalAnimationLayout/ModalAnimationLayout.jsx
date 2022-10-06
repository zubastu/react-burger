import React from "react";
import { useMount } from "../../hoocs/useMount";
import Modal from "../Modal/Modal";

const ModalAnimationLayout = ({
  children,
  isOpen,
  onClose,
  extraClassName = null,
  text = null,
}) => {
  const { mounted } = useMount({ isOpen });

  if (!mounted) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      extraClassName={extraClassName}
      text={text}
    >
      {children}
    </Modal>
  );
};

export default ModalAnimationLayout;
