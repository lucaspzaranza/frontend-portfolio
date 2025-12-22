const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800 py-6 text-center">
      <p className="text-sm text-zinc-500">
        © {currentYear}{' '}
        <span className="text-zinc-300 font-medium">
          Lucas Zaranza
        </span>
      </p>
    </footer>
  )
}

export default Footer
