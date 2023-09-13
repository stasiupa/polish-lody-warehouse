
interface Ice {
  iceCreams: Map<IceStatus, IceCream>
}

type IceStatus = "in-stock" | "out-of-stock" | "on-the-way"

interface IceCream {
  id: IceStatus;
  iceCreams: IceCreams[],
}

interface IceCreams {
  $id: string,
  $createdAt: string,
  flavour: string,
  status: IceStatus,
  amount: number,

}