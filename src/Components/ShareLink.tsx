import { useState } from 'react'
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/Components/ui/dialog"
import { Check, Copy } from "lucide-react"

interface SharePopupProps {
  isOpen: boolean
  onClose: () => void
  url: string
}

export function SharePopup({ isOpen, onClose, url }: SharePopupProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Dialog  open={isOpen} onOpenChange={onClose} >
      <DialogContent className="sm:max-w-md p-10">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Input
            value={url}
            readOnly
            className="flex-1"
          />
          <Button size="sm" className="px-3" onClick={copyToClipboard}>
            <span className="sr-only">Copy</span>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}