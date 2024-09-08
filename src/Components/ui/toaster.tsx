import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/Components/ui/toast";
import { clearToast } from "@/Global/globalAppSlice";
import { globalSelector } from "@/Global/selector";
import { useAppDispatch, useAppSelector } from "@/Utils/hooks/appHooks";

export function Toaster() {
  const dispatch = useAppDispatch();
  const { toastMessage, toastTitle, toastType } =
    useAppSelector(globalSelector);
  return (
    <ToastProvider>
      <Toast
        variant={toastType === "error" ? "destructive" : "default"}
        open={toastMessage ? true : false}
        onOpenChange={() => dispatch(clearToast())}
      >
        <div className="grid gap-1">
          {toastTitle && <ToastTitle>{toastTitle}</ToastTitle>}
          {toastMessage && <ToastDescription>{toastMessage}</ToastDescription>}
        </div>
        <ToastClose onClick={() => dispatch(clearToast())} />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}
