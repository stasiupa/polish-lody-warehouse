import { useIceStore } from "@/store/IceStore";

function SearchBar() {
  const [searchString, setSearchString] = useIceStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);

  return (
    <div className=' text-center p-2 m-3 text-lg  bg-amber-600 text-gray-100'><form action="">
      FlavourSearch:
      <input 
      type="text" 
      value={searchString}
      onChange={(e) => setSearchString(e.target.value)} 
      placeholder="Search ice cream flavour" 
      className='border p-2 m-2 text-black' 
      />
      
  </form></div>)
}

export default SearchBar