import classNames from 'classnames';

type Props = {
  name,
  id,
  placeholder,
  extraClass: string,
}

export default function Input({
  name,
  id,
  placeholder,
  extraClass,
}: Props) {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-orange-600 focus-within:border-orange-600 bg-white grow">
      <label
        htmlFor={id}
        className="sr-only"
      >
        ID
      </label>
      <input
        type="text"
        name={name}
        id={id}
        className={classNames(
          extraClass,
          "block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
        )}
        placeholder={placeholder}
      />
    </div>
  )
}