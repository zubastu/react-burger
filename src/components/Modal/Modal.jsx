import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import modalStyles from "./Modal.module.css";
import { ANIMATION_TIME, reactModalRootElement } from "../../utils/constants";
import ModalHeader from "../ModalHeader/ModalHeader";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Overlay from "../Overlay/Overlay";

const contentAnimation = {
  enter: modalStyles.contentEnter,
  enterActive: modalStyles.contentEnterActive,
  exit: modalStyles.contentExit,
  exitActive: modalStyles.contentExitActive,
};

const overlayAnimation = {
  enter: modalStyles.overlayEnter,
  enterActive: modalStyles.overlayEnterActive,
  exit: modalStyles.overlayExit,
  exitActive: modalStyles.overlayExitActive,
};

const Modal = ({
  children,
  isOpen = false,
  onClose,
  text = null,
  extraClassName,
}) => {
  const [animationIn, setAnimationIn] = useState(false);

  const overlayRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    setAnimationIn(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keyup", closeOnEscapeKey);
    return () => {
      document.removeEventListener("keyup", closeOnEscapeKey);
    };
  }, [isOpen, onClose]);

  return createPortal(
    <div className={modalStyles.container}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <Overlay ref={overlayRef} onClick={onClose} />
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div
          ref={contentRef}
          className={`${modalStyles.modal} pt-10 pl-10 pr-10 ${extraClassName}`}
        >
          <ModalHeader text={text} onClose={onClose} />
          {children}
        </div>
      </CSSTransition>
    </div>,
    reactModalRootElement
  );
};

Modal.propTypes = {
  children: PropTypes.shape(PropTypes.elementType.isRequired).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string,
  extraClassName: PropTypes.string,
};

export default Modal;
