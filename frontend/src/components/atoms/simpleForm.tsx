type Props = {
  title?: string,
  description?: string,
  children: React.ReactNode,
  onSubmit: any,
  submitButtonText?: string,
  button?: React.ReactNode,
}

export default function SimpleForm({
  title,
  description,
  children,
  button,
}: Props) {
  return (
    <div className="bg-stone-800 shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        {title ? <h3 className="text-lg leading-6 font-medium text-white">{title}</h3> : ''}
        <div className="mt-2 max-w-xl text-sm text-white">
          <p className="text-2xl text-stone-400">{description}</p>
        </div>
        <form className="mt-5 sm:flex sm:items-center">
          {children}
          {button ? button : ''}
        </form>
      </div>
    </div>
  )
}