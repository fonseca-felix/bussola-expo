import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Printer } from "lucide-react";
import { Theme } from "./use-theme";

type PdfExportDialogProps = {
  currentTheme: Theme;
  onThemeChange: (t: Theme) => void;
  currentFontLevel: number;
  onFontLevelChange: (l: number) => void;
};

export function PdfExportDialog({
  currentTheme,
  onThemeChange,
  currentFontLevel,
  onFontLevelChange,
}: PdfExportDialogProps) {
  const [open, setOpen] = useState(false);

  // Local state to hold user choices before applying
  const [previewTheme, setPreviewTheme] = useState<Theme>(currentTheme);
  const [previewFont, setPreviewFont] = useState(currentFontLevel);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setPreviewTheme(currentTheme);
      setPreviewFont(currentFontLevel);
    }
    setOpen(isOpen);
  };

  const handlePrint = () => {
    // Apply settings
    onThemeChange(previewTheme);
    onFontLevelChange(previewFont);
    
    // Wait a brief moment for the DOM to update
    setTimeout(() => {
      window.print();
      setOpen(false);
    }, 150);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          aria-label="Opções de Impressão"
          className="panel grid h-12 w-12 place-items-center text-xl transition-transform hover:scale-105"
        >
          <Printer size={20} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Exportar PDF</DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="space-y-3">
            <h4 className="text-sm font-medium leading-none">Versão do PDF</h4>
            <RadioGroup
              value={previewTheme}
              onValueChange={(val) => setPreviewTheme(val as Theme)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="pdf-light" />
                <Label htmlFor="pdf-light">Preto e Branco</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="pdf-dark" />
                <Label htmlFor="pdf-dark">Escuro (Original)</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium leading-none">
              Tamanho da Fonte: {previewFont}
            </h4>
            <Slider
              value={[previewFont]}
              min={1}
              max={5}
              step={1}
              onValueChange={(vals) => setPreviewFont(vals[0] ?? currentFontLevel)}
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handlePrint} className="gap-2">
            <Printer size={16} /> Gerar PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
