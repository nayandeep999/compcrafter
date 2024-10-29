export const ModalUsage = 
`<div>
  <button
    className="flex items-center gap-1 bg-red-600 text-white font-semibold py-2 px-4 
    rounded-xl hover:bg-red-700 focus:outline-none 
    focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
    onClick={() => setOpen(true)}
  >
    Delete
  </button>

  <Modal open={open} onClose={() => setOpen(false)}>
    <div className="text-center w-60">
      <div className="mx-auto my-2 w-56">
        <h3 className="text-lg font-bold text-gray-200">
          Confirm Delete
        </h3>
        <p className="text-sm text-gray-300 mb-4">
          Are you sure you want to delete this item?
        </p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-xl 
        hover:bg-red-700 focus:outline-none focus:ring-2 
        focus:ring-red-500 focus:ring-opacity-50 shadow-md">
          Delete
        </button>
        <button
          className="bg-gray-200 text-gray-950 font-semibold py-2 px-4 rounded-xl 
          hover:bg-gray-300 focus:outline-none focus:ring-2 
          focus:ring-gray-400 focus:ring-opacity-50 shadow-md"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </Modal>
</div>`;
