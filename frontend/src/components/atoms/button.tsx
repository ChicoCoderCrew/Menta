import classNames from "classnames"

type Props = {
  type?: "submit" | "button" | "reset" | undefined,
  onClick: any,
  children: React.ReactNode,
  extraClass?: string,
}

export default function Button({
  type="button",
  onClick,
  children,
  extraClass,
}: Props) {
  return (
  <button
    type={type}
    onClick={onClick}
    className={classNames(
      "mt-3 w-full inline-flex items-center justify-centerborder border-transparent shadow-sm font-medium rounded-md text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
      extraClass,
    )}
  >
    {children}
  </button>
  )
}