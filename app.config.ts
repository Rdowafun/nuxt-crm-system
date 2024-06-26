export default defineAppConfig({
  ui: {
    slideover: {
      wrapper: 'fixed inset-0 flex z-50',
      overlay: {
        base: 'fixed inset-0 transition-opacity',
        background: 'bg-gray-800/75',
        transition: {
          enter: 'ease-in-out duration-500',
          enterFrom: 'opacity-0',
          enterTo: 'opacity-100',
          leave: 'ease-in-out duration-500',
          leaveFrom: 'opacity-100',
          leaveTo: 'opacity-0'
        }
      },
      base: 'relative flex-1 flex flex-col w-full focus:outline-none',
      background: 'bg-gray-200/75 dark:bg-gray-800/75',
      ring: '',
      rounded: '',
      padding: '',
      shadow: 'shadow-xl',
      width: 'w-screen max-w-md',
      translate: {
        base: 'translate-x-0',
        left: '-translate-x-full rtl:translate-x-full',
        right: 'translate-x-full rtl:-translate-x-full'
      },
      transition: {
        enter: 'transform transition ease-in-out duration-300',
        leave: 'transform transition ease-in-out duration-200'
      }
    }
  }
})
