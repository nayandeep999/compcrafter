export const DropdownUsage = 
`<Dropdown 
  trigger={
   <button
     className="bg-blue-700 px-4 py-2 
     text-gray-200 rounded-xl font-bold">
     Menu
   </button>
 }

 <DropdownItem>
   <img
     src="https://api.dicebear.com/9.x/initials/svg?seed=Luis"
     alt="avatar"
     className="w-12 rounded-full"
   />
   <div className="py-2">
     <p className="font-medium">Luis Udell</p>
     <a href="" className="text-sm font-medium text-gray-400">
       luisudell@gmail.com
     </a>
   </div>
 </DropdownItem>
 <DropdownItem>
   <ShoppingCart size={20} /> Cart
 </DropdownItem>
 <DropdownItem>
   <Package size={20} /> Orders
 </DropdownItem>
 <DropdownItem>
   <Settings size={20} /> Preferences
 </DropdownItem>
 <DropdownItem>
   <LogOut size={20} /> Logout
 </DropdownItem>
</Dropdown>`;