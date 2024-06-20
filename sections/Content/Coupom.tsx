import CopyButton from "../../islands/CopyButton.tsx";

export interface CoupomProps {
    coupomCode: string;
    /**
    * @format rich-text
    */
    description?: string;
    alignment?: "Left" | "Center" | "Right";
}

const ALIGNMENT_TEXT = {
    "Left": "items-start text-start",
    "Center": "items-center text-center",
    "Right": "items-end text-end",
};

export default function Coupom(
    {
        coupomCode = "DVRS10",
        description,
        alignment = "Left",
    }: CoupomProps,
) {
    return (
        <section class="bg-base-100 py-12 lg:py-28">
            <div class="flex lg:container lg:max-w-6xl lg:mx-auto mx-5 md:mx-10">
                <div class={`flex flex-col lg:flex-row gap-6 ${ALIGNMENT_TEXT[alignment ?? "Left"]}`}>
                    <CopyButton coupomCode={coupomCode} />
                    {description && (
                        <p class="text-base-content text-[18px]">{description}</p>
                    )}
                </div>
            </div>
        </section>
    );
}