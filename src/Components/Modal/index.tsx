import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";

interface ModalProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  trigger: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  children,
  showModal,
  trigger,
  setShowModal,
}) => {
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      {/* <DialogTrigger asChild>{trigger}</DialogTrigger> */}
      {trigger}
      <DialogContent className="max-w-[460px]">
        <DialogHeader>
          <DialogTitle>{title || ""}</DialogTitle>
          {description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>
        {/* body */}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;