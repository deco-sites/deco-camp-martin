import type { CoupomProps } from "../sections/Content/Coupom.tsx";
import Icon from "../components/ui/Icon.tsx";
import { useSignal } from "@preact/signals";

export default function CopyButton(
  { coupomCode = "DVRS10" }: CoupomProps,
) {
  const clicked = useSignal(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      clicked.value = true;
    } catch (err) {
      console.log("Falha ao copiar o texto", err);
    }
  };

  return (
    <>
      <button
        onClick={() => copyToClipboard(coupomCode as string)}
        class="text-white h-auto border-0 flex tracking-[-0.13px] lg:tracking-[-0.16px] gap-2 rounded-[36px] px-3 lg:px-6 py-2 lg:py-4 items-center font-normal text-[13px] leading-[150%] lg:text-base bg-[#FFA500] uppercase"
      >
        {!clicked.value ? coupomCode : "Cupom copiado, aproveite!"}{" "}
        <Icon id="ExternalLink" size={20} strokeWidth={0.01} />
      </button>
    </>
  );
}
