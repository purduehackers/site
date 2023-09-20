import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Tip({ text }: { text: string }): JSX.Element {
  return (
    <div className="bg-amber-200 rounded-lg flex flex-row justify-center align-center gap-2 p-2 w-9/12 mx-auto break-inside-avoid">
      <FontAwesomeIcon icon={faInfoCircle} className="pt-1" />
      <p className="text-base">{text}</p>
    </div>
  )
}
