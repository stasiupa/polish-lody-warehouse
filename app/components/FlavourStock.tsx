import FlavourItem from "./FlavourItem";
import { IceStatus, iceStatusOptions, useIceStore } from "@/store/IceStore";

type Props = {
  id: IceStatus;
  iceCreams: IceCream[];
  index: Number;
};

function FlavourStock({ id, iceCreams }: Props) {
  const [searchString, ] = useIceStore((state) => [
    state.searchString,
  ]);

  return (
    <div className="bg-amber-700 text-gray-100  py-2 px-2 m-2 rounded-lg">
      <h2 className="font-bold text-xl flex justify-between">
        {iceStatusOptions[id].label}
        <span className="text-sm bg-amber-500 rounded-sm px-1 py-1">
          {!searchString
                      ? iceCreams.length
                      : iceCreams.filter((icecream) =>
                      icecream.flavour
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                        ).length}
        </span>
      </h2>
      <div className="space-y-2">
      {iceCreams.map((iceCream) => {
                    if (
                      searchString &&
                      !iceCream.flavour
                        .toLowerCase()
                        .includes(searchString.toLowerCase())
                    )
                      return null;
                    return (  
                    <FlavourItem iceCream={iceCream} key={iceCream.flavour} />
                    );
                  })}
      </div>
    </div>
  );
}

export default FlavourStock;
