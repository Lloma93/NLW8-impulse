import { CloseButton } from "../../CloseButton";
import { feedbackTypes, FeedbackType } from "./../index";

// interface para receber props -> NomeComponente + Props
interface FeedbackTypeStepProps {
  onFeedBackTypeChanged: (tupe: FeedbackType) => void;
}
// caso de props de um use Sate

// export function FeedbackTypeStep (props: FeedbackTypeStepProps) {   -> utilizar props.onFeedBackTypeChanged

//oou utilizar desestruturando:
export function FeedbackTypeStep({
  onFeedBackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6"> Deixe o seu Feedback</span>
        <CloseButton /> 
        {/* [ctrl] + [btn ponto] - importar */}
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedBackTypeChanged(key as FeedbackType)}
              // onClick={() => setFeedbackType(key as FeedbackType)} //exemplo antes de fragmentar o componente
              type="button"
              key={key} // todo map precisa de uma key para renderizar e identificar os elementos, pode ser um id atrelado ao elemento
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span> {value.text} </span>
            </button>
          );
        })}
        {/* Object.entries(feedback typer) => 
                       * 'bug, conteudo bug
                       *idea, conteudo
                       outros, conteudo
                       */}
      </div>
    </>
  );
}
