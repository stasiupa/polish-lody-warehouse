interface Ice {
  iceCreams: Map<IceStatus, IceCream>;
}

// interface IceCream {
//   id: IceStatus;
//   iceCreams: IceCreams[];
// }

interface IceCream {
  $id: string;
  $createdAt: string;
  flavour: string;
  status: IceStatus;
  amount: number;
}