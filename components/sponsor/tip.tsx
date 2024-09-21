import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Tip({ text }: { text: string }): JSX.Element {
  return (
    <div className="bg-amber-300 rounded-sm border-2 border-black flex flex-row justify-center align-center gap-2 p-2 my-4 print:my-0 print:mt-4 w-full md:w-9/12 print:w-9/12 mx-auto break-inside-avoid shadow-blocks-sm font-main">
      <FontAwesomeIcon icon={faInfoCircle} className="pt-1" />
      <p className="text-base">{text}</p>
    </div>
  );
}
