import { BookOpenIcon, PlusIcon } from '@heroicons/react/solid'
import Button from './button'

type Props = {
  title?: string,
  description?: string,
  cta?: string,
  onClick: any,
}

export default function Example({
  title ="No skills",
  description="Get started by adding a skill",
  cta="New skill",
  onClick,
}: Props) {
  return (
    <div className="text-center border-2 border-stone-600 rounded-md px-4 py-8 my-4">
      <BookOpenIcon className="mx-auto h-16 w-16 text-stone-500" />
      <h3 className="mt-2 text-sm font-medium text-white">{title}</h3>
      <p className="mt-1 text-sm text-stone-500">{description}</p>
      <div className="mt-6">
        <Button
          type="button"
          onClick={onClick}
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          {cta}
        </Button>
      </div>
    </div>
  )
}