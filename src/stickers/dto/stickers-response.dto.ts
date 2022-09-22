export class StickersResponseDto<T = undefined> {
  message: string;
  data?: T;
  allData?: T;
}
