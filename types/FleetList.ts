export interface Fleet {
  name: string;
  role: string;
  specs: {
    wingspan: number;
    maxPax: number;
    maxCargo: number;
    range: number;
  };
  img: string;
}
